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
  title: "Annie & Richard",
  description: "Wedding invitation website for Annie & Richard",
  openGraph: {
    images: ["https://wedding.richardjzhang.com/assets/images/proposal.webp"],
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
        className={`${bellefair.variable} ${lux.variable} bg-gradient-to-r from-pink-50 via-blue-50 to-pink-50`}
      >
        <div className="overflow-x-hidden">
          <Header />
          <div className="mx-auto">{children}</div>
        </div>
      </body>
    </html>
  );
}
