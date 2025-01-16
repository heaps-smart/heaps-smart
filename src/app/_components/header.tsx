import Link from "next/link";
import { Logo } from "./logo";

export function Header({ inverted = false }) {
  const textColor = inverted ? "text-white" : "text-black";
  const bgColor = inverted ? "bg-white" : "bg-black";

  return (
    <section
      className={`flex-col md:flex-row flex items-center justify-between mt-16 mb-16 md:mb-12 ${textColor}`}
    >
      <Link href="/" aria-label="Go to homepage">
        <Logo fill={inverted ? "white" : "black"} aria-label="Heaps Smart logo" />
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
