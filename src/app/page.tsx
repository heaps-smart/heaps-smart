import dynamic from "next/dynamic";
import Container from "@/app/_components/Container";
import Footer from "@/app/_components/Footer";
import Header from "@/app/_components/Header";
import Swell from "@/app/_components/Swell";
import InnovationProjectCard from "@/app/_components/InnovationProjectCard";
import LatestPosts from "@/app/_components/LatestPosts";
import Carousel from "@/app/_components/Carousel";
import Timeline from "@/app/_components/Timeline";

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
      <header className="relative h-auto min-h-[55vh] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <TerrainBackground />
        </div>

        <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#F7F2EE]/40 via-transparent to-[#F7F2EE] pointer-events-none" />

        <div className="relative z-10 h-full flex flex-col">
          <Container>
            <Header variant="light" />
          </Container>
        </div>
      </header>

      <Container>
        <section className="py-4 relative z-10 bg-[#F7F2EE]" aria-labelledby="work-smarter">
          <h2
            id="work-smarter"
            className="text-4xl md:text-8xl font-sans font-bold tracking-tighter text-black/80"
          >
            <span className="font-feature-settings:'kern', 'liga', 'clig', 'calt'">Work, smarter.</span>
          </h2>
          <div className="relative mt-auto mb-10">
            <p className="tracking-tight text-2xl md:text-2xl leading-snug max-w-4xl text-black/80">
              Productivity the easy way with <span className="font-semibold">AI tools and automations.</span>
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

          <h2 className="text-3xl font-semibold mb-8 tracking-tight">Customised tools and workflows for your teams.</h2>
          
          <Timeline items={[
            {
              title: "Automate repetitive tasks",
              description: "Replace clunky, manual processes with streamlined workflows. From content creation to inventory tracking, we build automations that take repetitive work off your team's plate so they can focus on the work that matters.",
              tags: ["Operations", "Automation", "Efficiency"],
              alignment: "left",
              link: {
                url: "/blog/what-is-automation",
                text: "Learn about automation"
              }
            },
            {
              title: "Streamline your communication",
              description: "Get the right information to the right people, automatically. Build intelligent systems that pull from your CRM, docs, and knowledge bases to generate clear responses, deliver updates, and bring relevant data to the people who need it.",
              tags: ["Communications", "AI", "Team Sync"],
              alignment: "right",
              link: {
                url: "/blog/doing-more-with-less",
                text: "See communication solutions"
              }
            },
            {
              title: "Visualise and transform data",
              description: "Build dashboards, reports and internal tools that connect with your CRM, spreadsheets, docs or databases. Generate board decks, campaign recaps or sales reports directly from your live data, scheduled or on-demand.",
              tags: ["Data", "Reporting", "Insights"],
              alignment: "left",
              link: {
                url: "/blog/doing-more-with-less-part-2",
                text: "Explore data solutions"
              }
            },
            {
              title: "Empower your operations team",
              description: "Give operations teams simple tools to update prices, edit content, manage workflows, and automate processes without raising tickets or writing code. Simplify onboarding, approvals, and recurring communications.",
              tags: ["Internal Tools", "Ops", "No-Code"],
              alignment: "right",
              link: {
                url: "/innovation",
                text: "Discover innovation tools"
              }
            }
          ]} />
        </section>
      </Container>

      <Container>
        <div className="my-16">
          <h2 className="text-3xl mb-8 tracking-tighter"><span className="font-semibold">Spotlight:</span> building AI tools for conservation</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project) => (
              <InnovationProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </Container>

      <Container>
        <div className="my-16">
          <h2 className="text-3xl mb-8 tracking-tighter"><span className="font-semibold">Labs:</span> testing shiny new things</h2>
          <LatestPosts limit={2} />
        </div>
      </Container>
      <Footer />
    </main>
  );
}
