import type { Metadata } from "next";
import "./globals.css";
import { nunitoSans, poppins, lato } from "./utils/font";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Echo Experience",
  description: "Experience elegance and comfort.",
  openGraph: {
    title: "Echo Experience",
    description: "Experience elegance and comfort.",
    url: "https://echo-experience.vercel.app",
    siteName: "Echo Experience",
    images: [
      {
        url: "/brand.png",
        width: 1200,
        height: 630,
        alt: "Echo Experience Open Graph Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Echo Experience",
    description: "Experience elegance and comfort.",
    images: ["/brand.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${nunitoSans.variable} ${poppins.variable} ${lato.variable}`}
    >
      <body suppressHydrationWarning>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
