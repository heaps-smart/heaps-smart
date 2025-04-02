"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

interface NavbarProps {
  variant?: "light" | "dark";
}

export default function Navbar({ variant = "dark" }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  
  const isActive = (path: string) => {
    return pathname === path;
  };

  const textColorClass = variant === "light" ? "text-black" : "text-white";

  return (
    <nav className={`w-full ${textColorClass}`}>
      <div className="flex justify-between items-center">
        <div className="flex space-x-4 md:space-x-8 text-lg">
          <Link href="/" className={`${isActive("/") ? "font-bold" : "font-medium"} transition-all hover:opacity-70`}>
            Home
          </Link>
          <Link href="/about" className={`${isActive("/about") ? "font-bold" : "font-medium"} transition-all hover:opacity-70`}>
            About
          </Link>
          <Link href="/projects" className={`${isActive("/projects") ? "font-bold" : "font-medium"} transition-all hover:opacity-70`}>
            Projects
          </Link>
          <Link href="/posts" className={`${isActive("/posts") ? "font-bold" : "font-medium"} transition-all hover:opacity-70`}>
            Blog
          </Link>
        </div>
      </div>
    </nav>
  );
}
