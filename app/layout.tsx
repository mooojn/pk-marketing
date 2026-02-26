import type { Metadata } from "next";
import { IBM_Plex_Mono, Manrope } from "next/font/google";
import Navbar from "./components/Navbar";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "AdzoMarketing | Digital Marketing Agency",
  description: "AdzoMarketing is a marketing agency that helps businesses grow their online presence.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} ${plexMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
