import type { Metadata } from "next";
import "./globals.css";
import { nunitoSans, poppins, lato } from "./utils/font";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Echo Experience",
  description: "Experience elegance and comfort.",
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
