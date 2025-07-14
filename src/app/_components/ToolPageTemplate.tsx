"use client";

import Container from "@/app/_components/Container";
import Footer from "@/app/_components/Footer";
import Header from "@/app/_components/Header";
import Swell from "@/app/_components/Swell";
import ResponsiveVideo from "@/app/_components/ResponsiveVideo";
import markdownToHtml from "@/lib/markdownToHtml";
import { ReactNode, useEffect, useState } from "react";

type Section = {
  title: string;
  content: string | JSX.Element;
};

type GalleryImage = {
  id: number;
  src: string;
  alt: string;
  type?: string;
  poster?: string;
};

type Props = {
  toolName: string;
  tags: string[];
  sections: Section[];
  galleryImages: GalleryImage[];
  website: string;
  monthlyPricing?: string;
  nonprofitDiscount?: string;
  nonprofitPricingUrl?: string;
  affiliateLink?: string;
  hsRecommended?: boolean;
  pricingDetails?: string;
  hsRecommendedDetails?: string;
  descriptionSinglepage?: string;
};

export default function ToolPageTemplate({
  toolName,
  tags,
  sections,
  galleryImages,
  website,
  monthlyPricing,
  nonprofitDiscount,
  nonprofitPricingUrl,
  affiliateLink,
  hsRecommended,
  pricingDetails,
  hsRecommendedDetails,
	descriptionSinglepage,
}: Props) {
  const [renderedPricingDetails, setRenderedPricingDetails] = useState<string>("");
  const [renderedHsDetails, setRenderedHsDetails] = useState<string>("");

  useEffect(() => {
    const convertMarkdown = async () => {
      if (pricingDetails) {
        const htmlContent = await markdownToHtml(pricingDetails);
        const updatedHtmlContent = htmlContent.replace(
          /<a /g,
          '<a target="_blank" rel="noopener noreferrer" '
        );
        setRenderedPricingDetails(updatedHtmlContent);
      }

      if (hsRecommendedDetails) {
        const htmlContent = await markdownToHtml(hsRecommendedDetails);
        const updatedHtmlContent = htmlContent.replace(
          /<a /g,
          '<a target="_blank" rel="noopener noreferrer" '
        );
        setRenderedHsDetails(updatedHtmlContent);
      }
    };
    
    convertMarkdown();
  }, [pricingDetails, hsRecommendedDetails]);
  return (
    <main className="bg-[#f8f3ef] text-black font-sans">
      <Container>
        <Header variant="light" />
      </Container>

      <Container>
        <header className="pt-8 pb-12 md:pb-8 mb-4">
          <div className="flex flex-col md:flex-row md:items-center md:gap-4">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight mb-2 md:mb-0 md:pr-8">
              {toolName}
            </h1>
            {hsRecommended && (
              <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full self-start md:self-center">
                HS Recommended
              </span>
            )}
          </div>
          <div className="mt-2">
            <a 
              href="/tools-for-nonprofits"
              className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              <svg 
                className="w-4 h-4 mr-2" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Tools for Non-profits
            </a>
          </div>
        </header>
      </Container>

      {galleryImages && galleryImages.length > 0 && (
        <div className="overflow-hidden max-h-[50vh] bg-[#f8f3ef] mb-12 md:mb-16">
          <div className="flex overflow-x-auto space-x-4 py-4 scrollbar-thin scrollbar-thumb-slate-300 scrollbar-track-transparent">
            {galleryImages.map((img) => {
              const isVideo = img.type === "video";
              return (
                <div
                  key={img.id}
                  className="flex-shrink-0 h-[45vh] flex items-center"
                >
                  <div className="h-[45vh] flex items-center justify-center overflow-hidden relative rounded-none">
                    {isVideo ? (
                      <ResponsiveVideo
                        src={img.src}
                        poster={img.poster}
                        className="w-full h-full object-cover rounded-none"
                      />
                    ) : (
                      <img
                        src={img.src}
                        alt={img.alt}
                        className="h-full w-auto object-cover rounded-none"
                      />
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      <Container>
        <div className="pb-16 md:pb-24 grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-24">
          <aside className="space-y-8">
            {/* Website Section */}
            <section>
              <a 
                href={website} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block hover:text-gray-900 transition-colors"
              >
                <h4 className="text-lg font-semibold text-black/80 mb-1">
                  Website
                </h4>
                <span 
                  className="inline-block text-slate-600 hover:text-slate-900 text-sm underline transition-colors"
                >
                  {website}
                </span>
              </a>
            </section>

            {/* Pricing Section */}
            <section>
              <div>
                <h4 className="text-lg font-semibold text-black/80 mb-2">
                  Pricing
                </h4>
                <div className="space-y-2">
                  {monthlyPricing && (
                    <div className="text-sm text-black/80 font-mono">
                      {monthlyPricing}
                    </div>
                  )}
                  {nonprofitDiscount && (
                    <div className="text-sm text-green-600 font-medium">
                      Non-profit discount available
                    </div>
                  )}
                  <a 
                    href={nonprofitPricingUrl || website}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-black/70 hover:text-black/90 underline transition-colors"
                  >
                    View full pricing details for {toolName} →
                  </a>
                </div>
              </div>
            </section>

            {/* Category Section */}
            <section>
              <div>
                <h4 className="text-lg font-semibold text-black/80 mb-2">
                  Category
                </h4>
                <div className="text-sm text-black/70">
                  {tags.join(", ")}
                </div>
              </div>
            </section>
          </aside>

          <div className="col-span-2 space-y-14">
            {descriptionSinglepage && (
              <section>
                <p className="text-lg leading-relaxed text-black/80">
                  {descriptionSinglepage}
                </p>
              </section>
            )}

            {/* Pricing & Discounts Section */}
            <section>
              <h3 className="text-2xl font-semibold tracking-tight mb-4 text-[#111]">
                Non-profit discount
              </h3>
              <div className="text-lg leading-relaxed tracking-tight text-black/80 space-y-4">
                {nonprofitDiscount && (
                  <div className="font-semibold text-green-600">
                    {nonprofitDiscount}
                  </div>
                )}
                {pricingDetails && renderedPricingDetails && (
                  <div 
                    className="prose prose-gray max-w-none text-base [&_a]:text-gray-700 [&_a:hover]:text-gray-900 [&_a]:underline [&_a]:transition-colors [&_strong]:font-semibold [&_p]:mb-2 [&_ul]:mb-2 [&_ul]:list-disc [&_ul]:pl-6 [&_li]:mb-1"
                    dangerouslySetInnerHTML={{ __html: renderedPricingDetails }}
                  />
                )}
              </div>
              <div className="mt-6">
                <a 
                  href={nonprofitPricingUrl || website}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-gray-900 underline transition-colors font-medium"
                >
                  View non-profit pricing for {toolName} 
                </a>
              </div>
            </section>

            {/* HS Recommendation if available */}
            {hsRecommendedDetails && renderedHsDetails && (
              <section>
                <h3 className="text-2xl font-semibold tracking-tight mb-4 text-[#111]">
                  Heaps Smart recommended
                </h3>
                <div 
                  className="prose prose-gray max-w-none text-lg leading-relaxed text-black/80 [&_a]:text-gray-700 [&_a:hover]:text-gray-900 [&_a]:underline [&_a]:transition-colors [&_strong]:font-semibold [&_p]:mb-4 [&_ul]:mb-4 [&_ul]:list-disc [&_ul]:pl-6 [&_li]:mb-2"
                  dangerouslySetInnerHTML={{ __html: renderedHsDetails }}
                />
              </section>
            )}
          </div>
        </div>
      </Container>

      <Swell dark />
      <Footer />
    </main>
  );
}
