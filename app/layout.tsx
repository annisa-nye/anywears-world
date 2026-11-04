import type { Metadata } from "next";
import { Allura, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const allura = Allura({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-allura",
  display: "swap",
});

export const metadata: Metadata = {
  title: "anywears",
  description:
    "An independent fashion archive, told through the World Wide Web.",
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${allura.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-canvas text-charcoal font-sans">
        {children}
      </body>
    </html>
  );
}
