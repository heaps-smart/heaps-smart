import { notFound } from 'next/navigation';
import ToolPageTemplate from '@/app/_components/ToolPageTemplate';
import toolsData from '@/app/tools-for-nonprofits/tools_database_markdown.json';
import Head from 'next/head';

interface Tool {
  name: string;
  description: string;
  link: string;
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
    <>
      <Head>
        <title>{tool.name} - Tools for Nonprofits</title>
        <meta name="description" content={tool.description} />
        <meta name="keywords" content={getCategories(tool.category).join(', ')} />
        <meta name="author" content="Heaps Smart" />
        <meta name="publisher" content="Heaps Smart" />
        <meta property="og:title" content={tool.name} />
        <meta property="og:description" content={tool.description} />
        <meta property="og:url" content={`https://heaps-smart.com/tools-for-nonprofits/${tool.slug}`} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={tool.gallery_images?.[0]?.src || '/default-image.png'} />
        <meta property="og:site_name" content="Heaps Smart" />
        <meta property="og:locale" content="en_AU" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={tool.name} />
        <meta name="twitter:description" content={tool.description} />
        <meta name="twitter:image" content={tool.gallery_images?.[0]?.src || '/default-image.png'} />
        <meta name="twitter:site" content="@HeapsSmart" />
        <meta name="twitter:creator" content="@HeapsSmart" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": tool.name,
            "description": tool.description,
            "url": `https://heaps-smart.com/tools-for-nonprofits/${tool.slug}`,
            "offers": {
              "@type": "Offer",
              "price": tool.monthly_pricing_aud || tool.raw_pricing,
              "priceCurrency": "AUD",
              "url": tool.link,
            },
            "category": getCategories(tool.category).join(', '),
            "image": tool.gallery_images?.map(img => img.src) || ['/default-image.png'],
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Heaps Smart",
            "url": "https://heaps-smart.com",
            "logo": "https://heaps-smart.com/assets/img/logo.png",
            "sameAs": [
              "https://twitter.com/HeapsSmart",
              "https://www.linkedin.com/company/heaps-smart"
            ]
          })}
        </script>
      </Head>
      <ToolPageTemplate
        toolName={tool.name}
        tags={getCategories(tool.category)}
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
    </>
  );
}
