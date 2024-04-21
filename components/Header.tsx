"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { classNames } from "@/utils/classnames";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div
      className={classNames(
        "sticky top-0 z-20 bg-gradient-to-r from-pink-50 to-blue-50 flex justify-center items-center w-full pt-6 pb-6 text-black",
        isScrolled ? "shadow-md border-b border-zinc-200" : ""
      )}
    >
      <p className="mr-4 text-4xl font-fancy">A</p>
      <Image
        className="rotate-[17deg] scale-x-[-1] -mt-2"
        alt="Cherry Blossom"
        src="/assets/images/cherry-blossom.png"
        width={24}
        height={72}
      />
      <p className="ml-4 text-4xl font-fancy">R</p>
    </div>
  );
}
