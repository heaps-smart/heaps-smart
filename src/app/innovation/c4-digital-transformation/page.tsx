import { Metadata } from "next";
import InnovationPageTemplate from "@/app/_components/InnovationPageTemplate";
import Link from "next/link";

export const metadata: Metadata = {
  title: "C4 Digital Transformation | Innovation | Heaps Smart",
  description: "Heaps Smart worked with C4 to overhaul their digital ecosystem, creating a modern brand extension, new website, and integrated tools to scale their conservation mission.",
  keywords: "digital transformation, conservation organization, WordPress development, non-profit technology, C4, cassowary conservation, website development, automation",
  authors: [{ name: "Heaps Smart" }],
  openGraph: {
    title: "C4 Digital Transformation",
    description: "Heaps Smart worked with C4 to overhaul their digital ecosystem, creating a modern brand extension, new website, and integrated tools to scale their conservation mission.",
    url: "https://www.heaps-smart.com/innovation/c4-digital-transformation",
    siteName: "Heaps Smart",
    images: [
      {
        url: "https://www.heaps-smart.com/assets/img/c4.webp",
        width: 1200,
        height: 630,
        alt: "C4 Digital Transformation - Conservation organization technology upgrade",
      },
    ],
    locale: "en_AU",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "C4 Digital Transformation",
    description: "Heaps Smart worked with C4 to overhaul their digital ecosystem, creating a modern brand extension, new website, and integrated tools.",
    images: ["https://www.heaps-smart.com/assets/img/c4.webp"],
  },
  alternates: {
    canonical: "https://www.heaps-smart.com/innovation/c4-digital-transformation",
  },
};

