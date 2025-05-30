import dynamic from "next/dynamic";
import Container from "@/app/_components/Container";
import Footer from "@/app/_components/Footer";
import Header from "@/app/_components/Header";
import Swell from "@/app/_components/Swell";
import InnovationProjectCard from "@/app/_components/InnovationProjectCard";
import LatestPosts from "@/app/_components/LatestPosts";

const TerrainBackground = dynamic(
  () => import("./_components/animations/Terrain"),
  { ssr: false }
);

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

export default function HeapsSmart() {
  return (
    <main className="bg-[#F7F2EE] text-[#111111] font-sans relative">
      <header className="relative h-[55vh] overflow-hidden z-0">
        <div className="absolute inset-0 z-0">
          <TerrainBackground />
        </div>

        <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#F7F2EE]/40 via-transparent to-[#F7F2EE] pointer-events-none" />

        <div className="relative z-20 h-full flex flex-col justify-between">
          <Container>
            <Header variant="light" />
          </Container>
        </div>
      </header>

      <Container>
        <section className="py-4" aria-labelledby="technology-for-good">
          <h2
            id="technology-for-good"
            className="text-4xl md:text-8xl font-sans font-bold mt-2 mb-2 tracking-tighter text-black/80"
          >
            Technology for good.
          </h2>
          <div className="relative mt-auto mb-10">
            <p className="tracking-tight text-2xl md:text-2xl leading-snug max-w-4xl text-black/80">
              We work with teams doing good — helping them move faster and smarter with digital strategy, AI tools, and custom-built tech. Whether you're technical or not, we'll help you get the systems and skills to go further.
            </p>
          </div>

          <div className="mb-12">
            <a
              href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ3wJdTJq1eTmlBTwyP3ky18tYx7V5A18jD5WVDaRklGIV0U38AReUQGrZoBWUrijhjUDjgEY5QR?gv=true"
              className="inline-block px-6 py-3 bg-[#fcd34d] hover:bg-[#fcbb1e] text-black font-medium rounded-lg transition-colors focus:outline-none"
              aria-label="Schedule a call with Heaps Smart"
              target="_blank"
              rel="noopener noreferrer"
            >
              Schedule a call →
            </a>
          </div>

          <h2 className="text-3xl font-semibold mb-8 tracking-tight">Latest posts</h2>
          <LatestPosts limit={2} />
        </section>
      </Container>

      <Container>
        <div className="my-16">
          <h2 className="text-3xl font-semibold mb-8 tracking-tight">Latest labs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project) => (
              <InnovationProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </Container>

      <Swell dark={true} />
      <section
        className="py-12 text-left"
        aria-labelledby="partnerships-banner"
      >
        <Container>
          <h2
            id="partnerships-banner"
            className="text-xl md:text-2xl font-semibold mb-4 tracking-tight"
          >
            Are you a non-profit doing <i>heaps</i> good things?
          </h2>
          <p className="text-base mb-4 text-black/80">
            We're looking to support purpose-led organisations with practical digital help. If that's you, we'd love to hear about what you're working on.
          </p>
          <a
            href="/contact"
            className="text-sm text-black hover:underline transition"
            aria-label="Learn about our non-profit partnerships"
          >
            Get in touch →
          </a>
        </Container>
      </section>
      <Swell dark={true} />
      <Footer />
    </main>
  );
}
