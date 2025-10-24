import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";
import logo from "../assets/Skiez-logo.png";

// navigation links
const LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/Services" },
  { label: "About", href: "/About" },
  { label: "Blog", href: "/Blog" },
  { label: "Contact", href: "/Contact" },
];

// ✅ helper hook for live media query state
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth < 768 : false
  );

  useEffect(() => {
    const handler = () => setIsMobile(window.innerWidth < 768);
    handler();
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  return isMobile;
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const isMobile = useIsMobile();

  // Prevent scroll when menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [open]);

  // Close menu automatically when resizing to desktop
  useEffect(() => {
    if (!isMobile && open) setOpen(false);
  }, [isMobile, open]);

  return (
    <>
      {/* HEADER */}
      <header className="fixed inset-x-0 top-0 z-40">
        <div className="bg-white/80 backdrop-blur-sm border-b border-slate-200">
          <div className="mx-auto max-w-[1200px] px-6 md:px-12 flex items-center justify-between h-16">
            {/* Logo */}
            <a href="/" className="flex items-center gap-3">
              <span className="inline-flex items-center justify-center rounded-md bg-white p-1 shadow-sm">
                <img
                  src={logo}
                  alt="Logo"
                  className="w-22 h-14 object-contain"
                />
              </span>
            </a>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-8">
              <ul className="flex items-center gap-8 text-lg font-semibold text-slate-700">
                {LINKS.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      className="relative hover:text-slate-900 transition-colors group"
                    >
                      {l.label}
                      <span className="absolute left-0 right-0 -bottom-1 h-0.5 bg-gradient-to-r from-indigo-400 to-pink-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* ✅ Mobile toggle (renders only on mobile) */}
            {isMobile && (
              <div className="flex items-center gap-2">
                <button
                  className="p-2 rounded-md bg-slate-100 text-slate-700 shadow-sm"
                  onClick={() => setOpen((o) => !o)}
                  aria-label={open ? "Close menu" : "Open menu"}
                >
                  {open ? (
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  ) : (
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  )}
                </button>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Spacer below fixed header */}
      <div aria-hidden className="h-16" />

      {/* ✅ Mobile menu only renders when isMobile === true */}
      <AnimatePresence>
        {isMobile && open && (
          <motion.aside
            className="fixed inset-0 z-50 block pointer-events-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Background overlay */}
            <div
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />

            {/* Slide panel */}
            <motion.div
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ type: "spring", damping: 20, stiffness: 300 }}
              className="relative mx-auto max-w-[1000px] w-full h-[60vh] max-h-[85vh] overflow-y-auto rounded-b-2xl bg-white shadow-2xl p-6 md:p-8"
            >
              <div className="flex items-center justify-between mb-6">
                <img
                  src={logo}
                  alt="Logo"
                  className="w-12 h-12 object-contain"
                />
                <button
                  className="p-2 rounded-md bg-slate-100 text-slate-700 shadow-sm"
                  onClick={() => setOpen(false)}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <nav className="flex flex-col items-center gap-6">
                {LINKS.map((l, i) => (
                  <motion.a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className={clsx(
                      "text-2xl font-semibold text-slate-700 hover:text-indigo-500 transition"
                    )}
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 * i }}
                  >
                    {l.label}
                  </motion.a>
                ))}
              </nav>
            </motion.div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}
