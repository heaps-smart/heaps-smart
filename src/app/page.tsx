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
        <div className="relative h-full flex flex-col justify-between bg-gradient-to-t from-[#FFFFFF]/20 to-transparent">
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
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div>
              <h3 className="text-lg font-semibold mb-4 tracking-tight">
                Ethical technology
              </h3>
              <p className="text-sm">
                We create ethical products that combine smart tech with big ideas to make a positive impact.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 tracking-tight">
                Heaps Smart tools
              </h3>
              <p className="text-sm">
                We build solutions using data, mapping and AI to make your work easier and more insightful.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 tracking-tight">
                Communicate with data
              </h3>
              <p className="text-sm">
                We help you turn complex data into clear insights or compelling stories that anyone can understand.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 tracking-tight">
                Build capacity and skills
              </h3>
              <p className="text-sm">
                We work with leaders and teams on how to confidently use AI and technology in practical ways to tackle unique problems.
              </p>
            </div>
          </div>

          <div className="relative mt-auto mb-16">
            <h3 className="text-3xl font-semibold mb-8 tracking-tight">Our capabilities</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="flex items-center justify-start text-left">
                <img src="/assets/svg/technical-strategic-consultation.svg" alt="Technical & Strategic Consultation" className="w-20 h-20 mr-4" />
                <h4 className="text-xl font-semibold">Technical & Strategic Consultation</h4>
              </div>
              <div className="flex items-center justify-start text-left">
                <img src="/assets/svg/ai-solutions.svg" alt="AI Solutions" className="w-20 h-20 mr-4" />
                <h4 className="text-xl font-semibold">AI Solutions</h4>
              </div>
              <div className="flex items-center justify-start text-left">
                <img src="/assets/svg/web-development.svg" alt="Web Development" className="w-20 h-20 mr-4" />
                <h4 className="text-xl font-semibold">Web Development</h4>
              </div>
              <div className="flex items-center justify-start text-left">
                <img src="/assets/svg/mobile-applications.svg" alt="Mobile Applications" className="w-20 h-20 mr-4" />
                <h4 className="text-xl font-semibold">Mobile Applications</h4>
              </div>
              <div className="flex items-center justify-start text-left">
                <img src="/assets/svg/sound-engineering.svg" alt="Sound Engineering" className="w-20 h-20 mr-4" />
                <h4 className="text-xl font-semibold">Sound Engineering</h4>
              </div>
              <div className="flex items-center justify-start text-left">
                <img src="/assets/svg/geospatial-mapping-solutions.svg" alt="Geospatial and Mapping Solutions" className="w-20 h-20 mr-4" />
                <h4 className="text-xl font-semibold">Geospatial and Mapping Solutions</h4>
              </div>
              <div className="flex items-center justify-start text-left">
                <img src="/assets/svg/data-infrastructure.svg" alt="Data Infrastructure and Management" className="w-20 h-20 mr-4" />
                <h4 className="text-xl font-semibold">Data Infrastructure and Management</h4>
              </div>
              <div className="flex items-center justify-start text-left">
                <img src="/assets/svg/digital-communications.svg" alt="Digital Communications" className="w-20 h-20 mr-4" />
                <h4 className="text-xl font-semibold">Digital Communications</h4>
              </div>
              <div className="flex items-center justify-start text-left">
                <img src="/assets/svg/training-capacity-building.svg" alt="Training and Capacity Building" className="w-20 h-20 mr-4" />
                <h4 className="text-xl font-semibold">Training and Capacity Building</h4>
              </div>
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
