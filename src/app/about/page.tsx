import Container from "@/app/_components/container";
import { Header } from "@/app/_components/header";
import Footer from "@/app/_components/footer";
import Image from "next/image";
import Swell from "../_components/swell";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-[#121212] text-[#FFFFFF] font-sans" aria-label="About Us Page">
      <Container>
        <Header inverted={true} />
      </Container>

      <Container>
        <section
          className="py-16 flex flex-col md:flex-row items-center md:items-start gap-12"
          aria-labelledby="about-us-section"
        >
          <div className="flex-1">
            <h2 id="about-us-section" className="text-4xl sm:text-5xl md:text-8xl font-bold mb-12 tracking-tight">
              About Us
            </h2>
            <p className="tracking-tight md:text-3xl max-w-4xl mb-6">
              Heaps Smart began with a mission to help women spend more time doing what they love by using online tools and modern technology. As our team grew, so did our vision. Today, we extend that same support to non-profits and purpose-driven organisations, helping those who are making a positive impact. From strategy to custom builds and online communications, our creative and technology teams work with you every step of the way—training and empowering your team to make the most of what we create together.
            </p>
            <p className="tracking-tight md:text-2xl max-w-2xl" aria-label="Location and inspiration for our work">
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

        <h3 className="text-3xl font-semibold mb-4 tracking-tight" aria-labelledby="our-mission-section">Our Mission</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16" aria-labelledby="mission-items">
          <div>
            <h3 className="text-lg font-semibold mb-4 tracking-tight">Use ethical technology</h3>
            <p className="text-md">
              We create ethical solutions that blends smart tech with big ideas.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 tracking-tight">Build <span className="italic">Heaps Smart</span> tools</h3>
            <p className="text-md">
              Our approach combines data, mapping, and AI to make work easier and more insightful.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 tracking-tight">Communicate with data</h3>
            <p className="text-md">
              We turn complex data into clear insights and compelling stories that anyone can understand.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 tracking-tight">Expand capacity and skills</h3>
            <p className="text-md">
              We empower leaders and teams on how to confidently use AI and technology in practical ways to tackle unique problems.
            </p>
          </div>
        </div>
      </Container>

      <div className="relative text-[#FFFFFF] py-16 text-center" aria-labelledby="get-started-section">
        <h2 id="get-started-section" className="text-[2rem] font-semibold mb-8 tracking-tight">Let's get started.</h2>
        <a
          href="mailto:hello@heaps-smart.com"
          className="inline-block px-8 py-3 bg-[#FFFFFF] text-[#000000] text-lg font-semibold rounded transition-opacity hover:opacity-80"
          aria-label="Send an email to hello@heaps-smart.com"
        >
          hello@heaps-smart.com
        </a>
      </div>
      <Swell />
      <Footer inverted={true} />
    </div>
  );
}
