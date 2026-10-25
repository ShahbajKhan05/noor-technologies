"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  FiArrowRight,
  FiCheck,
  FiMail,
  FiPhone,
  FiMessageCircle,
} from "react-icons/fi";
import SectionLabel from "./section-label";

const inputClass =
  "w-full rounded-lg border border-[#E5E7EB] bg-white px-3 py-2.5 text-sm text-[#171717] outline-none transition placeholder:text-[#A0A0A0] focus:border-[#079E9A] focus:ring-2 focus:ring-[#079E9A]/10";

const labelClass = "mb-1.5 block text-xs font-medium text-[#404040]";

const benefits = [
  "Personalized project consultation",
  "Solutions tailored to your needs",
  "Clear guidance on next steps",
];

export default function Contact() {
  const reduceMotion = useReducedMotion();

  const reveal = {
    initial: { opacity: 0, y: reduceMotion ? 0 : 12 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.15 },
    transition: { duration: reduceMotion ? 0 : 0.4 },
  };

  return (
    <section
      id="contact"
      className="bg-[#F8FAF9] px-4 py-10 text-[#171717] sm:px-6 sm:py-14 lg:px-8 lg:py-16"
    >
      <div className="mx-auto max-w-5xl">
        {/* Compact Header */}
        <motion.div {...reveal} className="mb-7 text-center sm:mb-9">
          <SectionLabel>LET&apos;S CONNECT</SectionLabel>

          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Let&apos;s build something{" "}
            <span className="text-[#079E9A]">great.</span>
          </h2>

          <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-[#737373]">
            Tell us your idea. We&apos;ll help you turn it into reality.
          </p>
        </motion.div>

        {/* Contact Layout */}
        <div className="grid gap-5 lg:grid-cols-[0.75fr_1.25fr]">
          {/* Contact Info */}
          <motion.aside
            {...reveal}
            transition={{
              duration: reduceMotion ? 0 : 0.4,
              delay: 0.05,
            }}
            className="rounded-2xl bg-[#111D1D] p-5 text-white sm:p-6"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#079E9A] text-white">
                <FiMessageCircle size={19} />
              </span>

              <div>
                <h3 className="text-lg font-semibold">Get in touch</h3>
                <p className="text-xs text-white/60">
                  We&apos;re ready to help.
                </p>
              </div>
            </div>

            <div className="mt-5 space-y-2.5">
              <a
                href="mailto:technoorpvt@gmail.com"
                className="flex min-w-0 items-center gap-3 rounded-xl border border-white/10 bg-white/[0.05] p-3 transition hover:border-[#079E9A]/70 hover:bg-white/[0.08]"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#079E9A]/15 text-[#53D8CF]">
                  <FiMail size={17} />
                </span>

                <span className="min-w-0">
                  <span className="block text-[10px] uppercase tracking-wider text-white/50">
                    Email us
                  </span>
                  <span className="mt-0.5 block break-all text-xs font-medium sm:text-sm">
                    technoorpvt@gmail.com
                  </span>
                </span>
              </a>

              <a
                href="tel:+918349813831"
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.05] p-3 transition hover:border-[#079E9A]/70 hover:bg-white/[0.08]"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#FF765D]/15 text-[#FF9A86]">
                  <FiPhone size={17} />
                </span>

                <span>
                  <span className="block text-[10px] uppercase tracking-wider text-white/50">
                    Call us
                  </span>
                  <span className="mt-0.5 block text-sm font-medium">
                    +91 83498 13831
                  </span>
                </span>
              </a>
            </div>

            <div className="mt-5 border-t border-white/10 pt-4">
              <p className="mb-3 text-xs font-semibold text-white/80">
                What you can expect
              </p>

              <div className="space-y-2.5">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-start gap-2">
                    <FiCheck
                      className="mt-0.5 shrink-0 text-[#53D8CF]"
                      size={15}
                    />
                    <p className="text-xs leading-5 text-white/65">
                      {benefit}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-5 rounded-xl bg-[#079E9A]/15 px-3.5 py-3">
              <p className="text-xs leading-5 text-[#B6F3EE]">
                Have an idea? Let&apos;s discuss the right solution for your
                business.
              </p>
            </div>
          </motion.aside>

          {/* Compact Form */}
          <motion.div
            {...reveal}
            transition={{
              duration: reduceMotion ? 0 : 0.4,
              delay: 0.1,
            }}
            className="rounded-2xl border border-[#E8ECE9] bg-white p-5 shadow-[0_4px_24px_rgba(0,0,0,0.025)] sm:p-6"
          >
            <div className="mb-5">
              <h3 className="text-lg font-bold tracking-tight">
                Tell us about your project
              </h3>
              <p className="mt-1 text-xs text-[#777777] sm:text-sm">
                Fill in the details and we&apos;ll get back to you.
              </p>
            </div>

            <form
              action="https://formsubmit.co/technoorpvt@gmail.com"
              method="POST"
              className="space-y-3.5"
            >
              <input
                type="hidden"
                name="_subject"
                value="New Project Inquiry - Noor Technologies"
              />

              <input type="hidden" name="_captcha" value="true" />
              <input type="hidden" name="_template" value="table" />

              {/* Name and Company */}
              <div className="grid gap-3 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className={labelClass}>
                    Full name <span className="text-[#FF765D]">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Your full name"
                    required
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="company" className={labelClass}>
                    Company
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    autoComplete="organization"
                    placeholder="Company name"
                    className={inputClass}
                  />
                </div>
              </div>

              {/* Email and Phone */}
              <div className="grid gap-3 sm:grid-cols-2">
                <div>
                  <label htmlFor="email" className={labelClass}>
                    Email address <span className="text-[#FF765D]">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    required
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="phone" className={labelClass}>
                    Phone number <span className="text-[#FF765D]">*</span>
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    placeholder="+91 98765 43210"
                    required
                    className={inputClass}
                  />
                </div>
              </div>

              {/* Service and Budget */}
              <div className="grid gap-3 sm:grid-cols-2">
                <div>
                  <label htmlFor="service" className={labelClass}>
                    Service required <span className="text-[#FF765D]">*</span>
                  </label>
                  <select
                    id="service"
                    name="service"
                    defaultValue=""
                    required
                    className={`${inputClass} cursor-pointer`}
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    <option value="Website Development">
                      Website Development
                    </option>
                    <option value="Custom Software">
                      Custom Software Development
                    </option>
                    <option value="UI/UX Design">UI/UX Design</option>
                    <option value="E-commerce Website">
                      E-commerce Website
                    </option>
                    <option value="Business Automation">
                      Business Automation
                    </option>
                    <option value="Digital Solutions">
                      Digital Solutions
                    </option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="budget" className={labelClass}>
                    Estimated budget
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    defaultValue=""
                    className={`${inputClass} cursor-pointer`}
                  >
                    <option value="" disabled>
                      Select your budget
                    </option>
                    <option value="Below ₹25,000">Below ₹25,000</option>
                    <option value="₹25,000–₹50,000">
                      ₹25,000–₹50,000
                    </option>
                    <option value="₹50,000–₹1,00,000">
                      ₹50,000–₹1,00,000
                    </option>
                    <option value="Above ₹1,00,000">
                      Above ₹1,00,000
                    </option>
                    <option value="Not decided yet">Not decided yet</option>
                  </select>
                </div>
              </div>

              {/* Project Details */}
              <div>
                <label htmlFor="message" className={labelClass}>
                  Project details <span className="text-[#FF765D]">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  placeholder="Briefly describe your project..."
                  required
                  className={`${inputClass} min-h-20 resize-y`}
                />
              </div>

              {/* Submit */}
              <motion.button
                type="submit"
                whileHover={reduceMotion ? undefined : { y: -2 }}
                whileTap={reduceMotion ? undefined : { scale: 0.99 }}
                className="group flex w-full items-center justify-between rounded-lg bg-[#079E9A] px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#067F7B] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#079E9A]"
              >
                <span>Send Project Inquiry</span>
                <FiArrowRight
                  size={18}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </motion.button>

              <p className="text-[10px] leading-4 text-[#888888]">
                By submitting, you agree that Noor Technologies may contact
                you about your inquiry.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}