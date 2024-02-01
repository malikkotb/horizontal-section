"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScrolling from "./components/SmoothScrolling";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {


  return (
    <html lang="en">
      <body className={inter.className}>
        {" "}
        <SmoothScrolling>
          {children}
          </SmoothScrolling>
      </body>
    </html>
  );
}
