"use client";

import dynamic from "next/dynamic";
import Container from "@/app/_components/container";
import { Header } from "@/app/_components/header";
import Footer from "@/app/_components/footer";
import Swell from "./_components/swell";

const TerrainBackground = dynamic(
  () => import("./_components/TerrainBackground"),
  { ssr: false }
);

export default function HeapsSmart() {
  return (
    <main className="bg-[#F7F2EE] text-[#111111] font-sans relative overflow-hidden">
      <header className="relative h-[55vh] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <TerrainBackground />
        </div>

        <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#F7F2EE]/40 via-transparent to-[#F7F2EE] pointer-events-none" />

        <div className="relative z-20 h-full flex flex-col justify-between">
          <Container>
            <Header variant="light" />
          </Container>
        </div>
      </header>

      <Container>
        <section className="py-4" aria-labelledby="technology-for-good">
          <h2
            id="technology-for-good"
            className="text-4xl md:text-8xl font-sans font-bold mt-2 mb-2 tracking-tighter text-black/80"
          >
            Technology for good.
          </h2>
          <div className="relative mt-auto mb-10">
            <p className="tracking-tight text-2xl md:text-2xl leading-snug max-w-4xl text-black/80">
              We're creatives and technologists who build and test ideas fast — from{" "}
              prototypes to polished products.{" "}
              Technical or not, <b>when you're ready to move, so are we.</b>
            </p>
          </div>

          <div className="mb-12">
            <a
              href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ3wJdTJq1eTmlBTwyP3ky18tYx7V5A18jD5WVDaRklGIV0U38AReUQGrZoBWUrijhjUDjgEY5QR?gv=true"
              className="inline-block px-6 py-3 bg-[#fcd34d] hover:bg-[#fcbb1e] text-black font-medium rounded-lg transition-colors focus:outline-none"
              aria-label="Schedule a call with Heaps Smart"
              target="_blank"
              rel="noopener noreferrer"
            >
              Schedule a call →
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
            {[
              {
                href: "/innovation-labs",
                title: "Innovation Labs",
                desc: "Prototype solutions to real-world problems — fast.",
                img: "/assets/svg/ai-solutions.svg",
                alt: "Innovation Labs icon",
              },
              {
                href: "/product-development",
                title: "Product Development",
                desc: "From idea to launch — we design, test, and build with purpose.",
                img: "/assets/svg/web-development.svg",
                alt: "Product Development icon",
              },
              {
                href: "/training",
                title: "Capacity Building",
                desc: "Upskill your team with tech confidence and clarity.",
                img: "/assets/svg/training-capacity-building.svg",
                alt: "Coaching and Training icon",
              },
            ].map(({ href, title, desc, img, alt }) => (
              <a
                key={href}
                href={href}
                className="flex flex-col p-6 bg-white border border-black/10 rounded-lg shadow-sm hover:shadow-md transition text-left h-full"
                aria-label={`Learn more about ${title}`}
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-xl font-semibold">{title}</h4>
                  <img
                    src={img}
                    alt={alt}
                    className="w-10 h-10 ml-4"
                  />
                </div>
                <div className="flex-1 mt-2">
                  <p className="text-sm text-black/60">{desc}</p>
                </div>
              </a>
            ))}
          </div>
        </section>
      </Container>

      <Swell dark={true} />
      <section
        className="py-12 text-left"
        aria-labelledby="partnerships-banner"
      >
        <Container>
          <h2
            id="partnerships-banner"
            className="text-xl md:text-2xl font-semibold mb-4 tracking-tight"
          >
            Are you a non-profit doing <i>heaps</i> good things?
          </h2>
          <p className="text-base mb-4 text-black/80">
            We're looking to support purpose-led organisations with practical digital help. If that's you, we'd love to hear about what you're working on.
          </p>
          <a
            href="/contact"
            className="text-sm text-black hover:underline transition"
            aria-label="Learn about our non-profit partnerships"
          >
            Get in touch →
          </a>
        </Container>
      </section>
      <Swell dark={true} />
      <Footer />
    </main>
  );
}
