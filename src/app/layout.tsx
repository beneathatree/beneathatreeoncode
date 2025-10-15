import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LenisProvider from "../components/LenisProvider";
import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Figtree, Playfair_Display } from "next/font/google";

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-figtree",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["italic"],
  weight: ["600"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "BeneathATree | Bespoke Software Consultancy",
  description:
    "Bespoke software consultancy for startups, solopreneurs, and enterprises. We build lean MVPs and scalable products.",
  alternates: { canonical: "https://beneathatree.com/" },
  openGraph: {
    type: "website",
    url: "https://beneathatree.com/",
    siteName: "BeneathATree",
    title: "Bespoke Software Consultancy | BeneathATree",
    description:
      "Lean MVPs to enterprise-ready products—secure, scalable, reliable.",
    images: [
      {
        url: "/og/hero.jpg",
        width: 1200,
        height: 630,
        alt: "BeneathATree brand hero",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bespoke Software Consultancy | BeneathATree",
    description: "We help founders and teams ship lovable, scalable software.",
    images: ["/og/hero.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
  icons: {
    icon: [
      { url: "/illustrations/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" }
    ],
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon-32x32.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#55C1A0" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
  colorScheme: "light dark",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="no-js" suppressHydrationWarning>
      <body className={`${figtree.variable} ${playfair.variable} flex flex-col min-h-screen`}>
        <LenisProvider>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </LenisProvider>

        <Script id="remove-no-js" strategy="beforeInteractive">
          {`document.documentElement.classList.remove('no-js');`}
        </Script>

        <Script id="org-jsonld" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "BeneathATree",
            url: "https://beneathatree.com/",
            logo: "https://beneathatree.com/logo.png",
            sameAs: ["https://www.linkedin.com/company/beneathatree"],
          })}
        </Script>

        <Script id="website-jsonld" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            url: "https://beneathatree.com/",
            potentialAction: {
              "@type": "SearchAction",
              target: "https://beneathatree.com/search?q={query}",
              "query-input": "required name=query",
            },
          })}
        </Script>
      </body>
    </html>
  );
}
