"use client";

import { useRef, type FC } from "react";

import { motion, useInView } from "motion/react";

import { fadeInUp } from "@/animations/scroll-animations";

import { HERO_LOCATION, HERO_NAME } from "@/constants/hero-constants";

export const AboutBio: FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={fadeInUp}
      transition={{ duration: 0.7 }}
      className="glass gradient-border p-8 md:p-10 lg:col-span-7"
    >
      <p className="mb-3 text-sm uppercase tracking-[0.25em] text-neutral-400">
        Who I Am
      </p>

      <h3 className="mb-4 text-2xl font-bold md:text-3xl">
        {HERO_NAME} · {HERO_LOCATION}
      </h3>

      <p className="text-base leading-relaxed text-neutral-300 md:text-lg">
        I&apos;m a{" "}
        <span className="font-semibold text-white">DevOps Engineer</span> with{" "}
        <span className="font-semibold text-white">3 years</span> of hands-on
        experience working with cloud infrastructure, automation, CI/CD, and
        production environments.
      </p>

      <p className="mt-4 leading-relaxed text-neutral-400">
        I work with{" "}
        <span className="text-white">AWS, Kubernetes, Docker, Terraform</span>,
        and modern CI/CD tools to automate deployments and manage scalable
        infrastructure. I also have hands-on experience with{" "}
        <span className="text-white">
          Helm, Argo CD, Jenkins, GitHub Actions, Prometheus, Grafana, and Loki
        </span>
        .
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <a href="#contact" className="btn-primary">
          <span>Contact Me</span>
          <span aria-hidden>→</span>
        </a>

        <a href="#work" className="btn-ghost">
          <span>View My Work</span>
        </a>
      </div>
    </motion.div>
  );
};