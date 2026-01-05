import Container from "@/app/_components/Container";
import Footer from "@/app/_components/Footer";
import Header from "@/app/_components/Header";
import InnovationProjectCard from "@/app/_components/InnovationProjectCard";
import Swell from "../_components/Swell";

const projects = [
	{
		slug: "gayle-dumbrell-counselling",
		title: "From the classroom to the counselling couch: Building a digital foundation",
		description:
			"Heaps Smart supported Gayle Dumbrell Counselling to establish a clear, gentle digital foundation from scratch, creating a brand and website that reflected Gayle's experience, values and approach.",
		tags: ["Health", "Education", "Branding", "Website Development", "Digital Infrastructure", "Data", "Automation"],
		video: "/assets/video/gd-counselling.mp4",
		poster: "/assets/video/posters/gd-counselling.webp",
	},
	{
		slug: "doing-ageing-differently",
		title: "What better looks like; Doing ageing differently.",
		description:
			"Heaps Smart worked with Good Flock to strengthen the foundations of their content platform, improving content structure, discoverability, and connecting people to the organisation as they engage.",
		tags: ["Ageing", "Content Management", "Digital Infrastructure", "SEO", "Automation", "Integrations"],
		video: "/assets/video/good-flock.mp4",
		poster: "/assets/video/posters/good-flock.webp",
	},
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
		title: "Meet Cassie: the cassowary expert powered by community knowledge",
		description:
			"Cassie is a custom GPT built in partnership with the community organisation Mission Beach Cassowaries. Currently in active development, Cassie is being trained on over 30 years of local conservation insights with the goal of making this valuable knowledge accessible through natural language.",
		tags: ["AI", "Agents", "Accessibility"],
		video: "/assets/video/cassie.mp4",
		poster: "/assets/video/posters/cassie.webp",
	},
	{
		slug: "the-dyrt",
		title: "Building The Dyrt's Mobile Experience",
		description:
			"A ground-up build of The Dyrt’s first iOS and Android apps, transforming a web-only camping platform into a mobile-ready experience for travellers exploring remote areas. The project delivered a fast, map-centred interface that brought user-generated campground data, GIS layers and offline-friendly navigation into one cohesive app.",
		tags: ["Mobile", "React Native", "GIS"],
		video: "",
		poster: "/assets/img/the-dyrt-2.jpg",
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
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						{projects.map((project) => (
							<InnovationProjectCard key={project.slug} project={project} />
						))}
					</div>
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
