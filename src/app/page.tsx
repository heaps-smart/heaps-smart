"use client";

import { useEffect } from "react";
import Container from "@/app/_components/container";
import { Header } from "@/app/_components/header";
import Footer from "@/app/_components/footer";
import Image from "next/image";

export default function About() {
  useEffect(() => {
    const handleScroll = () => {
      const parallaxElement = document.querySelector<HTMLDivElement>(".parallax");
      if (parallaxElement) {
        const scrollY = window.scrollY || document.documentElement.scrollTop;
        parallaxElement.style.transform = `translateY(${scrollY * 0.5}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main className="bg-[#FFFFFF] text-[#000000] font-sans">
      <header className="relative h-[70vh] overflow-hidden">
        <div className="absolute inset-0 parallax">
          <Image
            src="/assets/img/hinchinbrook.jpg"
            alt="Hinchinbrook Island"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="relative h-full flex flex-col justify-between bg-gradient-to-t from-[#FFFFFF]/70 to-transparent">
          <Container>
            <Header />
          </Container>
        </div>
        <div className="absolute bottom-4 right-4 bg-[#FFFFFF]/75 text-[#000000] text-sm px-3 py-1 rounded opacity-70">
          Photo: Hinchinbrook Island
        </div>
      </header>

      <Container>
        <section className="py-16">
          <h2
            className="text-4xl sm:text-5xl md:text-8xl font-bold mb-12 tracking-tight"
          >
            Technology for good.
          </h2>
          <div className="relative mt-auto mb-16">
            <p className="tracking-tight md:text-3xl max-w-4xl">
              We are <b>creatives</b> and <b>technologists</b> that build <b>digital experiences</b> and <b>online products</b> for <u>non-profits</u> and <u>purpose-driven organisations</u> - <br />right here, in Far North Queensland.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
              <h3 className="text-lg font-semibold mb-4">
                Start with <i>why</i>
              </h3>
              <p className="text-sm">
                We believe understanding your ‘why' is the first step toward meaningful change. By identifying your priorities, we help shape a digital strategy that maximises impact while making the most of your resources.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">
                Design that does <i>more</i>
              </h3>
              <p className="text-sm">
                Great design isn't just about looking good — it's about creating tools that inspire action and understanding. From websites to apps, we craft user-first solutions that turn visitors into advocates.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">
                Build for <i>your</i> needs
              </h3>
              <p className="text-sm">
                No two organisations are the same. Whether you need tools for managing volunteers or tracking cassowary activity, we build purpose-built solutions for your unique goals — and train your team along the way!
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">
                Reach more people, <i>simply</i>
              </h3>
              <p className="text-sm">
                Your work should be easy to find and support. We help you connect with a wider online audience through clear communication, thoughtful campaigns, and platforms that keep people engaged.
              </p>
            </div>
          </div>
        </section>
      </Container>

      <div className="relative bg-[#F5F5F5] text-[#000000] py-16 text-center">
        <h2 className="text-[2rem] font-semibold mb-8 tracking-tight">
          Let's get started.
        </h2>
        <a
          href="mailto:hello@heaps-smart.com"
          className="inline-block px-8 py-3 bg-[#000000] text-[#FFFFFF] text-lg font-semibold rounded transition-opacity hover:opacity-80"
        >
          hello@heaps-smart.com
        </a>
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
}
