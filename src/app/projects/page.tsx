import Container from "@/app/_components/container";
import { Header } from "@/app/_components/header";
import Footer from "@/app/_components/footer";
import Image from "next/image";

export default function Projects() {
  return (
    <main className="bg-[#f8f3ef] text-black font-sans">
      <Container>
        <Header />
      </Container>

      <Container>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight">
            Current Projects
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mb-20">
            Collaborating with non-profits and innovators to deliver purposeful solutions with lasting impact.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {[
              {
                title: "Tracking the Dinosaur Bird",
                content:
                  "Citizen science meets cutting-edge tech: data tracking, mapping, and conservation of the cassowary.",
                image: "/assets/img/mountains.jpg",
              },
              {
                title: "Getting Up Close with Poo",
                content:
                  "Utilising vision AI for a quirky yet impactful citizen science initiative.",
                image: "/assets/img/mountains.jpg",
              },
              {
                title: "Building 'Casey'",
                content:
                  "Developing AI agents for workflows, RAG systems, and social media insights.",
                image: "/assets/img/mountains.jpg",
              },
              {
                title: "Hello, AI",
                content:
                  "Empowering organisations with training on generative AI tools and their applications.",
                image: "/assets/img/mountains.jpg",
              },
            ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex flex-col w-full bg-[#f0ebe7] rounded-lg overflow-hidden transition-all cursor-pointer"
                >
                    <div className="relative aspect-[4/3] max-h-[30vh]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-opacity duration-300 opacity-75 hover:opacity-100"
                    />
                    </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-2 tracking-tight">
                    {item.title}
                    </h3>
                    <p className="text-base leading-relaxed">{item.content}</p>
                  </div>
                </div>
            ))}
          </div>
      </Container>

      <div className="relative bg-[#f8f3ef] py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 tracking-tight">
          See More On LinkedIn
        </h2>
        <a
          href="https://www.linkedin.com/in/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-4 bg-white text-black text-lg font-bold rounded-lg hover:bg-gray-100 transition-all"
        >
          Visit LinkedIn
        </a>
      </div>

      <Footer />
    </main>
  );
}
