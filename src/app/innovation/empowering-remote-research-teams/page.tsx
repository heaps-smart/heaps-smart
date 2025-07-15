import InnovationPageTemplate from "@/app/_components/InnovationPageTemplate";
import Link from "next/link";

export default function EmpoweringRemoteResearchTeamsPage() {
  const tags = ["AI Automation", "Remote Collaboration", "Research Tools", "Meeting Management"];
  const pageTitle = "Empowering Remote Research Teams Through AI-Driven Meeting Automation";
  const techStack = [
    <Link key="openai" href="/tools-for-nonprofits/openai">OpenAI API</Link>,
    <Link key="zoom" href="/tools-for-nonprofits/zoom">Zoom Integration</Link>,
    <Link key="tactiq" href="/tools-for-nonprofits/tactiq">Tactiq Transcription</Link>
  ];

  const galleryImages = [
    { id: 1, src: "/assets/video/tactiq.mp4", alt: "Video demo of AI meeting automation", type: "video", poster: "/assets/video/tactiq.jpg" },
  ];

  const sections = [
    {
      title: "The opportunity",
      content: (
        <>
          Over a five-year period, a dedicated team of environmental researchers in Western Australia collaborated remotely, convening via Zoom every fortnight. Without a designated project manager, the lead researcher undertook additional responsibilities, including minute-taking, action item tracking, and milestone documentation. These administrative tasks diverted attention from active participation and research contributions during meetings.
        </>
      )
    },
    {
      title: "Our response",
      content:
        "How we implemented an AI-driven solution to streamline meeting management:"
    },
    {
      title: "",
      content: (
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Automated transcription:</strong> Meetings were transcribed in real-time, ensuring accurate records.
          </li>
          <li>
            <strong>Summarisation and action tracking:</strong> Key discussion points and action items were automatically summarised and assigned.
          </li>
          <li>
            <strong>LLM prompting:</strong> We refined an LLM response to process the team's specific terminology, acronyms, and naming conventions so that notes and actions could be easily understood by the team.
          </li>
          <li>
            <strong>Seamless distribution:</strong> Summaries and action items were promptly distributed to team members post-meeting, while full transcripts were stored in the cloud for governance.
          </li>
        </ul>
      ),
    },
    {
      title: "",
      content:
        "This automation allowed the lead researcher and team members to engage more fully in discussions, enhancing overall productivity."
    },
    {
      title: "Impact",
      content: (
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Enhanced focus:</strong> Researchers could concentrate on discussions without the distraction of administrative duties.
          </li>
          <li>
            <strong>Improved accuracy:</strong> Automated transcription and summarisation reduced the risk of missed or misrecorded information.
          </li>
          <li>
            <strong>Time efficiency:</strong> Streamlined processes saved time in post-meeting documentation and follow-ups.
          </li>
          <li>
            <strong>Knowledge retention:</strong> Consistent and accurate records contributed to better knowledge management over the project's duration.
          </li>
        </ul>
      ),
    },
    {
      title: "What's next",
      content:
        "Building on this success, the team plans to integrate the AI system further into their operational workflows, exploring capabilities such as automated reviews and data management support. This initiative exemplifies how tailored AI solutions can enhance collaborative research efforts, particularly in remote settings."
    },
  ];
  const location = "Western Australia";

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
