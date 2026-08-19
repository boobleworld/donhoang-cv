import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";
import ScrollProgress from "@/components/ScrollProgress";
import CursorDot from "@/components/CursorDot";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sportpraxis Stuttgart — Bewegung ist Medizin.",
  description:
    "Sportpraxis Stuttgart verbindet moderne Orthopädie, Unfallchirurgie, Sportmedizin und ästhetische Medizin. Vereinbaren Sie jetzt Ihren Termin.",
  metadataBase: new URL("https://sportpraxis-stuttgart.de"),
  openGraph: {
    title: "Sportpraxis Stuttgart — Bewegung ist Medizin.",
    description:
      "Moderne Orthopädie, Unfallchirurgie, Sportmedizin und ästhetische Medizin in Stuttgart.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className={`${manrope.variable} ${inter.variable}`}>
      <body>
        <ScrollProgress />
        <CursorDot />
        {children}
      </body>
    </html>
  );
}
