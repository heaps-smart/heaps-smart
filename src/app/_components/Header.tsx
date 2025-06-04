import Link from "next/link";
import { Logo } from "./Logo";
import { Navbar } from "./Navbar";

type HeaderVariant = "light" | "dark" | "coffee";

interface HeaderProps {
  variant?: HeaderVariant;
}

export default function Header({ variant = "light" }: HeaderProps) {
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
      default: 
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
      className={`flex-col md:flex-row flex items-center justify-between pt-8 md:pt-16 mb-8 md:mb-12 z-10 ${textColor}`}
    >
      <Link href="/" aria-label="Go to homepage">
        {variant === "coffee" ? (
          <img src="/assets/img/coffee-sessions.jpg" alt="Heaps Smart Coffee Sessions" />
        ) : (
          <Logo fill={logoFill} aria-label="Heaps Smart logo" />
        )}
      </Link>
      <Navbar textColor={textColor} bgColor={bgColor} />
    </section>
  );
}
