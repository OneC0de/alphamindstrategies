import type { Metadata } from "next";
import { Source_Serif_4, Space_Grotesk } from "next/font/google";
import "./globals.css";

const sans = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
});

const serif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: "Alpha Mind Strategies | Strategic Advisory for Modern Leaders",
  description:
    "Alpha Mind Strategies partners with founders, investors, and policy leaders to craft sharp narratives, decisive strategies, and confident execution.",
  metadataBase: new URL("https://alphamindstrategies.com"),
  openGraph: {
    title: "Alpha Mind Strategies",
    description:
      "Strategy and communications advisory for leaders navigating high-stakes decisions.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sans.variable} ${serif.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
