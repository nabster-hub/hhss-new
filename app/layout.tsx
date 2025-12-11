import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HHSS – Human Health Support System: Revolutionizing Healthcare with Decentralized AI",
  description: "An infrastructure that unifies a future-focused medical data standard, AI-driven intelligence, and national governance tools — establishing the foundation for a country’s transition to predictive population-health management",
    alternates: {
        canonical: './',
    },
    openGraph: {
        title: "HHSS – Human Health Support System: Revolutionizing Healthcare with Decentralized AI",
        description: "An infrastructure that unifies a future-focused medical data standard, AI-driven intelligence, and national governance tools — establishing the foundation for a country’s transition to predictive population-health management",
        images: ["/13106b318036c693e8e0ca9f9e5a0a808b305fa6.png"],
    },
    icons: {
        icon:[
            { url: '/favicon.ico', type: 'image/x-icon' },
            { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
            { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
        ],
        apple: "/apple-touch-icon.png",
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
