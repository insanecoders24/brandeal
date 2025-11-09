import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BranDeal - Manage All Your Brand Deals in One Place",
  description: "Track payments, manage invoices, and never miss a deadline. The all-in-one brand deal management app built for creators. Say goodbye to messy spreadsheets.",
  keywords: "brand deal management, influencer payment tracking, invoice management, creator tools, brand deal tracker, payment reminders, influencer business management, content creator organization",
  authors: [{ name: "BranDeal" }],
  creator: "BranDeal",
  publisher: "BranDeal",
  metadataBase: process.env.NEXT_PUBLIC_APP_URL ? new URL(process.env.NEXT_PUBLIC_APP_URL) : undefined,
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "BranDeal - Manage All Your Brand Deals in One Place",
    description: "Track payments, manage invoices, and never miss a deadline. The brand deal management app built for creators.",
    siteName: "BranDeal",
  },
  twitter: {
    card: "summary_large_image",
    title: "BranDeal - Manage All Your Brand Deals in One Place",
    description: "Track payments, manage invoices, and never miss a deadline. The brand deal management app built for creators.",
    creator: "@brandeal",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
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
        {children}
      </body>
    </html>
  );
}
