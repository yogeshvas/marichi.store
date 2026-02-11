import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/custom/CustomCursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Marichi – Intelligent Commerce Platform",
  description:
    "Marichi empowers businesses with AI-driven marketing, commerce, support, and onboarding solutions. Connect, configure, launch, and optimize your digital presence.",
  keywords: [
    "Marichi",
    "commerce platform",
    "AI marketing",
    "digital commerce",
    "customer support",
    "onboarding",
  ],
  openGraph: {
    title: "Marichi – Intelligent Commerce Platform",
    description:
      "Empowering businesses with AI-driven marketing, commerce, support, and onboarding solutions.",
    siteName: "Marichi",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Marichi – Intelligent Commerce Platform",
    description:
      "Empowering businesses with AI-driven marketing, commerce, support, and onboarding solutions.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
