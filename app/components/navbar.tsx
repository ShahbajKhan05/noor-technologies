"use client";

import { useCallback, useEffect, useRef, useState, type CSSProperties } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Menu, X } from "lucide-react";
import Link from "next/link";
import Brand from "./brand";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const COLORS = {
  coral: "#FF765D",
  red: "#FB2C36",
  teal: "#079E9A",
  tealDark: "#067F7C",
  peach: "#FCE2D9",
  charcoal: "#283532",
  gray: "#777777",
  grayLight: "#E5E5E5",
  white: "#FFFFFF",
};

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");
  const prefersReducedMotion = useReducedMotion();
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  const closeMenu = useCallback((restoreFocus = false) => {
    setMenuOpen(false);
    if (restoreFocus) {
      requestAnimationFrame(() => menuButtonRef.current?.focus());
    }
  }, []);

  // Track the active on-page section without treating routes like /pricing as selectors.
  useEffect(() => {
    let frame = 0;

    const updateScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        let current = "#home";
        const sectionOffset = 150;

        for (const link of navLinks) {
          if (!link.href.startsWith("#")) continue;
          const section = document.getElementById(link.href.slice(1));
          if (section && section.getBoundingClientRect().top <= sectionOffset) {
            current = link.href;
          }
        }

        if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) {
          if (document.getElementById("contact")) current = "#contact";
        }

        setActiveLink(current);
      });
    };

    updateScroll();
    window.addEventListener("scroll", updateScroll, { passive: true });
    window.addEventListener("resize", updateScroll);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updateScroll);
      window.removeEventListener("resize", updateScroll);
    };
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMenu(true);
    };

    const focusFrame = requestAnimationFrame(() => firstLinkRef.current?.focus());
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
      cancelAnimationFrame(focusFrame);
    };
  }, [menuOpen, closeMenu]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNavigation = (href: string) => {
    if (href.startsWith("#")) setActiveLink(href);
    closeMenu();

    if (href.startsWith("#")) {
      const targetId = href.slice(1);
      const target = document.getElementById(targetId);
      if (target) {
        window.setTimeout(() => {
          target.scrollIntoView({
            behavior: prefersReducedMotion ? "auto" : "smooth",
            block: "start",
          });
        }, prefersReducedMotion ? 0 : 350);
      }
    }
  };

  const headerStyle = {
    "--nav-teal": COLORS.teal,
    "--nav-teal-dark": COLORS.tealDark,
    "--nav-charcoal": COLORS.charcoal,
    "--nav-white": COLORS.white,
  } as CSSProperties;

  const revealVariants = {
    closed: {
      clipPath: "circle(0% at calc(100% - 36px) 36px)",
      transition: { duration: 0.55, ease: [0.76, 0, 0.24, 1] as const },
    },
    open: {
      clipPath: "circle(150vmax at calc(100% - 36px) 36px)",
      transition: { duration: 0.65, ease: [0.76, 0, 0.24, 1] as const },
    },
  };

  const linkVariants = {
    closed: { y: 24, opacity: 0 },
    open: (index: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.2 + index * 0.055,
        duration: 0.55,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    }),
  };

  return (
    <>
      <header
        style={headerStyle}
        className="fixed inset-x-0 top-0 z-[100] flex items-center justify-between px-5 py-5 text-white sm:px-8 sm:py-6 md:px-12"
      >
        <Link
          href="/#home"
          aria-label="Noor Technologies home"
          onClick={() => handleNavigation("#home")}
          className="group relative z-[101] flex items-center rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-[#079E9A] focus-visible:ring-offset-4"
        >
          <span className="block w-[132px] transition-transform duration-300 group-hover:scale-[1.03] sm:w-[158px] lg:w-[178px]">
            <Brand />
          </span>
        </Link>

        <button
          ref={menuButtonRef}
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="fullscreen-navigation"
          onClick={() => setMenuOpen((open) => !open)}
          className="group relative z-[101] flex items-center gap-3 rounded-full outline-none focus-visible:ring-2 focus-visible:ring-[#079E9A] focus-visible:ring-offset-4"
        >
          <span className={`hidden text-[10px] font-extrabold uppercase tracking-[0.2em] transition-colors sm:block ${menuOpen ? "text-[#283532]" : "text-[#283532]"}`}>
            {menuOpen ? "Close" : "Menu"}
          </span>
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#111111] shadow-[0_0_24px_rgba(7,158,154,0.16)] transition-colors duration-300 group-hover:bg-[#FF765D] group-hover:text-white">
            <AnimatePresence mode="wait" initial={false}>
              {menuOpen ? (
                <motion.span
                  key="close"
                  initial={{ scale: 0, rotate: -90, opacity: 0 }}
                  animate={{ scale: 1, rotate: 0, opacity: 1 }}
                  exit={{ scale: 0, rotate: 90, opacity: 0 }}
                >
                  <X size={18} strokeWidth={2.5} />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{ scale: 0, rotate: 90, opacity: 0 }}
                  animate={{ scale: 1, rotate: 0, opacity: 1 }}
                  exit={{ scale: 0, rotate: -90, opacity: 0 }}
                >
                  <Menu size={18} strokeWidth={2.5} />
                </motion.span>
              )}
            </AnimatePresence>
          </span>
        </button>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              aria-hidden="true"
              variants={prefersReducedMotion ? { closed: { opacity: 0 }, open: { opacity: 1 } } : revealVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="pointer-events-none fixed inset-0 z-[85] bg-gradient-to-br from-[#079E9A] via-[#FF765D] to-[#FB2C36]"
            />

            <motion.nav
              id="fullscreen-navigation"
              aria-label="Main navigation"
              variants={prefersReducedMotion ? { closed: { opacity: 0 }, open: { opacity: 1 } } : revealVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed inset-0 z-[90] overflow-hidden bg-[#F5F6F8] text-[#111111] shadow-2xl"
            >
              <div data-lenis-prevent="true" className="absolute inset-0 h-[100dvh] overflow-y-auto overscroll-contain">
                <div className="mx-auto flex min-h-[100dvh] w-full max-w-[1440px] flex-col px-6 pb-8 pt-28 sm:px-10 md:px-16 md:pt-32">
                  <div className="flex flex-1 flex-col justify-center py-8">
                    <div className="grid grid-cols-1 gap-x-12 gap-y-5 md:grid-cols-2 md:gap-y-7">
                      {navLinks.map((link, index) => {
                        const active = activeLink === link.href;
                        return (
                          <motion.div
                            key={link.href}
                            custom={index}
                            variants={linkVariants}
                            initial="closed"
                            animate="open"
                            exit="closed"
                          >
                            <a
                              ref={index === 0 ? firstLinkRef : undefined}
                              href={link.href}
                              onClick={(event) => {
                                if (link.href.startsWith("#")) {
                                  event.preventDefault();
                                  handleNavigation(link.href);
                                } else {
                                  closeMenu();
                                }
                              }}
                              className="group flex items-center gap-4 text-left outline-none focus-visible:ring-2 focus-visible:ring-[#079E9A]"
                            >
                              <span className={`w-7 shrink-0 font-mono text-[10px] font-bold transition-colors ${active ? "text-[#FF765D]" : "text-[#079E9A]/60"}`}>
                                {String(index + 1).padStart(2, "0")}
                              </span>
                              <span
                                className={`text-[clamp(2.25rem,5vw,4.8rem)] font-bold uppercase leading-[1.02] tracking-tight transition-all duration-300 group-hover:translate-x-3 ${
                                  active
                                    ? "bg-gradient-to-r from-[#079E9A] to-[#FF765D] bg-clip-text text-transparent"
                                    : "text-[#111111] group-hover:bg-gradient-to-r group-hover:from-[#079E9A] group-hover:to-[#FF765D] group-hover:bg-clip-text group-hover:text-transparent"
                                }`}
                              >
                                {link.label}
                              </span>
                              <ArrowRight className="hidden shrink-0 text-[#079E9A] opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100 md:block" size={30} />
                            </a>
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>

                  <div className="mt-8 shrink-0 border-t border-black/10 pt-7 md:mt-12">
                    <a
                      href="#contact"
                      onClick={(event) => {
                        event.preventDefault();
                        handleNavigation("#contact");
                      }}
                      className="group inline-flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-[#079E9A] transition-colors hover:text-[#FF765D] sm:text-base"
                    >
                      Let&apos;s Talk
                      <ArrowUpRight size={18} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </a>
                  </div>

                  <footer className="mt-8 flex shrink-0 flex-col justify-between gap-4 border-t border-black/10 pt-6 text-[9px] font-bold uppercase tracking-widest text-[#777777] md:flex-row md:items-center">
                    <span className="w-[120px] opacity-80 grayscale"><Brand /></span>
                    <div className="flex flex-wrap gap-x-4 gap-y-2">
                      <span>Digital Solutions</span>
                      <span className="hidden md:inline">·</span>
                      <span>Software</span>
                      <span className="hidden md:inline">·</span>
                      <span>Technology Education</span>
                    </div>
                    <span>2026</span>
                  </footer>
                </div>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
