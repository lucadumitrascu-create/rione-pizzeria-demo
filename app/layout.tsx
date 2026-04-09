import type { Metadata } from "next";
import { Playfair_Display, Inter, Dancing_Script } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const dancing = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancing",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Il Rione · Authentische Neapolitanische Pizza in Wien",
  description:
    "Autentica Pizza Napoletana aus dem Kupferofen bei 485°C. Frische Zutaten aus Italien. Lieferung in 1230 Wien.",
  openGraph: {
    title: "Il Rione · Authentische Neapolitanische Pizza in Wien",
    description:
      "Autentica Pizza Napoletana aus dem Kupferofen bei 485°C. Frische Zutaten aus Italien. Lieferung in 1230 Wien.",
    locale: "de_AT",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${playfair.variable} ${inter.variable} ${dancing.variable}`}>
      <body className="font-inter antialiased">{children}</body>
    </html>
  );
}
