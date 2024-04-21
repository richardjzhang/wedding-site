import type { Metadata } from "next";
import { Bellefair, Mrs_Saint_Delafield } from "next/font/google";
import Header from "@/components/Header";
import "./globals.css";
// WindSong
const bellefair = Bellefair({
  subsets: ["latin"],
  variable: "--font-bellefair",
  weight: "400",
});
const lux = Mrs_Saint_Delafield({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-mrs-saint-delafield",
});

export const metadata: Metadata = {
  title: "Annie & Richard Wedding",
  description: "Wedding invitation website for Annie & Richard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bellefair.variable} ${lux.variable} bg-gradient-to-r from-pink-50 to-blue-50`}
      >
        <div className="w-full">
          <Header />
          <div className="mx-auto">{children}</div>
        </div>
      </body>
    </html>
  );
}
