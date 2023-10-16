import "../styles/globals.scss";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import PathDetail from "@/components/PathDetail";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next 13",
  description: "Next 13 demo app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <PathDetail />
        {children}
      </body>
    </html>
  );
}
