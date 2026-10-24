"use client";

import { useEffect, useRef } from "react";
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
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const section = sectionRef.current;
    const video = videoRef.current;

    if (!section || !video) return;

    let duration = 0;
    let lastSeek = 0;

    const updateDuration = () => {
      duration = Number.isFinite(video.duration) ? video.duration : 0;
    };

    const animateVideo = (now: number) => {
      const difference = targetTimeRef.current - video.currentTime;

      if (
        duration > 0 &&
        video.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA &&
        Math.abs(difference) > 0.04 &&
        now - lastSeek >= 40
      ) {
        video.currentTime = Math.max(
          0,
          Math.min(
            duration - 0.05,
            video.currentTime + difference * 0.2,
          ),
        );

        lastSeek = now;
      }

      if (duration > 0 && Math.abs(difference) > 0.12) {
        frameRef.current = requestAnimationFrame(animateVideo);
      } else {
        frameRef.current = null;
      }
    };

    const handleMouseMove = (event: MouseEvent) => {
      if (duration <= 0 || window.matchMedia("(hover: none)").matches) {
        return;
      }

      const bounds = section.getBoundingClientRect();

      if (!bounds.width) return;

      const progress = Math.max(
        0,
        Math.min(1, (event.clientX - bounds.left) / bounds.width),
      );

      targetTimeRef.current = progress * Math.max(0, duration - 0.1);

      if (frameRef.current === null) {
        frameRef.current = requestAnimationFrame(animateVideo);
      }
    };

    const handleMouseLeave = () => {
      targetTimeRef.current = 0;

      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current);
        frameRef.current = null;
      }

      if (
        duration > 0 &&
        video.readyState >= HTMLMediaElement.HAVE_METADATA
      ) {
        video.currentTime = 0;
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
  }, []);

  const animationProps = (delay: number) =>
    reduceMotion
      ? {}
      : {
          variants: reveal,
          initial: "hidden" as const,
          animate: "visible" as const,
          transition: { delay },
        };

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative isolate flex min-h-[calc(100svh-76px)] w-full items-center overflow-hidden px-5 pb-8 pt-8 sm:min-h-[calc(100svh-84px)] sm:px-8 sm:py-10 md:px-12 lg:min-h-[calc(100svh-88px)] lg:px-16 lg:py-8 xl:px-20"
    >
      {/* Full-screen original video */}
      <video
        ref={videoRef}
        className="pointer-events-none absolute inset-0 -z-10 h-full w-full object-cover object-[62%_center] sm:object-center"
        src="/footer-background.mp4"
        muted
        playsInline
        preload="auto"
        aria-hidden="true"
      />

      {/* Content uses the available screen width */}
      <div className="relative z-10 mx-auto w-full max-w-[1600px]">
        <div className="w-full max-w-3xl lg:max-w-[64%] xl:max-w-[62%]">
          {/* Signature */}
          <motion.div
            {...animationProps(0.05)}
            className="mb-6 w-full max-w-[190px] sm:mb-7 sm:max-w-[235px] md:max-w-[260px] lg:mb-6 lg:max-w-[240px] xl:max-w-[270px]"
          >
            <img
              src="/noor-sign.png"
              alt="Noor Technologies"
              fetchPriority="high"
              className="block h-auto w-full mix-blend-multiply"
            />
          </motion.div>

          {/* Eyebrow */}
          <motion.div
            {...animationProps(0.18)}
            className="mb-5 inline-flex max-w-full items-center gap-2.5 rounded-full border border-black/15 px-3 py-2 sm:mb-6 sm:gap-3 sm:px-4 sm:py-2.5"
          >
            <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-[#079E9A]" />

            <span className="text-[9px] font-bold tracking-[0.08em] text-[#20312e] sm:text-xs sm:tracking-[0.13em] md:text-sm">
              TECHNOLOGY THAT MOVES YOU FORWARD
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            {...animationProps(0.3)}
            className="max-w-4xl text-[clamp(2.6rem,8.5vw,4.2rem)] font-bold leading-[0.98] tracking-[-0.06em] text-[#172321] sm:text-[clamp(3.4rem,6vw,5rem)] lg:text-[clamp(4rem,5.2vw,5.8rem)] xl:text-[5.8rem]"
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
            className="mt-5 max-w-2xl text-sm leading-6 text-[#25332f] sm:mt-6 sm:text-base sm:leading-7 md:text-lg lg:max-w-xl"
          >
            We build powerful digital experiences, modern websites, and
            intelligent software that help ambitious businesses move forward.
          </motion.p>

          {/* Buttons */}
          <motion.div
            {...animationProps(0.54)}
            className="mt-6 flex flex-col gap-3 sm:mt-7 sm:flex-row sm:flex-wrap sm:items-center"
          >
            <a
              href="#contact"
              className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-[#079E9A] px-6 text-sm font-semibold text-white shadow-[0_5px_18px_rgba(7,158,154,0.18)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#067f7c] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#079E9A] focus-visible:ring-offset-2 sm:min-h-13 sm:px-8 sm:text-base"
            >
              Let&apos;s Build Something

              <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                ↗
              </span>
            </a>

            <a
              href="#projects"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-black/25 px-6 text-sm font-semibold text-[#172321] transition duration-300 hover:border-[#079E9A] hover:bg-white/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#079E9A] focus-visible:ring-offset-2 sm:min-h-13 sm:px-8 sm:text-base"
            >
              Explore Our Work
            </a>
          </motion.div>

          {/* Supporting details */}
          <motion.div
            {...animationProps(0.66)}
            className="mt-7 flex flex-wrap items-center gap-x-3 gap-y-2 border-t border-black/15 pt-4 sm:mt-9 sm:gap-x-4 sm:pt-5"
          >
            <span className="text-[9px] font-bold uppercase tracking-[0.12em] text-[#283532] sm:text-xs sm:tracking-[0.15em]">
              Built for what&apos;s next
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