import InnovationPageTemplate from "@/app/_components/InnovationPageTemplate";
import Script from "next/script";
import Link from "next/link";

export default function MeetCassiePage() {
  const tags = ["AI", "Conservation", "Community"];
  const pageTitle = "Meet Cassie: our cassowary expert";
  const techStack = [
    <Link key="react" href="/contact">React - Next.js</Link>,
    <Link key="supabase" href="/tools-for-nonprofits/chatgpt">OpenAI/ChatGPT  </Link>,
  ];

  
  const galleryImages = [
    { id: 2, src: "/assets/img/cassie-1.webp", alt: "Cassowary in Mission Beach rainforest" },
    { id: 1, src: "/assets/video/cassie.mp4", alt: "Video demo of Cassie AI answering cassowary questions", type: "video", poster: "/assets/video/cassie.jpg" },
    { id: 3, src: "/assets/img/cassie-2.webp", alt: "Mission Beach Cassowaries team using Cassie AI" },
  ];

  const sections = [
    {
      title: "The opportunity",
      content:
        "Cassowary conservation in Mission Beach is built on decades of effort: fieldwork, research, local knowledge, and thousands of sightings logged by dedicated community members and visitors. However, accessing this collective intelligence was challenging, as it was spread across spreadsheets, paper records, Facebook posts, and individual memory.",
    },
    {
      title: "Our response",
      content: (
        <>
            <p>
            In collaboration with <strong><a href="https://www.missionbeachcassowaries.com/" target="_blank" rel="noopener noreferrer" className="text-black underline">Mission Beach Cassowaries</a></strong>, we developed Cassie, an AI-powered conservation tool trained on decades of community-provided cassowary data. Currently in active development, Cassie's goal is to consolidate existing local knowledge and make it more accessible, shareable, and actionable.
            </p>
          <p className="mt-4">
            As part of the collaboration, the Mission Beach Cassowaries team gained skills in AI fundamentals, tools, and workflows, empowering them to maintain and expand Cassie's capabilities over time as development progresses.
          </p>
          <div className="my-8">
            <div style={{padding:'56.25% 0 0 0', position:'relative'}}>
              <iframe 
                src="https://player.vimeo.com/video/1098058184?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;portrait=0&amp;byline=0&amp;title=0" 
                style={{position:'absolute', top:0, left:0, width:'100%', height:'100%'}} 
                title="Meet Cassie"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" 
                frameBorder="0"
              ></iframe>
            </div>
            <Script src="https://player.vimeo.com/api/player.js" strategy="lazyOnload" />
          </div>
        </>
      ),
    },
    {
      title: "Impact",
      content: (
        <ul className="list-disc pl-6 space-y-2">
          <li>Made decades of distributed data and knowledge accessible through natural conversation</li>
          <li>Enabled the Mission Beach Cassowaries team to ask complex questions and receive contextual answers quickly</li>
          <li>Enhanced local AI literacy and confidence through hands-on training with our conservation partners</li>
          <li>Inspired new approaches to storytelling, education, and advocacy in cassowary conservation</li>
        </ul>
      ),
    },
    {
      title: "What's next",
      content: (
        <>
          Cassie continues to learn and evolve as development progresses.<br /><br />Learn more about the conservation efforts that support Cassie at <strong><a href="https://www.missionbeachcassowaries.com/" target="_blank" rel="noopener noreferrer" className="text-black underline">Mission Beach Cassowaries</a></strong>.
        </>
      ),
    },
  ];
  const location = "Mission Beach, Queensland, Australia";

  return (
    <InnovationPageTemplate
      pageTitle={pageTitle}
      tags={tags}
      techStack={techStack}
      sections={sections}
      galleryImages={galleryImages}
      location={location}
      acknowledgements={
        <>Cassie was built in partnership with <strong><a href="https://www.missionbeachcassowaries.com/" target="_blank" rel="noopener noreferrer" className="text-black underline">Mission Beach Cassowaries</a></strong>, utilising decades of community-supported cassowary sightings media and data.</>
      }
    />
  );
}
