"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { classNames } from "@/utils/classnames";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileNavOpened, setMobileNavOpened] = useState(false);

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

  // Disable scrolling when mobile nav is opened
  useEffect(() => {
    if (mobileNavOpened) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [mobileNavOpened]);

  return (
    <>
      <div
        className={classNames(
          "sticky top-0 z-20 bg-gradient-to-r from-pink-50 to-blue-50 flex justify-center items-center w-full pt-6 pb-6 text-black px-8",
          isScrolled && !mobileNavOpened
            ? "shadow-md border-b border-zinc-200"
            : ""
        )}
      >
        <div
          className={classNames(
            "tham tham-e-squeeze tham-w-6 invisible max-md:visible absolute left-8",
            mobileNavOpened ? "tham-active" : ""
          )}
          onClick={() => setMobileNavOpened((prev) => !prev)}
        >
          <div className="tham-box">
            <div className="tham-inner bg-pink-400" />
          </div>
        </div>

        <Link className="max-md:invisible max-md:w-0" href="#The-Wedding">
          <p className="font-bellefair tracking-widest text-xl text-slate-700 hover:text-black cursor-pointer">
            The Wedding
          </p>
        </Link>
        <div className="flex justify-center items-center md:mx-24 mx-auto">
          <p className="w-fit md:text-4xl font-fancy text-2xl">A</p>
          <div className="mx-1 md:w-16 md:h-16 relative -rotate-[64deg] scale-y-[-1] -mt-2 w-12 h-12">
            <Image
              alt="Cherry Blossom"
              src="/assets/images/cherry-blossom.webp"
              fill
              objectFit="contain"
            />
          </div>
          <p className="w-fit md:text-4xl font-fancy text-2xl">R</p>
        </div>
        <div className="flex items-center max-md:invisible max-md:w-0">
          <p className="font-bellefair tracking-widest text-xl text-slate-500">
            RSVP
          </p>
          <sub className="mt-4 text-slate-500">Coming soon</sub>
        </div>
      </div>
      {mobileNavOpened && (
        <div className="fixed top-[104px] left-0 w-svw h-full bg-gradient-to-r from-pink-50 to-blue-50 opacity-95 z-10 overflow-hidden">
          <div className="flex flex-col gap-4 px-8">
            <Link
              className=""
              href="#The-Wedding"
              onClick={() => setMobileNavOpened((prev) => !prev)}
            >
              <p className="font-bellefair tracking-widest text-xl text-slate-700 hover:text-black cursor-pointer">
                The Wedding
              </p>
            </Link>
            <div className="flex items-center">
              <p className="font-bellefair tracking-widest text-xl text-slate-500">
                RSVP
              </p>
              <sub className="mt-4 text-slate-500">Coming soon</sub>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
