import dynamic from "next/dynamic";
import Container from "@/app/_components/Container";
import Footer from "@/app/_components/Footer";
import Header from "@/app/_components/Header";
import Swell from "@/app/_components/Swell";
import InnovationProjectCard from "@/app/_components/InnovationProjectCard";
import LatestPosts from "@/app/_components/LatestPosts";
import YellowBullet from "@/app/_components/YellowBullet";

const TerrainBackground = dynamic(
  () => import("./_components/animations/Terrain"),
  { ssr: false }
);

const projects = [
  {
    slug: "c4-digital-transformation",
    title: "C4 Digital Transformation",
    description: "We worked with C4 to overhaul their digital ecosystem, creating a modern brand extension, new website, and integrated tools to scale their conservation mission.",
    tags: ["Website Development", "Digital Strategy", "Conservation"],
    video: "/assets/video/c4-walkthru.mp4",
    poster: "/assets/video/posters/c4.webp",
  },
  {
    slug: "redefining-mvp",
    title: "Redefining MVP: most valuable poo",
    description: "Heaps Smart helped turn cassowary poo into a science communication tool, developing a digital cataloguing system and an interactive educational experience.",
    tags: ["Conservation", "Citizen Science", "Data", "Vision AI"],
    video: "/assets/video/wall-of-poo.mp4",
    poster: "/assets/video/posters/wall-of-poo.webp",
  },
];

export default function HeapsSmart() {
  return (
    <main className="bg-[#F7F2EE] text-[#111111] font-sans relative">
      <header className="relative h-auto min-h-[50vh] overflow-hidden">
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
          <h1
            id="work-smarter"
            className="text-4xl md:text-8xl font-sans font-bold tracking-tighter text-black/80"
          >
            <span className="font-feature-settings:'kern', 'liga', 'clig', 'calt'">Technology for good.</span>
          </h1>

          <h2 className="text-3xl mb-8 tracking-tighter">Be more productive with <span className="font-semibold">AI tools and automations.</span></h2>
          
          <div className="flex flex-col md:flex-row justify-between items-center bg-[#f9fafb] p-8 rounded-lg space-y-8 md:space-y-0">
            <div className="flex items-center space-x-4">
              <img src="/assets/svg/data-infrastructure.svg" alt="Eliminate busywork icon" className="w-12 h-12 text-yellow-400 mx-2" />
              <div>
                <h3 className="text-xl font-semibold">Eliminate busywork.</h3>
                <p>Integrate your tools so they can share information seamlessly.</p>
              </div>
            </div>
            <div className="h-16 w-[1px] bg-black mx-4 hidden md:block" />
            <div className="flex items-center space-x-4">
              <img src="/assets/svg/digital-communications.svg" alt="Develop efficiency icon" className="w-12 h-12 text-yellow-400 mx-2" />
              <div>
                <h3 className="text-xl font-semibold">Develop efficiency.</h3>
                <p>Develop new tools and workflows designed for your team to get more done.</p>
              </div>
            </div>
            <div className="h-16 w-[1px] bg-black mx-4 hidden md:block" />
            <div className="flex items-center space-x-4">
              <img src="/assets/svg/ai-solutions.svg" alt="Gain control icon" className="w-12 h-12 text-yellow-400 mx-2" />
              <div>
                <h3 className="text-xl font-semibold">Gain control.</h3>
                <p>Have greater control over how work gets done with automated processes.</p>
              </div>
            </div>
          </div>
        </section>
      </Container>
    
      <Container>
        <div className="my-16">
          <h2 className="text-3xl mb-8 tracking-tighter font-semibold">Latest projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <InnovationProjectCard key={project.slug} project={project} />
        ))}
          </div>
          <div className="mt-8">
            <a
              href="/projects"
              className="inline-block text-black font-medium rounded-lg transition-colors focus:outline-none"
              aria-label="Explore more projects"
            >
              Explore more projects →
            </a>
          </div>
        </div>
      </Container>

      <Container>
        <div className="my-16">
          <h2 className="text-3xl mb-8 tracking-tighter font-semibold">Latest labs</h2>
          <LatestPosts limit={2} />
          <div className="mt-8">
            <a
              href="/labs"
              className="inline-block text-black font-medium rounded-lg transition-colors focus:outline-none"
              aria-label="Explore more labs"
            >
              Explore more labs →
            </a>
          </div>
        </div>
      </Container>

      <Container>
        <section className="pt-6 pb-16 bg-[#F7F2EE]">
          <h2 className="text-3xl font-semibold mb-2 tracking-tighter">Tools we work with</h2>
          <p className="text-lg mb-8 text-black/70">
            We use a range of tools to help teams work smarter. Here are some of the platforms and technologies we frequently integrate with:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8">
            <div>
              <h3 className="text-xl font-semibold mb-6 text-[#111111] border-l-4 border-[#fcd34d] pl-3">Automation Platforms</h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <YellowBullet />
                  <span className="text-[#111111]/80">Zapier</span>
                </li>
                <li className="flex items-center">
                  <YellowBullet />
                  <span className="text-[#111111]/80">n8n</span>
                </li>
                <li className="flex items-center">
                  <YellowBullet />
                  <span className="text-[#111111]/80">Make</span>
                </li>
                <li className="flex items-center">
                  <YellowBullet />
                  <span className="text-[#111111]/80">Retool</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-6 text-[#111111] border-l-4 border-[#fcd34d] pl-3">AI & LLMs</h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <YellowBullet />
                  <span className="text-[#111111]/80">OpenAI</span>
                </li>
                <li className="flex items-center">
                  <YellowBullet />
                  <span className="text-[#111111]/80">Ollama</span>
                </li>
                <li className="flex items-center">
                  <YellowBullet />
                  <span className="text-[#111111]/80">LangChain</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-6 text-[#111111] border-l-4 border-[#fcd34d] pl-3">Data</h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <YellowBullet />
                  <span className="text-[#111111]/80">Google</span>
                </li>
                <li className="flex items-center">
                  <YellowBullet />
                  <span className="text-[#111111]/80">HubSpot</span>
                </li>
                <li className="flex items-center">
                  <YellowBullet />
                  <span className="text-[#111111]/80">Airtable</span>
                </li>
                <li className="flex items-center">
                  <YellowBullet />
                  <span className="text-[#111111]/80">Supabase</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-6 text-[#111111] border-l-4 border-[#fcd34d] pl-3">Custom Development</h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <YellowBullet />
                  <span className="text-[#111111]/80">Websites and Mobile Apps</span>
                </li>

                <li className="flex items-center">
                  <YellowBullet />
                  <span className="text-[#111111]/80">React/React Native/Node.js</span>
                </li>
                <li className="flex items-center">
                  <YellowBullet />
                  <span className="text-[#111111]/80">iOS/Android app development</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </Container>

      <Swell dark={true} />

      <Container>
        <div className="text-center my-16">
          <div className="relative mb-8">
            <p className="tracking-tight text-2xl md:text-2xl leading-snug mx-auto max-w-4xl text-black/80">
              Ready to work smarter with <span className="font-semibold">AI tools and automations</span>?
            </p>
          </div>

          <div>
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
        </div>
      </Container>

      <Swell dark={true} />
      <Footer />
    </main>
  );
}
