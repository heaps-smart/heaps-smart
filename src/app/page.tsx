import Container from "@/app/_components/container";
import { Header } from "@/app/_components/header";
import Footer from "@/app/_components/footer";
import Image from "next/image";
import Swell from "./_components/swell";

export default function HeapsSmart() {
  return (
    <main className="bg-[#FFFFFF] text-[#111111] font-sans">
      <header className="relative h-[75vh] overflow-hidden">
        <div className="absolute inset-0">
        <Image
          src="/assets/img/hinchinbrook.webp"
          alt="Hinchinbrook Island"
          fill
          className="object-cover clip-diagonal"
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
          <h2 id="technology-for-good" className="text-4xl sm:text-5xl md:text-8xl font-bold my-12 tracking-tight">
            Technology for good.
          </h2>
          <div className="relative mt-auto mb-16">
            <p className="tracking-tight md:text-3xl max-w-4xl">
              We are <b>creatives</b> and <b>technologists</b> that build <b>digital experiences</b> and <b>online products</b> for <u>non-profits</u> and <u>purpose-driven organisations</u> - <br />right here, in Far North Queensland.
            </p>
          </div>

          <div className="relative mt-auto">
            <h3 className="text-3xl font-semibold mb-4 tracking-tight" aria-labelledby="services-and-capabilities">Services and Capabilities</h3>
            <p className="text-md mb-8">
              We're passionate about building innovative solutions that provide technology for good. With over twenty years of experience crafting web and mobile products used by millions, we're always up for a challenge. Check out our latest work on <a href="https://www.linkedin.com/company/heaps-smart" target="_blank" rel="noopener noreferrer" className="underline" aria-label="Visit Heaps Smart on LinkedIn">LinkedIn</a>.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="flex items-center justify-start text-left" aria-labelledby="ai-assisted-solutions">
                <img src="/assets/svg/ai-solutions.svg" alt="AI and Machine Learning Solutions" className="w-20 h-20 mr-4" />
                <h4 className="text-xl font-semibold">AI-Assisted Solutions</h4>
              </div>
              <div className="flex items-center justify-start text-left" aria-labelledby="technical-strategic-consulting">
                <img src="/assets/svg/technical-strategic-consultation.svg" alt="Technical and Strategic Consulting" className="w-20 h-20 mr-4" />
                <h4 className="text-xl font-semibold">Technical and Strategic Consulting</h4>
              </div>
              <div className="flex items-center justify-start text-left" aria-labelledby="geospatial-mapping">
                <img src="/assets/svg/geospatial-mapping-solutions.svg" alt="Geospatial Analysis and Mapping Solutions" className="w-20 h-20 mr-4" />
                <h4 className="text-xl font-semibold">Geospatial Analysis and Mapping</h4>
              </div>
              <div className="flex items-center justify-start text-left" aria-labelledby="web-development">
                <img src="/assets/svg/web-development.svg" alt="Web Development" className="w-20 h-20 mr-4" />
                <h4 className="text-xl font-semibold">Web Development</h4>
              </div>
              <div className="flex items-center justify-start text-left" aria-labelledby="mobile-app-development">
                <img src="/assets/svg/mobile-applications.svg" alt="Mobile App Development" className="w-20 h-20 mr-4" />
                <h4 className="text-xl font-semibold">iOS and Android App Development</h4>
              </div>
              <div className="flex items-center justify-start text-left" aria-labelledby="audio-sound-engineering">
                <img src="/assets/svg/sound-engineering.svg" alt="Audio and Sound Engineering" className="w-20 h-20 mr-4" />
                <h4 className="text-xl font-semibold">Audio and Sound Engineering</h4>
              </div>
              <div className="flex items-center justify-start text-left" aria-labelledby="data-infrastructure">
                <img src="/assets/svg/data-infrastructure.svg" alt="Data Infrastructure Management" className="w-20 h-20 mr-4" />
                <h4 className="text-xl font-semibold">Data Infrastructure Management</h4>
              </div>
              <div className="flex items-center justify-start text-left" aria-labelledby="digital-communications">
                <img src="/assets/svg/digital-communications.svg" alt="Digital Communications" className="w-20 h-20 mr-4" />
                <h4 className="text-xl font-semibold">Digital Communications</h4>
              </div>
              <div className="flex items-center justify-start text-left" aria-labelledby="training-capacity-building">
                <img src="/assets/svg/training-capacity-building.svg" alt="Training and Skill Development" className="w-20 h-20 mr-4" />
                <h4 className="text-xl font-semibold">Training and Capacity Building</h4>
              </div>
            </div>
          </div>
        </section>
      </Container>

      <div className="relative text-[#000000] py-16 text-center" aria-labelledby="get-started">
        <h2 id="get-started" className="text-[2rem] font-semibold mb-8 tracking-tight">
          Let's get started.
        </h2>
        <a
          href="mailto:hello@heaps-smart.com"
          className="inline-block px-8 py-3 bg-[#000000] text-[#FFFFFF] text-lg font-semibold rounded transition-opacity hover:opacity-80"
          aria-label="Send an email to hello@heaps-smart.com"
        >
          hello@heaps-smart.com
        </a>
      </div>
      <Swell />
      <Footer />
    </main>
  );
}
