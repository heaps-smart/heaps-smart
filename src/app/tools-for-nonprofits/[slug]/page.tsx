import { notFound } from 'next/navigation';
import ToolPageTemplate from '@/app/_components/ToolPageTemplate';
import toolCategoriesData from '@/app/tools-for-nonprofits/tool-categories-full.json';

interface Tool {
  name: string;
  description: string;
  image: string;
  link: string;
  tags: string[];
  pricing: string;
  raw_pricing: string;
  monthly_pricing_aud: string;
  non_profit_discount_view: string;
  non_profit_discount: string;
  hs_recommended: string;
  category?: string;
  affiliate_link?: string;
  original_website?: string;
  hs_recommended_details?: string;
  pricing_details?: string;
  slug: string;
  galleryImages?: string[];
}

type Params = { slug: string };

export async function generateStaticParams(): Promise<Params[]> {
  return toolCategoriesData.flatMap((category) =>
    category.tools.map((tool) => ({ slug: tool.slug }))
  );
}

export default function ToolPage({ params }: { params: Params }) {
  const tool = toolCategoriesData
    .flatMap((category) => category.tools)
    .find((t: Tool) => t.slug === params.slug);

  if (!tool) notFound();

  const sections = [
    { title: 'Overview', content: tool.description },
    { title: 'Pricing', content: tool.pricing },
  ];

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
      tags={tool.tags || []}
      sections={sections}
      galleryImages={[
        { id: 1, src: "https://picsum.photos/800/600?random=1", alt: tool.name },
        { id: 2, src: "https://picsum.photos/800/600?random=2", alt: `${tool.name} - 2` },
        { id: 3, src: "https://picsum.photos/800/600?random=3", alt: `${tool.name} - 3` },
        { id: 4, src: "https://picsum.photos/800/600?random=4", alt: `${tool.name} - 4` }
      ]}
      website={tool.original_website || tool.link}
      monthlyPricing={tool.monthly_pricing_aud}
      nonprofitDiscount={tool.non_profit_discount}
      nonprofitPricingUrl={tool.non_profit_discount_view}
      affiliateLink={tool.affiliate_link}
      hsRecommended={tool.hs_recommended === 'Yes'}
      pricingDetails={tool.pricing_details}
      hsRecommendedDetails={tool.hs_recommended_details}
    />
  );
}
