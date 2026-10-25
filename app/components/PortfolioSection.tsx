
"use client";

import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  MotionValue,
} from "framer-motion";
import { Manrope } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
});

function WordSpan({
  word,
  index,
  total,
  scrollYProgress,
}: {
  word: string;
  index: number;
  total: number;
  scrollYProgress: MotionValue<number>;
}) {
  const start = index / total;
  const end = (index + 1) / total;

  // Har word smoothly reveal hoga
  const opacity = useTransform(
    scrollYProgress,
    [start, end],
    [0.15, 1]
  );

  const color = useTransform(
    scrollYProgress,
    [start, end],
    [
      "#E5E5E5",
      word === "design."
        ? "#14B8A6"
        : word === "build."
        ? "#FF6B35"
        : word === "deploy."
        ? "#14B8A6"
        : word === "maintain."
        ? "#FF6B35"
        : "#111111",
    ]
  );

  return (
    <motion.span
      style={{ opacity, color }}
      className="inline-block"
    >
      {word}
    </motion.span>
  );
}

export default function BrandStatement() {
  const containerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const statement =
    "We design. We build. We deploy. We maintain. And we teach you how to build.";

  const words = statement.split(" ");

  return (
    <section
      ref={containerRef}
      id="brand-statement"
      className={`relative w-full bg-white ${manrope.className}`}
    >
      {/* Animation ke liye scroll distance */}
      <div className="relative h-[180vh]">
        {/* Sticky content */}
        <div className="sticky top-0 flex h-screen w-full items-center justify-center overflow-hidden px-6 md:px-12">
          <div className="mx-auto w-full max-w-[1200px] text-center">
            <h2 className="flex flex-wrap justify-center gap-x-[1.5vw] gap-y-1 text-[clamp(2.2rem,5vw,6rem)] font-bold leading-[1.1] tracking-tight md:gap-x-[1vw]">
              {words.map((word, index) => (
                <WordSpan
                  key={`${word}-${index}`}
                  word={word}
                  index={index}
                  total={words.length}
                  scrollYProgress={scrollYProgress}
                />
              ))}
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
