import dynamic from "next/dynamic";
import Link from "next/link";
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
    slug: "redefining-mvp",
    title: "Redefining MVP: most valuable poo",
    description: "Heaps Smart helped turn cassowary poo into a science communication tool, developing a digital cataloguing system and an interactive educational experience.",
    tags: ["Conservation", "Citizen Science", "Data", "Vision AI"],
    video: "/assets/video/wall-of-poo.mp4",
    poster: "/assets/video/posters/wall-of-poo.webp",
  },
  {
    slug: "c4-digital-transformation",
    title: "C4 Digital Transformation",
    description: "We worked with C4 to overhaul their digital ecosystem, creating a modern brand extension, new website, and integrated tools to scale their conservation mission.",
    tags: ["Website Development", "Digital Strategy", "Conservation"],
    video: "/assets/video/c4-walkthru.mp4",
    poster: "/assets/video/posters/c4.webp",
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
            Technology for good.
          </h1>

          <h3 className="text-xl mb-4 text-black/80 tracking-tight">
            We design and build <Link href="/services/website-development" className="font-bold hover:underline hover:text-black">websites</Link>, <Link href="/services/mobile-app-development" className="font-bold hover:underline hover:text-black">mobile apps</Link>, <Link href="/services/data-tools" className="font-bold hover:underline hover:text-black">data tools</Link>, <Link href="/services/mapping" className="font-bold hover:underline hover:text-black">interactive GIS maps</Link>, and <Link href="/services/audio-visual-production" className="font-bold hover:underline hover:text-black">audio/visuals</Link> for non-profits in Australia and beyond. <br />
            Find out how technology partners can solve more than technology problems.  
          </h3>

          <div className="flex space-x-4 justify-start">
            <a
              href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ3wJdTJq1eTmlBTwyP3ky18tYx7V5A18jD5WVDaRklGIV0U38AReUQGrZoBWUrijhjUDjgEY5QR?gv=true"
              className="inline-block px-6 py-3 bg-[#fcd34d] hover:bg-[#fcbb1e] text-black font-medium rounded-lg transition-colors focus:outline-none"
              aria-label="Schedule a call with Heaps Smart"
              target="_blank"
              rel="noopener noreferrer"
            >
              Schedule a call →
            </a>
            <Link
              href="/contact"
              className="inline-block px-6 py-3 bg-white hover:bg-gray-100 text-black font-medium rounded-lg transition-colors focus:outline-none border border-gray-300"
              aria-label="Partner with us"
            >
              Partner with us
            </Link>
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
          <h2 className="text-3xl font-semibold mb-2 tracking-tighter">Tools for non-profits</h2>
          <p className="text-lg mb-8 text-black/70 tracking tight">
            We use a range of tools to help teams work smarter. Here are some of the platforms and technologies we frequently integrate with:
          </p>
          
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8">
            <div>
              <h3 className="text-xl font-semibold mb-6 text-[#111111] border-l-4 border-[#fcd34d] pl-3">Automation Platforms</h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <Link href="/tools-for-nonprofits/zapier" className="group flex items-center w-full text-[#111111]/80 hover:text-[#111111] transition-colors">
                    <YellowBullet className="group-hover:text-[#fcbb1e]" />
                    <span className="group-hover:underline">Zapier</span>
                  </Link>
                </li>
                <li className="flex items-center">
                  <Link href="/tools-for-nonprofits/n8n" className="group flex items-center w-full text-[#111111]/80 hover:text-[#111111] transition-colors">
                    <YellowBullet className="group-hover:text-[#fcbb1e]" />
                    <span className="group-hover:underline">n8n</span>
                  </Link>
                </li>
                <li className="flex items-center">
                  <Link href="/tools-for-nonprofits/hubspot" className="group flex items-center w-full text-[#111111]/80 hover:text-[#111111] transition-colors">
                    <YellowBullet className="group-hover:text-[#fcbb1e]" />
                    <span className="group-hover:underline">HubSpot</span>
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-6 text-[#111111] border-l-4 border-[#fcd34d] pl-3">AI & LLMs</h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <Link href="/tools-for-nonprofits/chatgpt" className="group flex items-center w-full text-[#111111]/80 hover:text-[#111111] transition-colors">
                    <YellowBullet className="group-hover:text-[#fcbb1e]" />
                    <span className="group-hover:underline">OpenAI/ChatGPT</span>
                  </Link>
                </li>
                <li className="flex items-center">
                  <Link href="https://ollama.com/" target="_blank" rel="noopener noreferrer" className="group flex items-center w-full text-[#111111]/80 hover:text-[#111111] transition-colors">
                    <YellowBullet className="group-hover:text-[#fcbb1e]" />
                    <span className="group-hover:underline">Ollama</span>
                  </Link>
                </li>
                <li className="flex items-center">
                  <Link href="https://www.langchain.com/" target="_blank" rel="noopener noreferrer" className="group flex items-center w-full text-[#111111]/80 hover:text-[#111111] transition-colors">
                    <YellowBullet className="group-hover:text-[#fcbb1e]" />
                    <span className="group-hover:underline">Langchain</span>
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-6 text-[#111111] border-l-4 border-[#fcd34d] pl-3">Data</h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <Link href="/tools-for-nonprofits/google-sheets" className="group flex items-center w-full text-[#111111]/80 hover:text-[#111111] transition-colors">
                    <YellowBullet className="group-hover:text-[#fcbb1e]" />
                    <span className="group-hover:underline">Google Workspace</span>
                  </Link>
                </li>
                <li className="flex items-center">
                  <Link href="/tools-for-nonprofits/airtable" className="group flex items-center w-full text-[#111111]/80 hover:text-[#111111] transition-colors">
                    <YellowBullet className="group-hover:text-[#fcbb1e]" />
                    <span className="group-hover:underline">Airtable</span>
                  </Link>
                </li>
                <li className="flex items-center">
                  <Link href="/tools-for-nonprofits/supabase" className="group flex items-center w-full text-[#111111]/80 hover:text-[#111111] transition-colors">
                    <YellowBullet className="group-hover:text-[#fcbb1e]" />
                    <span className="group-hover:underline">Supabase</span>
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-6 text-[#111111] border-l-4 border-[#fcd34d] pl-3">Custom Development</h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <Link href="/contact" className="group flex items-center w-full text-[#111111]/80 hover:text-[#111111] transition-colors">
                    <YellowBullet className="group-hover:text-[#fcbb1e]" />
                    <span className="group-hover:underline">Websites and Mobile Apps</span>
                  </Link>
                </li>
                <li className="flex items-center">
                  <Link href="/contact" className="group flex items-center w-full text-[#111111]/80 hover:text-[#111111] transition-colors">
                    <YellowBullet className="group-hover:text-[#fcbb1e]" />
                    <span className="group-hover:underline">React/React Native/Node.js</span>
                  </Link>
                </li>
                <li className="flex items-center">
                  <Link href="/contact" className="group flex items-center w-full text-[#111111]/80 hover:text-[#111111] transition-colors">
                    <YellowBullet className="group-hover:text-[#fcbb1e]" />
                    <span className="group-hover:underline">iOS/Android app development</span>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="mt-2">
              <a
                href="/tools-for-nonprofits"
                className="inline-block text-black font-medium rounded-lg transition-colors focus:outline-none"
                aria-label="Explore more non-profit tools"
              >
                Explore all non-profit tools →
              </a>
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
              <br />
              We are located right here, in Mission Beach, Queensland, Australia. 
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ3wJdTJq1eTmlBTwyP3ky18tYx7V5A18jD5WVDaRklGIV0U38AReUQGrZoBWUrijhjUDjgEY5QR?gv=true"
              className="inline-block px-6 py-3 bg-[#fcd34d] hover:bg-[#fcbb1e] text-black font-medium rounded-lg transition-colors focus:outline-none"
              aria-label="Schedule a call with Heaps Smart"
              target="_blank"
              rel="noopener noreferrer"
            >
              Schedule a call →
            </a>
            <Link
              href="/contact"
              className="inline-block px-6 py-3 bg-white hover:bg-gray-50 text-black font-medium rounded-lg transition-colors focus:outline-none border border-gray-300"
            >
              Partner with us
            </Link>
          </div>
        </div>
      </Container>

      <Swell dark={true} />
      <Footer />
    </main>
  );
}
