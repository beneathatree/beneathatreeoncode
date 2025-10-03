"use client";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
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
      className="fixed top-0 left-0 w-full z-50"
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.97)",
        backdropFilter: "blur(2px)",
        WebkitBackdropFilter: "blur(2px)",
      }}
    >
      <div className="w-full px-6 py-4">
        {/* Top Row: Logo + Desktop Links + Hamburger */}
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/">
            <Image
              src="/illustrations/batlogo.svg"
              alt="Beneathatree Logo"
              width={155}
              height={52}
              className="object-contain"
            />
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link
              href="/our-people"
              className="font-figtree text-link font-medium"
            >
              Our People
            </Link>
            <a
              href="https://www.upwork.com/agencies/881225776448200704/"
              target="_blank"
              rel="noreferrer"
              className="font-figtree text-link font-medium"
            >
              Us on Upwork
            </a>
            <a
              href="https://calendly.com/rohit-beneathatree/introduction"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded-lg font-figtree font-medium text-white text-base transition-transform duration-200 ease-in-out hover:scale-[1.03]"
              style={{ backgroundColor: "#42A185" }}
            >
              Schedule a Call
            </a>
          </div>

          {/* Hamburger */}
          <button
            ref={buttonRef}
            className="md:hidden p-2 rounded focus:outline-none"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? (
              <svg
                width="34"
                height="34"
                fill="none"
                viewBox="0 0 34 34"
                stroke="#888"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.2}
                  d="M8 10l18 18M8 28L26 10"
                />
              </svg>
            ) : (
              <svg
                width="34"
                height="34"
                fill="none"
                viewBox="0 0 34 34"
                stroke="#888"
              >
                <line
                  x1="8"
                  y1="11"
                  x2="26"
                  y2="11"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                />
                <line
                  x1="8"
                  y1="17"
                  x2="26"
                  y2="17"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                />
                <line
                  x1="8"
                  y1="23"
                  x2="26"
                  y2="23"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Dropdown (inside same container) */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              ref={menuRef}
              initial={{ height: 0, opacity: 0, y: -10 }}
              animate={{ height: "auto", opacity: 1, y: 0 }}
              exit={{ height: 0, opacity: 0, y: -10 }}
              transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
              className="md:hidden overflow-hidden"
              style={{
                backgroundColor: "transparent",
                backdropFilter: "blur(2px)",
                WebkitBackdropFilter: "blur(2px)",
                boxShadow: "none",
                border: "none",
                willChange: "height, opacity, transform",
              }}
            >
              <div className="flex flex-col gap-6 pt-6 pb-6">
                <Link
                  href="/our-people"
                  className="font-figtree text-gray-500 text-2xl font-medium"
                  onClick={() => setMenuOpen(false)}
                >
                  Our People
                </Link>
                <a
                  href="https://www.upwork.com/agencies/881225776448200704/"
                  target="_blank"
                  rel="noreferrer"
                  className="font-figtree text-gray-500 text-2xl font-medium"
                  onClick={() => setMenuOpen(false)}
                >
                  Us on Upwork
                </a>
                <a
                  href="https://calendly.com/rohit-beneathatree/introduction"
                  target="_blank"
                  rel="noreferrer"
                  className="font-figtree text-[#4DB898] text-2xl font-semibold"
                  onClick={() => setMenuOpen(false)}
                >
                  Schedule A Call
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
