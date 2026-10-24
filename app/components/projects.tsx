
"use client";

import { motion, useReducedMotion } from "framer-motion";

const projects = [
  {
    number: "01",
    title: "Business Websites",
    category: "Web Development",
    year: "2025",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=85",
    description:
      "Modern, responsive websites designed to build trust and grow businesses.",
    color: "#079E9A",
  },
  {
    number: "02",
    title: "Custom Web Applications",
    category: "Software",
    year: "2025",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=85",
    description:
      "Purpose-built applications that simplify workflows and solve business problems.",
    color: "#FF765D",
  },
  {
    number: "03",
    title: "E-commerce Experiences",
    category: "E-commerce",
    year: "2025",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=85",
    description:
      "Digital storefronts designed for simple browsing and smoother shopping.",
    color: "#079E9A",
  },
  {
    number: "04",
    title: "UI/UX Design",
    category: "Design",
    year: "2025",
    image:
      "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=1200&q=85",
    description:
      "Clean, intuitive interfaces focused on usability and visual consistency.",
    color: "#FF765D",
  },
  {
    number: "05",
    title: "Business Automation",
    category: "Automation",
    year: "2025",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=85",
    description:
      "Practical digital tools that reduce repetitive work and improve efficiency.",
    color: "#079E9A",
  },
  {
    number: "06",
    title: "Digital Solutions",
    category: "Technology",
    year: "2025",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=85",
    description:
      "Technology solutions shaped around individual business requirements.",
    color: "#FF765D",
  },
];

