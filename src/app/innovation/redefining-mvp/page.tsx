import InnovationPageTemplate from "@/app/_components/InnovationPageTemplate";

export default function RedefiningMvpPage() {
  const tags = ["Conservation", "Citizen Science", "Data", "Vision AI"];
  const pageTitle = "Redefining MVP: most valuable poo";
  const techStack = ["Python", "Landing Lens (Vision AI)", "PostgreSQL"];
  
  const galleryImages = [
    { id: 1, src: "/assets/img/poo-1.webp", alt: "Cassowary in Mission Beach rainforest" },
    { id: 2, src: "/assets/video/poo-vid.mp4", alt: "Video demo of Casey AI answering cassowary questions", type: "video", poster: "/assets/video/poo-vid.jpg" },
    { id: 3, src: "/assets/img/poo-2.webp", alt: "Mission Beach Cassowaries team using Casey AI" },
    { id: 4, src: "/assets/img/poo-3.webp", alt: "Visualisation of AI-powered knowledge search" },
    { id: 5, src: "/assets/img/poo-4.webp", alt: "Cassowary character illustration for children's book" },
  ];

  const sections = [
    {
      title: "The opportunity",
      content:
        "Cassowary scats — yes, poo — are goldmines of ecological data. They reveal what cassowaries are eating, where they’re travelling, and which species are thriving or at risk. But this data was underutilised, scattered and hard to share across researchers and the community.",
    },
    {
      title: "Our response",
      content:
        "Heaps Smart helped turn cassowary poo into a science communication tool. We developed a digital cataloguing system to log, label and visualise data from scat samples collected by locals. We also helped design the ‘Wall of Poo’ — an interactive education experience that brings together ecology, tech, and humour to make data accessible and unforgettable.",
    },
    {
      title: "Impact",
      content: (
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Created a growing <b>open dataset</b> of seed dispersal evidence
          </li>
          <li>
            Boosted <b>public engagement</b> in cassowary ecology
          </li>
          <li>
            Built the foundations for future <b>biodiversity credit verification</b>
          </li>
          <li>
            Translated niche data into a <b>storytelling</b> asset for schools and scientists
          </li>
        </ul>
      ),
    },
    {
      title: "What’s next",
      content:
        "We're working toward digitising samples with image recognition, exploring blockchain-style tracking for biodiversity verification, and scaling this model for other keystone species.",
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
        <>
          Peter Rowles: seed identification<br />
          C4 volunteers: scat collection<br />
        </>
      }
    />
  );
}
