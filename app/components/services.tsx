"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiNodedotjs,
  SiFigma,
  SiJavascript,
  SiMongodb,
} from "react-icons/si";
import type { IconType } from "react-icons";
import SectionLabel from "./section-label";

const services = [
  {
    number: "01",
    eyebrow: "WEBSITES THAT CONVERT",
    title: "Website",
    titleSecond: "Development",
    description:
      "Modern, responsive websites designed to represent your brand and turn visitors into customers.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=700&q=80",
    accent: "#08B9AD",
    soft: "#E1FAF6",
    technologies: [
      { name: "Next.js", icon: SiNextdotjs, color: "#111111" },
      { name: "React", icon: SiReact, color: "#149ECA" },
      { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
    ],
  },
  {
    number: "02",
    eyebrow: "SOLUTIONS FOR REAL PROBLEMS",
    title: "Custom",
    titleSecond: "Software",
    description:
      "Tailored software solutions that simplify workflows and solve real business problems.",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=700&q=80",
    accent: "#FF6B52",
    soft: "#FFF0EB",
    technologies: [
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    ],
  },
  {
    number: "03",
    eyebrow: "DESIGN WITH PEOPLE IN MIND",
    title: "UI/UX",
    titleSecond: "Design",
    description:
      "Clean, intuitive interfaces that make digital products easier and more enjoyable to use.",
    image:
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=700&q=80",
    accent: "#08B9AD",
    soft: "#E1FAF6",
    technologies: [
      { name: "Figma", icon: SiFigma, color: "#F24E1E" },
      { name: "React", icon: SiReact, color: "#149ECA" },
      { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
    ],
  },
  {
    number: "04",
    eyebrow: "TECHNOLOGY FOR GROWTH",
    title: "Digital",
    titleSecond: "Solutions",
    description:
      "Practical technology solutions that help your business operate smarter and grow confidently.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=700&q=80",
    accent: "#FF6B52",
    soft: "#FFF0EB",
    technologies: [
      { name: "JavaScript", icon: SiJavascript, color: "#D6B800" },
      { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    ],
  },
];

type Technology = {
  name: string;
  icon: IconType;
  color: string;
};

function TechIcon({ name, icon: Icon, color }: Technology) {
  return (
    <div
      title={name}
      className="flex min-w-0 items-center gap-1.5 rounded-full border border-[#EEEEEC] bg-white px-2 py-1"
    >
      <Icon
        aria-hidden="true"
        className="shrink-0 text-xs sm:text-sm"
        style={{ color }}
      />
      <span className="text-[9px] font-medium text-[#626776] sm:text-[10px]">
        {name}
      </span>
    </div>
  );
}

const ease = [0.22, 1, 0.36, 1] as const;

export default function Services() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="services"
      className="relative isolate overflow-hidden bg-[#FCFCFB] px-4 py-8 text-[#17181C] sm:px-6 sm:py-10 lg:px-8 lg:py-12"
    >
      {/* Subtle background accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-20 -z-10 h-64 w-64 rounded-full bg-[#7CEDE1]/20 blur-[90px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -left-20 -z-10 h-64 w-64 rounded-full bg-[#FF9A83]/15 blur-[90px]"
      />

      <div className="mx-auto max-w-6xl">
        {/* Compact Header */}
        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: reduceMotion ? 0 : 0.4, ease }}
          className="mb-5 flex flex-col justify-between gap-2 sm:mb-6 md:flex-row md:items-end"
        >
          <div>
            <SectionLabel>Our Services</SectionLabel>

            <h2 className="mt-2 text-3xl font-semibold leading-[1.05] tracking-[-0.06em] sm:text-4xl lg:text-5xl">
              Digital experiences,
              <br className="hidden sm:block" />{" "}
              <span className="bg-gradient-to-r from-[#08AFA5] to-[#FF7058] bg-clip-text text-transparent">
                built with purpose.
              </span>
            </h2>
          </div>

          <div className="max-w-sm md:pb-1">
            <p className="text-xs leading-5 text-[#6B6D78] sm:text-sm sm:leading-6">
              Thoughtful digital solutions to help your business work smarter
              and grow faster.
            </p>

            <p className="mt-2 text-[9px] font-semibold tracking-[0.12em] text-[#747681] sm:text-[10px]">
              DESIGN <span className="px-1 text-[#08AFA5]">·</span>
              DEVELOPMENT <span className="px-1 text-[#FF7058]">·</span>
              DIGITAL GROWTH
            </p>
          </div>
        </motion.div>

        {/* Responsive Service Cards */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-5">
          {services.map((service, index) => (
            <motion.article
              key={service.number}
              initial={{
                opacity: 0,
                y: reduceMotion ? 0 : 14,
              }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.08 }}
              transition={{
                duration: reduceMotion ? 0 : 0.4,
                delay: reduceMotion ? 0 : index * 0.05,
                ease,
              }}
              whileHover={
                reduceMotion
                  ? undefined
                  : { y: -3, transition: { duration: 0.2 } }
              }
              className="group flex min-w-0 flex-col overflow-hidden rounded-xl border border-[#E9EAE8] bg-white transition-shadow duration-300 hover:shadow-[0_12px_32px_rgba(30,50,45,0.08)] sm:rounded-2xl"
            >
              {/* Small Image */}
              <div
                className="relative h-[90px] overflow-hidden sm:h-[125px] md:h-[145px] lg:h-[160px]"
                style={{ backgroundColor: service.soft }}
              >
                <img
                  src={service.image}
                  alt={`${service.title} ${service.titleSecond}`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    background: `linear-gradient(135deg, ${service.accent}, transparent 75%)`,
                  }}
                />

                <span
                  className="absolute left-2 top-2 rounded-md px-2 py-1 text-[9px] font-bold text-white sm:left-3 sm:top-3 sm:text-[10px]"
                  style={{ backgroundColor: service.accent }}
                >
                  {service.number}
                </span>

                <span
                  className="absolute bottom-0 left-0 h-[3px] w-full"
                  style={{ backgroundColor: service.accent }}
                />
              </div>

              {/* Compact Content */}
              <div className="flex flex-1 flex-col p-2.5 sm:p-4 md:p-5">
                <p
                  className="mb-1.5 text-[7px] font-bold leading-relaxed tracking-[0.08em] sm:text-[9px] sm:tracking-[0.12em]"
                  style={{ color: service.accent }}
                >
                  {service.eyebrow}
                </p>

                <h3 className="text-base font-semibold leading-tight tracking-[-0.045em] sm:text-xl md:text-2xl">
                  {service.title}
                  <br />
                  {service.titleSecond}
                </h3>

                <p className="mt-1.5 text-[10px] leading-[1.6] text-[#70717A] sm:mt-2 sm:text-xs sm:leading-5">
                  {service.description}
                </p>

                {/* Technology Tags */}
                <div className="mt-3 flex flex-wrap gap-1.5 sm:mt-4 sm:gap-2">
                  {service.technologies.map((technology) => (
                    <TechIcon
                      key={technology.name}
                      name={technology.name}
                      icon={technology.icon}
                      color={technology.color}
                    />
                  ))}
                </div>

                {/* Contact Link */}
                <a
                  href="#contact"
                  aria-label={`Discuss ${service.title} ${service.titleSecond} with us`}
                  className="mt-3 flex items-center justify-between border-t border-[#EEEEEC] pt-2.5 sm:mt-4 sm:pt-3"
                >
                  <span
                    className="text-[9px] font-bold tracking-[0.08em] sm:text-[10px] sm:tracking-[0.12em]"
                    style={{ color: service.accent }}
                  >
                    LET&apos;S BUILD
                  </span>

                  <span
                    className="flex h-6 w-6 items-center justify-center rounded-full border text-xs transition-all duration-200 group-hover:text-white sm:h-7 sm:w-7"
                    style={{
                      borderColor: `${service.accent}70`,
                      color: service.accent,
                    }}
                  >
                    <span aria-hidden="true">↗</span>
                  </span>
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Compact Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: reduceMotion ? 0 : 0.4, ease }}
          className="mt-5 flex items-center justify-between gap-3 rounded-xl border border-[#EAEAE7] bg-white p-3.5 sm:mt-6 sm:rounded-2xl sm:p-5"
        >
          <div className="min-w-0">
            <p className="text-[9px] font-semibold tracking-[0.12em] text-[#08AFA5] sm:text-[10px]">
              HAVE A PROJECT IN MIND?
            </p>

            <h3 className="mt-1 text-base font-semibold tracking-tight sm:text-xl">
              Let&apos;s make it happen.
            </h3>

            <p className="mt-1 text-[10px] text-[#777780] sm:text-xs">
              Tell us your idea. We&apos;ll help you bring it to life.
            </p>
          </div>

          <motion.a
            href="#contact"
            whileHover={reduceMotion ? undefined : { y: -2 }}
            whileTap={reduceMotion ? undefined : { scale: 0.97 }}
            className="flex shrink-0 items-center gap-2 rounded-lg bg-[#101A1A] px-3 py-2.5 text-[10px] font-semibold text-white transition-colors hover:bg-[#087F78] sm:px-4 sm:text-xs"
          >
            Start Project <span aria-hidden="true">↗</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}