"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
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
      <Link className="max-md:invisible" href="#The-Wedding">
        <p className="font-bellefair tracking-widest text-xl text-slate-700 hover:text-black cursor-pointer">
          The Wedding
        </p>
      </Link>
      <div className="flex justify-center items-center md:mx-24">
        <p className="w-fit text-4xl font-fancy">A</p>
        <div className="mx-1 w-16 h-16 relative -rotate-[64deg] scale-y-[-1] -mt-2">
          <Image
            alt="Cherry Blossom"
            src="/assets/images/cherry-blossom.webp"
            fill
            objectFit="contain"
          />
        </div>
        <p className="w-fit text-4xl font-fancy">R</p>
      </div>
      <div className="flex items-center max-md:invisible">
        <p className="font-bellefair tracking-widest text-xl text-slate-500">
          RSVP
        </p>
        <sub className="mt-4 text-slate-500">Coming soon</sub>
      </div>
    </div>
  );
}
