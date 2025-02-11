import Container from "@/app/_components/container";
import { Header } from "@/app/_components/header";
import Footer from "@/app/_components/footer";
import Image from "next/image";
import Swell from "./_components/swell";
import CalendlyPopup from "./_components/calendly";

export default function HeapsSmart() {
  return (
    <main className="bg-[#F7F2EE] text-[#111111] font-sans">
      <header className="relative h-[75vh] overflow-hidden">
        <div className="absolute inset-0">
        <Image
          src="/assets/img/hinchinbrook.webp"
          alt="Hinchinbrook Island"
          fill
          className="object-cover"
          aria-label="Scenic view of Hinchinbrook Island"
          priority
        />
        </div>
        <div className="relative h-full flex flex-col justify-between bg-gradient-to-t from-[#FFFFFF]/20 to-transparent">
          <Container>
            <Header />
          </Container>
        </div>
        <div className="absolute bottom-12 right-4 bg-[#FFFFFF]/75 text-[#111111] text-xs px-3 py-1 rounded opacity-70" aria-hidden="true">
          Photo: Hinchinbrook Island
        </div>
      </header>

      <Container>
        <section className="py-8" aria-labelledby="technology-for-good">
          <h2 id="technology-for-good" className="text-4xl md:text-8xl font-bold my-4 tracking-tighter text-black/80">
            Technology for good.
          </h2>
          <div className="relative mt-auto mb-16">
            <p className="tracking-tight md:text-3xl max-w-4xl text-black/80">
              We are <b>creatives</b> and <b>technologists</b> that build <b>digital experiences</b> and <b>online products</b> for <u>non-profits</u> and <u>purpose-driven organisations</u> right here, in Far North Queensland.
            </p>
          </div>

          <div className="relative mt-auto">
            <h2 className="text-4xl font-semibold mb-4 tracking-tight text-black/80" aria-labelledby="services-and-capabilities">What we do</h2>
            <p className="text-lg">
              It's simple. We make tech that makes sense.
            </p>
            <p className="text-lg mb-8">We build smart products that actually work for your organisation because the right tools, used well, create the biggest impact. We do <span className="italic">heaps</span> of things, but our special skills are in:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="flex items-center justify-start text-left" aria-labelledby="ai-assisted-solutions">
                <img src="/assets/svg/ai-solutions.svg" alt="AI and Machine Learning Solutions" className="w-20 h-20 mr-4" />
                <h4 className="text-xl font-semibold">AI and Data Solutions</h4>
              </div>
              <div className="flex items-center justify-start text-left" aria-labelledby="web-development">
                <img src="/assets/svg/web-development.svg" alt="Web Development" className="w-20 h-20 mr-4" />
                <h4 className="text-xl font-semibold">Web and Mobile Development</h4>
              </div>
              <div className="flex items-center justify-start text-left" aria-labelledby="training-capacity-building">
                <img src="/assets/svg/training-capacity-building.svg" alt="Training and Skill Development" className="w-20 h-20 mr-4" />
                <h4 className="text-xl font-semibold">Coaching and Capacity Building</h4>
              </div>
            </div>
            <p className="text-lg mt-8">Check out our latest work on <a href="https://www.linkedin.com/company/heaps-smart" target="_blank" rel="noopener noreferrer" className="underline hover:opacity-80" aria-label="Visit Heaps Smart on LinkedIn">LinkedIn</a> or <a href="/training" className="underline hover:opacity-80" aria-label="Learn more about our training">join us for an AI training session</a>.</p>
          </div>
        </section>
      </Container>

      <div className="relative text-[#000000] py-16 text-center" aria-labelledby="get-started">
        <h2 id="get-started" className="text-[2rem] font-semibold mb-8 tracking-tight">
          Let's get started.
        </h2>
        <CalendlyPopup
          url="https://calendly.com/heaps-smart/discovery-call"
          text="Schedule a time to chat →"
        />
      </div>
      <Swell dark={true} />
      <Footer />

    </main>
  );
}
