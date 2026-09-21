import {
  type ContactField,
  type ContactFormData,
} from "@/types/contact-types";

export const INITIAL_FORM_STATE: ContactFormData = {
  name: "",
  email: "",
  budget: "",
  message: "",
};

export const REQUIRED_FIELDS: ContactField[] = [
  "name",
  "email",
  "message",
];

export const BUDGET_OPTIONS = [
  { value: "devops-role", label: "DevOps Job Opportunity" },
  { value: "cloud", label: "Cloud Infrastructure" },
  { value: "kubernetes", label: "Kubernetes / Docker" },
  { value: "cicd", label: "CI/CD Automation" },
  { value: "terraform", label: "Infrastructure as Code" },
  { value: "monitoring", label: "Monitoring & Observability" },
  { value: "other", label: "Other DevOps Requirement" },
] as const;

export const ALERT_DURATION = 5000;

export const CONTACT_SUCCESS_MESSAGE =
  "Message sent. I'll get back to you as soon as possible.";

export const CONTACT_ERROR_MESSAGE =
  "Something went wrong, please try again.";