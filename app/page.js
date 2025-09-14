import Image from "next/image";
import Link from "next/link";

import bgImage from "@/public/bg.png";

const Page = () => {
  return (
    <main className="mt-16 sm:mt-20 lg:mt-24">
      <Image
        src={bgImage}
        alt="Mountains and forests with two cabins"
        fill
        className="object-cover object-top"
        placeholder="blur"
        quality={80}
      />

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-primary-50 mb-6 sm:mb-8 lg:mb-10 tracking-tight font-normal">
          Welcome to paradise.
        </h1>
        <Link
          href="/cabins"
          className="bg-accent-500 px-6 sm:px-8 py-4 sm:py-6 text-primary-800 text-base sm:text-lg font-semibold hover:bg-accent-600 transition-all inline-block"
        >
          Explore luxury cabins
        </Link>
      </div>
    </main>
  );
};

export default Page;
