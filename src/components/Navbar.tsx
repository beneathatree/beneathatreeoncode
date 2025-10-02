"use client";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  // Close on outside click
  useEffect(() => {
    const handler = (event: MouseEvent) => {
      const targetNode = event.target as Node | null;
      if (!targetNode) return;

      const clickedOutsideMenu = menuRef.current ? !menuRef.current.contains(targetNode) : true;
      const clickedHamburger = buttonRef.current ? buttonRef.current.contains(targetNode) : false;

      if (clickedOutsideMenu && !clickedHamburger) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div className="relative z-50">
      {/* Navbar - Applied transparent white background using inline style */}
      <nav 
        className="fixed top-0 left-0 w-full flex justify-between items-center px-6 py-4 shadow z-50"
        style={{ 
          // 90% opaque white (10% transparency)
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          // Optional: Add a subtle blur effect for a modern 'frosted glass' look
          backdropFilter: "blur(4px)",
          WebkitBackdropFilter: "blur(3px)", // For better browser support
        }}
      >
        {/* Logo */}
        <Link href="/">
          <div className="flex items-center">
            <Image
              src="/illustrations/batlogo.svg"
              alt="Beneathatree Logo"
              width={155}
              height={52}
              className="object-contain"
            />
          </div>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex space-x-8 items-center">
          <Link href="/our-people" className="font-figtree text-link font-medium">
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
          className="md:hidden ml-4 p-2 rounded focus:outline-none"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
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
      </nav>

      {/* Mobile Dropdown (Remains opaque for legibility) */}
      <div
        ref={menuRef}
        className={`fixed top-[72px] left-0 w-full bg-white md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out shadow-[0_8px_32px_rgba(77,184,152,0.12)] ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-6 px-8 pt-6 pb-6">
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
      </div>
    </div>
  );
}