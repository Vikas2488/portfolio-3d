"use client";

import { type FC } from "react";
import { HeroText } from "@/components/portfolio/hero-text";
import { ParallaxBackground } from "@/components/portfolio/parallax-background";
import dynamic from "next/dynamic";

const HeroScene = dynamic(
  () =>
    import("@/components/sections/hero-scene").then(
      (mod) => mod.HeroScene
    ),
  { ssr: false }
);

export const Hero: FC = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-start justify-center overflow-hidden md:items-start md:justify-start"
    >
      <HeroText />
      <ParallaxBackground />
      <HeroScene />

      <a
        href="#about"
        className="reveal absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-[10px] uppercase tracking-[0.4em] text-neutral-400 transition-colors hover:text-white md:flex"
        style={{ animationDelay: "calc(var(--intro-delay) + 1.2s)" }}
        aria-label="Scroll down"
      >
        <span>Scroll</span>

        <span className="relative block h-10 w-px overflow-hidden bg-white/10">
          <span className="scroll-hint-sweep absolute inset-x-0 top-0 h-3 bg-gradient-to-b from-coral to-transparent" />
        </span>
      </a>
    </section>
  );
};