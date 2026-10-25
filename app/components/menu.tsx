
"use client";

import { motion, useReducedMotion } from "framer-motion";

const WHATSAPP = "918349813831";

const services = [
  {
    number: "01",
    title: "Website Development",
    subtitle: "Websites for your business",
    color: "#079E9A",
    tint: "#E7F8F6",
    items: [
      ["Landing Page", "₹2,099"],
      ["Personal Portfolio Website", "₹2,799"],
      ["Business Website (Up to 5 Pages)", "₹5,599"],
      ["Premium Business Website", "₹10,499"],
      ["E-commerce Website", "₹13,999"],
    ],
  },
  {
    number: "02",
    title: "Custom Web Applications",
    subtitle: "Smart business software",
    color: "#FF765D",
    tint: "#FFF0E9",
    items: [
      ["Admin Dashboard", "₹5,599"],
      ["Student Management System", "₹10,499"],
      ["Inventory Management System", "₹10,499"],
      ["Booking / Appointment System", "₹10,499"],
      ["Custom Web Application", "₹13,999+"],
    ],
  },
  {
    number: "03",
    title: "UI/UX & Website Design",
    subtitle: "Beautiful digital experiences",
    color: "#E94F68",
    tint: "#FFF0F3",
    items: [
      ["Website UI Design", "₹1,399"],
      ["Landing Page Design", "₹1,049"],
      ["Figma Website Design", "₹2,099"],
      ["Website Redesign", "₹2,099"],
    ],
  },
  {
    number: "04",
    title: "Website Maintenance",
    subtitle: "Keep your website updated",
    color: "#168BC1",
    tint: "#EAF6FC",
    items: [
      ["Basic Website Updates", "₹349"],
      ["Bug Fixing", "₹349"],
      ["Website Speed Optimization", "₹699"],
      ["Monthly Maintenance Plan", "₹1,049/month"],
      ["Security & Backup Setup", "₹699"],
    ],
  },
  {
    number: "05",
    title: "Digital Business Solutions",
    subtitle: "Tools for your business",
    color: "#8051D9",
    tint: "#F3EEFF",
    items: [
      ["Business Email Setup", "₹349"],
      ["Domain & Hosting Setup", "₹699"],
      ["Contact Form Integration", "₹349"],
      ["WhatsApp Integration", "₹349"],
      ["Social Media Integration", "₹349"],
    ],
  },
  {
    number: "06",
    title: "IT Training & Coaching",
    subtitle: "Learn and build your skills",
    color: "#279B54",
    tint: "#ECF8EE",
    items: [
      ["HTML & CSS Training", "₹2,099"],
      ["JavaScript Training", "₹2,799"],
      ["Complete Web Development", "₹5,599"],
      ["Project Guidance & Mentorship", "₹2,099"],
      ["Personal Training (1-on-1)", "₹699/hour"],
    ],
  },
];

const packages = [
  {
    name: "Starter",
    price: "₹2,099",
    description: "Perfect to get started",
    color: "#079E9A",
    tint: "#E8F8F6",
    features: [
      "Basic Website",
      "Mobile-Friendly Design",
      "Contact Form",
      "1 Month Support",
    ],
  },
  {
    name: "Business",
    price: "₹5,599",
    description: "For growing businesses",
    color: "#FF765D",
    tint: "#FFF0E9",
    popular: true,
    features: [
      "Professional Website",
      "Up to 5 Pages",
      "Contact Form + WhatsApp",
      "Basic SEO Setup",
      "3 Months Support",
    ],
  },
  {
    name: "Premium",
    price: "₹10,499",
    description: "For advanced requirements",
    color: "#8051D9",
    tint: "#F3EEFF",
    features: [
      "Custom Website Design",
      "Advanced Features",
      "Database Integration",
      "Business Automation",
      "6 Months Support",
    ],
  },
];

const additionalServices = [
  ["Major Design Changes", "Custom Quote"],
  ["New Pages Development", "Custom Quote"],
  ["New Features & Functionality", "Custom Quote"],
  ["E-commerce Updates", "Custom Quote"],
  ["Domain & Hosting Assistance", "As Required"],
  ["Emergency Support", "Custom Quote"],
];

function whatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`;
}

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-3.5 w-3.5 shrink-0 transition-transform duration-200 group-hover:translate-x-1"
      aria-hidden="true"
    >
      <path
        d="M5 12h14m-6-6 6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CheckIcon({ color }: { color: string }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      className="mt-0.5 h-3.5 w-3.5 shrink-0"
      aria-hidden="true"
    >
      <path
        d="m4 10 4 4 8-8"
        stroke={color}
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Heading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="min-w-0">
      <p className="text-[9px] font-black uppercase tracking-[0.15em] text-[#079E9A]">
        {eyebrow}
      </p>

      <h2 className="mt-1 text-[clamp(1.5rem,3vw,2.4rem)] font-black leading-tight tracking-[-0.055em] text-[#111111] [-webkit-text-stroke:0.35px_#111111]">
        {title}
        <span className="text-[#FF765D] [-webkit-text-stroke:0px]">.</span>
      </h2>

      {description && (
        <p className="mt-1 text-[11px] leading-4 text-[#555B5D] sm:text-xs">
          {description}
        </p>
      )}
    </div>
  );
}

export default function Menu() {
  const reduceMotion = useReducedMotion();

  const reveal = {
    initial: reduceMotion ? false : { opacity: 0, y: 8 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.05 },
    transition: { duration: reduceMotion ? 0 : 0.25 },
  };

  return (
    <section
      id="menu"
      className="relative isolate overflow-hidden bg-[#FAFBFA] px-2 py-4 text-[#111111] sm:px-3 sm:py-5 lg:px-4 lg:py-6"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-10 -z-10 h-52 w-52 rounded-full bg-[#079E9A]/[0.06] blur-3xl"
      />

      <div className="mx-auto max-w-7xl">
        {/* HEADER */}
        <motion.header
          {...reveal}
          className="mb-3 flex flex-col gap-2 border-b border-black/10 pb-3 sm:mb-4 sm:flex-row sm:items-end sm:justify-between"
        >
          <div className="min-w-0">
            <span className="mb-1.5 inline-flex items-center gap-1.5 rounded-full border border-[#079E9A]/20 bg-white px-2 py-1 text-[9px] font-black uppercase tracking-wider text-[#067F7C]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#079E9A]" />
              Noor Technologies
            </span>

            <h1 className="text-[clamp(1.8rem,4.5vw,3.2rem)] font-black leading-[1] tracking-[-0.06em] text-[#111111] [-webkit-text-stroke:0.4px_#111111]">
              IT Services<span className="text-[#079E9A]">.</span>
              <br className="hidden sm:block" />
              <span className="text-[#FF765D] [-webkit-text-stroke:0px]">
                {" "}Clear Pricing.
              </span>
            </h1>

            <p className="mt-1.5 max-w-lg text-[11px] leading-4 text-[#555B5D] sm:text-xs">
              Digital solutions, transparent prices, and technology to grow
              your business.
            </p>
          </div>

          <div className="flex gap-2">
            <div className="rounded-lg border border-black/[0.07] bg-white px-2.5 py-1.5">
              <p className="text-base font-black leading-none">06</p>
              <p className="mt-1 text-[9px] text-[#555B5D]">Services</p>
            </div>

            <div className="rounded-lg border border-black/[0.07] bg-white px-2.5 py-1.5">
              <p className="text-base font-black leading-none">03</p>
              <p className="mt-1 text-[9px] text-[#555B5D]">Packages</p>
            </div>
          </div>
        </motion.header>

        {/* SERVICE GRID */}
        <div className="grid grid-cols-1 items-stretch gap-2 sm:grid-cols-2 lg:grid-cols-3 lg:gap-2.5">
          {services.map((service, index) => (
            <motion.article
              key={service.number}
              initial={reduceMotion ? false : { opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{
                duration: reduceMotion ? 0 : 0.25,
                delay: reduceMotion ? 0 : (index % 3) * 0.03,
              }}
              className="flex min-w-0 flex-col overflow-hidden rounded-xl border border-black/[0.08] bg-white shadow-[0_2px_8px_rgba(20,30,30,0.025)] transition-shadow hover:shadow-md"
            >
              <div
                className="px-2.5 py-2 sm:px-3"
                style={{ backgroundColor: service.tint }}
              >
                <div className="flex items-center gap-2">
                  <span
                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md text-[9px] font-black text-white"
                    style={{ backgroundColor: service.color }}
                  >
                    {service.number}
                  </span>

                  <div className="min-w-0">
                    <h3 className="text-[11px] font-black leading-tight text-[#111111] [-webkit-text-stroke:0.2px_#111111] sm:text-xs">
                      {service.title}
                    </h3>

                    <p className="mt-0.5 text-[9px] leading-3 text-[#51565A]">
                      {service.subtitle}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex-1 px-2.5 py-0.5 sm:px-3">
                {service.items.map(([name, price], itemIndex) => (
                  <div
                    key={name}
                    className={`flex items-start justify-between gap-1.5 py-1.5 ${
                      itemIndex !== service.items.length - 1
                        ? "border-b border-black/[0.055]"
                        : ""
                    }`}
                  >
                    <span className="min-w-0 flex-1 text-[10px] font-medium leading-4 text-[#282828] sm:text-[11px]">
                      {name}
                    </span>

                    <span
                      className="shrink-0 whitespace-nowrap rounded px-1 py-0.5 text-[9px] font-black sm:text-[10px]"
                      style={{
                        color: service.color,
                        backgroundColor: service.tint,
                      }}
                    >
                      {price}
                    </span>
                  </div>
                ))}
              </div>

              <a
                href={whatsappLink(
                  `Hi Noor Technologies, I would like to enquire about ${service.title}. Please share the details.`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex min-h-8 items-center justify-between gap-2 border-t border-black/[0.06] px-2.5 py-1.5 text-[10px] font-bold sm:px-3"
                style={{ color: service.color }}
              >
                Discuss your requirements
                <ArrowIcon />
              </a>
            </motion.article>
          ))}
        </div>

        {/* WEBSITE PACKAGES */}
        <section className="mt-5 sm:mt-6">
          <motion.div
            {...reveal}
            className="mb-3 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between"
          >
            <Heading
              eyebrow="Find your perfect fit"
              title="Website Packages"
              description="Choose a package that matches your goals."
            />

            <a
              href={whatsappLink(
                "Hi Noor Technologies, I need a custom website package."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex w-fit items-center gap-1.5 rounded-full border border-black/10 bg-white px-2.5 py-1.5 text-[10px] font-bold hover:border-[#079E9A]/40"
            >
              Custom package?
              <ArrowIcon />
            </a>
          </motion.div>

          <div className="grid grid-cols-1 items-stretch gap-2 sm:grid-cols-3">
            {packages.map((pkg, index) => (
              <motion.article
                key={pkg.name}
                initial={reduceMotion ? false : { opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.05 }}
                transition={{
                  duration: reduceMotion ? 0 : 0.25,
                  delay: reduceMotion ? 0 : index * 0.04,
                }}
                className={`flex min-w-0 flex-col overflow-hidden rounded-xl border bg-white ${
                  pkg.popular
                    ? "border-[#FF765D]/60 shadow-[0_4px_15px_rgba(255,118,93,0.09)]"
                    : "border-black/[0.08] shadow-sm"
                }`}
              >
                {pkg.popular && (
                  <div
                    className="px-2 py-1 text-center text-[9px] font-black uppercase tracking-wider text-white"
                    style={{ backgroundColor: pkg.color }}
                  >
                    ★ Most Popular
                  </div>
                )}

                <div
                  className="p-3 sm:p-3.5"
                  style={{ backgroundColor: pkg.tint }}
                >
                  <p
                    className="text-[10px] font-black uppercase tracking-wider"
                    style={{ color: pkg.color }}
                  >
                    {pkg.name} Package
                  </p>

                  <p className="mt-1 text-[10px] text-[#555B5D]">
                    {pkg.description}
                  </p>

                  <p className="mt-2 text-2xl font-black leading-none tracking-tight text-[#111111] [-webkit-text-stroke:0.25px_#111111]">
                    {pkg.price}
                  </p>

                  <p className="mt-1 text-[9px] text-[#666B70]">
                    Starting price
                  </p>
                </div>

                <div className="flex flex-1 flex-col p-3 sm:p-3.5">
                  <p className="mb-2 text-[9px] font-black uppercase tracking-wider text-[#707578]">
                    Included
                  </p>

                  <ul className="flex-1 space-y-1.5">
                    {pkg.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-1.5 text-[10px] leading-4 text-[#303538] sm:text-[11px]"
                      >
                        <CheckIcon color={pkg.color} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={whatsappLink(
                      `Hi Noor Technologies, I am interested in the ${pkg.name} Website Package at ${pkg.price}. Please share the details.`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group mt-3 flex min-h-8 items-center justify-between gap-2 rounded-lg px-2.5 py-2 text-[10px] font-black text-white"
                    style={{ backgroundColor: pkg.color }}
                  >
                    Choose {pkg.name}
                    <ArrowIcon />
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* ADDITIONAL SERVICES */}
        <motion.section {...reveal} className="mt-5 sm:mt-6">
          <div className="mb-2 flex items-end justify-between gap-2 border-b border-black/10 pb-2">
            <Heading
              eyebrow="Need something extra?"
              title="Additional Services"
            />

            <span className="pb-1 text-[9px] text-[#666B70]">
              Custom work
            </span>
          </div>

          <div className="grid grid-cols-1 gap-x-5 sm:grid-cols-2">
            {additionalServices.map(([name, price]) => (
              <div
                key={name}
                className="flex items-center justify-between gap-2 border-b border-black/[0.07] py-2"
              >
                <div className="flex min-w-0 items-center gap-2">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded bg-[#E7F8F6] text-[11px] font-black text-[#079E9A]">
                    +
                  </span>

                  <span className="text-[10px] font-medium leading-4 text-[#303538] sm:text-[11px]">
                    {name}
                  </span>
                </div>

                <span className="shrink-0 text-[9px] font-bold text-[#111111] sm:text-[10px]">
                  {price}
                </span>
              </div>
            ))}
          </div>
        </motion.section>

        {/* CTA */}
        <motion.div
          {...reveal}
          className="relative mt-5 overflow-hidden rounded-xl bg-[#102725] p-3.5 sm:mt-6 sm:p-4 lg:p-5"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-10 -top-12 h-36 w-36 rounded-full bg-[#079E9A]/20 blur-3xl"
          />

          <div className="relative flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="min-w-0">
              <p className="text-[9px] font-black uppercase tracking-wider text-[#80DCD5]">
                Let&apos;s build something great
              </p>

              <h3 className="mt-1.5 text-lg font-black leading-tight tracking-tight text-white [-webkit-text-stroke:0.2px_#ffffff] sm:text-xl lg:text-2xl">
                Have a project in mind?
                <br />
                <span className="text-[#80DCD5] [-webkit-text-stroke:0px]">
                  Let&apos;s make it happen.
                </span>
              </h3>

              <p className="mt-1.5 max-w-lg text-[10px] leading-4 text-white/70 sm:text-[11px]">
                Tell us your idea. We&apos;ll help you choose the right digital
                solution.
              </p>
            </div>

            <a
              href={whatsappLink(
                "Hi Noor Technologies, I would like to discuss a project."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex min-h-9 shrink-0 items-center justify-center gap-2 rounded-lg bg-[#FF765D] px-3.5 py-2.5 text-[11px] font-black text-white hover:bg-[#ff6245] sm:px-4"
            >
              Start a Project
              <ArrowIcon />
            </a>
          </div>
        </motion.div>

        {/* FOOTER */}
        <footer className="mt-3 flex flex-col gap-1 border-t border-black/[0.08] pt-2.5 text-[9px] text-[#555B5D] sm:flex-row sm:items-center sm:justify-between">
<span>© 2026 Noor Technologies</span>
          <a
            href="https://www.noortechnologies.in"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold hover:text-[#079E9A]"
          >
            www.noortechnologies.in
          </a>
        </footer>
      </div>
    </section>
  );
}
