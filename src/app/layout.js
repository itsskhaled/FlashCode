import { Mulish, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LayoutScrollSmoother from "./ScrollSmoother";
import NabBar from "@/Components/NavBar";

const mulish = Mulish({
  subsets: ["latin"],
  weight: "400",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "FlashCode",
  description:
    "An interactive promotional interface that elevates the Instagram experience to a new visual level, highlighting content, engagement, and digital identity in a modern style.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={mulish.className}>
        <NabBar />
        <LayoutScrollSmoother>{children}</LayoutScrollSmoother>
      </body>
    </html>
  );
}
