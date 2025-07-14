import InnovationPageTemplate from "@/app/_components/InnovationPageTemplate";
import Script from "next/script";
import Link from "next/link";

export default function MeetCassiePage() {
  const tags = ["AI", "Conservation", "Community"];
  const pageTitle = "Meet Cassie: our cassowary expert";
  const techStack = [
    <Link key="react" href="/contact">React - Next.js</Link>,
    <Link key="supabase" href="/tools-for-nonprofits/chatgpt">OpenAI/ChatGPT</Link>,
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
        "Cassowary conservation in Mission Beach is built on decades of effort: fieldwork, research, local knowledge, and thousands of sightings logged by passionate community members and visitors. But this collective intelligence was hard to access, buried across spreadsheets, paper records, Facebook posts, and memory. The community needed a way to connect with all this information quickly without needing to be technical.",
    },
    {
      title: "Our response",
      content: (
        <>
          <p>
            We built Cassie to be an always-on AI-powered teammate trained to understand cassowaries.<br /><br />Cassie helps users
            explore 30+ years of conservation insights using natural language. Ask her about movement patterns, habitat
            threats, known individuals, or historical interventions. She'll find and explain it. Built specifically for
            the Mission Beach Cassowaries team, Cassie makes local knowledge searchable, shareable, and useful.
          </p>
          <p className="mt-4">
            As part of the engagement, the internal team was upskilled in AI fundamentals, tools and workflows,
            empowering them to maintain and expand Cassie's brain over time.
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
          <li>Made decades of scattered data and knowledge accessible through natural conversation</li>
          <li>Enabled the team to ask complex questions and get contextual answers in seconds</li>
          <li>Boosted local AI literacy and confidence through hands-on training</li>
          <li>Sparked new ways of thinking about storytelling, education, and advocacy</li>
        </ul>
      ),
    },
    {
      title: "What's next",
      content:
        "Cassie is always learning and evolving. She's busy converting sightings data into a cohesive children's book on the lives of individual cassowaries — birds so familiar to the community they're practically family. These personalised narratives will help connect kids (and adults) to cassowary conservation through emotion and story.",
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
        <>Mission Beach Cassowaries: cassowary sightings media and data</>
      }
    />
  );
}
