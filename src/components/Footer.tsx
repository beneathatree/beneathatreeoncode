export default function Footer() {
  return (
    <footer className="w-full bg-black text-white py-12 text-[15px] font-figtree">
      <div className="max-w-[1240px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        <div className="text-left mb-4 md:mb-0">
          © 2025 | Beneathatree Educational Services Pvt. Ltd.
        </div>
        <div className="flex space-x-6">
          <a
            href="mailto:rohit@beneathatree.com"
            className="transition-opacity duration-200 opacity-80 hover:opacity-100 hover:underline"
          >
            Email
          </a>
          <a
            href="https://www.instagram.com/beneath.a.tree/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-opacity duration-200 opacity-80 hover:opacity-100 hover:underline"
          >
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}
