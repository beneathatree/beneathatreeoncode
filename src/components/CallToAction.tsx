export default function CallToAction() {
  return (
    <section
      className="w-full py-28 flex flex-col items-center justify-center text-center"
      style={{ backgroundColor: "#EDFFFA" }}
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-figtree font-bold leading-tight text-[#42A185] mb-10">
        Let’s build great products, together.
      </h2>

      {/* Button */}
      <a
        href="https://calendly.com/rohit-beneathatree/introduction"
        target="_blank"
        rel="noreferrer"
        className="inline-block px-8 py-4 rounded-lg font-figtree font-semibold text-white text-xl transition-transform duration-200 ease-in-out hover:scale-[1.03] shadow-md hover:shadow-lg"
        style={{ backgroundColor: "#42A185" }}
      >
        Schedule a call
      </a>
    </section>
  );
}
