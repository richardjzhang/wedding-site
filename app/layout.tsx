import type { Metadata } from "next";
import Image from "next/image";
import { Bellefair, Mrs_Saint_Delafield } from "next/font/google";
import Footer from "@/components/Footer";
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
  variable: "--font-lux",
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
      <body className={`${bellefair.variable} ${lux.variable}`}>
        <div className="bg-gradient-to-r from-pink-50 to-blue-50 w-full">
          <div className="flex justify-center items-center w-full pt-6 pb-6 text-black">
            <p className="mr-4 text-4xl font-title">A</p>
            <Image
              className="rotate-[17deg] scale-x-[-1] -mt-2"
              alt="Cherry Blossom"
              src="/assets/images/cherry-blossom.png"
              width={24}
              height={72}
            />
            <p className="ml-4 text-4xl font-title">R</p>
          </div>
          <div className="mx-auto">{children}</div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
