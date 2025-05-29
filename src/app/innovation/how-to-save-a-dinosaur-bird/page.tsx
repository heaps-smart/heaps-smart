import Container from "@/app/_components/Container";
import Footer from "@/app/_components/Footer";
import Header from "@/app/_components/Header";
import Swell from "@/app/_components/Swell";
import InnovationPageTemplate from "@/app/_components/InnovationPageTemplate";

export default function HowToSaveADinosaurBirdPage() {
  const tags = ["Conservation", "Citizen Science", "Data"];
  const pageTitle = "How to save a dinosaur bird";
  const techStack = ["React - Next.js", "Supabase (PostgreSQL)"];

  const galleryImages = [
    { id: 2, src: "/assets/img/dino-2.webp", alt: "Map interface showing cassowary sightings" },
    { id: 1, src: "/assets/img/dino-1.webp", alt: "Cassowary chick in undergrowth" },
    { id: 3, src: "/assets/img/dino-3.webp", alt: "Community members participating in citizen science" },
    { id: 4, src: "/assets/img/dino-4.webp", alt: "Wet Tropics rainforest landscape" },
  ];

  const sections = [
    {
      title: "The opportunity",
      content: (
        <>
          For over 30 years, locals and visitors to Mission Beach have been reporting cassowary sightings, recording them in paper logbooks, spreadsheets, and community noticeboards.<br /><br />These ancient birds are a keystone species in the Wet Tropics, but the knowledge held by the community was disconnected, hard to use, and at risk of being lost.<br /><br />With renewed interest in citizen science and biodiversity markets, there was a need to transform these observations into a living, useful dataset.
        </>
      ),
    },
    {
      title: "Our response",
      content: (
        <>
          Heaps Smart partnered with <b>Community for Coastal and Cassowary Conservation (C4)</b> to digitise three decades of cassowary sightings. Together, we built an automated database to catalogue new and historic records, created simple logging tools for the public, and designed a notification system to keep contributors informed and engaged. The system makes it easy to collect sightings from multiple sources — including social media, forms, and emails — and collates them into a clean, structured database ready for conservation use.
        </>
      ),
    },
    {
      title: "Impact",
      content: (
        <ul className="list-disc pl-6 space-y-2">
          <li>Translated 30+ years of community-collected cassowary data into structured database</li>
          <li>Automated the ingestion and tagging of sightings from multiple channels</li>
          <li>Re-engaged a passionate local network of contributors</li>
          <li>Built the foundation for a real-time, publicly accessible cassowary monitoring tool</li>
        </ul>
      ),
    },
    {
      title: "What’s next",
      content: (
        <>
          We're now developing an open-data platform to make cassowary sightings visible and usable for conservationists, planners, and researchers. Future features will include image analysis to help identify individual birds and track their movement across the landscape — helping protect one of Australia’s most iconic and endangered species.
        </>
      ),
    },
  ];


  return (
    <InnovationPageTemplate
      pageTitle={pageTitle}
      tags={tags}
      techStack={techStack}
      sections={sections}
      galleryImages={galleryImages}
      location="Cassowary Coast, Queensland"
      acknowledgements={
        <>
          Cassowary photography: Jeff Larson<br />
          C4 Management Team (1990 - present): cassowary logbook sightings
        </>
      }
    />
  );
}
