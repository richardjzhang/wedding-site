import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="h-screen pb-8 px-8">
        <div className="w-full h-full relative">
          <div className="w-full h-[80%] relative">
            <Image
              alt="Proposal photo"
              src="/assets/images/proposal-grid.webp"
              fill
              objectFit="cover"
            />
          </div>
          <div className="flex flex-col items-center text-black bg-white opacity-95 border border-zinc-200 shadow-md w-1/2 min-h-2/5 h-2/5 absolute top-[48%] left-1/4 rounded-lg p-8">
            <Image
              alt="Cherry Blossom"
              src="/assets/images/cherry-blossom-flower.png"
              width={60}
              height={20}
            />
            <h1 className="font-title text-7xl mb-3 mt-10">Annie + Richard</h1>
            <p className="font-body mt-4 text-lg tracking-widest">
              10 JANUARY 2025
            </p>
          </div>
        </div>
        <div className="flex flex-col text-black px-8 pb-20 pt-28 justify-end">
          <div className="flex flex-col text-center my-auto">
            <p>The wedding of</p>
            <h4 className="text-5xl mb-4 mt-6">Annie & Richard</h4>
          </div>
          <div className="flex justify-between">
            <p className="">Curzon Hall, Marsfield</p>
            <p className="">10 January 2025</p>
          </div>
        </div>
        <div className="flex w-full relative"></div>
      </section>
      <section className="bg-dark-500 py-14  mb:pb-6 grid grid-flow-row gap-4 row-span-4 h-screen">
        <div className="flex flex-col  w-full relative lg:h-full">
          <div className="absolute h-full w-full bg-dark-400 bg-blur-2px lg:hidden"></div>
          <div className="flex flex-col w-full text-black text-center h-auto  px-8 py-3.5 z-10 lg:my-auto">
            <p className="lg:hidden">Pernikahan dari</p>
            <h4 className="text-5xl lg:text-7xl mb-4 mt-6 ">The Wedding</h4>
            <p className="lg:hidden  ">01 Januari 2021</p>
          </div>
        </div>
        <div className="flex w-full px-8 text-black  text-sm md:text-base lg:text-xl">
          <div className="flex flex-col w-1/2 text-center px-2 break-words">
            <p>Putra dari</p>
            <p>Bapak Badril Munir</p>
            <p>Ibu Sartinah</p>
          </div>
          <div className="flex flex-col w-1/2 text-center px-2 break-words ">
            <p>Putra dari</p>
            <p>Bapak Badril Munir</p>
            <p>Ibu Sartinah</p>
          </div>
        </div>
        <div className="flex flex-col mx-auto h-40 lg:h-full items-center justify-center w-full px-8">
          <div className="flex flex-col md:flex-row w-full">
            <div className="flex w-full my-2 h-16 lg:h-20 md:justify-center">
              <Image
                src="/assets/icons/ring.svg"
                width={64}
                height={64}
                alt="Ring image"
                className="color-black mr-2"
              />
              <div className="flex flex-col text-black  justify-between h-full">
                <p className="text-base md:text-lg lg:text-3xl">
                  Akad pernikahan{" "}
                </p>
                <p className="text-xs md:text-base lg:text-lg">
                  Pukul 08.00 s.d 10.00 WIB
                </p>
              </div>
            </div>

            <div className="flex w-full my-2 h-16 lg:h-20 md:justify-center">
              <Image
                alt="Resepsi image"
                src="/assets/icons/resepsi.svg"
                width={64}
                height={64}
              />
              <div className="flex flex-col text-black  justify-between h-full">
                <p className="text-base md:text-lg lg:text-3xl">Resepsi </p>
                <p className="text-xs md:text-base lg:text-lg">
                  Pukul 10.00 s.d Selesai
                </p>
              </div>
            </div>
          </div>
          <p className="hidden md:block mt-12 lg:mt-auto mx-auto text-lg text-black ">
            Bertempat di mempelai wanita, Perum permata hijau Blok F no 45
          </p>
        </div>
        <div className="flex mx-auto h-32 lg:h-full items-start lg:items-end justify-start w-full px-8">
          <button className="mt-6 px-6 md:px-12 py-2 md:py-3 flex justify-center items-center border-black border rounded-l-full rounded-r-full mx-auto text-black  text-sm md:text-base">
            RSVP
          </button>
        </div>
      </section>
      <section
        id="gallery"
        className="bg-dark-500 pt-8 md:pt-0 lg:pt-32 pb-24 lg:pb-8 grid grid-flow-row gap-4 grid-rows-7 lg:grid-rows-5 grid-cols-2 lg:grid-cols-3 h-screen px-4 lg:px-8"
      >
        <h1 className="col-span-2  text-5xl  my-auto mx-auto text-black lg:hidden">
          Gallery
        </h1>
        <div className="flex row-span-3 ">
          <Image
            src="/assets/gallery-mobile/photo-1.png"
            alt="Picture of the author"
            width={500}
            height={500}
            objectFit="cover"
            quality={100}
            loading="lazy"
          />
        </div>
        <div className="flex  row-start-3 col-start-2 row-span-3 lg:row-span-5 bg-white">
          <Image
            src="/assets/gallery-mobile/photo-2.png"
            alt="Picture of the author"
            width={500}
            height={500}
            objectFit="cover"
            quality={100}
            loading="lazy"
          />
        </div>
        <div className="flex row-span-1 col-start-2 lg:col-start-3 row-start-2  lg:row-span-2">
          <Image
            src="/assets/gallery-mobile/photo-3.png"
            alt="Picture of the author"
            width={500}
            height={500}
            objectFit="cover"
            quality={100}
            loading="lazy"
          />
        </div>
        <div className="flex row-span-1 lg:row-span-3">
          <Image
            src="/assets/gallery-mobile/photo-4.png"
            alt="Picture of the author"
            width={500}
            height={500}
            objectFit="cover"
            quality={100}
            loading="lazy"
          />
        </div>
        <div className="flex row-span-2 lg:row-span-2 col-span-2 lg:col-span-1 w-full relative">
          <Image
            src="/assets/gallery-mobile/photo-5.png"
            alt="Picture of the author"
            layout="fill"
            objectFit="cover"
            quality={100}
            loading="lazy"
          />
        </div>
      </section>
    </>
  );
}
