// Page file (e.g., index.js or main layout file)
import Container from "@/app/_components/container";
import { Header } from "@/app/_components/header";
import CoverImage from "@/app/_components/cover-image";
import Footer from "@/app/_components/footer";
import Image from "next/image";

export default function Index() {
  return (
    <main>
      <Container>
        <Header />

        <section className="mb-8 md:mb-16 relative">
          <h1 className="text-[#355E3B] text-4xl font-bold tracking-tighter mb-4 sm:text-2xl sm:mb-0 sm:absolute sm:top-0 sm:left-0 sm:p-8 sm:text-5xl md:text-6xl">
            Technology for good.
          </h1>

          <CoverImage title="Hinchinbrook Island" src="/assets/img/hinchinbrook.jpg" />
        </section>

        {/* Updated "What we do" Section */}
        <section id="work" className="mb-20 md:mb-28">
          <h2 className="mb-8 text-5xl md:text-7xl font-bold tracking-tighter leading-tight text-left">What we do</h2>
          <div className="flex flex-col md:flex-row items-start md:items-center">
            <div className="flex justify-between items-center w-full md:w-1/2 flex-wrap mb-4">
              {[
                { src: "/assets/svg/web.svg", alt: "Web", label: "Web" },
                { src: "/assets/svg/mobile.svg", alt: "Mobile", label: "Mobile" },
                { src: "/assets/svg/data.svg", alt: "Data", label: "Data" },
                { src: "/assets/svg/design.svg", alt: "Design", label: "Design" },
                { src: "/assets/svg/sound.svg", alt: "Sound", label: "Sound" },
                { src: "/assets/svg/training.svg", alt: "Training", label: "Training" },
              ].map((item, idx) => (
                <div key={idx} className="text-center flex flex-col items-center mx-4 mb-4">
                  <Image src={item.src} alt={item.alt} width={64} height={64} />
                  <p className="mt-2 text-sm font-semibold tracking-tight">{item.label}</p>
                </div>
              ))}
            </div>

            <div className="text-lg leading-relaxed mt-4 md:mt-0 md:w-1/2 pl-8">
              <p>
                Heaps Smart is a collective of creative technologists based in Mission Beach, Queensland. We create <b>websites</b>, <b>mobile apps</b>, and <b>data solutions</b> focused on non-profits, businesses, and organisations located in Far North Queensland and beyond.
              </p>
            </div>
          </div>
        </section>
      </Container>

      <section id="contact" className="w-full bg-[#355E3B] py-20">
        <div className="container mx-auto p-10 max-w-screen-xl text-center text-white">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 tracking-tight">We&#39;d love to hear from you.</h2>
          <p className="text-lg mb-6">Have a project or idea for us?</p>

          <address className="not-italic">
            <h3 className="text-2xl md:text-2xl font-semibold">
              hello@heaps-smart.com
            </h3>
          </address>
        </div>
      </section>

      <Footer />
    </main>
  );
}
