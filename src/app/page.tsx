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
          <CoverImage title="Hinchinbrook Island" src="/heaps-smart/assets/img/hinchinbrook.jpg" />
          <div className="absolute top-0 left-0 p-8 text-[#355E3B] text-4xl md:text-6xl font-bold tracking-tighter">
            <h1 className="relative inline-flex items-baseline">Technology for good.</h1>
          </div>
        </section>

        <section id="work" className="mb-20 md:mb-28">
          <h2 className="mb-8 text-5xl md:text-7xl font-bold tracking-tighter leading-tight text-left">What we do</h2>
          <div className="flex flex-col md:flex-row items-start md:items-center">
            <div className="flex justify-between items-center w-full md:w-1/2 flex-wrap mb-4">
              {[
                { src: "/heaps-smart/assets/svg/web.svg", alt: "Web", label: "Web" },
                { src: "/heaps-smart/assets/svg/mobile.svg", alt: "Mobile", label: "Mobile" },
                { src: "/heaps-smart/assets/svg/data.svg", alt: "Data", label: "Data" },
                { src: "/heaps-smart/assets/svg/design.svg", alt: "Design", label: "Design" },
                { src: "/heaps-smart/assets/svg/sound.svg", alt: "Sound", label: "Sound" },
                { src: "/heaps-smart/assets/svg/training.svg", alt: "Training", label: "Training" },
              ].map((item, idx) => (
                <div key={idx} className="text-center flex flex-col items-center mx-4">
                  <img src={item.src} alt={item.alt} width={64} height={64} />
                  <p className="mt-2 text-sm font-semibold tracking-tight">{item.label}</p>
                </div>
              ))}
            </div>

            <div className="text-lg leading-relaxed mt-4 md:mt-0 md:w-1/2 pl-8">
              <p>
                At Heaps Smart, we solve problems with technology. We support and empower for-good organisations, large and small, by providing innovative and beautifully designed tech solutions that address unique challenges.
              </p>
            </div>
          </div>
        </section>
      </Container>

      <section id="about" className="w-full bg-[#f1f3f5] py-16 px-8">
        <div className="container mx-auto flex flex-col md:flex-row items-start">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <Image
              src="/heaps-smart/assets/img/rainforest-2.jpg"
              alt="Placeholder"
              width={500}
              height={300}
              layout="responsive"
            />
          </div>
          
          <div className="w-full md:w-1/2 md:pl-8">
            <h2 className="text-5xl font-bold mb-8 tracking-tighter">About Us</h2>
            <p className="mb-8">
              Heaps Smart was founded by Derek and Kate Blank, a husband-and-wife technology design team with over 15 years of experience globally and a strong commitment to making a difference locally. After years spent in the private sector leading product and engineering development for web and mobile technologies, it was time for a tree-change.
            </p>
            <p className="mb-8">
              After relocating to the tropics of Far North Queensland, a greener, more sustainable way of life emerged, and Heaps Smart was born.
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="w-full bg-[#355E3B] py-20">
        <div className="container mx-auto p-10 max-w-screen-xl text-center text-white">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 tracking-tight">We'd love to hear from you.</h2>
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
