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
              Smart technology for purpose-driven work.
            </p>
            <p className="tracking-tight leading-tight md:text-xl max-w-2xl mb-4 text-black/80">
              Heaps Smart is a technology consultancy founded by Kate and Derek Blank. For over 20 years, we have been building custom software, data solutions, and digital communications for global brands including Google, WordPress, and Lonely Planet.
            </p>
            <p className="tracking-tight leading-tight md:text-xl max-w-2xl mb-4 text-black/80">
              Our work took us across the world, from San Francisco to London to Melbourne, but it was working with non-profits that felt the most grounded. It was this work that brought us out of the boardrooms and into the front-lines: cleaning plastic from the ocean, planting trees to save the rainforest, caring for injured wildlife, delivering education technology to remote communities.
            </p>
            <p className="tracking-tight leading-tight md:text-xl max-w-2xl mb-4 text-black/80">
              Founding Heaps Smart was the natural next step: A consultancy dedicated to applying our technical expertise directly to organisations doing good things.
            </p>
            <p className="tracking-tight leading-tight md:text-xl max-w-2xl mb-4 text-black/80">
              Today, we partner with non-profits and mission-driven teams across Australia to scale their impact with technology. We apply digital solutions to help them expand their reach, connect with funding, and streamline their operations. We work collaboratively with your teams online or wherever you need us.
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
