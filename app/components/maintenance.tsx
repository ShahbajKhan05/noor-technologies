"use client";

import { motion, useReducedMotion } from "framer-motion";

const plans = [
  {
    number: "01",
    name: "Basic Care",
    price: "₹786",
    description: "Essential maintenance for a smooth-running website.",
    category: "ESSENTIAL",
    features: [
      "Website uptime monitoring",
      "Basic security checks",
      "Minor content updates — 30 min/month",
      "Contact form testing",
      "Basic technical support",
      "Monthly maintenance report",
    ],
    color: "#079E9A",
  },
  {
    number: "02",
    name: "Standard Care",
    price: "₹1,786",
    description: "Complete support for growing businesses.",
    category: "MOST POPULAR",
    features: [
      "Everything in Basic Care",
      "Content updates — 2 hours/month",
      "Plugin and software updates",
      "Monthly website backup",
      "Performance optimization",
      "Priority support",
      "Monthly maintenance report",
    ],
    color: "#FF765D",
  },
  {
    number: "03",
    name: "Premium Care",
    price: "₹2,786",
    description: "Advanced care for business-critical websites.",
    category: "ADVANCED",
    features: [
      "Everything in Standard Care",
      "Content updates — 4 hours/month",
      "Advanced security monitoring",
      "Speed optimization",
      "Database backup, if applicable",
      "Error fixing and troubleshooting",
      "Priority support",
      "Monthly performance review",
    ],
    color: "#176C66",
  },
];

const extras = [
  { name: "Major Design Changes", price: "Custom quote" },
  { name: "New Page Development", price: "Custom quote" },
  { name: "New Features & Functionality", price: "Custom quote" },
  { name: "E-commerce Updates", price: "Custom quote" },
  { name: "Domain & Hosting Assistance", price: "As required" },
  { name: "Emergency Support", price: "Custom quote" },
  { name: "Custom Development", price: "Custom quote" },
];

