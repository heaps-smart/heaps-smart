"use client";

import Container from "@/app/_components/Container";
import Footer from "@/app/_components/Footer";
import Header from "@/app/_components/Header";
import Swell from "@/app/_components/Swell";
import ResponsiveVideo from "@/app/_components/ResponsiveVideo";
import { ReactNode } from "react";

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
}: Props) {
  return (
    <main className="bg-[#f8f3ef] text-black font-sans">
      <Container>
        <Header variant="light" />
      </Container>

      <Container>
        <header className="pt-8 pb-12 md:pb-8 mb-4">
          <div className="flex items-center gap-4 mb-4">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight md:pr-8">
              {toolName}
            </h1>
            {hsRecommended && (
              <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
                HS Recommended
              </span>
            )}
          </div>
						<div className="flex flex-wrap gap-4">
							<a 
								href={website} 
								target="_blank" 
								rel="noopener noreferrer"
								className="inline-block text-slate-600 hover:text-slate-900 text-sm underline transition-colors"
							>
								{website}
							</a>
							{nonprofitPricingUrl && (
								<a 
								href={nonprofitPricingUrl} 
								target="_blank" 
								rel="noopener noreferrer"
								className="inline-block text-slate-600 hover:text-slate-900 text-sm underline transition-colors"
								>
								Non-profit pricing
								</a>
							)}
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
              <h4 className="text-xl font-semibold tracking-tight mb-3 text-[#111]">
                Website
              </h4>
              <a 
                href={website} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-gray-700 hover:text-gray-900 underline transition-colors"
              >
                Visit website
              </a>
            </section>

            {/* Pricing Section */}
            <section>
              <h4 className="text-xl font-semibold tracking-tight mb-3 text-[#111]">
                Pricing
              </h4>
              <div className="space-y-2">
                {monthlyPricing && (
                  <div className="text-sm text-black/80">
                    <span className="font-medium">From:</span> {monthlyPricing}
                  </div>
                )}
                {nonprofitDiscount && (
                  <div className="text-sm text-green-700 font-medium">
                    Non-profit discount available
                  </div>
                )}
                <a 
                  href={nonprofitPricingUrl || website}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-gray-700 hover:text-gray-900 underline transition-colors"
                >
                  View pricing 
                </a>
              </div>
            </section>

            {/* CTA Link */}
            <section>
              <a 
                href={nonprofitPricingUrl || website} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-gray-700 hover:text-gray-900 underline transition-colors font-medium"
              >
                Get started
              </a>
            </section>

						{/* Tool Tags */}
						<section>
              <div className="space-y-2">
                {tags.map((tag) => (
                  <div key={tag} className="text-sm text-black/70 border-l-2 border-gray-300 pl-2">
                    {tag}
                  </div>
                ))}
              </div>
            </section>
          </aside>

          <div className="col-span-2 space-y-14">
            {/* Overview Section */}
            <section>
              <h3 className="text-2xl font-semibold tracking-tight mb-4 text-[#111]">
                Overview
              </h3>
              <div className="text-lg leading-relaxed text-black/80">
                {sections.find(s => s.title === 'Description')?.content || sections[0]?.content}
              </div>
            </section>

            {/* Pricing & Discounts Section */}
            <section>
              <h3 className="text-2xl font-semibold tracking-tight mb-4 text-[#111]">
                Pricing & Non-Profit Discounts
              </h3>
              <div className="text-lg leading-relaxed text-black/80 space-y-4">
                {nonprofitDiscount && (
                  <div>
                    <p><strong>Non-Profit Discount:</strong> {nonprofitDiscount}</p>
                  </div>
                )}
                {monthlyPricing && (
                  <div>
                    <p><strong>Monthly Pricing (AUD):</strong> {monthlyPricing}</p>
                  </div>
                )}
                {pricingDetails && (
                  <div>
                    <h4 className="font-semibold mb-2">How to Apply for Non-Profit Pricing:</h4>
                    <div className="whitespace-pre-line text-base">
                      {pricingDetails}
                    </div>
                  </div>
                )}
              </div>
              <div className="mt-6">
                <a 
                  href={nonprofitPricingUrl || website}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-gray-900 underline transition-colors font-medium"
                >
                  View non-profit pricing
                </a>
              </div>
            </section>

            {/* HS Recommendation if available */}
            {hsRecommendedDetails && (
              <section>
                <h3 className="text-2xl font-semibold tracking-tight mb-4 text-[#111]">
                  Our Recommendation
                </h3>
                <div className="text-lg leading-relaxed text-black/80 whitespace-pre-line">
                  {hsRecommendedDetails}
                </div>
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
