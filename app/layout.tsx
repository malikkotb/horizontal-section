import { DM_Serif_Display } from "next/font/google";
import "./globals.css";
import SmoothScrolling from "./components/SmoothScrolling";

const serif = DM_Serif_Display({ subsets: ["latin"], weight: "400" });
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={serif.className}>
        <SmoothScrolling>{children}</SmoothScrolling>
      </body>
    </html>
  );
}
