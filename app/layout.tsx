import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import ScrollProgress from "@/components/ScrollProgress";
import CursorDot from "@/components/CursorDot";

const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "booble.Life — Build places. Create freedom.",
  description:
    "booble.Life is the master brand behind a growing ecosystem of real-world ventures, places, experiences, technology and communities. Thailand first. Built to expand.",
  metadataBase: new URL("https://booble.life"),
  openGraph: {
    title: "booble.Life — Build places. Create freedom.",
    description:
      "A new way to build, live and experience the world. Thailand first. Built to expand.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body>
        <ScrollProgress />
        <CursorDot />
        {children}
      </body>
    </html>
  );
}
