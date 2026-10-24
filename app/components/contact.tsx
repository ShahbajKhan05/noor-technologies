import SectionLabel from "./section-label";

const benefits = [
  "Personalized consultation for your business",
  "Solutions tailored to your requirements",
  "Clear guidance on the next steps",
];

const inputClass =
  "mt-2 w-full rounded-lg border border-[#E5E5E5] bg-white px-3 py-3 text-sm text-[#171717] outline-none transition placeholder:text-[#737373] hover:border-[#BDBDBD] focus:border-[#171717] focus:ring-1 focus:ring-[#171717]";

const labelClass = "block text-sm font-medium text-[#171717]";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-white px-5 py-20 text-[#171717] sm:px-8 sm:py-28 lg:px-10 lg:py-32"
    >
      <div className="mx-auto grid max-w-7xl items-start gap-14 lg:grid-cols-[1.25fr_0.85fr] lg:gap-24">
        <div className="lg:sticky lg:top-28">
          <SectionLabel>LET&apos;S CONNECT</SectionLabel>

          <h2 className="mt-5 max-w-2xl text-4xl font-semibold leading-[1.12] tracking-tight sm:text-5xl lg:text-6xl">
            Let&apos;s talk about your next big idea.
          </h2>

          <p className="mt-5 max-w-xl text-base leading-7 text-[#666666] sm:text-lg sm:leading-8">
            Tell us what you&apos;re building. We&apos;ll help you explore the
            right technology, plan your project, and take the next step with
            confidence.
          </p>

          <div className="mt-9 flex items-center gap-3">
            <div className="flex -space-x-2">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-[#E5E7EB] text-sm font-semibold text-[#404040]">
                N
              </span>
              <span className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-[#D1EAE7] text-sm font-semibold text-[#176C66]">
                T
              </span>
              <span className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-[#FCE2D9] text-sm font-semibold text-[#9A4936]">
                +
              </span>
            </div>

            <p className="text-xs leading-5 text-[#737373]">
              A dedicated approach to your project
            </p>
          </div>

          <div className="mt-8">
            <h3 className="text-sm font-semibold">What you can expect:</h3>

            <ul className="mt-4 space-y-3">
              {benefits.map((benefit) => (
                <li
                  key={benefit}
                  className="flex items-start gap-3 text-sm leading-6 text-[#525252]"
                >
                  <span className="mt-0.5 text-lg leading-5 text-[#079E9A]">
                    ✓
                  </span>
                  {benefit}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-12 grid gap-5 border-t border-[#EAEAEA] pt-6 sm:grid-cols-2">
            <div>
              <p className="text-xs text-[#737373]">Email us</p>
              <a
                href="mailto:technoorpvt@gmail.com"
                className="mt-2 inline-block break-all text-sm font-medium transition hover:text-[#079E9A]"
              >
                technoorpvt@gmail.com
              </a>
            </div>

            <div>
              <p className="text-xs text-[#737373]">Call us</p>
              <a
                href="tel:+918349813831"
                className="mt-2 inline-block text-sm font-medium transition hover:text-[#079E9A]"
              >
                +91 83498 13831
              </a>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-[#E5E5E5] bg-white p-5 shadow-[0_2px_8px_rgba(0,0,0,0.025)] sm:p-8">
          <div className="mb-7">
            <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">
              Tell us about your project
            </h3>

            <p className="mt-2 text-sm leading-6 text-[#737373]">
              Share a few details and we&apos;ll get back to you.
            </p>
          </div>

          <form
            action="https://formsubmit.co/technoorpvt@gmail.com"
            method="POST"
            className="space-y-5"
          >
            <input
              type="hidden"
              name="_subject"
              value="New Project Inquiry - Noor Technologies"
            />

            <input
              type="hidden"
              name="_captcha"
              value="true"
            />

            <input
              type="hidden"
              name="_template"
              value="table"
            />

            <div>
              <label htmlFor="name" className={labelClass}>
                Full name <span className="text-red-500">*</span>
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
                placeholder="Your company name"
                className={inputClass}
              />
            </div>

            <div>
              <label htmlFor="phone" className={labelClass}>
                Phone number <span className="text-red-500">*</span>
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

            <div>
              <label htmlFor="email" className={labelClass}>
                Email address <span className="text-red-500">*</span>
              </label>

              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="you@company.com"
                required
                className={inputClass}
              />
            </div>

            <div>
              <label htmlFor="service" className={labelClass}>
                What do you need?
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
                <option value="₹25,000–₹50,000">₹25,000–₹50,000</option>
                <option value="₹50,000–₹1,00,000">₹50,000–₹1,00,000</option>
                <option value="Above ₹1,00,000">Above ₹1,00,000</option>
                <option value="Not decided yet">Not decided yet</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className={labelClass}>
                Tell us about your project
                <span className="text-red-500"> *</span>
              </label>

              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="What are you looking to build?"
                required
                className={`${inputClass} resize-y`}
              />
            </div>

            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#171717] px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-[#079E9A] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#079E9A]"
            >
              Send Project Inquiry
              <span aria-hidden="true">↗</span>
            </button>

            <p className="text-xs leading-5 text-[#737373]">
              By submitting this form, you agree that Noor Technologies may
              contact you about your inquiry.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}