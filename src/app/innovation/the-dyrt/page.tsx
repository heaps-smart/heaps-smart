import { Metadata } from "next";
import InnovationPageTemplate from "@/app/_components/InnovationPageTemplate";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Building The Dyrt's Mobile Experience | Innovation | Heaps Smart",
  description:
    "Greenfield React Native build for The Dyrt with GIS mapping layers, offline capability, and performance-focused architecture across iOS and Android.",
  openGraph: {
    title: "Building The Dyrt's Mobile Experience",
    description:
      "React Native iOS and Android apps for The Dyrt with GIS mapping layers, offline capability, and performance-focused architecture.",
  url: "https://www.heaps-smart.com/innovation/the-dyrt",
    siteName: "Heaps Smart",
    images: [
      {
        url: "https://www.heaps-smart.com/assets/img/heaps-smart-logo-og.png",
        width: 1200,
        height: 630,
        alt: "Heaps Smart Open Graph image",
      },
    ],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Building The Dyrt's Mobile Experience",
    description:
      "React Native iOS and Android apps for The Dyrt with GIS mapping layers, offline capability, and performance-focused architecture.",
    images: ["https://www.heaps-smart.com/assets/img/heaps-smart-logo-og.png"],
  },
  alternates: {
    canonical: "https://www.heaps-smart.com/innovation/the-dyrt",
  },
};

export default function PreviousWorkTheDyrtPage() {
  const tags = ["Mobile Apps", "React Native", "GIS",];

  const techStack = [
    <Link key="rn" href="https://reactnative.dev/">React Native</Link>,
    <Link key="maps" href="/tools-for-nonprofits/qgis">GIS / Mapping</Link>,
    <Link key="ios" href="/contact">iOS & Android</Link>,
  ];

  const pageTitle = "Building The Dyrt's Mobile Experience";

  const sections = [
    {
      title: "Project background",
      content: (
			<>
				<Link href="https://thedyrt.com/">The Dyrt</Link> is consumer subscription software for camping, and the largest source of information for campgrounds throughout the United States. Before its mobile apps existed, the platform lived entirely on the web and was already powered by a huge community of campers posting photos, videos and reviews. As Director of Mobile Development, work was undertaken to close a major gap: travellers relying on their phones in remote areas had no dedicated mobile experience. The project brought <Link href="https://thedyrt.com/">The Dyrt</Link>'s rich, user-generated content into a purpose-built app for campers on the move.
			</>
      ),
    },
    {
      title: "The brief",
      content: (
        <>
          The brief was ambitious, to build the company’s first iOS and Android apps from the ground up using React Native. It meant shaping the entire mobile architecture, defining performance expectations, and designing the core experience for campers who often use the app in low connectivity or offline. The build drew on the existing web platform while rethinking the flow for mobile first behaviour like quick search, map based discovery, and on the road navigation.
        </>
      ),
    },
  {
      title: "GIS mapping integration",
      content: (
        <>
          A key component of the project was the integration of GIS mapping layers with campground review content. Location data, amenity details, photos, and user insights were brought together into a responsive interface that loaded quickly and behaved predictably even when reception dropped away. The mapping experience became central to how people found campsites across public lands, state parks, and private properties.
        </>
      ),
    },
    {
      title: "Performance and delivery",
      content: (
        <>
          The project established performance benchmarks across the app. Those standards played a major role in lifting App Store ratings once the apps launched. The role also included guiding the engineering team, introducing stronger development practices, and creating technical patterns the organisation could use as the product grew. User research fed into feature decisions so core interactions matched the way campers plan trips, explore maps, and review sites in real‑world conditions.
        </>
      ),
    },
    {
      title: "Impact",
      content: (
        <>
          These foundations continue to underpin The Dyrt's mobile ecosystem. The greenfield architecture has scaled with the platform. The mapping experience remains at the heart of user engagement. The patterns created during this build still inform how complex mobile and mapping work is approached within Heaps Smart today.
        </>
      ),
    },
  ];

  const galleryImages = [
  { id: 1, src: "/assets/img/the-dyrt-1.jpg", alt: "Mobile campsite discovery, map based view" },
  { id: 2, src: "/assets/img/the-dyrt-2.jpg", alt: "The Dyrt, mobile app with GIS layers" },
  { id: 3, src: "/assets/img/the-dyrt-3.jpg", alt: "Offline map tiles and campsite details" },
  { id: 4, src: "/assets/img/the-dyrt-4.jpg", alt: "Campsite detail view with reviews" },
  { id: 5, src: "/assets/img/the-dyrt-5.jpg", alt: "Map clustering and filter controls" },
  { id: 6, src: "/assets/img/the-dyrt-6.jpg", alt: "Route directions and navigation UI" },
  { id: 7, src: "/assets/img/the-dyrt-7.jpg", alt: "In app photo gallery and upload flow" },
  { id: 8, src: "/assets/img/the-dyrt-8.jpg", alt: "Performance focused mapping interface" },
  ];

  return (
    <InnovationPageTemplate
      pageTitle={pageTitle}
      tags={tags}
      techStack={techStack}
      sections={sections}
      galleryImages={galleryImages}
      location="United States"
      website="https://thedyrt.com/"
      websiteText="thedyrt.com"
      acknowledgements={<></>}
    />
  );
}
