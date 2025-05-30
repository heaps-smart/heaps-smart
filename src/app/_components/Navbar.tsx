"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavbarProps {
  textColor: string;
  bgColor: string;
}

export function Navbar({ textColor, bgColor }: NavbarProps) {
  const pathname = usePathname();

  const navItems = [
    { label: "Innovation", href: "/innovation" },
    { label: "Development", href: "/product-development" },
    { label: "Training", href: "/training" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <nav className="mt-5 md:mt-0 w-full">
      <ul className="flex flex-col items-center md:items-start md:flex-row md:justify-end gap-y-3 md:gap-x-6 text-lg">
        {navItems.map(({ label, href }) => {
          const isActive = new RegExp(`^${href}/?$`).test(pathname);

          return (
            <li key={href}>
              <Link
                href={href}
                className={`font-semibold tracking-tight relative group transition-colors ${textColor}`}
                aria-label={`${label} page`}
              >
                {label}
                <span
                  className={`absolute -bottom-1 left-0 h-[2px] ${bgColor} transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}