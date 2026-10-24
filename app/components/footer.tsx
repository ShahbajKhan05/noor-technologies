
import Image from "next/image";

const navigation = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const contactLinks = [
  {
    label: "Email",
    href: "mailto:technoorpvt@gmail.com",
  },
  {
    label: "Website",
    href: "https://www.noortechnologies.in",
    external: true,
  },
  {
    label: "Call Us",
    href: "tel:+918349813831",
  },
];

export default function Footer() {
  return (
    <footer className="overflow-hidden bg-white text-[#111111]">
      <div className="mx-auto max-w-[1800px] px-5 pb-6 pt-10 sm:px-8 sm:pt-12 lg:px-14 lg:pt-14">
        {/* Contact and Navigation */}
        <div className="grid grid-cols-2 gap-x-5 gap-y-8 sm:gap-x-10 sm:gap-y-8 lg:grid-cols-[1fr_auto_auto] lg:gap-16">
          {/* Contact */}
          <div className="col-span-2 min-w-0 lg:col-span-1">
            <p className="text-[10px] font-medium uppercase tracking-[0.12em] text-[#777777]">
              Get in touch
            </p>

            <a
              href="mailto:technoorpvt@gmail.com"
              className="mt-2 block w-fit max-w-full break-words text-[clamp(1.2rem,4vw,2.4rem)] font-semibold leading-tight tracking-[-0.045em] text-[#283532] transition-colors duration-200 hover:text-[#079E9A]"
            >
              technoorpvt@gmail.com
            </a>

            <a
              href="tel:+918349813831"
              className="mt-2 inline-flex items-center gap-2 text-sm text-[#777777] transition-colors hover:text-[#079E9A]"
            >
              +91 83498 13831
              <span aria-hidden="true">↗</span>
            </a>

            <div className="mt-4 flex items-center gap-2">
              <span className="h-2 w-2 shrink-0 rounded-full bg-[#079E9A]" />

              <p className="text-[9px] font-medium uppercase tracking-[0.12em] text-[#777777] sm:text-[10px]">
                Technology that moves you forward
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.12em] text-[#777777]">
              Navigate
            </p>

            <nav
              aria-label="Footer navigation"
              className="flex flex-col items-start gap-2.5"
            >
              {navigation.map((item, index) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="group inline-flex items-center gap-1.5 text-[13px] text-[#283532] transition-colors duration-200 hover:text-[#079E9A] sm:text-sm"
                >
                  <span className="text-[9px] text-[#A1A1A1]">
                    0{index + 1}
                  </span>

                  {item.label}

                  <span
                    aria-hidden="true"
                    className="text-[10px] opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:opacity-100"
                  >
                    ↗
                  </span>
                </a>
              ))}
            </nav>
          </div>

          {/* Connect */}
          <div>
            <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.12em] text-[#777777]">
              Connect
            </p>

            <div className="flex flex-col items-start gap-2.5">
              {contactLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  className="group inline-flex items-center gap-1.5 text-[13px] text-[#283532] transition-colors duration-200 hover:text-[#079E9A] sm:text-sm"
                >
                  {item.label}

                  <span
                    aria-hidden="true"
                    className="text-[10px] transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  >
                    ↗
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Signature Logo */}
        <div className="relative mt-10 border-t border-[#E5E5E5] pt-6 sm:mt-12 sm:pt-8 lg:mt-14 lg:pt-10">
          <p className="mb-3 text-center text-[9px] font-medium uppercase tracking-[0.2em] text-[#A1A1A1]">
            Built with purpose. Designed for what&apos;s next.
          </p>

          <a
            href="#home"
            aria-label="Noor Technologies — Back to top"
            className="group mx-auto flex w-full items-start justify-center gap-1"
          >
            <Image
              src="/Noor Technologies Signature.png"
              alt="Noor Technologies"
              width={1200}
              height={400}
              sizes="(max-width: 640px) 94vw, (max-width: 1024px) 90vw, 1400px"
              className="h-auto w-full max-w-[1400px] object-contain transition-opacity duration-300 group-hover:opacity-65"
            />

            <sup className="shrink-0 pt-0.5 text-[10px] text-[#777777] sm:text-sm lg:text-xl">
              ®
            </sup>
          </a>

          {/* Tagline */}
          <div className="mt-4 flex flex-col items-center justify-between gap-2 sm:flex-row">
            <p className="text-center text-[10px] leading-5 text-[#777777] sm:text-left">
              Digital Solutions. Software. Technology Education.
            </p>

            <a
              href="#home"
              className="inline-flex items-center gap-1.5 text-[10px] font-medium text-[#176C66] transition-colors hover:text-[#079E9A]"
            >
              Back to top <span aria-hidden="true">↑</span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-2 bg-[#283532] px-5 py-4 text-white sm:px-8 lg:px-14">
        <div className="mx-auto flex max-w-[1800px] flex-col items-center justify-between gap-2 sm:flex-row">
          <p className="text-center text-[10px] leading-5 text-white/60 sm:text-left">
            © 2026 Noor Technologies. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <span className="text-[10px] text-white/50">
              Made for meaningful impact
            </span>

            <span
              aria-hidden="true"
              className="h-1 w-1 rounded-full bg-[#079E9A]"
            />

            <a
              href="https://www.noortechnologies.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] text-white/65 transition-colors hover:text-white"
            >
              Official Website ↗
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
