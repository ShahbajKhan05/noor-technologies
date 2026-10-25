"use client";

import { motion, useReducedMotion } from "framer-motion";

const projects = [
  {
    number: "01",
    title: "Business Websites",
    category: "Web Development",
    year: "2025",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=800&q=80",
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
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
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
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80",
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
      "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=800&q=80",
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
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
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
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
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
      className="overflow-hidden bg-white px-4 py-7 text-[#111111] sm:px-6 sm:py-9 lg:px-8 lg:py-10"
    >
      <div className="mx-auto max-w-6xl">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: reduceMotion ? 0 : 0.35 }}
          className="mb-4 flex items-end justify-between gap-3 sm:mb-5"
        >
          <div>
            <p className="mb-1 text-[9px] font-bold uppercase tracking-[0.18em] text-[#079E9A] sm:text-[10px]">
              Our Work / Portfolio
            </p>

            <h2 className="text-2xl font-semibold leading-tight tracking-[-0.045em] sm:text-3xl md:text-4xl">
              Selected Projects
              <span className="text-[#FF765D]">.</span>
            </h2>

            <p className="mt-1 text-[11px] text-[#777777] sm:text-xs">
              Ideas transformed into digital experiences.
            </p>
          </div>

          <span className="shrink-0 pb-1 text-[9px] tracking-wider text-[#888888] sm:text-[10px]">
            WORK / 06
          </span>
        </motion.div>

        {/* COMPACT PROJECT LIST */}
        <div className="border-t border-[#E7E7E7]">
          {projects.map((project, index) => (
            <motion.article
              key={project.number}
              initial={{
                opacity: 0,
                y: reduceMotion ? 0 : 8,
              }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{
                duration: reduceMotion ? 0 : 0.3,
                delay: reduceMotion ? 0 : index * 0.025,
              }}
              className="group relative grid grid-cols-[22px_minmax(0,1fr)_25px] items-center gap-2 border-b border-[#E7E7E7] py-3 transition-colors duration-200 hover:bg-[#F8FAF9] sm:grid-cols-[30px_minmax(0,1fr)_105px_45px_25px] sm:gap-3 sm:py-3.5 md:py-4"
            >
              {/* NUMBER */}
              <span className="self-start pt-1 text-[9px] font-medium text-[#888888] sm:text-[10px]">
                {project.number}
              </span>

              {/* PROJECT DETAILS */}
              <div className="min-w-0">
                <a
                  href="#contact"
                  className="inline-flex max-w-full items-center gap-2"
                  aria-label={`Discuss ${project.title}`}
                >
                  <h3 className="text-[15px] font-semibold leading-tight tracking-[-0.035em] transition-colors group-hover:text-[#079E9A] sm:text-lg md:text-xl">
                    {project.title}
                  </h3>
                </a>

                <p className="mt-1 line-clamp-1 text-[10px] leading-4 text-[#777777] sm:text-xs">
                  {project.description}
                </p>

                {/* MOBILE CATEGORY */}
                <div className="mt-1.5 flex items-center gap-1.5 sm:hidden">
                  <span
                    className="h-1.5 w-1.5 shrink-0 rounded-full"
                    style={{ backgroundColor: project.color }}
                  />
                  <span className="text-[9px] text-[#555555]">
                    {project.category}
                  </span>
                  <span className="text-[9px] text-[#AAAAAA]">
                    / {project.year}
                  </span>
                </div>
              </div>

              {/* DESKTOP CATEGORY */}
              <span className="hidden text-[11px] text-[#555555] sm:block md:text-xs">
                {project.category}
              </span>

              {/* DESKTOP YEAR */}
              <span className="hidden text-[11px] text-[#888888] sm:block">
                {project.year}
              </span>

              {/* ARROW */}
              <a
                href="#contact"
                aria-label={`Discuss ${project.title}`}
                className="flex h-7 w-7 items-center justify-center justify-self-end rounded-full text-base text-[#555555] transition-all duration-200 group-hover:bg-[#079E9A] group-hover:text-white sm:h-8 sm:w-8"
              >
                ↗
              </a>

              {/* DESKTOP IMAGE PREVIEW ON HOVER */}
              <div className="pointer-events-none absolute left-[48%] top-1/2 z-20 hidden w-52 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-xl border border-[#E8E8E8] bg-white opacity-0 shadow-xl transition-opacity duration-200 group-hover:opacity-100 md:block lg:w-60">
                <img
                  src={project.image}
                  alt={`${project.title} preview`}
                  loading="lazy"
                  className="h-28 w-full object-cover lg:h-32"
                />

                <div className="p-2.5">
                  <p className="text-xs font-semibold">{project.title}</p>
                  <p className="mt-0.5 text-[10px] text-[#777777]">
                    {project.category} · {project.year}
                  </p>
                </div>

                <div
                  className="h-[3px] w-full"
                  style={{ backgroundColor: project.color }}
                />
              </div>
            </motion.article>
          ))}
        </div>

        {/* COMPACT FOOTER CTA */}
        <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-[#E7E7E7] pt-3 sm:mt-5">
          <p className="text-[10px] text-[#777777] sm:text-xs">
            Have a project in mind?
          </p>

          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-[#087F79] transition-colors hover:text-[#079E9A] sm:text-xs"
          >
            Let&apos;s talk <span>↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}