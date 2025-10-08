export default function ContactCta() {
  return (
    <section className="pt-[-10] pb-20 sm:pb-28 bg-white text-center">
      <div className="max-w-4xl mx-auto px-0">
        {/* Main Heading/Text */}
        <h2
          className="
            font-figtree font-bold
            text-[50px]
            tracking-[-2.1px]
            leading-[1.2em]
            text-[#42A185]
            mb-4
          "
        >
          Don&apos;t fit this bill? Contact us anyway.
          <br />
          We&apos;ll figure it out, together.
        </h2>

        {/* Button */}
        <a
          href="https://calendly.com/rohit-beneathatree/introduction"
          target="_blank"
          rel="noreferrer"
          className="inline-block px-6 py-3 rounded-lg font-figtree font-semibold text-white text-xl transition-transform duration-200 ease-in-out hover:scale-[1.03] shadow-md hover:shadow-lg"
          style={{ backgroundColor: "#42A185" }}
        >
          Get in Touch
        </a>
      </div>
    </section>
  );
}
