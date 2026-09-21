import { HERO_LOCATION, HERO_NAME, HERO_ROLE } from "./hero-constants";

import { CONTACT_EMAIL, MY_SOCIALS } from "./social-constants";

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://your-domain.com"
).replace(/\/$/, "");

export const absoluteUrl = (path: string) =>
  `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;

export const SITE_NAME = `${HERO_NAME} | ${HERO_ROLE}`;

export const SITE_TITLE = `${HERO_NAME} | ${HERO_ROLE}`;

export const SITE_DESCRIPTION =
  "DevOps Engineer with 3 years of experience in AWS, Kubernetes, Docker, Terraform, CI/CD, cloud infrastructure, automation, monitoring, and production environments.";

export const SITE_TAGLINE =
  "Building scalable cloud infrastructure with AWS, Kubernetes, Docker, Terraform and CI/CD.";

export const OG_IMAGE = "/og.jpg";

export const OG_IMAGE_ALT = `${HERO_NAME}, ${HERO_ROLE} portfolio`;

export const OG_LOCALE = "en_US";

export const OG_IMAGES = [
  {
    url: OG_IMAGE,
    width: 1200,
    height: 630,
    alt: OG_IMAGE_ALT,
  },
];

export const GOOGLE_SITE_VERIFICATION =
  process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ?? "";

export const SITE_KEYWORDS = [
  HERO_NAME,
  "DevOps Engineer",
  "DevOps Engineer India",
  "AWS DevOps Engineer",
  "Kubernetes Engineer",
  "AWS",
  "Kubernetes",
  "Docker",
  "Terraform",
  "Helm",
  "Jenkins",
  "GitHub Actions",
  "Argo CD",
  "Ansible",
  "Linux",
  "NGINX",
  "Prometheus",
  "Grafana",
  "Loki",
  "CI/CD",
  "Cloud Infrastructure",
  "Infrastructure as Code",
  "GitOps",
  "DevOps Portfolio",
  "Cloud Engineer",
  HERO_LOCATION,
  "Remote DevOps Engineer",
];

export const HOME_TITLE = `${HERO_NAME} | ${HERO_ROLE}`;

export const HOME_DESCRIPTION =
  "DevOps Engineer with 3 years of experience working with AWS, Kubernetes, Docker, Terraform, CI/CD, cloud infrastructure, automation, monitoring, and production environments.";

export const ADMIN_TITLE = "Contact submissions";

export const ADMIN_DESCRIPTION =
  "Private dashboard for contact form submissions. Not part of the public site.";

export const ADMIN_LOGIN_TITLE = "Sign in";

export const ADMIN_LOGIN_DESCRIPTION =
  "Sign in to the private contact submissions dashboard.";

export const SITE_SECTIONS = [
  {
    name: "Home",
    hash: "#home",
    description: `${HERO_NAME}, ${HERO_ROLE} specializing in cloud infrastructure, automation, and CI/CD.`,
  },

  {
    name: "About",
    hash: "#about",
    description: `Background, DevOps experience, cloud technologies, and working approach of ${HERO_NAME}.`,
  },

  {
    name: "Skills",
    hash: "#skills",
    description:
      "AWS, Kubernetes, Docker, Terraform, Helm, Jenkins, GitHub Actions, Argo CD, Ansible, and observability tools.",
  },

  {
    name: "Work",
    hash: "#work",
    description:
      "DevOps projects involving AWS, Kubernetes, Docker, CI/CD, Infrastructure as Code, GitOps, monitoring, and logging.",
  },

  {
    name: "Experience",
    hash: "#experience",
    description: `${HERO_NAME}'s DevOps engineering experience and production infrastructure work.`,
  },

  {
    name: "Contact",
    hash: "#contact",
    description: `Get in touch with ${HERO_NAME} about DevOps, cloud infrastructure, automation, and engineering opportunities.`,
  },
] as const;

export const SOCIAL_PROFILES = MY_SOCIALS.map((social) => social.href);

export const CONTACT_POINT_EMAIL = CONTACT_EMAIL;