export default function Maintenance() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="maintenance"
      className="w-full bg-white px-4 py-10 text-[#111111] sm:px-7 sm:py-14 lg:px-12 lg:py-20"
    >
      <div className="mx-auto w-full max-w-[1400px]">
        {/* SECTION HEADING */}
        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: reduceMotion ? 0 : 0.5 }}
          className="flex flex-col justify-between gap-3 border-b border-[#E5E5E5] pb-5 sm:flex-row sm:items-end sm:pb-7"
        >
          <div>
            <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.24em] text-[#079E9A] sm:text-xs">
              Website Care / Pricing
            </p>

            <h2 className="text-[clamp(2.15rem,5.5vw,5rem)] font-semibold leading-[0.98] tracking-[-0.07em]">
              Maintenance
              <span className="text-[#FF765D]">.</span>
            </h2>

            <p className="mt-3 text-[13px] text-[#777777] sm:text-base">
              Reliable support. Predictable pricing.
            </p>
          </div>

          <p className="text-[10px] uppercase tracking-[0.12em] text-[#777777] sm:pb-1 sm:text-xs">
            NOOR TECHNOLOGIES / 03 PLANS
          </p>
        </motion.div>

        {/* PRICING PLANS */}
        <div className="mt-5 sm:mt-8">
          {plans.map((plan, index) => (
            <motion.article
              key={plan.name}
              initial={{
                opacity: 0,
                x: reduceMotion ? 0 : index % 2 === 0 ? -18 : 18,
              }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{
                duration: reduceMotion ? 0 : 0.45,
                ease: "easeOut",
              }}
              className="group grid grid-cols-[28px_minmax(0,1fr)] gap-x-3 border-b border-[#E5E5E5] py-5 sm:grid-cols-[44px_minmax(0,1fr)_150px] sm:gap-x-5 sm:py-7 lg:grid-cols-[55px_minmax(0,1fr)_180px_150px]"
            >
              {/* NUMBER */}
              <span className="pt-1 text-[11px] text-[#777777] sm:text-sm">
                {plan.number}
              </span>

              {/* PLAN DETAILS */}
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <h3
                    className="text-[clamp(1.4rem,3.5vw,3rem)] font-medium leading-[1.08] tracking-[-0.055em] transition-colors duration-200"
                    style={
                      {
                        "--plan-color": plan.color,
                      } as React.CSSProperties
                    }
                  >
                    <span className="transition-colors duration-200 group-hover:text-[var(--plan-color)]">
                      {plan.name}
                    </span>
                  </h3>

                  {index === 1 && (
                    <span className="rounded-sm bg-[#FCE2D9] px-2 py-1 text-[8px] font-bold uppercase tracking-[0.1em] text-[#9A4936] sm:text-[9px]">
                      Popular
                    </span>
                  )}
                </div>

                <p className="mt-1.5 text-[11px] leading-5 text-[#777777] sm:mt-2 sm:text-sm">
                  {plan.description}
                </p>

                {/* MOBILE PRICE */}
                <div className="mt-3 flex flex-wrap items-baseline gap-x-2 gap-y-1 sm:hidden">
                  <span className="text-2xl font-semibold tracking-[-0.06em]">
                    {plan.price}
                  </span>
                  <span className="text-[10px] text-[#777777]">/ month</span>
                </div>

                {/* FEATURES */}
                <details className="mt-3 max-w-2xl">
                  <summary className="flex w-fit cursor-pointer list-none items-center gap-2 py-1 text-[10px] font-semibold text-[#067F7C] [&::-webkit-details-marker]:hidden">
                    View included services
                    <span className="text-sm transition-transform group-open:rotate-45">
                      +
                    </span>
                  </summary>

                  <ul
                    className="mt-2 grid gap-x-5 gap-y-2 border-l-2 pl-3 sm:grid-cols-2 sm:pl-4"
                    style={{ borderColor: plan.color }}
                  >
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className="text-[11px] leading-5 text-[#555555] sm:text-xs"
                      >
                        {feature}
                      </li>
                    ))}
                  </ul>
                </details>
              </div>

              {/* DESKTOP PRICE */}
              <div className="hidden self-center sm:block">
                <p className="text-2xl font-semibold tracking-[-0.06em] lg:text-3xl">
                  {plan.price}
                </p>
                <p className="mt-1 text-[10px] text-[#777777]">Per month</p>
              </div>

              {/* CTA */}
              <div className="col-start-2 mt-4 sm:col-start-auto sm:mt-0 sm:self-center">
                <a
                  href={`https://wa.me/918349813831?text=${encodeURIComponent(
                    `Hi Noor Technologies, I am interested in the ${plan.name} website maintenance plan at ${plan.price}/month. Please share the details.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-10 w-full items-center justify-between gap-3 border border-[#E5E5E5] px-3 py-2.5 text-[11px] font-semibold transition-all duration-200 hover:border-[#079E9A] hover:bg-[#D1EAE7] sm:w-auto sm:min-w-[125px] sm:px-3.5"
                >
                  Enquire now
                  <span
                    className="flex h-6 w-6 items-center justify-center text-white"
                    style={{ backgroundColor: plan.color }}
                  >
                    ↗
                  </span>
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        {/* ADDITIONAL SERVICES */}
        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: reduceMotion ? 0 : 0.4 }}
          className="mt-8 sm:mt-12"
        >
          <div className="flex items-end justify-between gap-3 border-b border-[#E5E5E5] pb-3">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#079E9A]">
                Beyond the plans
              </p>

              <h3 className="mt-1 text-2xl font-semibold tracking-[-0.055em] sm:text-3xl">
                Additional services
                <span className="text-[#FF765D]">.</span>
              </h3>
            </div>

            <span className="pb-1 text-[9px] text-[#777777] sm:text-xs">
              Priced separately
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {extras.map((item, index) => (
              <div
                key={item.name}
                className={`flex items-center justify-between gap-3 border-b border-[#E5E5E5] py-3 ${
                  index % 3 !== 2 ? "lg:pr-5" : ""
                } sm:even:pl-4 lg:even:pl-0`}
              >
                <span className="text-[11px] leading-5 text-[#404040] sm:text-xs">
                  {item.name}
                </span>

                <span className="shrink-0 text-[9px] text-[#777777] sm:text-[10px]">
                  {item.price}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* BOTTOM CTA */}
        <div className="mt-7 flex flex-col gap-4 border-t border-[#E5E5E5] pt-5 sm:mt-10 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#079E9A]">
              Have a specific requirement?
            </p>

            <h3 className="mt-1 text-xl font-semibold tracking-[-0.05em] sm:text-2xl">
              Let&apos;s find the right plan.
            </h3>
          </div>

          <div className="flex flex-wrap gap-2">
            <a
              href="https://wa.me/918349813831"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-10 flex-1 items-center justify-center gap-2 bg-[#079E9A] px-4 py-2.5 text-[11px] font-semibold text-white transition-colors hover:bg-[#067F7C] sm:flex-none"
            >
              WhatsApp us ↗
            </a>

            <a
              href="mailto:technoorpvt@gmail.com?subject=Website%20Maintenance%20Enquiry"
              className="inline-flex min-h-10 flex-1 items-center justify-center border border-[#E5E5E5] px-4 py-2.5 text-[11px] font-semibold text-[#283532] transition-colors hover:border-[#079E9A] sm:flex-none"
            >
              Email us
            </a>
          </div>
        </div>

        {/* FOOTER NOTE */}
        <div className="mt-5 flex flex-wrap justify-between gap-2 text-[9px] text-[#777777]">
          <span>NOOR TECHNOLOGIES © 2026</span>

          <a
            href="https://www.noortechnologies.in"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-[#079E9A]"
          >
            www.noortechnologies.in
          </a>
        </div>
      </div>
    </section>
  );
}