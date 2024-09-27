'use client';

import Link from "next/link";
import { Logo } from "./logo";

export function Header() {
  return (
    <section className="flex-col md:flex-row flex items-center justify-between mt-16 mb-16 md:mb-12">
      <Link href="/">
        <Logo />
      </Link>
      <nav className="mt-5 md:mt-0">
        <ul className="flex space-x-6 text-lg">
          <li>
            <Link href="#work" className="font-semibold duration-200 transition-colors tracking-tight">
              What we do
            </Link>
          </li>
          <li>
            <Link href="#about" className="font-semibold duration-200 transition-colors tracking-tight">
              About us
            </Link>
          </li>
          <li>
            <Link href="#contact" className="font-semibold duration-200 transition-colors tracking-tight">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </section>
  );
};
