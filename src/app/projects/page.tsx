'use client';

import Container from "@/app/_components/container";
import { Header } from "@/app/_components/header";
import Footer from "@/app/_components/footer";
import Image from "next/image";

const projects = [
  {
    title: "How to save a dinosaur bird",
    content:
      "Many hands (or eyes) make short work of recording observational data on the endangered and misunderstood Southern Cassowary in Australia.",
    video: "/assets/video/cassowary-web.mp4",
    tags: ["Data", "Mapping", "Citizen Science"],
  },
  {
    title: "Hello, AI",
    content: (
      <>
        We're helping individuals and teams build tech capacity with a relaxed, beginner-friendly intro to the world of AI.{" "}
        <a href="/training" className="underline">Join a session →</a>
      </>
    ),
    video: "/assets/video/hello-ai.mp4",
    tags: ["Training", "Gen AI"],
  },
  {
    title: "Redefining MVP: Most Valuable Poo!",
    content:
      "We're using Vision AI to identify seeds in cassowary poo and help support rainforest regeneration for a quirky yet impactful citizen science project.",
    video: "/assets/video/wall-of-poo.mp4",
    tags: ["Vision AI", "Citizen Science"],
  },
  {
    title: "Meet 'Casey'",
    content:
      "She's smart, responsive, and ready to collaborate on cassowary conservation. As an AI Agent powered by RAG, she helps the team analyse data, uncover insights, and make sense of complete reporting.",
    video: "/assets/video/casey.mp4",
    tags: ["AI Agents", "Workflow", "RAG", "Social Media"],
  },
];

export default function Projects() {
  return (
    <main className="bg-[#f8f3ef] text-black font-sans">
      <Container>
        <Header />
      </Container>

      <Container>
        <h2 className="text-6xl md:text-7xl font-bold tracking-tighter text-black/80">
          What we're working on
        </h2>
        <p className="text-lg md:text-xl max-w-3xl mb-8">
          Heaps Smart builds digital experiences and online products for non-profits and purpose-driven organisations. Here's some of our latest work.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {projects.map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col w-full bg-[#f0ebe7] rounded-lg overflow-hidden transition-all"
              >
                  <div className="relative w-full aspect-video">
                    <video
                      className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 opacity-75 hover:opacity-100"
                      muted
                      playsInline
                      onMouseEnter={(e) => e.currentTarget.play()}
                      onMouseLeave={(e) => {
                        e.currentTarget.pause();
                        e.currentTarget.currentTime = 0;
                      }}
                    >
                      <source src={item.video} type="video/mp4" />
                    </video>
                  </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 tracking-tight">
                  {item.title}
                  </h3>
                  <p className="text-base leading-relaxed mb-4">{item.content}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag, index) => (
                      <span key={index} className="bg-gray-200 text-gray-800 text-sm font-medium px-3 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
          ))}
        </div>
      </Container>

      <div className="relative bg-[#f8f3ef] py-16 text-center">
        <a
          href="https://www.linkedin.com/company/heaps-smart"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-4 bg-white text-black text-lg font-bold rounded-lg hover:bg-gray-100 transition-all"
        >
          See More On LinkedIn →
        </a>
      </div>

      <Footer />
    </main>
  );
}
