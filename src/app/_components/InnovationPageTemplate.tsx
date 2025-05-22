"use client";

import Container from "@/app/_components/Container";
import Footer from "@/app/_components/Footer";
import Header from "@/app/_components/Header";
import Swell from "@/app/_components/Swell";
import Image from "next/image";
import GalleryVideo from "@/app/_components/GalleryVideo";
import { ReactNode } from "react";

type Section = {
  title: string;
  content: string | JSX.Element;
};

type GalleryImage = {
  id: number;
  src: string;
  alt: string;
};

type Props = {
  pageTitle: string;
  tags: string[];
  techStack: string[];
  sections: Section[];
  galleryImages: GalleryImage[];
  location: string;
  acknowledgements?: ReactNode;
};

export default function InnovationPageTemplate({
  pageTitle,
  tags,
  techStack,
  sections,
  galleryImages,
  location,
  acknowledgements,
}: Props) {
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
          {galleryImages.map((img) => {
            const isVideo = /\.(mp4|webm)$/i.test(img.src);
            return (
                <div
                  key={img.id}
                  className="flex-shrink-0 h-[45vh] flex items-center"
                >
                <div className="h-[45vh] flex items-center justify-center overflow-hidden">
                  {isVideo ? (
                    <GalleryVideo src={img.src} alt={img.alt} />
                  ) : (
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill={false}
                      style={{
                        height: '45vh',
                        width: 'auto',
                        objectFit: 'cover',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
                      }}
                      width={800}
                      height={450}
                      className="transition-transform duration-300 ease-in-out hover:scale-102"
                    />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <Container>
        <div className="pb-16 md:pb-24 grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-24">
          <aside className="space-y-12">
            <section>
              <h4 className="text-xl font-semibold tracking-tight text-[#111]">Location</h4>
              <p className="text-lg leading-relaxed text-black/80">{location}</p>
            </section>
            <section>
              <h4 className="text-xl font-semibold tracking-tight mb-3 text-[#111]">Core technologies</h4>
                <ul className="flex flex-col gap-1">
                {techStack.map((tech) => (
                  <li
                    key={tech}
                    className="text-base text-[#333] font-medium border-l-4 border-slate-300 pl-3"
                  >
                    {tech}
                  </li>
                ))}
                </ul>
            </section>
            {acknowledgements && (
              <section>
                <h4 className="text-xl font-semibold tracking-tight mb-3 text-[#111]">Acknowledgements</h4>
                <div className="text-base text-black/60 space-y-1">{acknowledgements}</div>
              </section>
            )}
          </aside>
          <div className="col-span-2 space-y-14">
            {sections.map((section, index) => (
              <section key={index}>
                <h3 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4 text-[#111]">
                  {section.title}
                </h3>
                <div className="text-lg leading-relaxed text-black/80 text-left">{section.content}</div>
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
