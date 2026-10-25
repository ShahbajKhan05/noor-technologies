"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

const reveal = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const frameRef = useRef<number | null>(null);
  const targetTimeRef = useRef(0);
  const lastSeekRef = useRef(0);

  const reduceMotion = useReducedMotion();
  const [logoLoaded, setLogoLoaded] = useState(true);

  useEffect(() => {
    const section = sectionRef.current;
    const video = videoRef.current;

    if (!section || !video) return;

    let duration = 0;

    const updateDuration = () => {
      duration = Number.isFinite(video.duration) ? video.duration : 0;
    };

    const animateVideo = (now: number) => {
      if (
        duration <= 0 ||
        video.readyState < HTMLMediaElement.HAVE_CURRENT_DATA
      ) {
        frameRef.current = null;
        return;
      }

      const difference = targetTimeRef.current - video.currentTime;

      if (Math.abs(difference) < 0.025) {
        frameRef.current = null;
        return;
      }

      if (now - lastSeekRef.current >= 32) {
        const nextTime = video.currentTime + difference * 0.16;

        video.currentTime = Math.max(
          0,
          Math.min(duration - 0.05, nextTime)
        );

        lastSeekRef.current = now;
      }

      frameRef.current = requestAnimationFrame(animateVideo);
    };

    const startAnimation = () => {
      if (frameRef.current === null) {
        frameRef.current = requestAnimationFrame(animateVideo);
      }
    };

    const handleMouseMove = (event: MouseEvent) => {
      if (
        reduceMotion ||
        window.matchMedia("(hover: none)").matches ||
        duration <= 0
      ) {
        return;
      }

      const bounds = section.getBoundingClientRect();

      if (!bounds.width) return;

      const progress = Math.max(
        0,
        Math.min(1, (event.clientX - bounds.left) / bounds.width)
      );

      targetTimeRef.current = progress * Math.max(0, duration - 0.1);

      startAnimation();
    };

    const handleMouseLeave = () => {
      targetTimeRef.current = 0;

      if (duration > 0) {
        startAnimation();
      }
    };

    video.addEventListener("loadedmetadata", updateDuration);
    section.addEventListener("mousemove", handleMouseMove);
    section.addEventListener("mouseleave", handleMouseLeave);

    if (video.readyState >= HTMLMediaElement.HAVE_METADATA) {
      updateDuration();
    }

    return () => {
      video.removeEventListener("loadedmetadata", updateDuration);
      section.removeEventListener("mousemove", handleMouseMove);
      section.removeEventListener("mouseleave", handleMouseLeave);

      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [reduceMotion]);

  const animationProps = (delay: number) =>
    reduceMotion
      ? {}
      : {
          variants: reveal,
          initial: "hidden" as const,
          animate: "visible" as const,
          transition: {
            ...reveal.visible.transition,
            delay,
          },
        };

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative isolate flex min-h-[calc(100svh-76px)] w-full items-center overflow-hidden px-4 py-5 sm:min-h-[calc(100svh-84px)] sm:px-8 sm:py-6 md:px-12 lg:min-h-[calc(100svh-88px)] lg:px-16 lg:py-7 xl:px-20"
    >
      {/* Background video */}
      <video
        ref={videoRef}
        className="pointer-events-none absolute inset-0 -z-10 h-full w-full object-cover object-[62%_center] sm:object-center"
        src="/footer-background.mp4"
        muted
        playsInline
        preload="auto"
        aria-hidden="true"
      />

      {/* Main content */}
      <div className="relative z-10 mx-auto w-full max-w-[1600px]">
        <div className="w-full max-w-3xl lg:max-w-[64%] xl:max-w-[62%]">
          {/* Mobile decorative typography */}
          <motion.div
            {...animationProps(0.02)}
            aria-hidden="true"
            className="mb-2 overflow-hidden sm:hidden"
          >
            <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#067F7C]/80">
              Noor Technologies Presents
            </p>

            <div className="relative mt-2">
              <span className="block text-[clamp(2.15rem,10vw,3.2rem)] font-bold leading-[0.82] tracking-[-0.075em] text-[#1E2939]/[0.09]">
                THINK.
              </span>

              <span className="-mt-1 block text-[clamp(2.15rem,10vw,3.2rem)] font-bold leading-[0.82] tracking-[-0.075em] text-[#079E9A]/[0.22]">
                CREATE.
              </span>

              <span className="-mt-1 block text-[clamp(2.15rem,10vw,3.2rem)] font-bold leading-[0.82] tracking-[-0.075em] text-[#FF765D]/[0.28]">
                INSPIRE.
              </span>
            </div>

            <div className="mt-2 flex items-center gap-2">
              <span className="h-1 w-8 rounded-full bg-[#079E9A]/70" />
              <span className="h-1 w-4 rounded-full bg-[#FF765D]/80" />
              <span className="h-1 w-2 rounded-full bg-[#FB64B6]/80" />
            </div>
          </motion.div>

          {/* Signature logo */}
          {logoLoaded && (
            <motion.div
              {...animationProps(0.05)}
              className="mb-2 w-full max-w-[100px] sm:mb-4 sm:max-w-[170px] md:max-w-[200px] lg:mb-4 lg:max-w-[220px] xl:max-w-[240px]"
            >
              <img
                src="/Logo.png"
                alt="Noor Technologies"
                fetchPriority="high"
                onError={() => setLogoLoaded(false)}
                className="block h-auto w-full mix-blend-multiply"
              />
            </motion.div>
          )}

          {/* Eyebrow */}
          <motion.div
            {...animationProps(0.18)}
            className="mb-3 inline-flex max-w-full items-center gap-2 rounded-full border border-black/15 px-3 py-1.5 sm:mb-4 sm:gap-3 sm:px-4 sm:py-2.5"
          >
            <span className="h-2 w-2 shrink-0 rounded-full bg-[#079E9A] sm:h-2.5 sm:w-2.5" />

            <span className="text-[8px] font-bold tracking-[0.02em] text-[#20312e] sm:text-xs sm:tracking-[0.1em] md:text-sm">
              TECHNOLOGY THAT MOVES YOU FORWARD
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            {...animationProps(0.3)}
            className="max-w-4xl text-[clamp(2.15rem,8vw,2.8rem)] font-bold leading-[0.98] tracking-[-0.065em] text-[#172321] sm:text-[clamp(3.1rem,5.8vw,4.6rem)] sm:leading-[0.97] lg:text-[clamp(3.8rem,4.8vw,5.4rem)] xl:text-[5.6rem]"
          >
            Turning ideas
            <br />
            into{" "}
            <span className="bg-gradient-to-r from-[#079E9A] via-[#18bda9] to-[#42cbaa] bg-clip-text text-transparent">
              digital impact.
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            {...animationProps(0.42)}
            className="mt-3 max-w-xl text-[13px] leading-5 text-[#25332f] sm:mt-4 sm:max-w-2xl sm:text-base sm:leading-7 md:text-lg lg:max-w-xl"
          >
            We build powerful digital experiences, modern websites, and
            intelligent software that help ambitious businesses move forward.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            {...animationProps(0.54)}
            className="mt-4 flex flex-col gap-2 sm:mt-5 sm:flex-row sm:flex-wrap sm:items-center sm:gap-3"
          >
            <a
              href="#contact"
              className="group inline-flex min-h-10 items-center justify-center gap-3 rounded-full bg-[#079E9A] px-5 text-[13px] font-semibold text-white shadow-[0_5px_18px_rgba(7,158,154,0.18)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#067F7C] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#079E9A] focus-visible:ring-offset-2 sm:min-h-12 sm:px-7 sm:text-base"
            >
              Let's Build Something

              <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                ↗
              </span>
            </a>

            <a
              href="#projects"
              className="inline-flex min-h-10 items-center justify-center rounded-full border border-black/25 px-5 text-[13px] font-semibold text-[#172321] transition duration-300 hover:border-[#079E9A] hover:bg-white/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#079E9A] focus-visible:ring-offset-2 sm:min-h-12 sm:px-7 sm:text-base"
            >
              Explore Our Work
            </a>
          </motion.div>

          {/* Supporting details */}
          <motion.div
            {...animationProps(0.66)}
            className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2 border-t border-black/15 pt-3 sm:mt-5 sm:gap-x-4 sm:pt-4"
          >
            <span className="text-[9px] font-bold uppercase tracking-[0.12em] text-[#283532] sm:text-xs sm:tracking-[0.15em]">
              Built for what's next
            </span>

            <span className="h-px w-6 bg-[#079E9A]" />

            <span className="text-[11px] text-[#283532] sm:text-sm">
              Websites <span className="px-1 text-[#079E9A]">·</span>
              Software <span className="px-1 text-[#079E9A]">·</span>
              Digital Solutions
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}