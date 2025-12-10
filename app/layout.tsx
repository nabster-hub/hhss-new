import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HHSS – Future of Health",
  description: "Discover HHSS, the world’s first decentralized AI healthcare system designed to keep you youthful and disease-free. Take full control of your health with personalized insights, continuous monitoring, and global access to top medical professionals. Join the future of healthcare today",
    alternates: {
        canonical: './',
    },
    openGraph: {
        title: "HHSS – Human Health Support System: Revolutionizing Healthcare with Decentralized AI",
        description: "Discover HHSS, the world’s first decentralized AI healthcare system designed to keep you youthful and disease-free. Take full control of your health with personalized insights, continuous monitoring, and global access to top medical professionals. Join the future of healthcare today",
        images: ["/13106b318036c693e8e0ca9f9e5a0a808b305fa6.png"],
    },
    icons: {
        icon:[
            { url: '/logo.svg', type: 'image/svg+xml' },
        ],
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
