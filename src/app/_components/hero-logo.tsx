'use client';

import Link from "next/link";
import { Logo } from "./logo";

export function HeroLogo() {
  return (
    <section className="flex-col flex items-center justify-center mt-16 mb-16 md:mb-12">
      <Link href="/">
        <Logo />
      </Link>
    </section>
  );
};
