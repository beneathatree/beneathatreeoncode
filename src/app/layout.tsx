import "./globals.css";
import Navbar from "../components/Navbar";
import type { Metadata } from "next";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "BeneathAtree",
  description: "BeneathATree is a bespoke software consultancy based in Bangalore, India. We're the people who you go all the way with.",
  icons: {
    icon: "/illustrations/favicon.svg",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Load Playfair Display Semibold Italic */}
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@1,600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
