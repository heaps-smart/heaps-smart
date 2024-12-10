import Container from "@/app/_components/container";
import { Header } from "@/app/_components/header";
import Footer from "@/app/_components/footer";
import Image from "next/image";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-[#000000] text-[#FFFFFF] font-sans">
      <Container>
        <Header inverted={true} />
      </Container>

      <Container>
        <section className="py-16 flex flex-col md:flex-row items-center md:items-start gap-12">
          <div className="flex-1">
            <h2 className="text-4xl sm:text-5xl md:text-8xl font-bold mb-12 tracking-tight">About Us</h2>
            <p className="tracking-tight md:text-3xl max-w-4xl mb-6">
              Heaps Smart began with a mission to help women spend more time doing what they love by using online tools and modern technology. As our team grew, so did our vision. Today, we extend that same support to non-profits and purpose-driven organisations, helping those who are making a positive impact. From strategy to custom builds and online communications, our creative and technology teams work with you every step of the way—training and empowering your team to make the most of what we create together.
            </p>
            <p className="tracking-tight md:text-2xl max-w-2xl">
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
              />
            </div>
          </div>
        </section>
      </Container>

      <div className="relative bg-[#0A0A0A] text-[#FFFFFF] py-16 text-center">
        <h2 className="text-[2rem] font-semibold mb-8 tracking-tight">
          Let's get started.
        </h2>
        <a
          href="mailto:hello@heaps-smart.com"
          className="inline-block px-8 py-3 bg-[#FFFFFF] text-[#000000] text-lg font-semibold rounded transition-opacity hover:opacity-80"
        >
          hello@heaps-smart.com
        </a>
      </div>

      <Footer inverted={true} />
    </div>
  );
}