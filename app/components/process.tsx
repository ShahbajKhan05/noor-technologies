"use client";

import { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "We understand your business, goals, audience, and the problem you want to solve.",
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=85",
    alt: "Team collaborating and sharing ideas",
  },
  {
    number: "02",
    title: "Plan & Design",
    description:
      "We create a clear strategy and thoughtful designs around your customers and business goals.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=85",
    alt: "Planning a digital project",
  },
  {
    number: "03",
    title: "Build",
    description:
      "We develop your solution with modern technology, responsive layouts, and careful testing.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=85",
    alt: "Developer building a digital product",
  },
  {
    number: "04",
    title: "Launch & Support",
    description:
      "We launch your project and help you improve it as your business grows.",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=85",
    alt: "Team working together on a digital product",
  },
];

const easing = [0.22, 1, 0.36, 1] as const;

export default function Process() {
  const [activeStep, setActiveStep] = useState(0);
  const stepRefs = useRef<(HTMLElement | null)[]>([]);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const elements = stepRefs.current.filter(
      (element): element is HTMLElement => element !== null
    );

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              Math.abs(
                a.boundingClientRect.top - window.innerHeight * 0.38
              ) -
              Math.abs(
                b.boundingClientRect.top - window.innerHeight * 0.38
              )
          );

        if (visible.length > 0) {
          const index = elements.indexOf(
            visible[0].target as HTMLElement
          );

          if (index !== -1) {
            setActiveStep(index);
          }
        }
      },
      {
        rootMargin: "-10% 0px -45% 0px",
        threshold: 0,
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  const currentStep = steps[activeStep];

  const reveal = {
    hidden: {
      opacity: 0,
      y: reduceMotion ? 0 : 18,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduceMotion ? 0 : 0.55,
        ease: easing,
      },
    },
  };

  return (
    <section
      id="process"
      className="overflow-hidden bg-white px-3 py-6 text-[#111111] sm:px-6 sm:py-14 md:px-8 lg:px-10 lg:py-20"
    >
      <div className="mx-auto max-w-7xl">
        {/* MOBILE INTRO */}
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-3 max-w-xl lg:hidden"
        >
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#079E9A] sm:text-xs">
            Our Process
          </p>

          <h2 className="mt-2 text-[30px] font-semibold leading-[1.04] tracking-[-0.06em] sm:mt-2.5 sm:text-4xl">
            Good ideas.
            <br />
            <span className="text-black/35">
              Thoughtfully built.
            </span>
          </h2>

          <p className="mt-2 max-w-md text-[12px] leading-[1.5] text-black/60 sm:mt-2.5 sm:text-sm sm:leading-6">
            From the first conversation to the final launch, we turn
            your ideas into meaningful digital experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 items-start gap-3 lg:grid-cols-[0.92fr_1.08fr] lg:gap-12 xl:gap-16">
          {/* DESKTOP STICKY PANEL */}
          <div className="hidden lg:sticky lg:top-24 lg:block">
            <motion.div
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#079E9A]">
                Our Process
              </p>

              <h2 className="mt-4 text-5xl font-semibold leading-[1.05] tracking-[-0.06em] xl:text-6xl">
                Good ideas.
                <br />
                <span className="text-black/35">
                  Thoughtfully built.
                </span>
              </h2>

              <p className="mt-4 max-w-md text-base leading-7 text-black/55">
                From the first conversation to the final launch, we
                turn your ideas into meaningful digital experiences.
              </p>
            </motion.div>

            {/* ANIMATED DESKTOP IMAGE */}
            <div className="mt-7 border border-black/[0.08] p-2 xl:mt-9">
              <div className="relative aspect-[5/4] overflow-hidden bg-[#F5F5F5]">
                <img
                  src={currentStep.image}
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 h-full w-full object-cover"
                />

                <AnimatePresence initial={false} mode="sync">
                  <motion.img
                    key={currentStep.image}
                    src={currentStep.image}
                    alt={currentStep.alt}
                    initial={{
                      clipPath: reduceMotion
                        ? "inset(0% 0% 0% 0%)"
                        : "inset(100% 0% 0% 0%)",
                      scale: reduceMotion ? 1 : 1.05,
                    }}
                    animate={{
                      clipPath: "inset(0% 0% 0% 0%)",
                      scale: 1,
                    }}
                    exit={{
                      opacity: 0,
                      transition: { duration: 0.2 },
                    }}
                    transition={
                      reduceMotion
                        ? { duration: 0 }
                        : {
                            clipPath: {
                              type: "spring",
                              stiffness: 50,
                              damping: 18,
                            },
                            scale: {
                              duration: 0.8,
                              ease: easing,
                            },
                          }
                    }
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </AnimatePresence>

                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={currentStep.number}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.25 }}
                    className="absolute bottom-3 left-3 flex items-center gap-2 bg-black/75 px-3 py-2 text-white backdrop-blur-md"
                  >
                    <span className="text-xs">
                      {currentStep.number}
                    </span>

                    <span className="text-xs font-medium">
                      {currentStep.title}
                    </span>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* DESKTOP CTA */}
            <a
              href="#contact"
              className="group mt-5 inline-flex items-center gap-3 text-sm font-medium"
            >
              <span className="transition-colors group-hover:text-[#079E9A]">
                Let&apos;s work together
              </span>

              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-black/15 transition-all duration-300 group-hover:border-[#079E9A] group-hover:bg-[#079E9A] group-hover:text-white">
                <span className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                  ↗
                </span>
              </span>
            </a>
          </div>

          {/* PROCESS STEPS */}
          <div className="border-t border-black/10 lg:border-t-0">
            {steps.map((step, index) => {
              const isActive = activeStep === index;

              return (
                <motion.article
                  key={step.number}
                  ref={(element) => {
                    stepRefs.current[index] = element;
                  }}
                  initial={{
                    opacity: 0,
                    y: reduceMotion ? 0 : 18,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.12,
                  }}
                  transition={{
                    duration: reduceMotion ? 0 : 0.5,
                    delay: reduceMotion ? 0 : index * 0.04,
                    ease: easing,
                  }}
                  className={`border-b border-black/10 px-1 py-2.5 transition-colors duration-300 sm:px-4 sm:py-6 lg:px-4 lg:py-8 xl:py-9 ${
                    isActive ? "bg-[#FAFCFC]" : "bg-white"
                  }`}
                >
                  {/* STEP NUMBER */}
                  <div className="flex items-center justify-between">
                    <motion.span
                      animate={{
                        color: isActive ? "#079E9A" : "#D9D9D9",
                      }}
                      transition={{ duration: 0.3 }}
                      className="text-[30px] font-medium leading-none tracking-[-0.07em] sm:text-5xl lg:text-7xl"
                    >
                      {step.number}
                    </motion.span>

                    <motion.span
                      animate={{
                        scale: isActive ? 1 : 0.8,
                        backgroundColor: isActive
                          ? "#079E9A"
                          : "#E5E5E5",
                      }}
                      transition={{ duration: 0.3 }}
                      className="h-2 w-2 rounded-full"
                    />
                  </div>

                  {/* STEP TITLE */}
                  <h3 className="mt-1.5 text-[18px] font-semibold tracking-[-0.045em] sm:mt-3 sm:text-2xl lg:mt-4 lg:text-[26px]">
                    {step.title}
                  </h3>

                  {/* STEP DESCRIPTION */}
                  <p className="mt-1 max-w-lg text-[12px] leading-[1.5] text-black/55 sm:mt-2 sm:text-base sm:leading-7">
                    {step.description}
                  </p>

                  {/* MOBILE + TABLET IMAGE */}
                  <div className="mt-2 overflow-hidden border border-black/[0.07] p-0.5 sm:mt-4 sm:p-1 md:mt-5 lg:hidden">
                    <motion.img
                      src={step.image}
                      alt={step.alt}
                      loading="lazy"
                      whileHover={
                        reduceMotion ? undefined : { scale: 1.025 }
                      }
                      transition={{ duration: 0.45 }}
                      className="aspect-[16/9] w-full object-cover"
                    />
                  </div>

                  {/* PROGRESS LINE */}
                  <div className="mt-2 h-px overflow-hidden bg-black/[0.06] sm:mt-5 lg:mt-6">
                    <motion.div
                      className="h-full origin-left bg-[#079E9A]"
                      initial={false}
                      animate={{
                        scaleX: isActive ? 1 : 0,
                      }}
                      transition={{
                        duration: reduceMotion ? 0 : 0.45,
                        ease: easing,
                      }}
                    />
                  </div>
                </motion.article>
              );
            })}

            {/* BOTTOM CTA */}
            <motion.div
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              className="pt-4 sm:pt-7"
            >
              <p className="text-[10px] font-semibold tracking-[0.18em] text-black/40 sm:text-xs">
                READY WHEN YOU ARE
              </p>

              <div className="mt-1.5 flex flex-wrap items-center justify-between gap-2 sm:mt-2">
                <h3 className="text-base font-semibold tracking-tight sm:text-xl">
                  Let&apos;s build something great.
                </h3>

                <a
                  href="#contact"
                  className="group inline-flex items-center gap-2 text-sm font-medium text-[#079E9A]"
                >
                  Get started
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    ↗
                  </span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}