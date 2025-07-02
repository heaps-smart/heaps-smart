import InnovationPageTemplate from "@/app/_components/InnovationPageTemplate";

export default function C4DigitalTransformationPage() {
  const tags = ["Website Development", "Digital Strategy", "Conservation", "Automation"];
  const pageTitle = "C4 Digital Transformation";
  const techStack = ["WordPress", "Next.js/React", "Airtable", "Stripe", "Zapier", "Google Workspace", "Canva"];

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
          C4 (<strong><a href="https://cassowaryconservation.org" target="_blank" rel="noopener noreferrer" className="underline">Community for Coastal and Cassowary Conservation</a></strong>) has protected the Wet Tropics for over 30 years—but their digital presence hadn't kept pace with the scale or scope of their work. Their old website was outdated, difficult to update, and failed to reflect the breadth of their conservation and community engagement programs. Internally, C4 relied on manual workflows and disconnected tools. As the organisation grew—taking on more volunteers, events, and education programs—so too did the complexity of its admin. It needed a new identity and a modern digital platform built for long-term impact..
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
            A custom website optimised for speed, accessibility, and ongoing storytelling
          </li>
          <li>
            A simplified content structure with modular blocks for events, programs updates, and news posts
          </li>
          <li>
            Integrated forms for volunteers, donations, and member sign-up
          </li>
          <li>
            Stripe integration for online payments
          </li>
          <li>
            Airtable databases for managing members, supporters, and education bookings
          </li>
          <li>
            Zapier automations to streamline admin, alerts, and onboarding
          </li>
          <li>
            Google Workspace setup for coordinated team operations
          </li>
          <li>
            Canva templates and automation for in-house teams to create on-brand materials without needing a designer
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
    />
  );
}
