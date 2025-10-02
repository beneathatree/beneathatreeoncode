// components/ContactCta.tsx
import React from 'react';

export default function ContactCta() {
  return (
    // Outer container with padding
    <section className="py-20 sm:py-28 bg-white text-center">
      <div className="max-w-4xl mx-auto px-4">
        
        {/* Main Heading/Text */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-figtree font-bold leading-tight text-[#4DB898] mb-10">
          Don&apos;t fit this bill? Contact us anyway.
          <br />
          We&apos;ll figure it out, together.
        </h2>

        {/* Button */}
        <a
          href="https://calendly.com/rohit-beneathatree/introduction" // Assuming this is the correct link
          target="_blank"
          rel="noreferrer"
          className="inline-block px-8 py-4 rounded-lg font-figtree font-semibold text-white text-xl transition-transform duration-200 ease-in-out hover:scale-[1.03] shadow-md hover:shadow-lg"
          style={{ backgroundColor: "#4DB898" }}
        >
          Get in Touch
        </a>
      </div>
    </section>
  );
}