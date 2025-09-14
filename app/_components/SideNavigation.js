"use client";

import {
  CalendarDaysIcon,
  HomeIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import SignOutButton from "@/app/_components/SignOutButton";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  {
    name: "Home",
    href: "/account",
    icon: <HomeIcon className="h-5 w-5 text-primary-600" />,
  },
  {
    name: "Reservations",
    href: "/account/reservations",
    icon: <CalendarDaysIcon className="h-5 w-5 text-primary-600" />,
  },
  {
    name: "Guest profile",
    href: "/account/profile",
    icon: <UserIcon className="h-5 w-5 text-primary-600" />,
  },
];

function SideNavigation() {
  const pathname = usePathname();

  return (
    <nav className="border-r border-primary-900 w-full">
      <ul className="flex flex-col gap-2 h-full text-lg ">
        {navLinks.map((link) => (
          <li key={link.name}>
            <Link
              className={`py-3 px-5 max-md:px-2 max-md:gap-1 hover:bg-primary-900 hover:text-primary-100 transition-colors flex items-center gap-4 font-semibold text-primary-200 ${
                pathname === link.href ? "bg-primary-900" : ""
              }`}
              href={link.href}
            >
              {link.icon}
              <span className="max-md:hidden">{link.name}</span>
            </Link>
          </li>
        ))}

        <li className="mt-auto max-md:mt-[10px] ">
          <SignOutButton />
        </li>
      </ul>
    </nav>
  );
}

export default SideNavigation;
