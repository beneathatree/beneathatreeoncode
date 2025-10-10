export default function ContactCta() {
  return (
    <section className="pt-8 pb-16 bg-white text-center">
      <div className="max-w-4xl mx-auto px-4">
        <h2
          className="
            font-figtree font-bold
            text-4xl sm:text-5xl md:text-5xl
            tracking-[-1px]
            leading-tight
            text-[#42A185]
            mb-6
          "
        >
          Don&apos;t fit this bill? Contact us anyway.
          <br />
          We&apos;ll figure it out, together.
        </h2>

        <a
          href="https://calendly.com/rohit-beneathatree/introduction"
          target="_blank"
          rel="noopener nofollow external"
          className="
            inline-block
            px-6 py-3
            rounded-lg
            font-figtree font-semibold
            text-white
            text-xl
            transition-transform duration-200 ease-in-out
            hover:scale-[1.03]
            shadow-md hover:shadow-lg
          "
          style={{ backgroundColor: "#42A185" }}
        >
          Get in Touch
        </a>
      </div>
    </section>
  );
}
