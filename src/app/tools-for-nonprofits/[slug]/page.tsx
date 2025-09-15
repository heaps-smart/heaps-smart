import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import ToolPageTemplate from '@/app/_components/ToolPageTemplate';
import toolsData from '@/app/tools-for-nonprofits/tools_database_markdown.json';

interface Tool {
  name: string;
  description: string;
  link: string;
  link_text: string;
  category: string | string[];
  monthly_pricing_aud: string;
  raw_pricing: string;
  non_profit_discount: string;
  non_profit_discount_link: string;
  pricing_details: string;
  hs_recommended: string;
  hs_recommended_details: string;
  affiliate_link: string;
  slug: string;
  gallery_images?: Array<{
    id: number;
    src: string;
    alt: string;
    type?: string;
  }>;
  description_singlepage?: string;
}

type Params = { slug: string };

export async function generateStaticParams(): Promise<Params[]> {
  return toolsData.map((tool) => ({ slug: tool.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const tool = toolsData.find((t: Tool) => t.slug === params.slug);

  if (!tool) {
    return {
      title: "Tool Not Found",
      description: "The requested tool could not be found.",
    };
  }

  // Helper function to get categories as array
  const getCategories = (category: string | string[]): string[] => {
    return Array.isArray(category) ? category : [category];
  };

  // Get the main image from gallery images
  const mainImage = tool.gallery_images?.[0]?.src || `https://www.heaps-smart.com/api/og?title=${encodeURIComponent(tool.name)}`;

  return {
    title: `${tool.name} - Tools for Non-Profits | Heaps Smart`,
    description: tool.description_singlepage || tool.description,
    keywords: getCategories(tool.category).join(', '),
    authors: [{ name: "Heaps Smart" }],
    openGraph: {
      title: `${tool.name} - Tools for Non-Profits`,
      description: tool.description_singlepage || tool.description,
      url: `https://www.heaps-smart.com/tools-for-nonprofits/${tool.slug}`,
      siteName: "Heaps Smart",
      images: [
        {
          url: mainImage,
          width: 1200,
          height: 630,
          alt: `${tool.name} - Tool for Non-Profits`,
        },
      ],
      locale: "en_AU",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${tool.name} - Tools for Non-Profits`,
      description: tool.description_singlepage || tool.description,
      images: [mainImage],
    },
    alternates: {
      canonical: `https://www.heaps-smart.com/tools-for-nonprofits/${tool.slug}`,
    },
  };
}

export default function ToolPage({ params }: { params: Params }) {
  const tool = toolsData.find((t: Tool) => t.slug === params.slug);

  if (!tool) notFound();

  // Helper function to get categories as array
  const getCategories = (category: string | string[]): string[] => {
    return Array.isArray(category) ? category : [category];
  };

  const sections = [
    { title: 'Overview', content: tool.description },
  ];

  // Add pricing information if available
  if (tool.monthly_pricing_aud || tool.raw_pricing) {
    const pricingContent = tool.monthly_pricing_aud 
      ? `Monthly pricing: ${tool.monthly_pricing_aud} AUD`
      : `Pricing tier: ${tool.raw_pricing}`;
    sections.push({ title: 'Pricing', content: pricingContent });
  }

  // Only add non-profit discount to main content if no detailed pricing info is in sidebar
  if (tool.non_profit_discount && !tool.pricing_details) {
    sections.push({ 
      title: 'Non-Profit Discount', 
      content: tool.non_profit_discount 
    });
  }

  return (
    <ToolPageTemplate
        toolName={tool.name}
        tags={getCategories(tool.category)}
        sections={sections}
        galleryImages={tool.gallery_images || []}
        website={tool.link}
        websiteText={tool.link_text}
        monthlyPricing={tool.raw_pricing}
        nonprofitDiscount={tool.non_profit_discount}
        nonprofitPricingUrl={tool.non_profit_discount_link}
        affiliateLink={tool.affiliate_link}
        hsRecommended={tool.hs_recommended === 'Yes'}
        pricingDetails={tool.pricing_details}
        hsRecommendedDetails={tool.hs_recommended_details}
        descriptionSinglepage={tool.description_singlepage}
      />
  );
}
