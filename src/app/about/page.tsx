import Container from "@/app/_components/container";
import { Header } from "@/app/_components/header";
import Image from "next/image";

export default function Index() {
  return (
    <main>
      <Container>
        <Header />

        <div className="bg-gray-100 p-8 mb-8 rounded-lg">
          <section className="flex items-start mb-8">
            <div className="w-1/2 pr-8">
              <h3 className="mb-8 text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
                About Us
              </h3>
              <p className="mb-8">
                At Heaps Smart we solve problems with technology. The work we do supports and empowers for-good organisations, large and small, by providing innovative and beautifully designed tech solutions that address unique challenges.
              </p>
            </div>
            <div className="w-1/2">
              <Image
                src="/assets/img/rainforest-2.jpg"
                alt="Placeholder"
                width={500}
                height={300}
                layout="responsive"
              />
            </div>
          </section>
          <section className="flex items-start">
            <div className="w-1/2">
            </div>
            <div className="w-1/2 pl-8">
              <h2 className="text-5xl font-bold mb-8 tracking-tighter">Our Founders</h2>
              <p className="mb-8">
                Heaps Smart was founded by Derek and Kate Blank, a husband-and-wife technology design team with over 15 years of experience globally and a strong commitment to making a difference locally. After years spent in the private sector, with long hours and longer revenue targets, it was time for a tree-change.
              </p>
              <p className="mb-8">
                After relocating to the 'jungle' of Far North Queensland, a greener, more sustainable way of life emerged, and Heaps Smart was born.
              </p>
            </div>
          </section>

        </div>
      </Container>
    </main>
  );
}
