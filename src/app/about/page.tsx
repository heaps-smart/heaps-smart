import Container from "@/app/_components/container";
import { Header } from "@/app/_components/header";
import Footer from "@/app/_components/footer";
import Image from "next/image";
import Swell from "../_components/swell";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F8F3EF] text-black font-sans" aria-label="About Us Page">
      <Container>
        <Header variant="light" />
      </Container>

      <Container>
        <section
          className="py-16 flex flex-col md:flex-row items-center md:items-start gap-12"
          aria-labelledby="about-us-section"
        >
          <div className="flex-1">
            <h2 id="about-us-section" className="text-4xl sm:text-5xl md:text-8xl font-bold mb-12 tracking-tighter text-black/80">
              About Us
            </h2>
            <p className="tracking-tight md:text-3xl max-w-4xl mb-6 text-black/80">
              <b className="text-black/100">Heaps Smart</b> began with a mission to help women spend more time doing what they love by using online tools and modern technology.
            </p>
            <p className="tracking-tight md:text-xl max-w-2xl mb-4 text-black/80">
              As our team grew, so did our vision. Today, we extend that same support to non-profits and purpose-driven organisations, helping those who are making a positive impact.
            </p>
            <p className="tracking-tight md:text-xl max-w-2xl mb-4 text-black/80">
              From strategy to custom builds and online communications, 
              our creative and technology teams work with you every step of the way—training and empowering
              your team to make the most of what we create together.
            </p>
            <p className="tracking-tight md:text-xl max-w-2xl text-black/80">
              We are based in beautiful Mission Beach, Far North Queensland, where our surroundings and community inspire our work and values every day.
            </p>
          </div>

          <div className="w-full md:w-1/3 h-auto relative">
            <div className="relative w-full aspect-[3/4] overflow-hidden rounded-lg shadow-lg">
              <Image
                src="/assets/img/about.webp" 
                alt="Heaps Smart Team in Mission Beach"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
                aria-label="Heaps Smart team at Mission Beach"
              />
            </div>
          </div>
        </section>

        <h2 className="text-4xl sm:text-5xl font-bold mb-8 tracking-tight text-black/80" id="our-mission-section">Our Mission</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-20" aria-label="Mission statements">
          <div className="bg-white/30 p-8 rounded-2xl transition-transform duration-300 hover:scale-105 backdrop-blur-sm">
            <h3 className="text-xl font-semibold mb-4 tracking-tight text-black/80">Use ethical technology</h3>
            <p className="text-md text-black/70">
              We create ethical solutions that blend smart tech with big ideas.
            </p>
          </div>
          <div className="bg-white/30 p-8 rounded-2xl transition-transform duration-300 hover:scale-105 backdrop-blur-sm">
            <h3 className="text-xl font-semibold mb-4 tracking-tight text-black/80">Build <span className="text-black/100">Heaps Smart</span> tools</h3>
            <p className="text-md text-black/70">
              Our approach combines data, mapping, and AI to make work easier and more insightful.
            </p>
          </div>
          <div className="bg-white/30 p-8 rounded-2xl transition-transform duration-300 hover:scale-105 backdrop-blur-sm">
            <h3 className="text-xl font-semibold mb-4 tracking-tight text-black/80">Communicate with data</h3>
            <p className="text-md text-black/70">
              We turn complex data into clear insights and compelling stories that anyone can understand.
            </p>
          </div>
          <div className="bg-white/30 p-8 rounded-2xl transition-transform duration-300 hover:scale-105 backdrop-blur-sm">
            <h3 className="text-xl font-semibold mb-4 tracking-tight text-black/80">Expand capacity and skills</h3>
            <p className="text-md text-black/70">
              We empower leaders and teams on how to confidently use AI and technology in practical ways to tackle unique problems.
            </p>
          </div>
        </div>
      </Container>

      <div className="relative text-black/80 py-16 text-center" aria-labelledby="get-started-section">
        <h2 id="get-started-section" className="text-[2rem] font-semibold mb-8 tracking-tight">Let's get started.</h2>
        <a
          href="mailto:hello@heaps-smart.com"
          className="inline-block px-8 py-3 bg-[#FFFFFF] text-[#000000] text-lg font-semibold rounded transition-opacity hover:opacity-80"
          aria-label="Send an email to hello@heaps-smart.com"
        >
          hello@heaps-smart.com
        </a>
      </div>
      <Swell dark={true} />
      <Footer inverted={false} />
    </div>
  );
}
