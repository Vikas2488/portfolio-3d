
import { NextResponse } from "next/server";

import { createClient } from "@/lib/supabase/server";
import { isSupabaseConfigured } from "@/lib/supabase/config";
import { CONTACT_EMAIL } from "@/constants/portfolio-constants";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface Body {
  name?: string;
  email?: string;
  budget?: string;
  message?: string;
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

async function sendBrevoNotification({
  name,
  email,
  budget,
  message,
}: {
  name: string;
  email: string;
  budget: string;
  message: string;
}) {
  const apiKey = process.env.BREVO_API_KEY;

  if (!apiKey) {
    console.error("BREVO_API_KEY is missing.");
    return false;
  }

  const senderEmail = "vikas0661@gmail.com";

  const htmlContent = `
    <h2>New Portfolio Contact Form Submission</h2>

    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Requirement:</strong> ${escapeHtml(budget || "Not specified")}</p>

    <h3>Message</h3>
    <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
  `;

  try {
    const response = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        accept: "application/json",
        "api-key": apiKey,
        "content-type": "application/json",
      },
      body: JSON.stringify({
        sender: {
          name: "Vikas Portfolio",
          email: senderEmail,
        },
        to: [
          {
            email: CONTACT_EMAIL,
            name: "Vikas",
          },
        ],
        replyTo: {
          email,
          name,
        },
        subject: `New portfolio message from ${name}`,
        htmlContent,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();

      console.error("Brevo email failed:", {
        status: response.status,
        error: errorText,
      });

      return false;
    }

    console.log("Brevo notification sent successfully.");
    return true;
  } catch (error) {
    console.error("Brevo request failed:", error);
    return false;
  }
}

export async function POST(req: Request) {
  let body: Body;

  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid JSON" },
      { status: 400 }
    );
  }

  const name = body.name?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const budget = body.budget?.trim() ?? "";
  const message = body.message?.trim() ?? "";

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email and message are required." },
      { status: 400 }
    );
  }

  if (!EMAIL_REGEX.test(email)) {
    return NextResponse.json(
      { error: "Please provide a valid email address." },
      { status: 400 }
    );
  }

  if (
    name.length > 120 ||
    email.length > 200 ||
    message.length > 5000
  ) {
    return NextResponse.json(
      { error: "Payload too large." },
      { status: 413 }
    );
  }

  if (!isSupabaseConfigured) {
    return NextResponse.json(
      {
        error: `The contact form is not connected on this deployment. Please email ${CONTACT_EMAIL} directly.`,
      },
      { status: 503 }
    );
  }

  const supabase = await createClient();

  if (!supabase) {
    return NextResponse.json(
      { error: `Please email ${CONTACT_EMAIL} directly.` },
      { status: 503 }
    );
  }

  const forwarded = req.headers.get("x-forwarded-for") ?? "";
  const ip = forwarded.split(",")[0]?.trim() || null;
  const userAgent = req.headers.get("user-agent") ?? null;

  const { error: dbError } = await supabase
    .from("contact_submissions")
    .insert({
      name,
      email,
      budget: budget || null,
      message,
      user_agent: userAgent,
      ip_address: ip,
    });

  if (dbError) {
    console.error("Supabase insert failed:", {
      message: dbError.message,
      code: dbError.code,
      hint: dbError.hint,
    });

    const tableMissing =
      dbError.code === "42P01" ||
      dbError.code === "PGRST205" ||
      /relation .* does not exist/i.test(dbError.message || "") ||
      /could not find the table/i.test(dbError.message || "");

    return NextResponse.json(
      {
        error: tableMissing
          ? "The database is connected but not set up yet. Run supabase/migrations/0001_init.sql in the Supabase SQL editor."
          : "Could not save your message. Please try again.",
      },
      { status: 500 }
    );
  }

  // Send an email notification after successfully saving to Supabase.
  // Email failure does not prevent the contact form from succeeding.
  await sendBrevoNotification({
    name,
    email,
    budget,
    message,
  });

  return NextResponse.json(
    { ok: true },
    { status: 200 }
  );
}