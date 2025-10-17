"use client";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    setIsMounted(true);
    
    const handler = (event: MouseEvent) => {
      const targetNode = event.target as Node | null;
      if (!targetNode) return;

      const clickedOutsideMenu = menuRef.current
        ? !menuRef.current.contains(targetNode)
        : true;
      const clickedHamburger = buttonRef.current
        ? buttonRef.current.contains(targetNode)
        : false;

      if (clickedOutsideMenu && !clickedHamburger) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 w-full z-[9999]"
      data-lenis-prevent
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.80)",
        backdropFilter: "blur(5px)",
        WebkitBackdropFilter: "blur(5px)",
        boxShadow: "0 1px 4px rgba(0, 0, 0, 0.20)",
        transform: "translateZ(0)",
        WebkitTransform: "translateZ(0)",
        backfaceVisibility: "hidden",
        WebkitBackfaceVisibility: "hidden",
        width: "100vw",
      }}
    >
      <div className="w-full px-2 sm:px-4 py-3">
        {/* Top Row: Logo + Desktop Links + Hamburger */}
        <div className="flex justify-between items-center pl-2 sm:pl-4">
          {/* Logo */}
          <Link href="/" aria-label="BeneathATree home">
            <Image
              src="/illustrations/batlogo.svg"
              alt="BeneathATree"
              width={146}
              height={48}
              className="object-contain"
              priority
            />
          </Link>

          {/* Desktop Links */}
          <nav
            className="hidden md:flex space-x-6 items-center pr-4"
            aria-label="Primary"
          >
            <Link
              href="/our-people"
              className="font-figtree text-link text-m font-medium"
            >
              Our People
            </Link>
            <a
              href="https://www.upwork.com/agencies/881225776448200704/"
              target="_blank"
              rel="noopener nofollow external"
              className="font-figtree text-link text-m font-medium"
            >
              Us on Upwork
            </a>
            <a
              href="https://calendly.com/rohit-beneathatree/introduction"
              target="_blank"
              rel="noopener nofollow external"
              className="px-3 py-2 rounded-md font-figtree font-medium text-white text-m transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.05] hover:-translate-y-0.5 shadow-md hover:shadow-xl"
              style={{ backgroundColor: "#42A185" }}
            >
              Schedule a Call
            </a>
          </nav>

          {/* Hamburger */}
          <button
            ref={buttonRef}
            className="md:hidden p-2 rounded focus:outline-none"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-controls="mobile-menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? (
              <svg width="34" height="34" fill="none" viewBox="0 0 34 34" stroke="#888">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M8 10l18 18M8 28L26 10" />
              </svg>
            ) : (
              <svg width="34" height="34" fill="none" viewBox="0 0 34 34" stroke="#888">
                <line x1="8" y1="11" x2="26" y2="11" strokeWidth="2.2" strokeLinecap="round" />
                <line x1="8" y1="17" x2="26" y2="17" strokeWidth="2.2" strokeLinecap="round" />
                <line x1="8" y1="23" x2="26" y2="23" strokeWidth="2.2" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Dropdown */}
        <AnimatePresence>
          {isMounted && menuOpen && (
            <motion.div
              id="mobile-menu"
              ref={menuRef}
              initial={{ height: 0, opacity: 0, y: -10 }}
              animate={{ height: "auto", opacity: 1, y: 0 }}
              exit={{ height: 0, opacity: 0, y: -10 }}
              transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
              className="md:hidden overflow-hidden px-4"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.00)",
                backdropFilter: "none",
                WebkitBackdropFilter: "none",
                boxShadow: "none",
                border: "none",
                willChange: "height, opacity, transform",
              }}
            >
              <nav aria-label="Mobile Primary">
                <div className="flex flex-col gap-5 pt-4 pb-4">
                  <Link
                    href="/our-people"
                    className="font-figtree text-gray-500 text-xl font-medium"
                    onClick={() => setMenuOpen(false)}
                  >
                    Our People
                  </Link>
                  <a
                    href="https://www.upwork.com/agencies/881225776448200704/"
                    target="_blank"
                    rel="noopener nofollow external"
                    className="font-figtree text-gray-500 text-xl font-medium"
                    onClick={() => setMenuOpen(false)}
                  >
                    Us on Upwork
                  </a>
                  <a
                    href="https://calendly.com/rohit-beneathatree/introduction"
                    target="_blank"
                    rel="noopener nofollow external"
                    className="font-figtree text-[#4DB898] text-xl font-semibold"
                    onClick={() => setMenuOpen(false)}
                  >
                    Schedule A Call
                  </a>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
