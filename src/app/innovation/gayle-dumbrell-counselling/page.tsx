import { Metadata } from "next";
import InnovationPageTemplate from "@/app/_components/InnovationPageTemplate";
import Link from "next/link";

export const metadata: Metadata = {
  title: "From the classroom to the counselling couch | Innovation | Heaps Smart",
  description: "Heaps Smart supported Gayle Dumbrell Counselling to establish a clear, gentle digital foundation from scratch, creating a brand and website that reflected Gayle's experience, values and approach.",
  keywords: "health, education, branding, website development, digital infrastructure, data, automation, counselling, mental health, non-profit technology",
  authors: [{ name: "Heaps Smart" }],
  openGraph: {
    title: "From the classroom to the counselling couch: Building a digital foundation",
    description: "Heaps Smart supported Gayle Dumbrell Counselling to establish a clear, gentle digital foundation from scratch.",
    url: "https://www.heaps-smart.com/innovation/gayle-dumbrell-counselling",
    siteName: "Heaps Smart",
    images: [
      {
        url: "https://www.heaps-smart.com/assets/video/posters/gd-counselling.webp",
        width: 1200,
        height: 630,
        alt: "Gayle Dumbrell Counselling - Building a digital foundation",
      },
    ],
    locale: "en_AU",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "From the classroom to the counselling couch",
    description: "Heaps Smart supported Gayle Dumbrell Counselling to establish a clear, gentle digital foundation from scratch.",
    images: ["https://www.heaps-smart.com/assets/video/posters/gd-counselling.webp"],
  },
  alternates: {
    canonical: "https://www.heaps-smart.com/innovation/gayle-dumbrell-counselling",
  },
};

export default function GayleDumbrellCounsellingPage() {
  const tags = ["Health", "Education", "Branding", "Website Development", "Digital Infrastructure", "Data", "Automation"];
  const pageTitle = "From the classroom to the counselling couch: Building a digital foundation";
  const techStack = [
    <span key="react">React</span>,
    <span key="nodejs">Node.js</span>,
    <span key="cursor">Cursor</span>,
  ];

  const galleryImages = [
    { id: 1, src: "/assets/video/gd-counselling.mp4", alt: "Gayle Dumbrell Counselling website", type: "video", poster: "/assets/video/posters/gd-counselling.webp" },
    { id: 2, src: "/assets/img/gdc-appointments.webp", alt: "Gayle Dumbrell Counselling appointments", type: "image" },
    { id: 3, src: "/assets/img/gdc-how-i-can-help.webp", alt: "Gayle Dumbrell Counselling how I can help", type: "image" },
    { id: 4, src: "/assets/img/gdc-how-it-works.webp", alt: "Gayle Dumbrell Counselling how it works", type: "image" },
  ];

  const sections = [
    {
      title: "The opportunity",
      content: (
        <>
          Gayle Dumbrell Counselling was entering a period of transition. After years as a teacher and school-based children's counsellor, Gayle was stepping into independent, remote practice.
          <br /><br />
          Her new business needed a digital presence that felt safe, calm and trustworthy; a place where children, families and teachers could seek support during difficult moments. It also needed to work quickly. Gayle was ready to take enquiries, but had no brand, no website and no secure way to manage information online.
        </>
      )
    },
    {
      title: "Our response",
      content:
        "Heaps Smart supported Gayle to establish a clear, gentle digital foundation from scratch. We focused on creating something lightweight and human; a brand and website that reflected Gayle's experience, values and approach, without unnecessary complexity. Working at pace, we delivered:"
    },
    {
      title: "",
      content: (
        <ul className="list-disc pl-6 space-y-2">
          <li>
            A simple logo and brand palette designed to feel warm, grounded and reassuring;
          </li>
          <li>
            Clear voice and tone guidance, shaped for parents, carers and educators;
          </li>
          <li>
            Website copy written to be accessible, supportive and easy to understand;
          </li>
          <li>
            Carefully sourced imagery aligned with safety, privacy and sensitivity;
          </li>
          <li>
            A greenfield website build using modern, AI-enabled development tools to support rapid delivery;
          </li>
          <li>
            Secure online data capture to reduce manual handling and protect client information.
          </li>
        </ul>
      ),
    },
    {
      title: "",
      content:
        "The emphasis throughout was on trust, clarity and ease; for both families reaching out for support and for Gayle managing her practice day to day."
    },
    {
      title: "Impact",
      content: (
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Enabled the practice to launch a professional digital presence within days, not months;
          </li>
          <li>
            Created a safe, central point of contact for families, teachers and referrers;
          </li>
          <li>
            Reduced administrative overhead and data handling risks through secure online forms;
          </li>
          <li>
            Supported early marketing activity, including paid social campaigns, by funnelling enquiries directly to the website;
          </li>
          <li>
            Gave Gayle confidence to begin operating independently with systems that can grow alongside her practice.
          </li>
        </ul>
      ),
    },
    {
      title: "What's next",
      content:
        "As the practice grows, the next phase will focus on deeper operational support; including online appointment scheduling and secure payment processing, helping streamline bookings while maintaining privacy, care and trust for clients."
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
      website="https://gayledumbrellcounselling.com.au/"
      websiteText="gayledumbrellcounselling.com.au"
    />
  );
}


