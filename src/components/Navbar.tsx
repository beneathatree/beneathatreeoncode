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
      className="fixed top-0 left-0 w-full z-50 shadow-md"
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.60)",
        backdropFilter: "blur(6px)",
        WebkitBackdropFilter: "blur(6px)",
      }}
    >
      <div className="w-full px-4 py-4">
        {/* Top Row: Logo + Desktop Links + Hamburger */}
        <div className="flex justify-between items-center pl-2">
          {/* Logo */}
          <Link href="/">
            <Image
              src="/illustrations/batlogo.svg"
              alt="Beneathatree Logo"
              width={140}
              height={48}
              className="object-contain"
            />
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-6 items-center pr-2">
            <Link
              href="/our-people"
              className="font-figtree text-link text-m font-medium"
            >
              Our People
            </Link>
            <a
              href="https://www.upwork.com/agencies/881225776448200704/"
              target="_blank"
              rel="noreferrer"
              className="font-figtree text-link text-m font-medium"
            >
              Us on Upwork
            </a>
            <a
              href="https://calendly.com/rohit-beneathatree/introduction"
              target="_blank"
              rel="noreferrer"
              className="px-3 py-2 rounded-md font-figtree font-medium text-white text-m transition-transform duration-200 ease-in-out hover:scale-[1.03]"
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

        {/* Mobile Dropdown */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
            ref={menuRef}
            initial={{ height: 0, opacity: 0, y: -10 }}
            animate={{ height: "auto", opacity: 1, y: 0 }}
            exit={{ height: 0, opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
            className="md:hidden overflow-hidden px-4"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.00)", // removed
              backdropFilter: "none",                  // removed 
              WebkitBackdropFilter: "none",
              boxShadow: "none",
              border: "none",
              willChange: "height, opacity, transform",
            }}
          >
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
                  rel="noreferrer"
                  className="font-figtree text-gray-500 text-xl font-medium"
                  onClick={() => setMenuOpen(false)}
                >
                  Us on Upwork
                </a>
                <a
                  href="https://calendly.com/rohit-beneathatree/introduction"
                  target="_blank"
                  rel="noreferrer"
                  className="font-figtree text-[#4DB898] text-xl font-semibold"
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
