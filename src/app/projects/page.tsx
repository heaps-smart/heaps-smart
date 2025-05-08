import Container from "@/app/_components/container";
import Footer from "@/app/_components/footer";
import Header from "@/app/_components/header";
import ProjectList  from "@/app/_components/project-list";
import Swell from "../_components/swell";

export default function Projects() {
  return (
    <main className="bg-[#f8f3ef] text-black font-sans relative overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#f8f3ef] to-transparent" />
      </div>

      <div className="relative z-10">
        <Container>
          <Header />
        </Container>

        <Container>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-black/80 leading-tight md:leading-none pb-4">
            What we're working on
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mb-8">
            Heaps Smart builds digital experiences and online products for non-profits and purpose-driven organisations. Here's some of our latest work.
          </p>

          <ProjectList />
        </Container>

        <div className="relative bg-[#f8f3ef] py-16 text-center">
          <a
            href="https://www.linkedin.com/company/heaps-smart"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-[#fcbb1e] text-black font-medium rounded-lg transition-transform hover:scale-105"
          >
            See more on LinkedIn →
          </a>
        </div>
        <Swell dark />
        <Footer />
      </div>
    </main>
  );
}
