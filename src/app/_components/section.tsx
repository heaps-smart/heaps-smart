import React from "react";
import Container from "./container";

interface SectionProps {
  children: React.ReactNode;
  bg?: string;
  className?: string;
}

export default function Section({ children, bg = "bg-white", className = "" }: SectionProps) {
  return (
    <section className={`${bg} py-16 ${className}`}>
      <Container>
        {children}
      </Container>
    </section>
  );
}
