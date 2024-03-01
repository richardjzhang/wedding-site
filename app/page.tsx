import Image from "@/components/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="h-screen relative w-screen">
        {/* <text className="tracking-widest text-sm absolute left-[45%] top-1/3 z-10">
          WEDDING OF
        </text> */}
        <Image
          layout="fill"
          objectFit="contain"
          src="/flowers-hero-2-alt.webp"
          alt="hero"
        />
      </div>
      <div className="p-24 ">WEDDING OF</div>
    </main>
  );
}
