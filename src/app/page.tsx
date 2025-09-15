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
    slug: "how-to-save-a-dinosaur-bird",
    title: "Saving a dinosaur bird, with data",
    description: "Heaps Smart partnered with C4 to digitise three decades of cassowary sightings using geospatial and GIS systems.",
    tags: ["Conservation", "GIS", "Citizen Science", "Data"],
    video: "/assets/video/gis-mapping.mp4",
    poster: "/assets/video/posters/gis-mapping-poster.webp",
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
            We design and build <span className="font-bold">websites</span>, <span className="font-bold">mobile apps</span>, <span className="font-bold">data tools</span>, <span className="font-bold">interactive GIS maps</span>, and <span className="font-bold">audio/visuals</span> for non-profits and mission-driven organisations in Australia and beyond. <br />
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
          <h2 className="text-3xl mb-8 tracking-tighter font-semibold">How we can help</h2>
          <p className="text-xl text-black/70 mb-12 max-w-4xl">
            We work alongside your team to build and adapt the tools, systems and training that make technology simple and effective. Select your problem(s):
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-black/90 mb-3 leading-tight">
                  Automate everyday tasks
                </h3>
                <p className="text-sm text-black/60 mb-4 italic">
                  "I want to automate everyday tasks so my team can save time and focus on impact."
                </p>
              </div>
              <p className="text-black/70 leading-relaxed">
                We map your workflow; automate the repeatable steps; measure the time saved.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-black/90 mb-3 leading-tight">
                  Connect your systems
                </h3>
                <p className="text-sm text-black/60 mb-4 italic">
                  "I need my systems to talk to each other instead of working in silos."
                </p>
              </div>
              <p className="text-black/70 leading-relaxed">
                We connect CRM, forms, email, finance and reporting so data moves once.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-black/90 mb-3 leading-tight">
                  Build effective websites
                </h3>
                <p className="text-sm text-black/60 mb-4 italic">
                  "I want a website that tells our story clearly and reaches the right people."
                </p>
              </div>
              <p className="text-black/70 leading-relaxed">
                We refine the message; improve journeys; set up analytics; ship fast.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-black/90 mb-3 leading-tight">
                  Product leadership
                </h3>
                <p className="text-sm text-black/60 mb-4 italic">
                  "I want confidence that we are building the right thing that aligns to our business goals."
                </p>
              </div>
              <p className="text-black/70 leading-relaxed">
                We provide fractional product leadership; Mapping priorities, managing builds and ensuring outcomes.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-black/90 mb-3 leading-tight">
                  Data insights
                </h3>
                <p className="text-sm text-black/60 mb-4 italic">
                  "I need a data system that gives my team timely, useful insights."
                </p>
              </div>
              <p className="text-black/70 leading-relaxed">
                We define the metrics that matter; build simple dashboards; train your team.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-black/90 mb-3 leading-tight">
                  Tool stack guidance
                </h3>
                <p className="text-sm text-black/60 mb-4 italic">
                  "I want to better understand modern tools and how to stack them."
                </p>
              </div>
              <p className="text-black/70 leading-relaxed">
                We recommend a stack that matches your needs and budget; set it up; run training; provide clear notes.
              </p>
            </div>
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
                  <Link href="/innovation/how-to-save-a-dinosaur-bird" className="group flex items-center w-full text-[#111111]/80 hover:text-[#111111] transition-colors">
                    <YellowBullet className="group-hover:text-[#fcbb1e]" />
                    <span className="group-hover:underline">GIS/geospatial mapping</span>
                  </Link>
                </li>
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
                    <span className="group-hover:underline">WordPress/React/React Native/Node.js</span>
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