export default function C4DigitalTransformationPage() {
  const tags = ["Website Development", "Digital Strategy", "Conservation", "Automation"];
  const pageTitle = "C4 Digital Transformation";
  const techStack = [
    <Link key="wordpress" href="/tools-for-nonprofits/wordpress">WordPress</Link>,
    <Link key="contact" href="/contact">Next.js/React</Link>,
    <Link key="airtable" href="/tools-for-nonprofits/airtable">Airtable</Link>,
    <Link key="stripe" href="/tools-for-nonprofits/stripe">Stripe</Link>,
    <Link key="zapier" href="/tools-for-nonprofits/zapier">Zapier</Link>,
    <Link key="google-docs" href="/tools-for-nonprofits/google-docs">Google Workspace</Link>,
    <Link key="canva" href="/tools-for-nonprofits/canva">Canva</Link>
  ];

  const galleryImages = [
    { id: 1, src: "/assets/video/c4-walkthru.mp4", alt: "C4 digital transformation walkthrough", type: "video", poster: "/assets/img/c4.webp" },
    { id: 2, src: "/assets/video/c4-cassowary.mp4", alt: "C4 digital transformation cassowary", type: "video", poster: "/assets/img/c4-cassowary-poster.webp" },
    { id: 3, src: "/assets/video/c4-nursery.mp4", alt: "C4 digital transformation nursery", type: "video", poster: "/assets/img/c4-nursery-poster.webp" },
  ];

  const sections = [
    {
      title: "The opportunity",
      content: (
        <>
          C4 (<strong><a href="https://cassowaryconservation.org" target="_blank" rel="noopener noreferrer" className="underline">Community for Coastal and Cassowary Conservation</a></strong>) has been protecting the Wet Tropics for over 30 years, with a strong record in conservation and community engagement. As the organisation grew, welcoming more volunteers, events and education programs, its digital presence needed to evolve as well. The website and internal systems no longer reflected the full breadth of C4’s work or the scale of its impact. A refreshed identity and a modern digital platform were the natural next steps to support long-term growth and engagement. 
        </>
      )
    },
    {
      title: "Our response",
      content:
        "Heaps Smart worked closely with C4 to overhaul their digital ecosystem, starting with the digital brand extension, and building out a new website and integrated tools to match. We designed a new visual identity grounded in the landscape and character of the region, and applied this across web, social media, and printed materials. We made it easy for new audiences to engage, whether they were visiting Mission Beach for the first time or looking to support local conservation efforts long-term. We also rebuilt the technology stack behind the scenes, delivering:"
    },
    {
      title: "",
      content: (
        <ul className="list-disc pl-6 space-y-2">
            <li>
            A custom <strong><Link href="/tools-for-nonprofits/wordpress" className="text-black underline">WordPress</Link></strong> website optimised for speed, accessibility, and ongoing storytelling, leveraging our WordPress expertise
            </li>
          <li>
            A simplified content structure with modular blocks for events, programs updates, and news posts
          </li>
          <li>
            Integrated forms for volunteers, donations, and member sign-up
          </li>
          <li>
            <strong><Link href="/tools-for-nonprofits/stripe" className="text-black underline">Stripe</Link></strong> integration for online payments
          </li>
          <li>
            <strong><Link href="/tools-for-nonprofits/airtable" className="text-black underline">Airtable</Link></strong> databases for managing members, supporters, and education bookings
          </li>
          <li>
            <strong><Link href="/tools-for-nonprofits/zapier" className="text-black underline">Zapier</Link></strong> automations to streamline admin, alerts, and onboarding
          </li>
          <li>
            <strong><Link href="/tools-for-nonprofits/google-docs" className="text-black underline">Google Workspace</Link></strong> setup for coordinated team operations
          </li>
          <li>
            <strong><Link href="/tools-for-nonprofits/canva" className="text-black underline">Canva</Link></strong> templates and automation for in-house teams to create on-brand materials without needing a designer
          </li>
        </ul>
      ),
    },
    {
      title: "",
      content:
        "The result was not just a website, but a digital ecosystem designed to scale with C4's mission."
    },
    {
      title: "Impact",
      content: (
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <b>Helped put C4 and cassowaries on the national stage</b>
            <p>
              Our comms overhaul sparked media attention, leading to a feature on ABC Back Roads and a recurring segment on 4KZ radio dedicated to cassowary conservation.
            </p>
          </li>
          <li>
            <b>Brought the right eyes to the right place</b>
            <p>
              C4's work was showcased as a feature field trip during the ALCA national conference, connecting the mission with top environment leaders from across Australia.
            </p>
          </li>
          <li>
            <b>Positioned C4 as a leader in place-based conservation</b>
            <p>
              Through a clearer digital voice and renewed strategy, C4 gained recognition as a go-to model for community-driven environmental stewardship in the Far North.
            </p>
          </li>
          <li>
            Modernised and extended three decades of brand heritage into an engaging, adaptable identity that works across digital platforms, print materials, and on-the-ground activations
          </li>
          <li>
            Enabled in-house teams to manage content, design assets, and communications independently
          </li>
          <li>
            Reduced staff admin with connected, automated systems
          </li>
          <li>
            Centralised supporter, volunteer, and donor records in structured databases
          </li>
          <li>
            Opened up new digital capabilities and partnerships for C4's programs, allowing tools like Airtable and Zapier to power the collection of data for citizen science initiatives
          </li>
        </ul>
      ),
    },
    {
      title: "What's next",
      content:
        "With the foundations in place, we're continuing to work with C4 to:"
    },
    {
      title: "",
      content: (
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Scale citizen science programs with online data collection tools, structured databases, and visual dashboards for conservation insights
          </li>
          <li>
            Automate digital communications across programs to increase reach, responsiveness, and community engagement
          </li>
          <li>
            Build a digital knowledge hub to house decades of conservation history and powered by an AI assistant that lets new members explore it conversationally
          </li>
        </ul>
      ),
    },
  ];
  const location = "Mission Beach, Queensland";

  return (
    <InnovationPageTemplate
      pageTitle={pageTitle}
      tags={tags}
      techStack={techStack}
      sections={sections}
      galleryImages={galleryImages}
      location={location}
      website="https://cassowaryconservation.org/"
      websiteText="cassowaryconservation.org"
    />
  );
}
