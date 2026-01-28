import { Metadata } from "next";
import InnovationPageTemplate from "@/app/_components/InnovationPageTemplate";
import Link from "next/link";

const slug = "building-confidence-with-technology";
const cover = "/assets/img/projects/building-confidence-with-technology/cover.webp";

export const metadata: Metadata = {
  title: "Building Confidence with Technology: Digital workshops for managers & small teams | Innovation | Heaps Smart",
  description:
    "Digital workshops and coaching for managers and small teams to build confidence with modern workplace tools, AI-enabled workflows, and agile-inspired ways of working.",
  keywords:
    "digital workshops, training, capability building, managers, small teams, modern workplace tools, AI, agile, tool stack guidance, change management",
  authors: [{ name: "Heaps Smart" }],
  openGraph: {
    title: "Building Confidence with Technology",
    description:
      "Workshops and 1:1 coaching to help managers and teams confidently adopt modern tools and AI-enabled practices.",
    url: `https://www.heaps-smart.com/innovation/${slug}`,
    siteName: "Heaps Smart",
    images: [
      {
        url: `https://www.heaps-smart.com${cover}`,
        width: 1200,
        height: 630,
        alt: "Building Confidence with Technology workshops",
      },
    ],
    locale: "en_AU",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Building Confidence with Technology",
    description:
      "Digital workshops and coaching for managers and small teams to adopt modern tools and AI-enabled practices.",
    images: [`https://www.heaps-smart.com${cover}`],
  },
  alternates: {
    canonical: `https://www.heaps-smart.com/innovation/${slug}`,
  },
};

export default function BuildingConfidenceWithTechnologyPage() {
  const tags = [
    "Training",
    "Workshops",
    "AI",
    "Modern Work",
    "Tooling",
    "Agile",
    "Capability Building",
  ];

  const pageTitle = "Building Confidence with Technology: Digital workshops for managers & small teams";

  const techStack = [
    <Link key="chatgpt" href="/tools-for-nonprofits/chatgpt">
      ChatGPT
    </Link>,
    <Link key="notion" href="/tools-for-nonprofits/notion">
      Notion
    </Link>,
    <Link key="asana" href="/tools-for-nonprofits/asana">
      Asana
    </Link>,
    <Link key="trello" href="/tools-for-nonprofits/trello">
      Trello
    </Link>,
    <Link key="slack" href="/tools-for-nonprofits/slack">
      Slack
    </Link>,
    <Link key="zoom" href="/tools-for-nonprofits/zoom">
      Zoom
    </Link>,
  ];

  const galleryImages = [
    {
      id: 1,
      src: "/assets/img/projects/building-confidence-with-technology/cover.webp",
      alt: "Workshop overview screenshot",
      type: "image",
    },
    {
      id: 2,
      src: "/assets/img/projects/building-confidence-with-technology/workshop-1.webp",
      alt: "Workshop session image",
      type: "image",
    },
    {
      id: 3,
      src: "/assets/img/projects/building-confidence-with-technology/workshop-2.webp",
      alt: "Team training and collaboration",
      type: "image",
    },
    {
      id: 4,
      src: "/assets/img/projects/building-confidence-with-technology/workshop-3.webp",
      alt: "Modern workplace tools and learning",
      type: "image",
    },
  ];

  const sections = [
    {
      title: "The challenge",
      content: (
        <>
          In many organisations the technology toolkit is growing fast, but the comfort level among
          managers and small teams is often lagging. Teams often know they should start to “use
          AI”, “work agile”, and “modernise their tooling” but aren’t sure where to start, what gaps
          to fill, or how to link it back to organisational goals.
          <br />
          <br />
          This program focused on capacity building for managers and small teams so they could
          confidently adopt modern workplace tools, refine legacy workflows, and begin to trial AI
          task delegation.
        </>
      ),
    },
    {
      title: "Our approach",
      content: (
        <>
          We worked alongside managers and small teams — including in regional areas such as
          Busselton (Western Australia) and Cairns (Far North Queensland) — to deliver a modular
          group training program followed by one-on-one coaching.
        </>
      ),
    },
    {
      title: "",
      content: (
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Transitioning to online work:</strong> a guide to using everyday online tools to
            find your digital workflow.
          </li>
          <li>
            <strong>Getting started with AI:</strong> an accessible introduction to what AI is and how
            it’s being used.
          </li>
          <li>
            <strong>Using AI at work:</strong> practical sessions on safely embedding AI in day-to-day
            tasks.
          </li>
          <li>
            <strong>Stacking your tools:</strong> selecting and combining tools for collaboration,
            automation and insight.
          </li>
          <li>
            <strong>Moving away from legacy:</strong> a practical guide to transitioning away from
            legacy software.
          </li>
          <li>
            <strong>Transitioning to agile:</strong> mindset, roles, ceremonies and workflows.
          </li>
          <li>
            <strong>Continuous improvement:</strong> enabling teams to run meaningful reflection
            sessions that lead to sustained improvements.
          </li>
        </ul>
      ),
    },
    {
      title: "What we delivered",
      content: (
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Fun and engaging workshops (half-day or 1-day), delivered live and online.
          </li>
          <li>
            Follow-up coaching sessions (1:1) for managers to embed new ways of working.
          </li>
          <li>
            Resource kits (guides, checklists, cheat sheets) to keep practising after the sessions.
          </li>
          <li>
            Follow-up communication channels to answer questions, surface blockers, and adapt to
            each organisation’s context.
          </li>
        </ul>
      ),
    },
    {
      title: "Outcomes & impact",
      content: (
        <>
          The biggest shift we saw wasn’t just new skills. It was a whole new energy: people felt
          lighter, more confident using the tech they already had. They got curious, started
          experimenting, and shared what they tried — sometimes the very next day.
          <br />
          <br />
          Common ripple effects included:
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li>
              More ideas about saving time, improving quality, and reducing admin load
            </li>
            <li>
              More “have a go” momentum, with people solving problems together (not just
              escalating to IT)
            </li>
            <li>
              Better conversations about technology (especially AI), with less fear and more
              practical curiosity
            </li>
            <li>
              A clearer awareness of existing tools, and how to shape them around real workflows
            </li>
          </ul>
        </>
      ),
    },
    {
      title: "Why it matters",
      content: (
        <>
          In many organisations, it’s people who make the biggest difference, not the tools. You can
          have all the right software in place, but if the team isn’t confident using it, the benefits
          just sit there.
          <br />
          <br />
          By focusing on managers and small teams, the training can be tailored to real context and
          day-to-day workflows — building capability that keeps compounding as technology evolves.
        </>
      ),
    },
    {
      title: "What’s next",
      content: (
        <>
          If your organisation is ready to build internal capability around modern tooling,
          AI-enabled workflows, and agile-inspired ways of working, we’d love to explore a program
          tailored to your context.
          <br />
          <br />
          <Link href="/contact" className="underline">
            Contact Heaps Smart
          </Link>{" "}
          to talk about workshops and coaching.
        </>
      ),
    },
  ];

  const location = "Regional Australia (Busselton, WA and Cairns, QLD)";

  return (
    <InnovationPageTemplate
      pageTitle={pageTitle}
      tags={tags}
      techStack={techStack}
      sections={sections}
      galleryImages={galleryImages}
      location={location}
    />
  );
}
