
import { type Transition } from "motion/react";

import { type Project } from "@/types/portfolio-types";

export const MY_PROJECTS: Project[] = [
  {
    id: 1,
    title: "AWS EKS Production Infrastructure",
    category: "Cloud Infrastructure · AWS",
    description:
      "Production-ready Kubernetes infrastructure deployed on Amazon EKS with containerized services, networking, storage, and cloud resources.",
    subDescription: [
      "Deployed and managed containerized applications on Amazon EKS.",
      "Configured AWS infrastructure including EC2, VPC, ECR, S3, and related cloud services.",
      "Used Kubernetes deployments, services, ConfigMaps, Secrets, HPA, and persistent storage.",
      "Managed application releases and troubleshooting across Kubernetes workloads.",
    ],
    href: "",
    logo: "",
    image: "",
    accent: "from-aqua/40 to-royal/10",
    tags: [
      {
        id: 1,
        name: "AWS",
        path: "/assets/logos/aws.svg",
      },
      {
        id: 2,
        name: "Kubernetes",
        path: "/assets/logos/kubernetes.svg",
      },
      {
        id: 3,
        name: "Docker",
        path: "/assets/logos/docker.svg",
      },
      {
        id: 4,
        name: "ECR",
        path: "/assets/logos/aws.svg",
      },
    ],
  },

  {
    id: 2,
    title: "CI/CD Automation Pipeline",
    category: "DevOps · CI/CD",
    description:
      "Automated application build, containerization, image publishing, and deployment workflows using GitHub Actions and AWS.",
    subDescription: [
      "Created CI/CD workflows using GitHub Actions.",
      "Built Docker images and published them to Amazon ECR.",
      "Automated deployment workflows for Kubernetes applications.",
      "Implemented environment-specific deployment workflows for development and production.",
    ],
    href: "",
    logo: "",
    image: "",
    accent: "from-royal/40 to-lavender/10",
    tags: [
      {
        id: 1,
        name: "GitHub Actions",
        path: "/assets/logos/github-actions.svg",
      },
      {
        id: 2,
        name: "Docker",
        path: "/assets/logos/docker.svg",
      },
      {
        id: 3,
        name: "AWS",
        path: "/assets/logos/aws.svg",
      },
      {
        id: 4,
        name: "Git",
        path: "/assets/logos/git.svg",
      },
    ],
  },

  {
    id: 3,
    title: "GitOps with Argo CD",
    category: "Kubernetes · GitOps",
    description:
      "GitOps-based Kubernetes deployment workflow using Helm and Argo CD to automate application synchronization and delivery.",
    subDescription: [
      "Created and maintained Helm charts for Kubernetes applications.",
      "Configured Argo CD for GitOps-based application deployments.",
      "Managed environment-specific Kubernetes configurations.",
      "Used Git as the source of truth for application deployment configuration.",
    ],
    href: "",
    logo: "",
    image: "",
    accent: "from-fuchsia/40 to-royal/10",
    tags: [
      {
        id: 1,
        name: "Argo CD",
        path: "/assets/logos/argocd.svg",
      },
      {
        id: 2,
        name: "Kubernetes",
        path: "/assets/logos/kubernetes.svg",
      },
      {
        id: 3,
        name: "Helm",
        path: "/assets/logos/helm.svg",
      },
      {
        id: 4,
        name: "Git",
        path: "/assets/logos/git.svg",
      },
    ],
  },

  {
    id: 4,
    title: "Infrastructure as Code",
    category: "Terraform · AWS",
    description:
      "Infrastructure automation using Terraform to provision and manage repeatable AWS cloud environments.",
    subDescription: [
      "Created reusable Terraform configurations for AWS infrastructure.",
      "Managed cloud resources using Infrastructure as Code practices.",
      "Organized infrastructure configuration for repeatable deployments.",
      "Used Terraform to reduce manual infrastructure provisioning and configuration.",
    ],
    href: "",
    logo: "",
    image: "",
    accent: "from-sand/40 to-coral/10",
    tags: [
      {
        id: 1,
        name: "Terraform",
        path: "/assets/logos/terraform.svg",
      },
      {
        id: 2,
        name: "AWS",
        path: "/assets/logos/aws.svg",
      },
      {
        id: 3,
        name: "Linux",
        path: "/assets/logos/linux.svg",
      },
      {
        id: 4,
        name: "Git",
        path: "/assets/logos/git.svg",
      },
    ],
  },

  {
    id: 5,
    title: "Kubernetes Observability Stack",
    category: "Monitoring · Logging",
    description:
      "Monitoring and centralized logging stack for Kubernetes workloads using Prometheus, Grafana, and Loki.",
    subDescription: [
      "Configured Prometheus for collecting Kubernetes and application metrics.",
      "Created Grafana dashboards for infrastructure and application monitoring.",
      "Configured Loki for centralized log aggregation.",
      "Troubleshot monitoring, logging, DNS, permissions, and Kubernetes workload issues.",
    ],
    href: "",
    logo: "",
    image: "",
    accent: "from-aqua/40 to-royal/10",
    tags: [
      {
        id: 1,
        name: "Prometheus",
        path: "/assets/logos/prometheus.svg",
      },
      {
        id: 2,
        name: "Grafana",
        path: "/assets/logos/grafana.svg",
      },
      {
        id: 3,
        name: "Kubernetes",
        path: "/assets/logos/kubernetes.svg",
      },
      {
        id: 4,
        name: "Linux",
        path: "/assets/logos/linux.svg",
      },
    ],
  },

  {
    id: 6,
    title: "Microservices Deployment Platform",
    category: "Docker · Kubernetes",
    description:
      "Containerized microservices platform deployed on Kubernetes with supporting infrastructure and service communication.",
    subDescription: [
      "Containerized multiple application services using Docker.",
      "Created Kubernetes manifests and Helm-based deployment configurations.",
      "Configured services, networking, environment variables, and persistent storage.",
      "Worked with RabbitMQ and Redis for distributed application workloads.",
    ],
    href: "",
    logo: "",
    image: "",
    accent: "from-lavender/40 to-sand/10",
    tags: [
      {
        id: 1,
        name: "Docker",
        path: "/assets/logos/docker.svg",
      },
      {
        id: 2,
        name: "Kubernetes",
        path: "/assets/logos/kubernetes.svg",
      },
      {
        id: 3,
        name: "RabbitMQ",
        path: "/assets/logos/rabbitmq.svg",
      },
      {
        id: 4,
        name: "Redis",
        path: "/assets/logos/redis.svg",
      },
    ],
  },

  // YaMarkets Professional Projects

  {
    id: 7,
    title: "YaPay Client Website Deployment",
    category: "Professional Experience · YaMarkets",
    description:
      "Client website deployment and production support completed during my professional experience at YaMarkets.",
    subDescription: [
      "Worked on deploying and supporting the client website.",
      "Contributed to production website operations and deployment activities.",
      "Supported website availability and maintenance.",
    ],
    href: "https://yapay.me/",
    logo: "",
    image: "",
    accent: "from-aqua/40 to-royal/10",
    tags: [
      {
        id: 1,
        name: "Deployment",
        path: "/assets/logos/linux.svg",
      },
      {
        id: 2,
        name: "Production",
        path: "/assets/logos/nginx.svg",
      },
    ],
  },

  {
    id: 8,
    title: "YAGC Client Website Deployment",
    category: "Professional Experience · YaMarkets",
    description:
      "Client website deployment and production support completed during my professional experience at YaMarkets.",
    subDescription: [
      "Worked on deploying and supporting the client website.",
      "Contributed to production website operations and deployment activities.",
      "Supported website availability and maintenance.",
    ],
    href: "https://www.yagc.io/",
    logo: "",
    image: "",
    accent: "from-royal/40 to-lavender/10",
    tags: [
      {
        id: 1,
        name: "Deployment",
        path: "/assets/logos/linux.svg",
      },
      {
        id: 2,
        name: "Production",
        path: "/assets/logos/nginx.svg",
      },
    ],
  },

  {
    id: 9,
    title: "NXG Markets Website Deployment",
    category: "Professional Experience · YaMarkets",
    description:
      "Client trading website deployment and production support completed during my professional experience at YaMarkets.",
    subDescription: [
      "Worked on deploying and supporting the client website.",
      "Contributed to production website operations and deployment activities.",
      "Supported website availability and maintenance.",
    ],
    href: "https://www.nxgmarkets.com/",
    logo: "",
    image: "",
    accent: "from-fuchsia/40 to-royal/10",
    tags: [
      {
        id: 1,
        name: "Deployment",
        path: "/assets/logos/linux.svg",
      },
      {
        id: 2,
        name: "Production",
        path: "/assets/logos/nginx.svg",
      },
    ],
  },

  {
    id: 10,
    title: "YaOptions Website Deployment",
    category: "Professional Experience · YaMarkets",
    description:
      "Client options trading website deployment and production support completed during my professional experience at YaMarkets.",
    subDescription: [
      "Worked on deploying and supporting the client website.",
      "Contributed to production website operations and deployment activities.",
      "Supported website availability and maintenance.",
    ],
    href: "https://yaoptions.com/",
    logo: "",
    image: "",
    accent: "from-sand/40 to-coral/10",
    tags: [
      {
        id: 1,
        name: "Deployment",
        path: "/assets/logos/linux.svg",
      },
      {
        id: 2,
        name: "Production",
        path: "/assets/logos/nginx.svg",
      },
    ],
  },
];

export const TILT_SPRING: Transition = {
  stiffness: 200,
  damping: 18,
};

export const TILT_RANGE: {
  x: [number, number];
  y: [number, number];
} = {
  x: [10, -10],
  y: [-14, 14],
};

export const TRACK_SPRING: Transition = {
  stiffness: 60,
  damping: 20,
};

export const PREVIEW_WINDOW = 1;