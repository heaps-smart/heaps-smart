"use client";

import Container from "@/app/_components/Container";
import Footer from "@/app/_components/Footer";
import Header from "@/app/_components/Header";
import Swell from "@/app/_components/Swell";
import ResponsiveVideo from "@/app/_components/ResponsiveVideo";
import { ReactNode, useEffect, useState, useCallback } from "react";

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
  pageTitle: string;
  tags: string[];
  techStack: ReactNode[];
  sections: Section[];
  galleryImages: GalleryImage[];
  location: string;
  acknowledgements?: ReactNode;
  website?: string;
  websiteText?: string;
};

export default function InnovationPageTemplate({
  pageTitle,
  tags,
  techStack,
  sections,
  galleryImages,
  location,
  acknowledgements,
  website,
  websiteText,
}: Props) {
  const [lightboxMedia, setLightboxMedia] = useState<GalleryImage | null>(null);
  const [currentMediaIndex, setCurrentMediaIndex] = useState<number>(0);

  // Lightbox handlers
  const openLightbox = (media: GalleryImage, index: number) => {
    setLightboxMedia(media);
    setCurrentMediaIndex(index);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  };

  const closeLightbox = () => {
    setLightboxMedia(null);
    document.body.style.overflow = 'unset'; // Restore scrolling
  };

  const goToNext = useCallback(() => {
    const nextIndex = (currentMediaIndex + 1) % galleryImages.length;
    setCurrentMediaIndex(nextIndex);
    setLightboxMedia(galleryImages[nextIndex]);
  }, [currentMediaIndex, galleryImages]);

  const goToPrevious = useCallback(() => {
    const prevIndex = currentMediaIndex === 0 ? galleryImages.length - 1 : currentMediaIndex - 1;
    setCurrentMediaIndex(prevIndex);
    setLightboxMedia(galleryImages[prevIndex]);
  }, [currentMediaIndex, galleryImages]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!lightboxMedia) return;
      
      if (e.key === 'Escape') {
        closeLightbox();
      } else if (e.key === 'ArrowRight') {
        goToNext();
      } else if (e.key === 'ArrowLeft') {
        goToPrevious();
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [lightboxMedia, goToNext, goToPrevious]);
  return (
    <main className="bg-[#f8f3ef] text-black font-sans">
      <Container>
        <Header variant="light" />
      </Container>

      <Container>
        <header className="pt-8 pb-12 md:pb-8 mb-4">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight md:pr-8 mb-4">
            {pageTitle}
          </h1>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="inline-block bg-transparent text-slate-500 text-sm px-1 py-0.5 border-b border-slate-200"
              >
                {tag}
              </span>
            ))}
          </div>
        </header>
      </Container>

      <div className="overflow-hidden max-h-[50vh] bg-[#f8f3ef] mb-12 md:mb-16">
        <div className="flex overflow-x-auto space-x-4 py-4 scrollbar-thin scrollbar-thumb-slate-300 scrollbar-track-transparent">
          {galleryImages.map((img, index) => {
            const isVideo = img.type === "video";
            return (
              <div
                key={img.id}
                className="flex-shrink-0 h-[45vh] flex items-center cursor-pointer"
                onClick={() => openLightbox(img, index)}
              >
                <div className="h-[45vh] flex items-center justify-center overflow-hidden relative rounded-none hover:opacity-90 transition-opacity">
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
                  {/* Play/View icon overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity bg-black/20">
                    {isVideo ? (
                      <div className="bg-black/60 rounded-full p-3">
                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                        </svg>
                      </div>
                    ) : (
                      <div className="bg-black/60 rounded-full p-3">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                        </svg>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxMedia && (
        <div 
          className="fixed inset-0 bg-black/95 flex items-center justify-center z-50 p-4"
          onClick={closeLightbox}
        >
          <div className="relative max-w-[90vw] max-h-[90vh] flex items-center justify-center">
            {lightboxMedia.type === "video" ? (
              <video
                src={lightboxMedia.src}
                poster={lightboxMedia.poster}
                controls
                autoPlay
                className="max-w-full max-h-full"
                onClick={(e) => e.stopPropagation()}
              >
                Your browser does not support the video tag.
              </video>
            ) : (
              <img
                src={lightboxMedia.src}
                alt={lightboxMedia.alt}
                className="max-w-full max-h-full object-contain"
                onClick={(e) => e.stopPropagation()}
              />
            )}
            
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10 bg-black/50 rounded-full p-2"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Navigation buttons */}
            {galleryImages.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    goToPrevious();
                  }}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors bg-black/50 rounded-full p-2"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    goToNext();
                  }}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors bg-black/50 rounded-full p-2"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </>
            )}

            {/* Media counter */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm bg-black/60 px-3 py-1 rounded-full">
              {currentMediaIndex + 1} / {galleryImages.length}
            </div>
          </div>
        </div>
      )}

      <Container>
        <div className="pb-16 md:pb-24 grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-24">
          <aside className="space-y-12">
            {website && (
              <section>
                <a
                  href={website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:text-gray-900 transition-colors"
                >
                  <h4 className="text-xl font-semibold text-black/80 mb-1">Website</h4>
                  <span className="inline-block text-slate-600 hover:text-slate-900 text-base underline transition-colors">
                    {websiteText || website.replace(/^https?:\/\//, "")}
                  </span>
                </a>
              </section>
            )}
            <section>
              <h4 className="text-xl font-semibold tracking-tight text-[#111]">
                Location
              </h4>
              <p className="text-lg leading-relaxed text-black/80">
                {location}
              </p>
            </section>
            <section>
              <h4 className="text-xl font-semibold tracking-tight mb-3 text-[#111]">
                Core technologies
              </h4>
              <ul className="flex flex-col gap-1">
                {techStack.map((tech, index) => (
                  <li
                    key={index}
                    className="text-base text-[#333] font-medium border-l-4 border-slate-300 pl-3 hover:text-gray-900 hover:border-slate-400 transition-colors block"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </section>
            {acknowledgements && (
              <section>
                <h4 className="text-xl font-semibold tracking-tight mb-3 text-[#111]">
                  Acknowledgements
                </h4>
                <div className="text-base text-black/60 space-y-1">
                  {acknowledgements}
                </div>
              </section>
            )}
          </aside>
          <div className="col-span-2 space-y-14">
            {sections.map((section, index) => (
              <section key={index}>
                <h3 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4 text-[#111]">
                  {section.title}
                </h3>
                <div className="text-lg leading-relaxed text-black/80 text-left">
                  {section.content}
                </div>
              </section>
            ))}
          </div>
        </div>
      </Container>

      <Swell dark />
      <Footer />
    </main>
  );
}
