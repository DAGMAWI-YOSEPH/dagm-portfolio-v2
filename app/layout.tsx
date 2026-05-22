import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono, Newsreader } from "next/font/google";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#dcd8c0",
};

const newsreader = Newsreader({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-newsreader",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-ibm-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dagm Y — WordPress Developer",
  description:
    "A WordPress developer in Addis Ababa where craft meets technology. Building precise, beautiful websites with care.",
  openGraph: {
    title: "Dagm Y — WordPress Developer",
    description:
      "A WordPress developer in Addis Ababa where craft meets technology.",
    type: "website",
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
      className={`${newsreader.variable} ${ibmPlexMono.variable}`}
    >
      <body className="bg-primary">{children}</body>
    </html>
  );
}
