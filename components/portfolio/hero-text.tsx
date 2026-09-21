
"use client";

import { type CSSProperties, type FC } from "react";
import { FlipWords } from "@/components/portfolio/flip-words";
import {
  FLIP_WORDS,
  HERO_NAME,
  HERO_ROLE,
} from "@/constants/portfolio-constants";

const delay = (seconds: number): CSSProperties => ({
  animationDelay: `calc(var(--intro-delay, 0s) + ${seconds}s)`,
});

export const HeroText: FC = () => {
  return (
    <div className="relative z-20 mt-24 w-full max-w-3xl px-4 text-center md:mt-32 md:px-0 md:text-left">
      {/* Desktop Hero */}
      <div className="hidden flex-col md:flex c-space">
        <div
          className="reveal mb-6 inline-flex w-fit items-center gap-2 self-start rounded-full border border-white/15 bg-white/[0.04] px-3 py-1.5 backdrop-blur-md"
          style={delay(0.05)}
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inset-0 animate-ping rounded-full bg-mint opacity-75" />
            <span className="relative h-2 w-2 rounded-full bg-mint" />
          </span>

          <span className="text-xs uppercase tracking-[0.25em] text-neutral-300">
            Available for new projects
          </span>
        </div>

        <h1
          className="reveal text-3xl font-light text-neutral-400"
          style={delay(0.12)}
        >
          Hi, I&apos;m {HERO_NAME}
        </h1>

        <p
          className="reveal mt-2 text-5xl font-bold leading-tight text-gradient lg:text-6xl"
          style={delay(0.19)}
        >
          {HERO_ROLE}
          <br />
          crafting
        </p>

        <div className="reveal" style={delay(0.26)}>
          <FlipWords
            words={[...FLIP_WORDS]}
            className="text-6xl font-black text-white lg:text-8xl"
          />
        </div>

        <p
          className="reveal text-3xl font-semibold text-neutral-300 lg:text-4xl"
          style={delay(0.33)}
        >
          web &amp; mobile products.
        </p>

        <div
          className="reveal mt-10 flex flex-wrap gap-4"
          style={delay(0.4)}
        >
          <a href="#contact" className="btn-primary">
            <span>Hire Me</span>
            <span aria-hidden="true">→</span>
          </a>

          <a href="#work" className="btn-ghost">
            <span>View My Work</span>
          </a>
        </div>
      </div>

      {/* Mobile Hero */}
      <div className="flex flex-col space-y-5 px-2 md:hidden">
        <div
          className="reveal inline-flex items-center gap-2 self-center rounded-full border border-white/15 bg-white/[0.04] px-3 py-1.5"
          style={delay(0.05)}
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inset-0 animate-ping rounded-full bg-mint opacity-75" />
            <span className="relative h-2 w-2 rounded-full bg-mint" />
          </span>

          <span className="text-[10px] uppercase tracking-[0.25em] text-neutral-300">
            Open for Work
          </span>
        </div>

        <p
          className="reveal text-3xl font-light text-neutral-400"
          style={delay(0.12)}
        >
          Hi, I&apos;m {HERO_NAME.split(" ")[0]}
        </p>

        <p
          className="reveal text-4xl font-bold text-gradient"
          style={delay(0.19)}
        >
          {HERO_ROLE}
        </p>

        <div className="reveal" style={delay(0.26)}>
          <FlipWords
            words={[...FLIP_WORDS]}
            className="text-5xl font-bold text-white"
          />
        </div>

        <p
          className="reveal text-3xl font-semibold text-neutral-300"
          style={delay(0.33)}
        >
          web &amp; mobile apps.
        </p>

        <div
          className="reveal mt-4 flex flex-col items-center gap-3"
          style={delay(0.4)}
        >
          <a href="#contact" className="btn-primary w-full">
            <span>Hire Me</span>
            <span aria-hidden="true">→</span>
          </a>

          <a href="#work" className="btn-ghost w-full">
            <span>View My Work</span>
          </a>
        </div>
      </div>
    </div>
  );
};