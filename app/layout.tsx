import type { Metadata } from "next";
import "./globals.css";

import Navbar from "./components/navbar";
import Footer from "./components/footer";

export const metadata: Metadata = {
  title: "Noor Technologies | Digital Solutions & Web Development",
  description:
    "Noor Technologies builds modern websites, custom software, and digital solutions to help businesses grow.",
  keywords: [
    "Noor Technologies",
    "Web Development",
    "Custom Software",
    "Digital Solutions",
  ],
  metadataBase: new URL("https://www.noortechnologies.in"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-[#101413] antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}