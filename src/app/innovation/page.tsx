import dynamic from "next/dynamic";
import Link from "next/link";
import Container from "@/app/_components/Container";
import CTA from "@/app/_components/CTA";
import Footer from "@/app/_components/Footer";
import Header from "@/app/_components/Header";
import Section from "@/app/_components/Section";
import Swell from "@/app/_components/Swell";
import CheckIcon from "@/app/_components/svg/CheckIcon";
import InnovationProjectCard from "@/app/_components/InnovationProjectCard";

const TorusKnotCanvas = dynamic(() => import("@/app/_components/animations/Torus"), {
  ssr: false,
});

const projects = [
  {
    slug: "redefining-mvp",
    title: "Redefining MVP: most valuable poo",
    description: "Heaps Smart helped turn cassowary poo into a science communication tool, developing a digital cataloguing system and an interactive educational experience.",
    tags: ["Conservation", "Citizen Science", "Data", "Vision AI"],
    video: "/assets/video/wall-of-poo.mp4",
    poster: "/assets/video/posters/wall-of-poo.webp",
  },
  {
    slug: "how-to-save-a-dinosaur-bird",
    title: "How to save a dinosaur bird",
    description: "Partnering with C4, Heaps Smart digitised three decades of cassowary sightings, building an automated database and simple logging tools for the public.",
    tags: ["Conservation", "Citizen Science", "Data"],
    video: "/assets/video/cassowary-web.mp4",
    poster: "/assets/video/posters/cassowary-web.webp",
  },
  {
    slug: "meet-casey",
    title: "Meet Casey: our cassowary expert",
    description: "We built Casey, an AI-powered teammate trained on 30+ years of cassowary conservation insights, making local knowledge accessible through natural language.",
    tags: ["AI", "Agents", "Accessibility"],
    video: "/assets/video/casey.mp4",
    poster: "/assets/video/posters/casey.webp",
  },
];

export default function Page() {
  return (
    <main className="bg-[#f8f3ef] text-black font-sans">
      <Container>
        <Header variant="light" />

        <div className="pt-8 pb:4 lg:pb-16">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight md:pr-8 mb-4">
            Prototype. Innovate. Scale.
          </h1>
          <h2 className="text-xl md:text-2xl font-medium text-gray-800 tracking-tight pb-4 mb-12 max-w-full md:max-w-4xl">
            Partner with our Innovation Labs to solve bold challenges through rapid experimentation.
          </h2>
        </div>
      </Container>

      <Section bg="bg-[#e8e4e1]">
        <div className="flex flex-col md:flex-row items-center md:items-start md:gap-8">
          <div className="md:w-2/3">
            <h3 className="text-3xl font-semibold mb-4 tracking-tight text-[#333333]">
              Engage our Labs to:
            </h3>
            <ul className="space-y-4 text-lg max-w-3xl pb-4 text-black/90  max-w-[600px]">
              <li className="flex items-start">
                <CheckIcon className="h-5 w-5 text-emerald-500 mr-2 mt-1 flex-shrink-0" />
                <div>
                  <span className="font-semibold">Prototype fast.</span> Test bold ideas and emerging tech with low risk
                </div>
              </li>
              <li className="flex items-start">
                <CheckIcon className="h-5 w-5 text-emerald-500 mr-2 mt-1 flex-shrink-0" />
                <div>
                  <span className="font-semibold">Customise smart solutions.</span> Customise one of our proven tools to your unique needs
                </div>
              </li>
              <li className="flex items-start">
                <CheckIcon className="h-5 w-5 text-emerald-500 mr-2 mt-1 flex-shrink-0" />
                <div>
                  <span className="font-semibold">Empower your team.</span> Build in-house capability with hands-on training and fresh tools
                </div>
              </li>
            </ul>
          </div>
        </div>
      </Section>

      <Container>
        <div className="my-16">
          <h2 className="text-3xl font-semibold mb-8 tracking-tight">Our latest labs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project) => (
              <InnovationProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>

        <CTA heading="Get in touch to start innovating." />
      </Container>

      <Swell dark />
      <Footer />
    </main>
  );
}
