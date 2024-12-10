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
      </header>

      <Container>
        <section className="py-16">
          <h2
            className="text-4xl sm:text-5xl md:text-8xl font-bold mb-12 tracking-tight interactive"
            data-speed="0.2"
          >
            Technology for good.
          </h2>
          <div className="relative mt-auto mb-16">
            <p className="tracking-tight md:text-3xl max-w-4xl">
              We design and develop{" "}
              <b>websites</b>, <b>mobile apps</b>, and <b>digital experiences</b> for{" "}
              <u>non-profits</u>, <u>businesses</u>, and <u>purpose-driven organisations</u>.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {[
              {
                title: "Helping Non-Profits Go Digital",
                content:
                  "Non-profits deserve tools that make their work easier. Our experienced digital solutions helps for-good organisations reach more people through technology.",
              },
              {
                title: "Connecting to Community",
                content:
                  "Your cause should be simple for people to discover and support. From digital marketing campaigns to online app platforms, we help you stay connected and grow your audience.",
              },
              {
                title: "Custom Tools for Your Mission",
                content:
                  "Every organisation has unique needs. Whether it’s managing volunteers, or tracking cassowaries, we work directly with your organisation to provide purpose-built solutions.",
              },
              {
                title: "Beautiful Solutions That Work",
                content:
                  "A great website or app does more than look good—it inspires action. With user-friendly design and smooth functionality, your audience stays engaged.",
              },
            ].map((item, idx) => (
              <div key={idx}>
                <h3 className="text-lg font-semibold mb-4">{item.title}</h3>
                <p className="text-sm leading-relaxed">{item.content}</p>
              </div>
            ))}
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
