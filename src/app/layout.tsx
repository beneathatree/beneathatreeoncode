import "./globals.css";
import Navbar from "../components/Navbar";
import type { Metadata } from "next";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "BeneathAtree",
  description: "Bespoke software consultancy for startups, solopreneurs, and enterprises.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
