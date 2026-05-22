import type { Metadata } from "next";
import { Barlow_Condensed, Raleway } from "next/font/google";
import "./globals.css";

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400"],
  variable: "--font-big-shoulders",
  display: "swap",
});

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-jost",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dagm Y — WordPress Developer",
  description:
    "WordPress developer crafting precise, beautiful digital experiences from Addis Ababa.",
  openGraph: {
    title: "Dagm Y — WordPress Developer",
    description:
      "WordPress developer crafting precise, beautiful digital experiences.",
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
      className={`${barlowCondensed.variable} ${raleway.variable}`}
    >
      <body className="font-body">{children}</body>
    </html>
  );
}
