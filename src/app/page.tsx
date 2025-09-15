import dynamic from "next/dynamic";
import Link from "next/link";
import { Metadata } from "next";
import Container from "@/app/_components/Container";
import Footer from "@/app/_components/Footer";
import Header from "@/app/_components/Header";
import Swell from "@/app/_components/Swell";
import InnovationProjectCard from "@/app/_components/InnovationProjectCard";
import LatestPosts from "@/app/_components/LatestPosts";
import YellowBullet from "@/app/_components/YellowBullet";

export const metadata: Metadata = {
  title: "Heaps Smart - Technology for Non-Profits and Mission-Driven Organisations",
  description: "We design and build websites, mobile apps, data tools, interactive GIS maps, and audio/visuals for non-profits and mission-driven organisations in Australia and beyond. Experts in automation, AI, and custom development.",
  keywords: "non-profit technology, mission-driven organisations, website development, mobile apps, data tools, GIS mapping, automation, AI for non-profits, Zapier, n8n, Claude AI, Australia",
  authors: [{ name: "Heaps Smart" }],
  creator: "Heaps Smart",
  publisher: "Heaps Smart",
  openGraph: {
    title: "Heaps Smart - Technology for Non-Profits and Mission-Driven Organisations",
    description: "We design and build websites, mobile apps, data tools, interactive GIS maps, and audio/visuals for non-profits and mission-driven organisations in Australia and beyond.",
    url: "https://www.heaps-smart.com",
    siteName: "Heaps Smart",
    images: [
      {
        url: `https://www.heaps-smart.com/api/og?title=${encodeURIComponent("Technology for Non-Profits and Mission-Driven Organisations")}`,
        width: 1200,
        height: 630,
        alt: "Heaps Smart - Technology for Good",
      },
    ],
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Heaps Smart - Technology for Non-Profits",
    description: "We design and build websites, mobile apps, data tools, and automation for non-profits and mission-driven organisations.",
    images: [`https://www.heaps-smart.com/api/og?title=${encodeURIComponent("Technology for Non-Profits and Mission-Driven Organisations")}`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://www.heaps-smart.com",
  },
};

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
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Heaps Smart",
    "url": "https://www.heaps-smart.com",
    "logo": "https://www.heaps-smart.com/assets/img/heaps-smart-logo.png",
    "description": "Technology for non-profits and mission-driven organisations. We design and build websites, mobile apps, data tools, interactive GIS maps, and audio/visuals.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Mission Beach",
      "addressRegion": "Queensland",
      "addressCountry": "AU"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "hello@heaps-smart.com",
      "contactType": "customer service"
    },
    "sameAs": [
      "https://www.linkedin.com/company/heaps-smart"
    ],
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": -17.8688,
        "longitude": 146.1078
      },
      "geoRadius": "100000"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Technology Services for Non-Profits",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Website Development",
            "description": "Custom websites for non-profits and mission-driven organisations"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "Mobile App Development",
            "description": "iOS and Android apps for non-profit organisations"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "Data Tools & GIS Mapping",
            "description": "Interactive maps and data visualization tools"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Automation & AI Integration", 
            "description": "Workflow automation and AI tools for non-profits"
          }
        }
      ]
    }
  };

  return (
    <main className="bg-[#F7F2EE] text-[#111111] font-sans relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
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

          <p className="text-xl mb-4 text-black/80 tracking-tight">
            Modern technology for non-profits and mission-driven organisations from websites and training to automation and data systems.
          </p>

          <div className="flex space-x-4 justify-start">
            <a
              href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ3wJdTJq1eTmlBTwyP3ky18tYx7V5A18jD5WVDaRklGIV0U38AReUQGrZoBWUrijhjUDjgEY5QR?gv=true"
              className="inline-block px-6 py-3 bg-[#fcd34d] hover:bg-[#fcbb1e] text-black font-medium rounded-lg transition-colors focus:outline-none"
              aria-label="Book a 20-min call with Heaps Smart"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book a 20-min call →
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
        <section className="my-16" aria-labelledby="how-we-help">
          <h2 id="how-we-help" className="text-3xl mb-8 tracking-tighter font-semibold">How we can help</h2>
          <p className="text-xl text-black/70 mb-12 max-w-4xl">
            We work alongside your team to build and adapt the tools, systems and training that make technology simple and effective.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="mb-4">
                <div className="flex items-center mb-3">
                  <svg className="w-6 h-6 mr-3 text-[#fcd34d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <h3 className="text-lg font-semibold text-black/90 leading-tight">
                    Automate everyday tasks
                  </h3>
                </div>
                <p className="text-sm text-black/60 mb-4 italic">
                  "I want to automate everyday tasks so my team can save time and focus on impact."
                </p>
              </div>
              <p className="text-black/70 leading-relaxed">
                We map your workflow, automate the repeatable steps, and measure the time saved.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="mb-4">
                <div className="flex items-center mb-3">
                  <svg className="w-6 h-6 mr-3 text-[#fcd34d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  <h3 className="text-lg font-semibold text-black/90 leading-tight">
                    Connect your systems
                  </h3>
                </div>
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
                <div className="flex items-center mb-3">
                  <svg className="w-6 h-6 mr-3 text-[#fcd34d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                  <h3 className="text-lg font-semibold text-black/90 leading-tight">
                    Build effective websites
                  </h3>
                </div>
                <p className="text-sm text-black/60 mb-4 italic">
                  "I want a website that tells our story clearly and reaches the right people."
                </p>
              </div>
              <p className="text-black/70 leading-relaxed">
                We refine the message, improve journeys, set up analytics, and ship fast.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="mb-4">
                <div className="flex items-center mb-3">
                  <svg className="w-6 h-6 mr-3 text-[#fcd34d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <h3 className="text-lg font-semibold text-black/90 leading-tight">
                    Product leadership
                  </h3>
                </div>
                <p className="text-sm text-black/60 mb-4 italic">
                  "I want confidence that we are building the right thing that aligns to our business goals."
                </p>
              </div>
              <p className="text-black/70 leading-relaxed">
                We provide fractional product leadership, mapping priorities, managing builds and ensuring outcomes.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="mb-4">
                <div className="flex items-center mb-3">
                  <svg className="w-6 h-6 mr-3 text-[#fcd34d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                  <h3 className="text-lg font-semibold text-black/90 leading-tight">
                    Data insights
                  </h3>
                </div>
                <p className="text-sm text-black/60 mb-4 italic">
                  "I need a data system that gives my team timely, useful insights."
                </p>
              </div>
              <p className="text-black/70 leading-relaxed">
                We define the metrics that matter, build simple dashboards, and train your team.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="mb-4">
                <div className="flex items-center mb-3">
                  <svg className="w-6 h-6 mr-3 text-[#fcd34d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                  <h3 className="text-lg font-semibold text-black/90 leading-tight">
                    Tool stack guidance
                  </h3>
                </div>
                <p className="text-sm text-black/60 mb-4 italic">
                  "I want to better understand modern tools and how to stack them."
                </p>
              </div>
              <p className="text-black/70 leading-relaxed">
                We recommend a stack that matches your needs and budget, set it up, run training, and provide clear notes.
              </p>
            </div>
          </div>
        </section>
      </Container>

    
      <Container>
        <section className="my-16" aria-labelledby="latest-projects">
          <h2 id="latest-projects" className="text-3xl mb-8 tracking-tighter font-semibold">Latest projects</h2>
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
        </section>
      </Container>

      <Container>
        <section className="my-16" aria-labelledby="latest-labs">
          <h2 id="latest-labs" className="text-3xl mb-8 tracking-tighter font-semibold">Latest labs</h2>
          <LatestPosts limit={3} />
          <div className="mt-8">
            <a
              href="/labs"
              className="inline-block text-black font-medium rounded-lg transition-colors focus:outline-none"
              aria-label="Explore more labs"
            >
              Explore more labs →
            </a>
          </div>
        </section>
      </Container>

      <Container>
        <section className="pt-6 pb-16 bg-[#F7F2EE]" aria-labelledby="tools-for-nonprofits">
          <h2 id="tools-for-nonprofits" className="text-3xl font-semibold mb-2 tracking-tighter">Tools for non-profits</h2>
          <p className="text-xl mb-4 text-black/80 tracking-tight">
            As part of our work, we use heaps of software products. We've pulled together some of the best tools for non-profits across a bunch of categories and we hope you find it useful.
          </p>
          
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8">
            <div>
              <h3 className="text-xl font-semibold mb-6 text-[#111111] border-l-4 border-[#fcd34d] pl-3">Content Management</h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <Link href="/tools-for-nonprofits/sanity" className="group flex items-center w-full text-[#111111]/80 hover:text-[#111111] transition-colors">
                    <YellowBullet className="group-hover:text-[#fcbb1e]" />
                    <span className="group-hover:underline">Sanity</span>
                  </Link>
                </li>
                <li className="flex items-center">
                  <Link href="/tools-for-nonprofits/wordpress" className="group flex items-center w-full text-[#111111]/80 hover:text-[#111111] transition-colors">
                    <YellowBullet className="group-hover:text-[#fcbb1e]" />
                    <span className="group-hover:underline">Wordpress</span>
                  </Link>
                </li>
                <li className="flex items-center">
                  <Link href="/tools-for-nonprofits/ghost" className="group flex items-center w-full text-[#111111]/80 hover:text-[#111111] transition-colors">
                    <YellowBullet className="group-hover:text-[#fcbb1e]" />
                    <span className="group-hover:underline">Ghost.org</span>
                  </Link>
                </li>
                <li className="flex items-center">
                  <Link href="/tools-for-nonprofits/buffer" className="group flex items-center w-full text-[#111111]/80 hover:text-[#111111] transition-colors">
                    <YellowBullet className="group-hover:text-[#fcbb1e]" />
                    <span className="group-hover:underline">Buffer</span>
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-6 text-[#111111] border-l-4 border-[#fcd34d] pl-3">Automation</h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <Link href="/tools-for-nonprofits/zapier" className="group flex items-center w-full text-[#111111]/80 hover:text-[#111111] transition-colors">
                    <YellowBullet className="group-hover:text-[#fcbb1e]" />
                    <span className="group-hover:underline">Zapier</span>
                  </Link>
                </li>
                <li className="flex items-center">
                  <Link href="/tools-for-nonprofits/make" className="group flex items-center w-full text-[#111111]/80 hover:text-[#111111] transition-colors">
                    <YellowBullet className="group-hover:text-[#fcbb1e]" />
                    <span className="group-hover:underline">Make</span>
                  </Link>
                </li>
                <li className="flex items-center">
                  <Link href="/tools-for-nonprofits/n8n" className="group flex items-center w-full text-[#111111]/80 hover:text-[#111111] transition-colors">
                    <YellowBullet className="group-hover:text-[#fcbb1e]" />
                    <span className="group-hover:underline">n8n</span>
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-6 text-[#111111] border-l-4 border-[#fcd34d] pl-3">AI & LLMs</h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <Link href="/tools-for-nonprofits/claude" className="group flex items-center w-full text-[#111111]/80 hover:text-[#111111] transition-colors">
                    <YellowBullet className="group-hover:text-[#fcbb1e]" />
                    <span className="group-hover:underline">Claude</span>
                  </Link>
                </li>
                <li className="flex items-center">
                  <Link href="/tools-for-nonprofits/ollama" className="group flex items-center w-full text-[#111111]/80 hover:text-[#111111] transition-colors">
                    <YellowBullet className="group-hover:text-[#fcbb1e]" />
                    <span className="group-hover:underline">Ollama</span>
                  </Link>
                </li>
                <li className="flex items-center">
                  <Link href="/tools-for-nonprofits/openai" className="group flex items-center w-full text-[#111111]/80 hover:text-[#111111] transition-colors">
                    <YellowBullet className="group-hover:text-[#fcbb1e]" />
                    <span className="group-hover:underline">OpenAI</span>
                  </Link>
                </li>
                <li className="flex items-center">
                  <Link href="/tools-for-nonprofits/langchain" className="group flex items-center w-full text-[#111111]/80 hover:text-[#111111] transition-colors">
                    <YellowBullet className="group-hover:text-[#fcbb1e]" />
                    <span className="group-hover:underline">Langchain</span>
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-6 text-[#111111] border-l-4 border-[#fcd34d] pl-3">CRM & Data Management</h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <Link href="/tools-for-nonprofits/hubspot" className="group flex items-center w-full text-[#111111]/80 hover:text-[#111111] transition-colors">
                    <YellowBullet className="group-hover:text-[#fcbb1e]" />
                    <span className="group-hover:underline">Hubspot</span>
                  </Link>
                </li>
                <li className="flex items-center">
                  <Link href="/tools-for-nonprofits/supabase" className="group flex items-center w-full text-[#111111]/80 hover:text-[#111111] transition-colors">
                    <YellowBullet className="group-hover:text-[#fcbb1e]" />
                    <span className="group-hover:underline">Supabase</span>
                  </Link>
                </li>
                <li className="flex items-center">
                  <Link href="/tools-for-nonprofits/airtable" className="group flex items-center w-full text-[#111111]/80 hover:text-[#111111] transition-colors">
                    <YellowBullet className="group-hover:text-[#fcbb1e]" />
                    <span className="group-hover:underline">Airtable</span>
                  </Link>
                </li>
                <li className="flex items-center">
                  <Link href="/tools-for-nonprofits/qgis" className="group flex items-center w-full text-[#111111]/80 hover:text-[#111111] transition-colors">
                    <YellowBullet className="group-hover:text-[#fcbb1e]" />
                    <span className="group-hover:underline">GIS / Geospatial</span>
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
              Ready to get started?
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ3wJdTJq1eTmlBTwyP3ky18tYx7V5A18jD5WVDaRklGIV0U38AReUQGrZoBWUrijhjUDjgEY5QR?gv=true"
              className="inline-block px-6 py-3 bg-[#fcd34d] hover:bg-[#fcbb1e] text-black font-medium rounded-lg transition-colors focus:outline-none"
              aria-label="Book a 20-min call with Heaps Smart"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book a 20-min call →
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
