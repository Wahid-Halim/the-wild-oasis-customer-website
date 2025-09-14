"use client";

import Link from "next/link";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const Navigation = ({ session }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:block z-10 text-xl">
        <ul className="flex gap-8 lg:gap-16 items-center">
          <li>
            <Link
              href="/cabins"
              className="hover:text-accent-400 transition-colors"
            >
              Cabins
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="hover:text-accent-400 transition-colors"
            >
              About
            </Link>
          </li>
          <li>
            {session?.user?.image ? (
              <Link
                href="/account"
                className="hover:text-accent-400 transition-colors flex items-center gap-2 lg:gap-4"
              >
                <img
                  src={session.user.image}
                  className="h-6 lg:h-8 rounded-full"
                  alt="user profile image"
                  referrerPolicy="no-referrer"
                />
                <span className="hidden lg:inline">Guest area</span>
              </Link>
            ) : (
              <Link
                href="/account"
                className="hover:text-accent-400 transition-colors"
              >
                Guest area
              </Link>
            )}
          </li>
        </ul>
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden z-20 p-2"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        {isMenuOpen ? (
          <XMarkIcon className="h-6 w-6" />
        ) : (
          <Bars3Icon className="h-6 w-6" />
        )}
      </button>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden absolute top-full left-0 right-0 bg-primary-950 border-b border-primary-900 z-100">
          <ul className="flex flex-col px-4 py-4 space-y-4">
            <li>
              <Link
                href="/cabins"
                className="block py-2 hover:text-accent-400 transition-colors text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Cabins
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="block py-2 hover:text-accent-400 transition-colors text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              {session?.user?.image ? (
                <Link
                  href="/account"
                  className="block py-2 hover:text-accent-400 transition-colors text-lg flex items-center gap-3"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <img
                    src={session.user.image}
                    className="h-8 rounded-full"
                    alt="user profile image"
                    referrerPolicy="no-referrer"
                  />
                  <span>Guest area</span>
                </Link>
              ) : (
                <Link
                  href="/account"
                  className="block py-2 hover:text-accent-400 transition-colors text-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Guest area
                </Link>
              )}
            </li>
          </ul>
        </nav>
      )}
    </>
  );
};

export default Navigation;
