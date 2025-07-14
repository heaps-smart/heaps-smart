import { GetStaticPaths, GetStaticProps } from "next";
import InnovationPageTemplate from "@/app/_components/InnovationPageTemplate";
import toolCategoriesData from "./tool-categories-full.json";

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
  hs_recommended_details: string; 
  pricing_details: string; 
  category?: string;
  affiliate_link?: string;
  original_website?: string;
  slug: string;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = toolCategoriesData
    .flatMap((category) => category.tools)
    .map((tool) => ({ params: { slug: tool.slug + '/' } })); // Add trailing slash

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params || {};
  const tool = toolCategoriesData
    .flatMap((category) => category.tools)
    .find((tool) => tool.slug === slug);

  if (!tool) {
    return { notFound: true };
  }

  return {
    props: { tool },
  };
};

export default function ToolDetailsPage({ tool }: { tool: Tool }) {
	return (
		<InnovationPageTemplate
			pageTitle={tool.name}
			tags={tool.tags || []}
			techStack={[]}
			sections={[
				{
					title: "Description",
					content: tool.description,
				},
				{
					title: "Non-profit discount",
					content: tool.pricing_details,
				},
				{
					title: "Heaps Smart recommended",
					content: tool.hs_recommended_details,
				},
			]}
			galleryImages={[
				{ id: 1, src: "https://picsum.photos/800/600?random=1", alt: tool.name },
				{ id: 2, src: "https://picsum.photos/800/600?random=2", alt: `${tool.name} - 2` },
				{ id: 3, src: "https://picsum.photos/800/600?random=3", alt: `${tool.name} - 3` },
				{ id: 4, src: "https://picsum.photos/800/600?random=4", alt: `${tool.name} - 4` }
			]}
			location={tool.original_website || ""}
		/>
	);
}
