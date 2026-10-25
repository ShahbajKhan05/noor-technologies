import type { Metadata } from "next";
import "./globals.css";

import Navbar from "./components/navbar";
import Footer from "./components/footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://noor-technologies-pvt-ltd.vercel.app"),

  title: "Noor Technologies | Digital Solutions & Web Development",

  description:
    "Noor Technologies builds modern websites, custom software, and digital solutions to help businesses grow.",

  keywords: [
    "Noor Technologies",
    "Web Development",
    "Custom Software",
    "Digital Solutions",
  ],

  applicationName: "Noor Technologies",

  other: {
    "msvalidate.01": "B1CE4D3741710754C1DB48B0D0E65B68",
  },

  openGraph: {
    title: "Noor Technologies | Digital Solutions & Web Development",

    description:
      "Modern websites, custom software, and digital solutions to help your business grow.",

    url: "https://noor-technologies-pvt-ltd.vercel.app/",

    siteName: "Noor Technologies",

    images: [
      {
        url: "https://noor-technologies-pvt-ltd.vercel.app/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Noor Technologies - Digital Solutions and Web Development",
      },
    ],

    locale: "en_IN",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Noor Technologies | Digital Solutions & Web Development",

    description:
      "Modern websites, custom software, and digital solutions to help businesses grow.",

    images: [
      "https://noor-technologies-pvt-ltd.vercel.app/opengraph-image.png",
    ],
  },

  robots: {
    index: true,
    follow: true,
  },
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