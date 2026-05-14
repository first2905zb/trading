import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Forex Academy — เรียน Forex ตั้งแต่พื้นฐานจนเทรดเป็น",
  description: "คอร์สสอน Forex ฟรีสำหรับมือใหม่ พร้อม TradingView, Risk Management, Price Action และการอ่านกราฟแบบมืออาชีพ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th" className="dark">
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
