import Image from "next/image";
import CountdownTimer from "@/components/CountdownTimer";
import { RSVPForm } from "./rsvp-form";

export default async function Home() {
  return (
    <>
      <section className="h-[550px] px-8 md:h-screen md:-mb-32">
        <div className="w-full h-full relative flex flex-col">
          <div className="absolute top-0 w-full h-[400px] md:h-3/4">
            <div className="w-full h-full relative ">
              <Image
                alt="Proposal photo"
                src="/assets/images/japan-ring.png"
                fill
                objectFit="cover"
              />
            </div>
          </div>
          <div className="flex flex-col items-center text-black text-center bg-white opacity-95 border border-zinc-200 shadow-md w-[90%] min-h-fit rounded-lg pt-8 px-8 pb-12 mx-auto my-auto md:w-[65%] md:left-[17.5%] lg:w-1/2 lg:left-1/4 top-[38%] absolute left-[5%]">
            <Image
              alt="Cherry Blossom"
              src="/assets/images/cherry-blossom-flower.webp"
              width={60}
              height={20}
              className="max-md:invisible max-md:h-0"
            />
            <div className="mb-3 mt-8">
              <h2 className="font-fancy text-5xl md:text-6xl lg:text-7xl">
                Annie + Richard
              </h2>
            </div>
            <div className="mb-8 mt-4">
              <p className="font-bellefair text-md tracking-widest md:text-lg">
                10 JANUARY 2025
              </p>
            </div>
            <CountdownTimer date="2025-01-10 16:00:00" />
          </div>
        </div>
      </section>
      <section
        id="The-Wedding"
        className="min-h-screen pt-32 pb-16 md:pb-24 px-8 text-slate-800"
      >
        <h3 className="text-4xl mb-7 font-bellefair md:text-5xl">
          The Wedding
        </h3>
        <div className="flex flex-col items-start gap-10 px-1 md:px-3 md:flex-row md:gap-12">
          <div className="md:w-60">
            <h4 className="uppercase text-sm font-semibold tracking-widest">
              The venue
            </h4>
            <p className="mt-2 font-semibold md:mt-3">Curzon Hall</p>
            <p className="text-sm text-slate-700">53 Agincourt Rd</p>
            <p className="text-sm text-slate-700">Marsfield, NSW 2122</p>
          </div>
          <div className="md:w-60">
            <h4 className="uppercase text-sm font-semibold tracking-widest">
              What to wear
            </h4>
            <p className="mt-2 font-semibold md:mt-3">Keep it classy</p>
            <p className="text-sm text-slate-700">
              Anything smart casual or above is perfect for the occasion.
            </p>
          </div>
          <div className="md:w-60">
            <h4 className="uppercase text-sm font-semibold tracking-widest">
              Public Transport
            </h4>
            <p className="mt-2 font-semibold md:mt-3">Bus is your best bet</p>
            <p className="text-sm text-slate-700">
              The closest bus stop is right by the intersection between
              Balaclava Rd and Agincourt Rd.
            </p>
          </div>
          <div className="md:w-60">
            <h4 className="uppercase text-sm font-semibold tracking-widest">
              Parking
            </h4>
            <p className="mt-2 font-semibold md:mt-3">Space for everyone</p>
            <p className="text-sm text-slate-700">
              There is plenty of parking available on premises as well as on the
              street.
            </p>
          </div>
        </div>
        <div className="mt-10 h-[950px] flex items-start gap-16 flex-col lg:flex-row lg:h-[600px] lg:mt-20">
          <div className="w-full h-full relative shadow-lg lg:w-1/2">
            <Image
              alt="Proposal photo"
              src="/assets/images/curzon-hall.webp"
              fill
              objectFit="cover"
            />
          </div>
          <div>
            <h4 className="font-bellefair text-3xl text-slate-800">
              What to expect
            </h4>
            <div className="mt-8 flex flex-col gap-6">
              <div className="flex items-start gap-20 lg:gap-32">
                <p className="text-xl font-semibold text-nowrap w-16">
                  3:45 <sup>pm</sup>
                </p>
                <div className="md:w-[400px]">
                  <h5 className="mt-1 uppercase font-semibold tracking-widest">
                    The Ceremony
                  </h5>
                  <p className="mt-2 text-sm text-slate-700">
                    Will be held at the Garden Chateau right by the archway.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-20 lg:gap-32">
                <p className="text-xl font-semibold text-nowrap w-16">
                  5:00 <sup>pm</sup>
                </p>
                <div className="md:w-[400px]">
                  <h5 className="mt-1 uppercase font-semibold tracking-widest">
                    Refreshments
                  </h5>
                  <p className="mt-2 text-sm text-slate-700">
                    Enjoy some light refreshments in Agincourt Room before the
                    reception begins.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-20 lg:gap-32">
                <p className="text-xl font-semibold text-nowrap w-16">
                  5:30 <sup>pm</sup>
                </p>
                <div className="md:w-[400px]">
                  <h5 className="mt-1 uppercase font-semibold tracking-widest">
                    Reception
                  </h5>
                  <p className="mt-2 text-sm text-slate-700">
                    Food, drinks, dancing, and good times await the evening!
                    Enjoy the night with us.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-20 lg:gap-32">
                <p className="text-xl font-semibold text-nowrap w-16">
                  10:30 <sup>pm</sup>
                </p>
                <div className="md:w-[400px]">
                  <h5 className="mt-1 uppercase font-semibold tracking-widest">
                    Closing time
                  </h5>
                  <p className="mt-2 text-sm text-slate-700">
                    The night is over, but the memories will last a lifetime.
                    Thanks for joining us on our special day!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="py-20 px-8 text-slate-800 h-[900px] flex flex-col items-center relative"
        id="RSVP"
      >
        <div className="top-0 -left-5 absolute md:-top-20">
          <div className="w-[250px] h-[224px] relative md:w-[450px] md:h-[338px]">
            <Image
              alt="Proposal photo"
              src="/assets/images/cherry-blossom-large-blue.webp"
              fill
              objectFit="cover"
            />
          </div>
        </div>
        <div className="bottom-0 right-0 absolute md:-bottom-20">
          <div className="w-[250px] h-[224px] relative md:w-[450px] md:h-[338px]">
            <Image
              alt="Proposal photo"
              src="/assets/images/cherry-blossom-large.webp"
              fill
              objectFit="cover"
            />
          </div>
        </div>
        <div className="mb-20 w-full h-4 bg-slate-900"></div>
        <div className="flex items-center h-full md:gap-40 lg:gap-60">
          <div className="flex flex-col gap-32 mb-auto max-md:invisible">
            <div>
              <p className="text-9xl font-bellefair font-semibold">R</p>
            </div>
            <div>
              <p className="mt-10 text-9xl font-bellefair font-semibold">S</p>
            </div>
          </div>
          <div className="my-auto flex flex-col justify-center">
            <h3 className="text-4xl mb-4 font-bellefair text-center">
              Enter your RSVP Code
            </h3>
            <RSVPForm />
          </div>
          <div className="flex flex-col gap-32 mt-auto max-md:invisible">
            <div>
              <p className="text-9xl font-bellefair font-semibold ">V</p>
            </div>
            <div>
              <p className="mt-10 text-9xl font-bellefair font-semibold">P</p>
            </div>
          </div>
        </div>
        <div className="mt-20 w-full h-4 bg-slate-900"></div>
      </section>
    </>
  );
}
