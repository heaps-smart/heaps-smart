import { notFound } from 'next/navigation';
import ToolPageTemplate from '@/app/_components/ToolPageTemplate';
import toolsData from '@/app/tools-for-nonprofits/tools_database_markdown.json';

interface Tool {
  name: string;
  description: string;
  link: string;
  category: string;
  monthly_pricing_aud: string;
  raw_pricing: string;
  non_profit_discount: string;
  non_profit_discount_link: string;
  pricing_details: string;
  hs_recommended: string;
  hs_recommended_details: string;
  affiliate_link: string;
  slug: string;
}

type Params = { slug: string };

export async function generateStaticParams(): Promise<Params[]> {
  return toolsData.map((tool) => ({ slug: tool.slug }));
}

export default function ToolPage({ params }: { params: Params }) {
  const tool = toolsData.find((t: Tool) => t.slug === params.slug);

  if (!tool) notFound();

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
			tags={[tool.category]}
			sections={sections}
      galleryImages={tool.gallery_images || []}
			website={tool.link}
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
