import Container from "@/app/_components/Container";
import Header from "@/app/_components/Header";
import Footer from "@/app/_components/Footer";
import Image from "next/image";
import Swell from "../_components/Swell";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F7F2EE] text-black font-sans" aria-label="About Us Page">
      <Container>
        <Header variant="light" />
      </Container>

      <Container>
        <section
          className="flex flex-col md:flex-row items-center md:items-start mt-12 mb-20"
          aria-labelledby="about-us-section"
        >
          <div className="flex-1 pb-8">
            <h2 id="about-us-section" className="text-4xl md:text-6xl font-bold tracking-tighter text-black/80 leading-tight md:leading-none pb-4">
              About us
            </h2>
            <p className="tracking-tighter leading-tight md:text-3xl max-w-4xl mb-6 text-black/80">
              <b className="text-black/100">Heaps Smart</b> began with a mission to help women spend more time doing what they love by using online tools and modern technology.
            </p>
            <p className="tracking-tight leading-tight md:text-xl max-w-2xl mb-4 text-black/80">
              As our team grew, so did our vision. Today, we extend that same support to non-profits and purpose-driven organisations, helping those who are making a positive impact.
            </p>
            <p className="tracking-tight leading-tight md:text-xl max-w-2xl mb-4 text-black/80">
              From strategy to custom builds and online communications, 
              our creative and technology teams work with you every step of the way—training and empowering
              your team to make the most of what we create together.
            </p>
						<p className="tracking-tight leading-tight md:text-xl max-w-2xl text-black/80">
							We are based in beautiful <b>Mission Beach, Far North Queensland</b>, where our surroundings and community inspire our work and values every day.
						</p>
          </div>

          <div className="w-full md:w-1/3 h-auto relative">
            <div className="relative w-full aspect-[3/4] overflow-hidden rounded-lg">
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
			</Container>
      <Swell dark={true} />
      <Footer inverted={false} />
    </div>
  );
}
