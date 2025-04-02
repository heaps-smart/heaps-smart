"use client";

import { Header } from "@/app/_components/header";
import Footer from "@/app/_components/footer";
import Container from "@/app/_components/container";
import Swell from "@/app/_components/swell";

export default function PostsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col text-black font-sans bg-[#F7F2EE]">
      <Container>
        <Header variant="light" />
      </Container>
      <main className="flex-grow">
        {children}
      </main>
      <Swell dark />
      <Footer inverted={false} />
    </div>
  );
}
