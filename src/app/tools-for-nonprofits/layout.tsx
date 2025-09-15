import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Tools for Non-Profits - Software Recommendations | Heaps Smart",
  description: "Discover the best software tools for non-profits across categories like AI solutions, data infrastructure, digital communications, automation, and more. Expert recommendations with non-profit discounts.",
  keywords: "non-profit tools, non-profit software, charity software, NGO tools, non-profit discounts, AI solutions, automation tools, fundraising software",
  authors: [{ name: "Heaps Smart" }],
  openGraph: {
    title: "Tools for Non-Profits - Software Recommendations",
    description: "Discover the best software tools for non-profits across categories like AI solutions, data infrastructure, digital communications, automation, and more.",
    url: "https://www.heaps-smart.com/tools-for-nonprofits",
    siteName: "Heaps Smart",
    images: [
      {
        url: `https://www.heaps-smart.com/api/og?title=${encodeURIComponent("Tools for Non-Profits")}`,
        width: 1200,
        height: 630,
        alt: "Tools for Non-Profits - Heaps Smart",
      },
    ],
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tools for Non-Profits - Software Recommendations",
    description: "Discover the best software tools for non-profits across categories like AI solutions, data infrastructure, digital communications, automation, and more.",
    images: [`https://www.heaps-smart.com/api/og?title=${encodeURIComponent("Tools for Non-Profits")}`],
  },
  alternates: {
    canonical: "https://www.heaps-smart.com/tools-for-nonprofits",
  },
};

export default function ToolsForNonprofitsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}