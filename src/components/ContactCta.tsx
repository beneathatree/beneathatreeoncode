export default function ContactCta() {
  return (
    <section className="pt-8 pb-16 bg-white text-center">
      <div className="max-w-4xl mx-auto px-4">
        <h2
          className="
            font-figtree font-bold
            text-3xl sm:text-5xl md:text-5xl lg:text-5xl
            tracking-[-1px]
            leading-tight
            text-[#42A185]
            mb-6
            reveal
          "
          style={{ "--reveal-delay": "0ms" } as React.CSSProperties}
        >
          Don&apos;t fit this bill?<br />
          Contact us anyway.<br />
          We&apos;ll figure it out, together.
        </h2>

        <a
          href="https://calendly.com/rohit-beneathatree/introduction"
          target="_blank"
          rel="noopener nofollow external"
          className="
            inline-block
            px-4 py-2
            rounded-lg
            font-figtree font-semibold
            text-white
            text-base sm:text-lg md:text-xl
            transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.05] hover:-translate-y-0.5 shadow-md hover:shadow-lg"
          style={{ backgroundColor: "#42A185", "--reveal-delay": "100ms" } as React.CSSProperties}
        >
          Get in Touch
        </a>
      </div>
    </section>
  );
}
