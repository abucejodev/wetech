import "@/core/styles/globals.css";
import Poviders from "@/core/providers";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WeTech",
  description: "WeTech",
};

const Root: Layout = ({ children }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Poviders>{children}</Poviders>
      </body>
    </html>
  );
};

export default Root;
