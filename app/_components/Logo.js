import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.png";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-2 sm:gap-4 z-10">
      <Image
        src={logo}
        height="40"
        width="40"
        alt="The Wild Oasis logo"
        quality={100}
        className="sm:h-[50px] sm:w-[50px] lg:h-[60px] lg:w-[60px]"
      />

      <span className="text-lg sm:text-xl font-semibold text-primary-100">
        <span className="hidden sm:inline">The Wild Oasis</span>
        <span className="sm:hidden">Wild Oasis</span>
      </span>
    </Link>
  );
};

export default Logo;
