import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Daveram A — Player One | Full Stack Developer",
  description:
    "A retro arcade-inspired portfolio of Daveram A, a Full Stack Developer building with React, Next.js, Node.js and TypeScript.",
  applicationName: "Player One Portfolio",
};

export const viewport: Viewport = {
  themeColor: "#10091f",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
