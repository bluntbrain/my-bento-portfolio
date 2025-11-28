import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Ishan Lakhwani",
  description: "React.js, React Native, Node.js, Solana, Rust, Go, Solidity",
  icons: {
    icon: [
      { url: "/icons8-solana-gradient-16.png", sizes: "16x16", type: "image/png" },
      { url: "/icons8-solana-gradient-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icons8-solana-gradient-96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: "/icons8-solana-gradient-96.png",
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