export default function Projects() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="projects"
      className="overflow-hidden bg-white px-4 py-9 text-[#111111] sm:px-6 sm:py-14 md:px-8 lg:px-10 lg:py-20"
    >
      <div className="mx-auto max-w-6xl">
        {/* HEADER */}
        <div className="mb-5 flex items-end justify-between gap-3 sm:mb-8">
          <motion.div
            initial={{
              opacity: 0,
              x: reduceMotion ? 0 : -30,
            }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: reduceMotion ? 0 : 0.65,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <p className="mb-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#079E9A] sm:text-xs">
              Our Work
            </p>

            <h2 className="text-2xl font-semibold leading-tight tracking-[-0.05em] sm:text-3xl md:text-4xl">
              Selected Projects<span className="text-[#FF765D]">.</span>
            </h2>

            <p className="mt-1.5 text-xs text-[#777777] sm:text-sm">
              Ideas transformed into digital experiences.
            </p>
          </motion.div>

          <motion.span
            initial={{
              opacity: 0,
              x: reduceMotion ? 0 : 20,
            }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: reduceMotion ? 0 : 0.5 }}
            className="shrink-0 pb-1 text-[10px] text-[#777777] sm:text-xs"
          >
            INDEX / 06
          </motion.span>
        </div>

        {/* PROJECT LIST */}
        <div className="border-t border-[#E5E5E5]">
          {projects.map((project, index) => {
            const fromLeft = index % 2 === 0;

            return (
              <motion.article
                key={project.number}
                initial={{
                  opacity: 0,
                  x: reduceMotion ? 0 : fromLeft ? -35 : 35,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.12,
                }}
                transition={{
                  duration: reduceMotion ? 0 : 0.6,
                  delay: reduceMotion ? 0 : 0.04,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative grid grid-cols-[22px_minmax(0,1fr)_24px] items-center gap-x-2.5 border-b border-[#E5E5E5] py-3.5 transition-colors duration-300 hover:bg-[#F8FAF9] sm:grid-cols-[32px_minmax(0,1fr)_110px_45px_28px] sm:gap-x-4 sm:py-5 md:py-6"
              >
                {/* NUMBER */}
                <span className="self-start pt-1 text-[9px] font-medium text-[#777777] sm:text-xs">
                  {project.number}
                </span>

                {/* TITLE AND IMAGE */}
                <div className="min-w-0">
                  <h3 className="text-[17px] font-medium leading-tight tracking-[-0.045em] transition-colors duration-200 group-hover:text-[#079E9A] sm:text-xl md:text-2xl lg:text-3xl">
                    {project.title}
                  </h3>

                  {/* MOBILE IMAGE */}
                  <div className="relative mt-2.5 overflow-hidden bg-[#F5F7F6] sm:hidden">
                    <motion.img
                      src={project.image}
                      alt={`${project.title} preview`}
                      loading="lazy"
                      whileHover={
                        reduceMotion ? undefined : { scale: 1.04 }
                      }
                      transition={{ duration: 0.4 }}
                      className="h-[112px] w-full object-cover"
                    />

                    <span
                      className="absolute bottom-0 left-0 h-[2px] w-full"
                      style={{ backgroundColor: project.color }}
                    />
                  </div>

                  {/* DESCRIPTION */}
                  <p className="mt-1.5 max-w-lg text-[11px] leading-[1.5] text-[#777777] sm:mt-1 sm:text-xs md:text-sm">
                    {project.description}
                  </p>

                  {/* MOBILE CATEGORY */}
                  <div className="mt-2 flex items-center gap-2 sm:hidden">
                    <span
                      className="h-1.5 w-1.5 rounded-full"
                      style={{ backgroundColor: project.color }}
                    />

                    <span className="text-[9px] font-medium text-[#555555]">
                      {project.category}
                    </span>

                    <span className="text-[9px] text-[#A1A1A1]">
                      / {project.year}
                    </span>
                  </div>
                </div>

                {/* DESKTOP CATEGORY */}
                <span className="hidden text-xs text-[#555555] sm:block">
                  {project.category}
                </span>

                {/* DESKTOP YEAR */}
                <span className="hidden text-xs text-[#777777] sm:block">
                  {project.year}
                </span>

                {/* ARROW */}
                <a
                  href="#contact"
                  aria-label={`Discuss ${project.title}`}
                  className="flex h-7 w-7 items-center justify-center justify-self-end border border-transparent text-base text-[#555555] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:border-[#079E9A] group-hover:bg-[#079E9A] group-hover:text-white sm:h-8 sm:w-8"
                >
                  ↗
                </a>

                {/* DESKTOP HOVER PREVIEW */}
                <div className="pointer-events-none absolute left-[48%] top-1/2 z-20 hidden w-56 -translate-x-1/2 -translate-y-1/2 scale-95 overflow-hidden border border-[#E5E5E5] bg-white opacity-0 shadow-[0_12px_40px_rgba(0,0,0,0.10)] transition-all duration-300 group-hover:scale-100 group-hover:opacity-100 md:block lg:w-64">
                  <div className="relative">
                    <img
                      src={project.image}
                      alt=""
                      loading="lazy"
                      className="h-36 w-full object-cover"
                    />

                    <span
                      className="absolute bottom-0 left-0 h-[3px] w-full"
                      style={{ backgroundColor: project.color }}
                    />
                  </div>

                  <div className="p-3">
                    <p className="text-sm font-semibold text-[#283532]">
                      {project.title}
                    </p>

                    <p className="mt-1 text-xs text-[#777777]">
                      {project.category} · {project.year}
                    </p>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* BOTTOM CTA */}
        <motion.div
          initial={{
            opacity: 0,
            x: reduceMotion ? 0 : 25,
          }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: reduceMotion ? 0 : 0.55,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-5 flex flex-col gap-2.5 border-t border-[#E5E5E5] pt-4 sm:mt-7 sm:flex-row sm:items-center sm:justify-between sm:pt-5"
        >
          <p className="text-xs text-[#777777] sm:text-sm">
            Have a project in mind? Let&apos;s make it happen.
          </p>

          <a
            href="#contact"
            className="group inline-flex w-fit items-center gap-2 text-xs font-semibold text-[#176C66] transition-colors hover:text-[#079E9A] sm:text-sm"
          >
            Start a project

            <span className="transition-transform duration-200 group-hover:translate-x-1">
              ↗
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
