import Container from "@/app/_components/Container";
import Footer from "@/app/_components/Footer";
import Header from "@/app/_components/Header";
import InnovationProjectCard from "@/app/_components/InnovationProjectCard";
import Swell from "../_components/Swell";

const projects = [
	{
		slug: "how-to-save-a-dinosaur-bird",
		title: "Saving a dinosaur bird, with data",
		description:
			"Partnering with C4, Heaps Smart digitised three decades of cassowary sightings, building an automated database and simple logging tools for the public.",
		tags: ["Conservation", "Citizen Science", "Data"],
		video: "/assets/video/cassowary-web.mp4",
		poster: "/assets/video/posters/cassowary-web.webp",
	},
	{
		slug: "smarter-remote-research-teams",
		title: "Smarter Meetings for Remote Research Teams",
		description:
			"We implemented an AI-driven solution to streamline meeting management for environmental researchers, allowing them to focus on research rather than administrative tasks.",
		tags: ["AI Automation", "Remote Collaboration", "Research Tools"],
		video: "/assets/video/tactiq.mp4",
		poster: "/assets/video/posters/tactiq.webp",
	},
	{
		slug: "c4-digital-transformation",
		title: "C4 Digital Transformation",
		description:
			"We worked with C4 to overhaul their digital ecosystem, creating a modern brand extension, new website, and integrated tools to scale their conservation mission.",
		tags: ["Website Development", "Digital Strategy", "Conservation"],
		video: "/assets/video/c4-walkthru.mp4",
		poster: "/assets/video/posters/c4.webp",
	},
	{
		slug: "redefining-mvp",
		title: "Redefining MVP: most valuable poo",
		description:
			"Heaps Smart helped turn cassowary poo into a science communication tool, developing a digital cataloguing system and an interactive educational experience.",
		tags: ["Conservation", "Citizen Science", "Data", "Vision AI"],
		video: "/assets/video/wall-of-poo.mp4",
		poster: "/assets/video/posters/wall-of-poo.webp",
	},
	{
		slug: "meet-cassie",
		title: "Meet Cassie: our cassowary expert",
		description:
			"We built Cassie, an AI-powered teammate trained on 30+ years of cassowary conservation insights, making local knowledge accessible through natural language.",
		tags: ["AI", "Agents", "Accessibility"],
		video: "/assets/video/cassie.mp4",
		poster: "/assets/video/posters/cassie.webp",
	},
];

export default function Projects() {
	return (
		<main className="bg-[#f8f3ef] text-black font-sans">
			<Container>
				<Header variant="light" />
			</Container>

			<Container>
				<div className="py-8 md:py-12">
					<h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-black/80 leading-tight md:leading-none pb-4">
						What we're working on
					</h2>
					<p className="text-lg md:text-xl max-w-3xl mb-4 text-black/70 leading-relaxed">
						Heaps Smart builds digital experiences and online products for
						non-profits and purpose-driven organisations. Here's some of our
						latest work.
					</p>
					<div className="h-1 w-24 bg-yellow-400 mt-4 mb-6 rounded-full"></div>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-8">
					{projects.map((project) => (
						<InnovationProjectCard key={project.slug} project={project} />
					))}
				</div>
			</Container>

			<div className="bg-[#f8f3ef] py-16 text-center">
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
		</main>
	);
}
