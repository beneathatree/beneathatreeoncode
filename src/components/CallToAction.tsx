export default function CallToAction() {
  return (
    <section
      id="contact"
      aria-labelledby="cta-title"
      className="w-full py-28 flex flex-col items-center justify-center text-center"
      style={{ backgroundColor: "#EDFFFA" }}
      role="region"
    >
      <h2
        id="cta-title"
        className="text-3xl sm:text-4xl md:text-5xl font-figtree font-bold leading-tight text-[#42A185] mb-10 reveal"
        style={{ "--reveal-delay": "0ms" } as React.CSSProperties}
      >
        Let's build great products, together.
      </h2>

      <a
        href="https://calendly.com/rohit-beneathatree/introduction"
        target="_blank"
        rel="noopener nofollow external"
        className="inline-block px-8 py-4 rounded-lg font-figtree font-semibold text-white text-xl transition-transform duration-200 ease-in-out hover:scale-[1.03] shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#42A185] reveal"
        style={{ 
          backgroundColor: "#42A185",
          "--reveal-delay": "100ms"
        } as React.CSSProperties}
        aria-label="Schedule a call on Calendly"
      >
        Schedule a call
      </a>
    </section>
  );
}
