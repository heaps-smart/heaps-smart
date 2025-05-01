"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

interface NavbarProps {
  textColor: string;
  bgColor: string;
}

export function Navbar({ textColor, bgColor }: NavbarProps) {
  return (
    <nav className="mt-5 md:mt-0">
      <ul className="flex space-x-6 text-lg">
        <li>
          <Link
            href="/innovation-labs"
            className={`font-semibold duration-200 transition-colors tracking-tight relative group ${textColor}`}
            aria-label="Innovation Labs page"
          >
            Innovation
            <span
              className={`absolute -bottom-1 left-0 w-0 h-[2px] ${bgColor} transition-all duration-300 group-hover:w-full`}
            ></span>
          </Link>
        </li>
        <li>
          <Link
            href="/product-development"
            className={`font-semibold duration-200 transition-colors tracking-tight relative group ${textColor}`}
            aria-label="Projects page"
          >
            Development
            <span
              className={`absolute -bottom-1 left-0 w-0 h-[2px] ${bgColor} transition-all duration-300 group-hover:w-full`}
            ></span>
          </Link>
        </li>
        <li>
          <Link
            href="/training"
            className={`font-semibold duration-200 transition-colors tracking-tight relative group ${textColor}`}
            aria-label="Training page"
          >
            Training
            <span
              className={`absolute -bottom-1 left-0 w-0 h-[2px] ${bgColor} transition-all duration-300 group-hover:w-full`}
            ></span>
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className={`font-semibold duration-200 transition-colors tracking-tight relative group ${textColor}`}
            aria-label="Contact page"
          >
            Contact
            <span
              className={`absolute -bottom-1 left-0 w-0 h-[2px] ${bgColor} transition-all duration-300 group-hover:w-full`}
            ></span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
