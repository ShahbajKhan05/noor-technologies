
"use client";

import { motion, useReducedMotion } from "framer-motion";
import SectionLabel from "./section-label";

const services = [
  {
    number: "01",
    title: "Website Development",
    subtitle: "Web Design",
    description:
      "Modern, responsive websites designed to represent your brand and turn visitors into customers.",
    tags: ["Next.js", "React", "Responsive Design"],
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=700&q=85",
    color: "#079E9A",
  },
  {
    number: "02",
    title: "Custom Software",
    subtitle: "Software Development",
    description:
      "Tailored software solutions that simplify workflows and solve real business problems.",
    tags: ["Web Applications", "Automation", "Integration"],
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=700&q=85",
    color: "#FF765D",
  },
  {
    number: "03",
    title: "UI/UX Design",
    subtitle: "Product Design",
    description:
      "Clean, intuitive interfaces that make digital products easier and more enjoyable to use.",
    tags: ["User Research", "Prototyping", "Interface Design"],
    image:
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=700&q=85",
    color: "#079E9A",
  },
  {
    number: "04",
    title: "Digital Solutions",
    subtitle: "Digital Growth",
    description:
      "Practical technology solutions that help your business operate smarter and grow confidently.",
    tags: ["Consulting", "Optimization", "Support"],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=700&q=85",
    color: "#FF765D",
  },
];

const revealTransition = {
  duration: 0.7,
  ease: [0.22, 1, 0.36, 1] as const,
};

