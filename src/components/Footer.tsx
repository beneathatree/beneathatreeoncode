// components/Footer.tsx
export default function Footer() {
  return (
    <footer className="w-full bg-black text-white text-[15px] font-figtree">
      {/* full-width footer with tight horizontal padding */}
      <div className="flex flex-col md:flex-row items-center justify-between py-12 px-3 sm:px-4 md:px-6 lg:px-8">
        <p className="mb-4 md:mb-0">
          © 2025 | Beneathatree Educational Services Pvt. Ltd.
        </p>
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
