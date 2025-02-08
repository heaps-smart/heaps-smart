import Link from "next/link";
import { Logo } from "./logo";


type HeaderVariant = "light" | "dark" | "coffee";

interface HeaderProps {
  variant?: HeaderVariant;
}

export function Header({ variant = "light" }: HeaderProps) {
  const getStyles = (variant: HeaderVariant) => {
    switch (variant) {
      case "dark":
        return {
          textColor: "text-white",
          bgColor: "bg-white",
          logoFill: "white",
        };
      case "coffee":
        return {
          textColor: "text-brown-900",
          bgColor: "bg-brown-900",
          logoFill: "brown",
        };
      default: // light
        return {
          textColor: "text-black",
          bgColor: "bg-black",
          logoFill: "black",
        };
    }
  };

  const { textColor, bgColor, logoFill } = getStyles(variant);

  return (
    <section
      className={`flex-col md:flex-row flex items-center justify-between pt-16 mb-16 md:mb-12 ${textColor}`}
    >
      <Link href="/" aria-label="Go to homepage">
        {variant === "coffee" ? (
          <img src="/assets/img/coffee-sessions.jpg" alt="Heaps Smart Coffee Sessions" />
        ) : (
          <Logo fill={logoFill} aria-label="Heaps Smart logo" />
        )}
      </Link>
      <nav className="mt-5 md:mt-0">
        <ul className="flex space-x-6 text-lg">
            <li>
            <Link
              href="/about"
              className={`font-semibold duration-200 transition-colors tracking-tight relative group ${textColor}`}
              aria-label="About page"
            >
              About
              <span
              className={`absolute -bottom-1 left-0 w-0 h-[2px] ${bgColor} transition-all duration-300 group-hover:w-full`}
              ></span>
            </Link>
            </li>
            <li>
            <Link
              href="/projects"
              className={`font-semibold duration-200 transition-colors tracking-tight relative group ${textColor}`}
              aria-label="Projects page"
            >
              Projects
              <span
              className={`absolute -bottom-1 left-0 w-0 h-[2px] ${bgColor} transition-all duration-300 group-hover:w-full`}
              ></span>
            </Link>
            </li>
          <li>
            <Link
              href="/training"
              className={`font-semibold duration-200 transition-colors tracking-tight relative group ${textColor}`}
              aria-label="About page"
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
    </section>
  );
}
