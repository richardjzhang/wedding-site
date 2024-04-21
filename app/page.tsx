import Image from "next/image";
import CountdownTimer from "@/components/CountdownTimer";

export default function Home() {
  return (
    <>
      <section className="h-screen px-8">
        <div className="w-full h-full relative">
          <div className="w-full h-3/4 relative">
            <Image
              alt="Proposal photo"
              src="/assets/images/proposal-grid.webp"
              fill
              objectFit="cover"
            />
          </div>
          <div className="flex flex-col items-center text-black text-center bg-white opacity-95 border border-zinc-200 shadow-md w-1/2 h-fit absolute top-[45%] left-1/4 rounded-lg pt-8 px-8 pb-12">
            <Image
              alt="Cherry Blossom"
              src="/assets/images/cherry-blossom-flower.png"
              width={60}
              height={20}
            />
            <h2 className="font-fancy text-7xl mb-3 mt-8">Annie + Richard</h2>
            <p className="font-bellefair mt-4 mb-8 text-lg tracking-widest">
              10 JANUARY 2025
            </p>
            <CountdownTimer date="2025-01-10 16:00:00" />
          </div>
        </div>
      </section>
      <section className="min-h-screen py-4 px-8 text-slate-800">
        <h3 className="text-5xl mb-7 font-bellefair text-6xl">The Wedding</h3>
        <div className="flex items-start gap-12 px-3">
          <div className="w-60">
            <h4 className="uppercase font-semibold tracking-widest">
              The venue
            </h4>
            <p className="mt-3 font-semibold">Curzon Hall</p>
            <p className="text-sm text-slate-700">53 Agincourt Rd</p>
            <p className="text-sm text-slate-700">Marsfield, NSW 2122</p>
          </div>
          <div className="w-60">
            <h4 className="uppercase text-sm font-semibold tracking-widest">
              What to wear
            </h4>
            <p className="mt-3 font-semibold">Keep it classy</p>
            <p className="text-sm text-slate-700">
              Anything smart casual or above is perfect for the occasion.
            </p>
          </div>
          <div className="w-60">
            <h4 className="uppercase text-sm font-semibold tracking-widest">
              Public Transport
            </h4>
            <p className="mt-3 font-semibold">Bus is your best bet</p>
            <p className="text-sm text-slate-700">
              The closest bus stop is right by the intersection between
              Balaclava Rd and Agincourt Rd.
            </p>
          </div>
          <div className="w-60">
            <h4 className="uppercase text-sm font-semibold tracking-widest">
              Parking
            </h4>
            <p className="mt-3 font-semibold">Space for everyone</p>
            <p className="text-sm text-slate-700">
              There is plenty of parking available on premises as well as on the
              street.
            </p>
          </div>
        </div>
        <div className="mt-20 h-[600px] flex items-start gap-16">
          <div className="w-1/2 h-full relative shadow-lg">
            <Image
              alt="Proposal photo"
              src="/assets/images/curzon-hall.webp"
              fill
              objectFit="cover"
            />
          </div>
          <div>
            <h4 className="font-bellefair text-3xl text-slate-800">
              Schedule of Events
            </h4>
            <div className="mt-8 flex flex-col gap-6">
              <div className="flex gap-32 items-start">
                <p className="text-xl font-semibold text-nowrap w-16">
                  4:00 <sup>pm</sup>
                </p>
                <div className="w-[400px]">
                  <h5 className="mt-1 uppercase font-semibold tracking-widest">
                    The Ceremony
                  </h5>
                  <p className="mt-2 text-sm">
                    Will be held at the Garden Chateau right by the archway.
                  </p>
                </div>
              </div>
              <div className="flex gap-32 items-start">
                <p className="text-xl font-semibold text-nowrap w-16">
                  5:00 <sup>pm</sup>
                </p>
                <div className="w-[400px]">
                  <h5 className="mt-1 uppercase font-semibold tracking-widest">
                    Refreshments
                  </h5>
                  <p className="mt-2 text-sm">
                    Enjoy some light refreshments in Agincourt Room before the
                    reception begins.
                  </p>
                </div>
              </div>
              <div className="flex gap-32 items-start">
                <p className="text-xl font-semibold text-nowrap w-16">
                  5:30 <sup>pm</sup>
                </p>
                <div className="w-[400px]">
                  <h5 className="mt-1 uppercase font-semibold tracking-widest">
                    Reception
                  </h5>
                  <p className="mt-2 text-sm">
                    Food, drinks, dancing, and good times await the evening!
                    Enjoy the night with us.
                  </p>
                </div>
              </div>
              <div className="flex gap-32 items-start">
                <p className="text-xl font-semibold text-nowrap w-16">
                  10:30 <sup>pm</sup>
                </p>
                <div className="w-[400px]">
                  <h5 className="mt-1 uppercase font-semibold tracking-widest">
                    Closing time
                  </h5>
                  <p className="mt-2 text-sm">
                    The night is over, but the memories will last a lifetime.
                    We&apos;ll likely take this to a pub nearby!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="gallery"
        className="py-20 px-8 text-slate-800 min-h-screen flex flex-col items-center"
      >
        <h3 className="text-5xl mb-7 font-bellefair text-6xl text-center">
          RSVP
        </h3>
      </section>
    </>
  );
}
