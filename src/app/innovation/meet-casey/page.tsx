import InnovationPageTemplate from "@/app/_components/InnovationPageTemplate";

export default function MeetCaseyPage() {
  const tags = ["AI", "Agents", "Conservation", "Community"];
  const pageTitle = "Meet Casey: our cassowary expert";
  const techStack = ["Python (LangChain)", "OpenAI API", "React - Next.js", "Pinecone (Vector DB)"];
  
  const galleryImages = [
    { id: 2, src: "/assets/img/casey-1.webp", alt: "Cassowary in Mission Beach rainforest" },
    { id: 1, src: "/assets/video/casey.mp4", alt: "Video demo of Casey AI answering cassowary questions", type: "video", poster: "/assets/video/casey.jpg" },
    { id: 3, src: "/assets/img/casey-2.webp", alt: "Mission Beach Cassowaries team using Casey AI" },
  ];

  const sections = [
    {
      title: "The opportunity",
      content:
        "Cassowary conservation in Mission Beach is built on decades of effort — fieldwork, research, local knowledge, and thousands of sightings logged by passionate community members and visitors. But this collective intelligence was hard to access, buried across spreadsheets, paper records, Facebook posts, and memory. The community needed a way to connect with all this information — quickly, intuitively, and without needing to be technical.",
    },
    {
      title: "Our response",
      content: (
        <>
          <p>
            We built Casey to be an always-on AI-powered teammate trained to understand cassowaries.<br /><br />Casey helps users
            explore 30+ years of conservation insights using natural language. Ask her about movement patterns, habitat
            threats, known individuals, or historical interventions — she'll find and explain it. Built specifically for
            the Mission Beach Cassowaries team, Casey makes local knowledge searchable, shareable, and useful.
          </p>
          <p className="mt-4">
            As part of the engagement, the internal team was upskilled in AI fundamentals, tools and workflows,
            empowering them to maintain and expand Casey's brain over time.
          </p>
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
        "Casey is always learning and evolving. She's busy converting sightings data into a cohesive children's book on the lives of individual cassowaries — birds so familiar to the community they're practically family. These personalised narratives will help connect kids (and adults) to cassowary conservation through emotion and story.",
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
