
"use client";

import { motion, useReducedMotion } from "framer-motion";

const services = [
  {
    number: "01",
    title: "Website Development",
    subtitle: "Responsive websites for your business",
    color: "#079E9A",
    tint: "#E5F7F5",
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
    subtitle: "Smart software solutions for your business",
    color: "#FF765D",
    tint: "#FFF0E8",
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
    subtitle: "Modern and attractive website designs",
    color: "#FB2C36",
    tint: "#FFF0F0",
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
    subtitle: "Keep your website updated and secure",
    color: "#078CBA",
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
    subtitle: "Improve your online presence",
    color: "#7C3AED",
    tint: "#F4EEFF",
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
    subtitle: "Learn practical skills and grow your career",
    color: "#16A34A",
    tint: "#EFF9E9",
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
    color: "#079E9A",
    tint: "#E5F7F5",
    description: "For individuals and small businesses",
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
    color: "#FF765D",
    tint: "#FFF0E8",
    description: "For growing businesses",
    features: [
      "Professional Website",
      "Up to 5 Pages",
      "Contact Form + WhatsApp",
      "Basic SEO Setup",
      "3 Months Support",
    ],
    popular: true,
  },
  {
    name: "Premium",
    price: "₹10,499",
    color: "#7C3AED",
    tint: "#F4EEFF",
    description: "For advanced business requirements",
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

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-4 w-4"
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

export default function Menu() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="menu"
      className="w-full overflow-hidden bg-white px-3 py-6 text-[#111111] sm:px-6 sm:py-9 lg:px-10 lg:py-12"
    >
      <div className="mx-auto max-w-[1400px]">
        {/* HEADER */}
        <motion.header
          initial={{
            opacity: 0,
            y: reduceMotion ? 0 : 12,
          }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: reduceMotion ? 0 : 0.4 }}
          className="flex items-end justify-between gap-3 border-b border-[#E5E5E5] pb-4 sm:pb-5"
        >
          <div className="min-w-0">
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#067F7C] sm:text-xs">
              NOOR TECHNOLOGIES / OUR SERVICES
            </p>

            <h2 className="mt-2 text-[clamp(1.8rem,5.5vw,3.8rem)] font-black leading-[1.05] tracking-[-0.065em] text-[#111111]">
              IT Services <span className="text-[#FF765D]">Menu.</span>
            </h2>

            <p className="mt-2 text-xs font-medium text-[#555555] sm:text-sm">
              Digital Solutions. Software. Technology Education.
            </p>
          </div>

          <div className="hidden shrink-0 border-l border-[#D1EAE7] pl-4 sm:block">
            <p className="text-xs font-semibold text-[#283532]">
              ✓ Quality Solutions
            </p>
            <p className="mt-2 text-xs font-semibold text-[#283532]">
              ✓ Affordable Pricing
            </p>
            <p className="mt-2 text-xs font-semibold text-[#283532]">
              ✓ Ongoing Support
            </p>
          </div>

          <span className="shrink-0 text-2xl font-black tracking-[-0.08em] text-[#079E9A] sm:hidden">
            06
          </span>
        </motion.header>

        {/* SERVICES */}
        <div className="mt-4 grid grid-cols-1 items-start gap-3 sm:mt-5 sm:grid-cols-2 sm:gap-4">
          {services.map((service, index) => (
            <motion.article
              key={service.number}
              initial={{
                opacity: 0,
                x: reduceMotion ? 0 : index % 2 === 0 ? -14 : 14,
              }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.08 }}
              transition={{
                duration: reduceMotion ? 0 : 0.4,
                ease: "easeOut",
              }}
              className="min-w-0 overflow-hidden rounded-xl border border-[#E5E5E5] bg-white shadow-[0_2px_8px_rgba(0,0,0,0.025)]"
            >
              {/* SERVICE TITLE */}
              <div
                className="flex items-center gap-2.5 px-3 py-3 sm:gap-3 sm:px-4"
                style={{ backgroundColor: service.tint }}
              >
                <div
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-sm font-black text-white sm:h-11 sm:w-11"
                  style={{ backgroundColor: service.color }}
                >
                  {service.number}
                </div>

                <div className="min-w-0 flex-1">
                  <h3 className="text-xs font-black uppercase leading-snug tracking-[-0.025em] text-[#111111] sm:text-sm">
                    {service.title}
                  </h3>

                  <p className="mt-1 text-[11px] font-medium leading-snug text-[#404040] sm:text-xs">
                    {service.subtitle}
                  </p>
                </div>
              </div>

              {/* PRICING TABLE */}
              <div className="px-3 sm:px-4">
                <table className="w-full table-fixed border-collapse">
                  <thead>
                    <tr className="border-b-2 border-[#E5E5E5]">
                      <th className="w-[70%] py-2.5 pr-2 text-left text-[10px] font-extrabold uppercase tracking-[0.08em] text-[#555555] sm:text-xs">
                        Service
                      </th>

                      <th className="w-[30%] py-2.5 text-right text-[10px] font-extrabold uppercase tracking-[0.08em] text-[#555555] sm:text-xs">
                        Price
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {service.items.map(([name, price]) => (
                      <tr
                        key={name}
                        className="border-b border-[#EEEEEE] last:border-0"
                      >
                        <td className="py-2.5 pr-2 text-left align-middle text-xs font-medium leading-snug text-[#262626] sm:py-3 sm:text-sm">
                          {name}
                        </td>

                        <td className="whitespace-nowrap py-2.5 text-right align-middle text-xs font-extrabold leading-snug text-[#111111] sm:py-3 sm:text-sm">
                          {price}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* ENQUIRY */}
              <a
                href={`https://wa.me/918349813831?text=${encodeURIComponent(
                  `Hi Noor Technologies, I would like to enquire about ${service.title}. Please share the details.`,
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-10 items-center justify-between border-t border-[#E5E5E5] px-3 py-2.5 text-xs font-bold text-[#067F7C] transition-colors hover:bg-[#F2FAF9] sm:px-4 sm:text-sm"
              >
                Enquire about this service
                <ArrowIcon />
              </a>
            </motion.article>
          ))}
        </div>

        {/* PACKAGES */}
        <section className="mt-7 sm:mt-10">
          <div className="mb-3 flex items-end justify-between gap-3 border-b border-[#E5E5E5] pb-3 sm:mb-4">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#067F7C] sm:text-xs">
                Simple plans. Clear pricing.
              </p>

              <h3 className="mt-1 text-2xl font-black tracking-[-0.055em] text-[#111111] sm:text-3xl">
                Website Packages<span className="text-[#FF765D]">.</span>
              </h3>
            </div>

            <span className="pb-1 text-[10px] font-medium text-[#555555] sm:text-xs">
              3 plans
            </span>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
            {packages.map((pkg, index) => (
              <motion.article
                key={pkg.name}
                initial={{
                  opacity: 0,
                  y: reduceMotion ? 0 : 12,
                }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{
                  duration: reduceMotion ? 0 : 0.35,
                  delay: reduceMotion ? 0 : index * 0.06,
                }}
                className={`relative min-w-0 overflow-hidden rounded-xl border bg-white ${
                  pkg.popular
                    ? "border-[#FF765D] shadow-[0_4px_18px_rgba(255,118,93,0.10)]"
                    : "border-[#E5E5E5]"
                }`}
              >
                {pkg.popular && (
                  <div
                    className="px-3 py-1.5 text-center text-[10px] font-black uppercase tracking-[0.12em] text-white sm:text-xs"
                    style={{ backgroundColor: pkg.color }}
                  >
                    ★ Most Popular
                  </div>
                )}

                <div
                  className="p-3.5 sm:p-4"
                  style={{ backgroundColor: pkg.tint }}
                >
                  <p
                    className="text-sm font-black uppercase tracking-[-0.02em] sm:text-base"
                    style={{ color: pkg.color }}
                  >
                    {pkg.name} Package
                  </p>

                  <p className="mt-1 text-xs font-medium text-[#404040] sm:text-sm">
                    {pkg.description}
                  </p>

                  <div className="mt-3 flex items-baseline gap-1.5">
                    <span className="text-3xl font-black tracking-[-0.06em] text-[#111111] sm:text-4xl">
                      {pkg.price}
                    </span>
                    <span className="text-[10px] font-medium text-[#555555] sm:text-xs">
                      starting price
                    </span>
                  </div>
                </div>

                <div className="p-3.5 sm:p-4">
                  <p className="mb-2.5 text-[10px] font-extrabold uppercase tracking-[0.12em] text-[#555555] sm:text-xs">
                    What&apos;s included
                  </p>

                  <ul className="space-y-2.5">
                    {pkg.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-xs font-medium leading-snug text-[#262626] sm:text-sm"
                      >
                        <span
                          className="mt-0.5 font-black"
                          style={{ color: pkg.color }}
                        >
                          ✓
                        </span>

                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={`https://wa.me/918349813831?text=${encodeURIComponent(
                      `Hi Noor Technologies, I am interested in the ${pkg.name} Website Package at ${pkg.price}. Please share the details.`,
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 flex min-h-10 items-center justify-between gap-2 rounded-md px-3 py-2.5 text-xs font-extrabold text-white transition-opacity hover:opacity-90 sm:text-sm"
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

        {/* ADDITIONAL SERVICES TABLE */}
        <section className="mt-7 sm:mt-10">
          <div className="mb-2 flex items-end justify-between gap-3 border-b border-[#E5E5E5] pb-3">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#067F7C] sm:text-xs">
                Extra requirements
              </p>

              <h3 className="mt-1 text-xl font-black tracking-[-0.045em] sm:text-2xl">
                Additional Services<span className="text-[#FF765D]">.</span>
              </h3>
            </div>

            <span className="pb-1 text-[10px] font-medium text-[#555555] sm:text-xs">
              Charged separately
            </span>
          </div>

          <table className="w-full table-fixed border-collapse">
            <thead>
              <tr className="border-b-2 border-[#E5E5E5]">
                <th className="w-[68%] py-2.5 pr-2 text-left text-[10px] font-extrabold uppercase tracking-[0.08em] text-[#555555] sm:text-xs">
                  Service
                </th>

                <th className="w-[32%] py-2.5 text-right text-[10px] font-extrabold uppercase tracking-[0.08em] text-[#555555] sm:text-xs">
                  Pricing
                </th>
              </tr>
            </thead>

            <tbody>
              {additionalServices.map(([name, price]) => (
                <tr
                  key={name}
                  className="border-b border-[#E5E5E5] last:border-0"
                >
                  <td className="py-3 pr-2 text-xs font-medium leading-snug text-[#262626] sm:py-3.5 sm:text-sm">
                    {name}
                  </td>

                  <td className="py-3 text-right text-[11px] font-bold leading-snug text-[#404040] sm:py-3.5 sm:text-xs">
                    {price}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* CONTACT BANNER */}
        <div className="mt-5 flex flex-col gap-3 bg-[#283532] p-4 sm:mt-7 sm:flex-row sm:items-center sm:justify-between sm:px-5 sm:py-4">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#80DCD5] sm:text-xs">
              Let&apos;s work together
            </p>

            <h3 className="mt-1 text-lg font-black leading-tight tracking-[-0.04em] text-white sm:text-2xl">
              Have a project in mind?
            </h3>

            <p className="mt-1 text-xs font-medium text-white/80 sm:text-sm">
              Tell us what you need. We&apos;ll help you find the right solution.
            </p>
          </div>

          <a
            href="https://wa.me/918349813831"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 bg-[#FF765D] px-4 py-3 text-xs font-extrabold text-white transition-colors hover:bg-[#FB2C36] sm:text-sm"
          >
            Get a Free Quote
            <ArrowIcon />
          </a>
        </div>

        {/* FOOTNOTE */}
        <div className="mt-3 flex flex-wrap items-center justify-between gap-2 text-[10px] font-medium text-[#555555] sm:text-xs">
          <span>© 2026 Noor Technologies</span>

          <a
            href="https://www.noortechnologies.in"
            target="_blank"
            rel="noopener noreferrer"
            className="break-all transition-colors hover:text-[#067F7C]"
          >
            www.noortechnologies.in
          </a>
        </div>
      </div>
    </section>
  );
}
