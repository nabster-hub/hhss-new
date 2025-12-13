import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://hhss.global'),
  title: "HHSS — The Future of Health",
  description: "An infrastructure that unifies a future-focused medical data standard, AI-driven intelligence, and national governance tools — establishing the foundation for a country’s transition to predictive population-health management",
    alternates: {
        canonical: './',
    },
    openGraph: {
        title: "Human Health Support System: Predictive, Population-Health Governance",
        description: "An infrastructure that unifies a future-focused medical data standard, AI-driven intelligence, and national governance tools — establishing the foundation for a country’s transition to predictive population-health management",
        images: ["/13106b318036c693e8e0ca9f9e5a0a808b305fa6.png"],
    },
    icons: {
        icon:[
            { url: '/favicon.png', type: 'image/png' },
        ]
    }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
