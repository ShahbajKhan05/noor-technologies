
"use client";

import { useEffect, useState } from "react";

const text = "NOOR TECHNOLOGIES";

export default function PortfolioSection() {
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    let index = 0;

    const timer = window.setInterval(() => {
      index++;
      setTypedText(text.slice(0, index));

      if (index >= text.length) {
        window.clearInterval(timer);
      }
    }, 100);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section
      id="portfolio"
      className="relative flex min-h-[420px] flex-col items-center justify-center overflow-hidden bg-[#FFFFFF] px-5 py-16 text-[#262626]"
      style={{
        fontFamily: "-apple-system, sans-serif",
        fontSize: "16px",
        fontWeight: 400,
        lineHeight: "24px",
        letterSpacing: "0em",
      }}
    >
      {/* Background decorations */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-20 top-10 h-48 w-48 rounded-full bg-[#FCE2D9] opacity-70 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 bottom-5 h-56 w-56 rounded-full bg-[#D1EAE7] opacity-70 blur-3xl"
      />

      <div className="relative z-10 flex w-full flex-col items-center">
        {/* Label */}
        <div className="mb-6 flex items-center gap-2">
          <span className="h-2 w-2 animate-pulse rounded-full bg-[#079E9A]" />

          <p className="text-xs font-normal uppercase tracking-[0.25em] text-[#6A7282]">
            Independent Digital Studio
          </p>
        </div>

        {/* Animated outline heading */}
        <h1
          aria-label={text}
          className="max-w-full whitespace-nowrap text-center text-[clamp(1.35rem,7.5vw,6rem)] font-normal uppercase leading-none tracking-[-0.045em]"
          style={{
            color: "transparent",
            WebkitTextStroke: "1.5px #079E9A",
          }}
        >
          {typedText}
          <span
            aria-hidden="true"
            className="ml-1 inline-block h-[0.75em] w-[2px] animate-pulse bg-[#FF765D]"
          />
        </h1>

        {/* Decorative underline */}
        <div className="mt-7 flex h-1 w-32 overflow-hidden rounded-full">
          <span className="w-1/3 bg-[#FF765D]" />
          <span className="w-1/3 bg-[#FB64B6]" />
          <span className="w-1/3 bg-[#079E9A]" />
        </div>

        {/* Description */}
        <p className="mt-6 max-w-lg text-center text-base font-normal leading-6 text-[#555555]">
          We turn ambitious ideas into meaningful digital experiences through
          thoughtful design and intelligent technology.
        </p>

        {/* CTA Button */}
        <a
          href="#contact"
          className="group mt-8 inline-flex items-center gap-3 rounded-full bg-[#FF765D] px-7 py-3 text-sm font-normal text-white transition-all duration-300 hover:bg-[#FB2C36] hover:shadow-lg hover:shadow-[#FF765D]/25"
        >
          Explore Our Approach

          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </a>

        {/* Service tags */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
          <span className="rounded-full border border-[#D1EAE7] bg-[#D1EAE7]/40 px-4 py-1.5 text-xs text-[#176C66]">
            Strategy
          </span>

          <span className="rounded-full border border-[#FCE2D9] bg-[#FCE2D9]/50 px-4 py-1.5 text-xs text-[#9A4936]">
            Design
          </span>

          <span className="rounded-full border border-[#E5E5E5] bg-white px-4 py-1.5 text-xs text-[#4A5565]">
            Development
          </span>
        </div>
      </div>

      {/* Bottom caption */}
      <p className="absolute bottom-4 text-[9px] font-normal uppercase tracking-[0.25em] text-[#A1A1A1]">
        Building Digital Experiences
      </p>
    </section>
  );
}
