import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="h-screen">
        <Image
          layout="fill"
          objectFit="contain"
          src="/flowers-hero-transparent-hd.png"
          alt="hero"
        />
      </div>
      <div className="p-24">hello</div>
    </main>
  );
}
