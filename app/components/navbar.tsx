"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
} from "react";
import Brand from "./brand";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
    { name: "Pricing", href: "/pricing" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const COLORS = {
  coral: "#FF765D",
  red: "#FB2C36",
  teal: "#079E9A",
  tealDark: "#067F7C",
  peach: "#FCE2D9",
  greenDark: "#176C66",
  brown: "#9A4936",
  mint: "#D1EAE7",
  charcoal: "#283532",
  gray: "#777777",
  grayDark: "#555555",
  grayLight: "#E5E5E5",
  grayMedium: "#404040",
  blackSoft: "#262626",
  grayMuted: "#A1A1A1",
  black: "#111111",
  white: "#FFFFFF",
};

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");

  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  const closeMenu = useCallback((restoreFocus = false) => {
    setMenuOpen(false);

    if (restoreFocus) {
      requestAnimationFrame(() => {
        menuButtonRef.current?.focus();
      });
    }
  }, []);

  // Update navbar appearance and active section while scrolling.
  useEffect(() => {
    let scrollFrame = 0;

    const updateScroll = () => {
      cancelAnimationFrame(scrollFrame);

      scrollFrame = requestAnimationFrame(() => {
        setScrolled(window.scrollY > 12);

        let current = "#home";
        const sectionOffset = 150;

        for (const link of navLinks) {
          const section = document.querySelector(link.href);

          if (
            section &&
            section.getBoundingClientRect().top <= sectionOffset
          ) {
            current = link.href;
          }
        }

        const isAtBottom =
          window.innerHeight + window.scrollY >=
          document.documentElement.scrollHeight - 4;

        if (isAtBottom) {
          current = "#contact";
        }

        setActiveLink(current);
      });
    };

    updateScroll();

    window.addEventListener("scroll", updateScroll, { passive: true });
    window.addEventListener("resize", updateScroll);

    return () => {
      cancelAnimationFrame(scrollFrame);
      window.removeEventListener("scroll", updateScroll);
      window.removeEventListener("resize", updateScroll);
    };
  }, []);

  // Close the mobile menu with Escape.
  useEffect(() => {
    if (!menuOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenu(true);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [menuOpen, closeMenu]);

  // Focus the first link when the mobile menu opens.
  useEffect(() => {
    if (!menuOpen) return;

    const frame = requestAnimationFrame(() => {
      firstLinkRef.current?.focus();
    });

    return () => cancelAnimationFrame(frame);
  }, [menuOpen]);

  // Prevent background scrolling while the mobile menu is open.
  useEffect(() => {
    if (!menuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [menuOpen]);

  // Close the mobile menu when switching to desktop width.
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleNavigation = (href: string) => {
    setActiveLink(href);
    closeMenu();
  };

  const headerStyle = {
    "--nav-teal": COLORS.teal,
    "--nav-teal-dark": COLORS.tealDark,
    "--nav-charcoal": COLORS.charcoal,
    "--nav-white": COLORS.white,
  } as CSSProperties;

  return (
    <header
      style={headerStyle}
      className={`sticky top-0 z-50 w-full border-b transition-[background-color,border-color,box-shadow] duration-300 ${
        scrolled
          ? "border-[#E5E5E5] bg-white/95 shadow-[0_8px_30px_rgba(17,17,17,0.06)] backdrop-blur-xl"
          : "border-black/[0.05] bg-white"
      }`}
    >
      <nav
        aria-label="Main navigation"
        className="mx-auto flex min-h-[68px] max-w-[1600px] items-center justify-between gap-3 px-4 sm:min-h-[76px] sm:gap-5 sm:px-7 lg:min-h-[84px] lg:px-12 xl:px-16"
      >
        {/* Navbar logo: uses your existing Brand component */}
        <a
          href="#home"
          aria-label="Noor Technologies home"
          onClick={() => handleNavigation("#home")}
          className="group flex min-w-0 shrink-0 items-center rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-[#079E9A] focus-visible:ring-offset-4"
        >
          <span className="block w-[132px] transition-transform duration-300 group-hover:scale-[1.02] sm:w-[158px] lg:w-[178px]">
            <Brand />
          </span>
        </a>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-1 md:flex lg:gap-2">
          {navLinks.map((link) => {
            const isActive = activeLink === link.href;

            return (
              <a
                key={link.href}
                href={link.href}
                onClick={() => handleNavigation(link.href)}
                aria-current={isActive ? "location" : undefined}
                className={`group relative rounded-full px-3 py-3 text-[13px] font-medium outline-none transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-[#079E9A] lg:px-4 lg:text-sm ${
                  isActive
                    ? "text-[#067F7C]"
                    : "text-[#555555] hover:text-[#067F7C]"
                }`}
              >
                {link.label}

                <span
                  aria-hidden="true"
                  className={`absolute bottom-[5px] left-1/2 h-[2px] -translate-x-1/2 rounded-full bg-[#079E9A] transition-[width,opacity] duration-300 ${
                    isActive
                      ? "w-4 opacity-100"
                      : "w-0 opacity-0 group-hover:w-4 group-hover:opacity-100"
                  }`}
                />
              </a>
            );
          })}
        </div>

        {/* Desktop call-to-action */}
        <a
          href="#contact"
          onClick={() => handleNavigation("#contact")}
          className="group hidden min-h-11 shrink-0 items-center justify-center gap-2 rounded-full bg-[#079E9A] px-5 py-3 text-sm font-semibold text-white shadow-[0_4px_14px_rgba(7,158,154,0.12)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#067F7C] hover:shadow-[0_8px_22px_rgba(7,158,154,0.22)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#079E9A] focus-visible:ring-offset-4 md:inline-flex lg:px-6"
        >
          Let&apos;s Talk

          <span
            aria-hidden="true"
            className="inline-block transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          >
            ↗
          </span>
        </a>

        {/* Mobile menu button */}
        <button
          ref={menuButtonRef}
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#E5E5E5] bg-white text-[#283532] transition-all duration-200 hover:border-[#079E9A]/50 hover:bg-[#D1EAE7]/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#079E9A] md:hidden"
        >
          <span className="relative flex h-4 w-5 items-center justify-center">
            <span
              className={`absolute h-[1.5px] w-5 rounded-full bg-current transition-transform duration-300 ${
                menuOpen ? "rotate-45" : "-translate-y-[5px]"
              }`}
            />

            <span
              className={`absolute h-[1.5px] w-5 rounded-full bg-current transition-opacity duration-200 ${
                menuOpen ? "opacity-0" : "opacity-100"
              }`}
            />

            <span
              className={`absolute h-[1.5px] w-5 rounded-full bg-current transition-transform duration-300 ${
                menuOpen ? "-rotate-45" : "translate-y-[5px]"
              }`}
            />
          </span>
        </button>
      </nav>

      {/* Responsive mobile navigation */}
      <div
        id="mobile-navigation"
        aria-hidden={!menuOpen}
        inert={!menuOpen}
        className={`absolute left-0 right-0 top-full grid overflow-y-auto border-b border-[#E5E5E5] bg-white shadow-[0_18px_35px_rgba(17,17,17,0.08)] transition-[grid-template-rows,opacity,visibility] duration-300 ease-out md:hidden ${
          menuOpen
            ? "visible grid-rows-[1fr] opacity-100"
            : "invisible pointer-events-none grid-rows-[0fr] opacity-0"
        }`}
        style={{
          maxHeight: "calc(100dvh - 68px)",
        }}
      >
        <div className="min-h-0 overflow-y-auto">
          <div className="mx-auto max-w-xl px-5 pb-5 pt-4 sm:px-8 sm:pb-6">
            <div className="flex flex-col gap-1">
              {navLinks.map((link, index) => {
                const isActive = activeLink === link.href;

                return (
                  <a
                    key={link.href}
                    ref={index === 0 ? firstLinkRef : undefined}
                    href={link.href}
                    tabIndex={menuOpen ? 0 : -1}
                    onClick={() => handleNavigation(link.href)}
                    aria-current={isActive ? "location" : undefined}
                    style={{
                      transitionDelay: menuOpen ? `${index * 30}ms` : "0ms",
                    }}
                    className={`flex min-h-12 items-center justify-between rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#079E9A] ${
                      isActive
                        ? "bg-[#D1EAE7]/60 text-[#067F7C]"
                        : "text-[#404040] hover:bg-[#FCE2D9]/40 hover:text-[#067F7C]"
                    } ${
                      menuOpen
                        ? "translate-y-0 opacity-100"
                        : "translate-y-1 opacity-0"
                    }`}
                  >
                    {link.label}

                    <span
                      aria-hidden="true"
                      className={`transition-all duration-200 ${
                        isActive
                          ? "translate-x-0 text-[#079E9A] opacity-100"
                          : "-translate-x-1 opacity-0"
                      }`}
                    >
                      ↗
                    </span>
                  </a>
                );
              })}

              <a
                href="#contact"
                tabIndex={menuOpen ? 0 : -1}
                onClick={() => handleNavigation("#contact")}
                className="group mt-3 flex min-h-12 items-center justify-center gap-3 rounded-full bg-[#079E9A] px-5 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-[#067F7C] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#079E9A] focus-visible:ring-offset-2"
              >
                Let&apos;s Talk

                <span
                  aria-hidden="true"
                  className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                >
                  ↗
                </span>
              </a>

              <div className="mt-3 flex items-center justify-center gap-2 pt-3">
                <span className="h-1.5 w-1.5 rounded-full bg-[#079E9A]" />

                <p className="text-center text-[10px] font-semibold uppercase tracking-[0.16em] text-[#777777]">
                  Technology that moves you forward
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}