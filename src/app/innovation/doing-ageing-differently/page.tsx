import { Metadata } from "next";
import InnovationPageTemplate from "@/app/_components/InnovationPageTemplate";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Doing ageing differently | Innovation | Heaps Smart",
  description: "Heaps Smart worked with Good Flock to strengthen the foundations of their content platform, improving content structure, discoverability, and connecting people to the organisation as they engage.",
  keywords: "content management, ageing, digital infrastructure, SEO, automation, integrations, non-profit technology, Good Flock, content platform",
  authors: [{ name: "Heaps Smart" }],
  openGraph: {
    title: "Doing ageing differently",
    description: "Heaps Smart worked with Good Flock to strengthen the foundations of their content platform, improving content structure, discoverability, and connecting people to the organisation.",
    url: "https://www.heaps-smart.com/innovation/doing-ageing-differently",
    siteName: "Heaps Smart",
    images: [
      {
        url: "https://www.heaps-smart.com/assets/video/posters/good-flock.webp",
        width: 1200,
        height: 630,
        alt: "Good Flock - Doing ageing differently",
      },
    ],
    locale: "en_AU",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Doing ageing differently",
    description: "Heaps Smart worked with Good Flock to strengthen the foundations of their content platform.",
    images: ["https://www.heaps-smart.com/assets/video/posters/good-flock.webp"],
  },
  alternates: {
    canonical: "https://www.heaps-smart.com/innovation/doing-ageing-differently",
  },
};

export default function DoingAgeingDifferentlyPage() {
  const tags = ["Ageing", "Content Management", "Data", "Digital Infrastructure", "SEO", "Automation", "Integrations"];
  const pageTitle = "What better looks like; Doing ageing differently.";
  const techStack = [
    <Link key="wordpress" href="/tools-for-nonprofits/wordpress">WordPress</Link>,
  ];

  const galleryImages = [
    { id: 1, src: "/assets/video/good-flock.mp4", alt: "Good Flock content platform", type: "video", poster: "/assets/video/posters/good-flock.webp" },
    { id: 2, src: "/assets/video/good-flock-2.mp4", alt: "Good Flock content platform overview", type: "video", poster: "/assets/video/posters/good-flock.webp" },
    { id: 3, src: "/assets/img/good-flock-program.webp", alt: "Good Flock program image", type: "image" },
    { id: 4, src: "/assets/img/good-flock-post.webp", alt: "Good Flock single post image", type: "image" },
  ];

  const sections = [
    {
      title: "The opportunity",
      content: (
        <>
          <strong><a href="https://goodflock.org/" target="_blank" rel="noopener noreferrer" className="underline">Good Flock</a></strong> is working to shift the story of ageing within Australia, not just for older people, but for us as a society. Their work is content-rich, research-led and deeply human; stories, insights and evidence designed to shift how Australia thinks about ageing.
          <br /><br />
          As their ambitions grew, so did the challenge. The website needed to support regular content gathering and creation, improve how people find relevant material, and quietly manage the flow of data behind the scenes from subscribers, supporters, donors and changemakers.
          <br /><br />
          A key focus was the <strong><a href="https://goodflock.org/what-better-looks-like/" target="_blank" rel="noopener noreferrer" className="underline">What Better Looks Like</a></strong> section; the heart of Good Flock's storytelling and a critical tool for scaling their impact.
        </>
      )
    },
    {
      title: "Our response",
      content:
        "Heaps Smart worked alongside the Good Flock team to strengthen the foundations of their content platform. Rather than rebuilding everything, we focused on the areas that mattered most: structuring and styling the What Better Looks Like content so it could grow over time; improving how stories are organised, surfaced and discovered; and setting up the systems that quietly connect people to the organisation as they engage. This included:"
    },
    {
      title: "",
      content: (
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Refining content layouts and styles to support clarity, accessibility and consistency across articles;
          </li>
          <li>
            Shaping a content structure that helps readers explore themes, ideas and evidence with ease;
          </li>
          <li>
            Improving discoverability through clearer information architecture and SEO-aware content patterns;
          </li>
          <li>
            Embedding forms and sign-up pathways directly into the content experience;
          </li>
          <li>
            Designing automation and integration workflows to manage how contact data moves between systems;
          </li>
          <li>
            Connecting website and email engagement back into a central view of audiences and relationships.
          </li>
        </ul>
      ),
    },
    {
      title: "",
      content:
        "The result is a platform the internal team can confidently work with; one that supports ongoing publishing without technical bottlenecks, while strengthening how content, data and engagement work together."
    },
    {
      title: "Impact",
      content: (
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Enabled the team to independently manage and publish content through their owned CMS;
          </li>
          <li>
            Improved discoverability of long-form content across the site;
          </li>
          <li>
            Reduced manual handling of subscriber and contact data;
          </li>
          <li>
            Created clearer visibility of how audiences engage with stories about ageing;
          </li>
          <li>
            Laid the groundwork for scaling content production without losing coherence or intent.
          </li>
        </ul>
      ),
    },
    {
      title: "What's next",
      content:
        "Good Flock is building a movement; one that reaches beyond individual articles to influence how ageing is understood across Australia. It's exciting stuff."
    },
    {
      title: "",
      content:
        "We're continuing to support the team as they scale their reach, refine their systems and connect with new audiences; ensuring the digital foundations keep pace with their ambition. Watch this space."
    },
  ];
  const location = "Australia";

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

