"use client";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // Hook to handle clicks outside the menu and close it
  useEffect(() => {
    const handler = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  return (
    <nav 
      ref={menuRef}
      className={`relative bg-white shadow overflow-hidden transition-[height] duration-300 ease-in-out z-50
        ${menuOpen ? 'h-[250px]' : 'h-[64px]'}
      `}
      style={{ borderTop: 'none' }}
    >
      <div className="flex justify-between items-center px-6 py-3">
        {/* Logo - Dynamically positioned */}
        <Link href="/">
          <div 
            className={`flex items-center transition-transform duration-300 ease-in-out
              ${menuOpen ? 'transform translate-y-[20px]' : 'transform translate-y-0'}
            `}
          >
            <Image
              src="/illustrations/batlogo.svg"
              alt="Beneathatree Logo"
              width={155}
              height={52}
              className="object-contain"
            />
          </div>
        </Link>

        {/* Navbar links for desktop */}
        <div className="hidden md:flex space-x-8 items-center">
          <Link href="/our-people" className="font-figtree text-link font-medium">
            Our People
          </Link>
          <a
            href="https://www.upwork.com/agencies/881225776448200704/"
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 rounded-lg font-figtree font-medium text-white text-base transition-transform duration-200 ease-in-out hover:scale-[1.03]"
            style={{ backgroundColor: "#4DB898" }}
          >
            Schedule a Call
          </a>
        </div>

        {/* Hamburger icon for mobile/tablet */}
        <button
          className="md:hidden ml-4 p-2 rounded focus:outline-none"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? (
            <svg width="34" height="34" fill="none" viewBox="0 0 34 34" stroke="#888" className="transition-transform duration-300 ease-in-out">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M8 10l18 18M8 28L26 10" />
            </svg>
          ) : (
            <svg width="34" height="34" fill="none" viewBox="0 0 34 34" stroke="#888" className="transition-transform duration-300 ease-in-out">
              <line x1="8" y1="11" x2="26" y2="11" stroke="#888" strokeWidth="2.2" strokeLinecap="round" />
              <line x1="8" y1="17" x2="26" y2="17" stroke="#888" strokeWidth="2.2" strokeLinecap="round" />
              <line x1="8" y1="23" x2="26" y2="23" stroke="#888" strokeWidth={2.2} strokeLinecap="round" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown Content */}
      <div
        className={`flex flex-col gap-6 px-8 pt-6 pb-6 transition-opacity duration-300 ease-in-out ${
          menuOpen ? 'opacity-100' : 'opacity-0'
        }`}
      >
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
    </nav>
  );
}
