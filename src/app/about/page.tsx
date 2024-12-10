import Container from "@/app/_components/container";
import { Header } from "@/app/_components/header";
import Footer from "@/app/_components/footer";
import Image from "next/image";

export default function About() {
  return (
    <main className="bg-[#FFFFFF] text-[#000000] font-sans">
      <Container>
        <Header />
      </Container>

      <Container>
        <section className="py-16 flex flex-col md:flex-row items-center md:items-start gap-12">
          <div className="flex-1">
            <h2 className="text-4xl sm:text-5xl md:text-8xl font-bold mb-12 tracking-tight">About Us</h2>
            <p className="tracking-tight md:text-3xl max-w-4xl mb-6">
              Heaps Smart started with a mission to empower professional women, building their confidence in using online tools through hands-on technology training.
              As our team grew, so did our vision. Today, we've evolved to offer creative development services tailored to the unique needs of non-profits and
              purpose-driven organisations.
            </p>
            <p className="tracking-tight md:text-2xl max-w-2xl">
              We are based in beautiful Mission Beach, Far North Queensland, where our surroundings inspire our work and values every day.
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

      <Footer />
    </main>
  );
}
