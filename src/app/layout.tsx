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
  title: "Alpha Mind Strategies",
  description:
    "Alpha Mind Strategies partners with legal, risk, and product teams to operationalize compliance, privacy, and responsible AI.",
  metadataBase: new URL("https://alphamindstrategies.com"),
  openGraph: {
    title: "Alpha Mind Strategies",
    description:
      "A modern compliance and AI-governance studio for organizations shipping products in regulated markets.",
    url: "https://alphamindstrategies.com",
    siteName: "Alpha Mind Strategies",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alpha Mind Strategies",
    description:
      "Compliance, privacy, and responsible AI systems for the algorithmic age.",
  },
  icons: {
    icon: "/alpha-mind-logo.png",
    shortcut: "/alpha-mind-logo.png",
    apple: "/alpha-mind-logo.png",
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