export default function Services() {
  const reduceMotion = useReducedMotion();

  const reveal = (direction: "left" | "right", delay = 0) => ({
    initial: {
      opacity: 0,
      x: reduceMotion ? 0 : direction === "left" ? -45 : 45,
      y: reduceMotion ? 0 : 10,
    },
    whileInView: {
      opacity: 1,
      x: 0,
      y: 0,
    },
    viewport: {
      once: true,
      amount: 0.15,
    },
    transition: {
      ...revealTransition,
      duration: reduceMotion ? 0 : revealTransition.duration,
      delay: reduceMotion ? 0 : delay,
    },
  });

  return (
    <section
      id="services"
      className="overflow-hidden bg-white px-4 py-9 text-[#111111] sm:px-6 sm:py-14 md:px-8 lg:px-10 lg:py-20"
    >
      <div className="mx-auto max-w-7xl">
        {/* HEADER: LEFT + RIGHT REVEAL */}
        <div className="mb-6 flex flex-col gap-4 sm:mb-9 md:flex-row md:items-end md:justify-between lg:mb-12">
          <motion.div {...reveal("left")}>
            <SectionLabel>Our Services</SectionLabel>

            <h2 className="mt-3 max-w-2xl text-[32px] font-semibold leading-[1.04] tracking-[-0.055em] sm:mt-4 sm:text-4xl md:text-5xl lg:text-6xl">
              Creative solutions.
              <br />
              <span className="text-[#079E9A]">
                Built around you.
              </span>
            </h2>
          </motion.div>

          <motion.div
            {...reveal("right", 0.12)}
            className="max-w-md md:pb-1"
          >
            <p className="text-[13px] leading-5 text-[#555555] sm:text-base sm:leading-7">
              From the first idea to the final product, we deliver
              digital solutions designed around your business goals.
            </p>

            <p className="mt-2 text-[9px] font-medium tracking-[0.12em] text-[#777777] sm:mt-3 sm:text-xs">
              DESIGN · DEVELOPMENT · DIGITAL GROWTH
            </p>
          </motion.div>
        </div>

        {/* SERVICE CARDS: ALTERNATING DIRECTIONS */}
        <div className="grid grid-cols-1 gap-2.5 sm:gap-3.5 lg:grid-cols-2 lg:gap-4">
          {services.map((service, index) => {
            const direction = index % 2 === 0 ? "left" : "right";

            return (
              <motion.article
                key={service.number}
                {...reveal(direction, index * 0.07)}
                whileHover={
                  reduceMotion
                    ? undefined
                    : {
                        y: -4,
                        transition: { duration: 0.25 },
                      }
                }
                className="group relative overflow-hidden border border-[#E5E5E5] bg-[#FAFAFA] transition-colors duration-300 hover:border-[#079E9A]/40 hover:bg-[#F7FBFA]"
              >
                {/* ACCENT LINE */}
                <motion.div
                  aria-hidden="true"
                  className="absolute left-0 top-0 h-[2px] w-full origin-left"
                  style={{ backgroundColor: service.color }}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: reduceMotion ? 0 : 0.65,
                    delay: reduceMotion ? 0 : index * 0.08 + 0.2,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                />

                {/* MAIN ROW */}
                <div className="flex items-center gap-3 p-3 sm:gap-4 sm:p-4 md:gap-5">
                  {/* IMAGE */}
                  <div className="relative h-[76px] w-[86px] shrink-0 overflow-hidden bg-[#D1EAE7] sm:h-[100px] sm:w-[125px] md:h-[110px] md:w-[145px]">
                    <motion.img
                      src={service.image}
                      alt={service.title}
                      loading="lazy"
                      whileHover={
                        reduceMotion ? undefined : { scale: 1.09 }
                      }
                      transition={{ duration: 0.5, ease: "easeOut" }}
                      className="h-full w-full object-cover"
                    />

                    <span
                      className="absolute bottom-0 left-0 h-[3px] w-full"
                      style={{ backgroundColor: service.color }}
                    />

                    <span className="absolute left-1.5 top-1.5 bg-white/90 px-1.5 py-0.5 text-[8px] font-semibold text-[#262626] backdrop-blur-sm">
                      {service.number}
                    </span>
                  </div>

                  {/* DETAILS */}
                  <div className="min-w-0 flex-1">
                    <p className="text-[8px] font-semibold tracking-[0.12em] text-[#777777] sm:text-[10px]">
                      SERVICE / {service.number}
                    </p>

                    <div className="mt-1 flex items-center justify-between gap-2">
                      <h3 className="text-[13px] font-semibold leading-tight tracking-[-0.025em] text-[#111111] sm:text-base md:text-lg">
                        {service.title}
                      </h3>

                      <motion.span
                        aria-hidden="true"
                        whileHover={
                          reduceMotion ? undefined : { x: 2, y: -2 }
                        }
                        className="flex h-7 w-7 shrink-0 items-center justify-center border border-[#E5E5E5] text-sm text-[#404040] transition-colors duration-300 group-hover:border-[#079E9A] group-hover:bg-[#079E9A] group-hover:text-white sm:h-8 sm:w-8"
                      >
                        ↗
                      </motion.span>
                    </div>

                    <p className="mt-1 text-[10px] leading-4 text-[#777777] sm:text-xs">
                      {service.subtitle}
                    </p>

                    {/* TAGS ON LARGER SCREENS */}
                    <div className="mt-2 hidden flex-wrap gap-1.5 sm:flex">
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className="border border-[#E5E5E5] bg-white px-2 py-1 text-[9px] text-[#555555] transition-colors duration-200 group-hover:border-[#D1EAE7] md:text-[10px]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* DESCRIPTION */}
                <div className="px-3 pb-3 sm:px-4 sm:pb-4">
                  <p className="text-[11px] leading-[1.6] text-[#555555] sm:text-sm sm:leading-6">
                    {service.description}
                  </p>

                  {/* MOBILE TAGS */}
                  <div className="mt-2 flex flex-wrap gap-1.5 sm:hidden">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="border border-[#E5E5E5] bg-white px-2 py-1 text-[9px] text-[#555555]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* BOTTOM CTA */}
        <motion.div
          {...reveal("right", 0.1)}
          className="mt-5 flex flex-col gap-3 border-t border-[#E5E5E5] pt-4 sm:mt-8 sm:flex-row sm:items-center sm:justify-between sm:pt-5"
        >
          <p className="max-w-md text-[12px] leading-5 text-[#555555] sm:text-sm sm:leading-6">
            Have a project in mind? Let&apos;s find the right solution
            for your business.
          </p>

          <motion.a
            href="#contact"
            whileHover={
              reduceMotion
                ? undefined
                : { y: -2, transition: { duration: 0.2 } }
            }
            whileTap={reduceMotion ? undefined : { scale: 0.98 }}
            className="group inline-flex min-h-10 w-fit items-center gap-3 bg-[#079E9A] px-4 py-2.5 text-xs font-semibold text-white transition-colors duration-300 hover:bg-[#067F7C] sm:text-sm"
          >
            Let&apos;s Talk

            <span className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
              ↗
            </span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
