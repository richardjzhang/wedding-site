import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <div className=" fixed lg:hidden bottom-0 mb-1 mx-1 right-0 left-0 z-20">
      <div className="bg-dark-500 w-full px-6 rounded-full shadow border-opacity-20 border border-white">
        <ul className=" flex items-center justify-evenly text-white text-xs font-light py-2 md:py-3">
          <li className="flex items-center font-medium  flex-col px-2 py-1">
            <Image
              src="/assets/icons/home.svg"
              alt="home"
              width={24}
              height={24}
            />

            <p>Beranda</p>
          </li>
          <li className="flex items-center  flex-col px-2 py-1">
            <Image
              src="/assets/icons/calender.svg"
              alt="calender"
              width={24}
              height={24}
            />
            <p>Resepsi</p>
          </li>
          <li className="flex items-center  flex-col px-2 py-1">
            <Image
              src="/assets/icons/gallery.svg"
              alt="gallery"
              width={24}
              height={24}
            />
            <p>Galeri</p>
          </li>
          <li className="flex items-center  flex-col px-2 py-1">
            <Image
              src="/assets/icons/chat.svg"
              alt="chat"
              width={24}
              height={24}
            />
            <p>Ucapan</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
