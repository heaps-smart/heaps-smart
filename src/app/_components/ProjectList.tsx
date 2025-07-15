"use client";

import React from "react";
import Link from "next/link";
import ResponsiveVideo from "./ResponsiveVideo";

interface ProjectListProps {
  featured?: boolean;
  limit?: number;
}

type Project = {
  title: string;
  content: string | React.ReactNode;
  video: string;
  tags: string[];
  poster?: string;
  slug: string;
};

const projectsData: Project[] = [
  {
    title: "Empowering Remote Research Teams Through AI-Driven Meeting Automation",
    content:
      "How we implemented an AI-driven solution to streamline meeting management for environmental researchers, allowing them to focus on research rather than administrative tasks.",
    video: "/assets/video/tactiq.mp4",
    tags: ["AI Automation", "Remote Collaboration", "Research Tools"],
    poster: "/assets/video/posters/tactiq.webp",
    slug: "empowering-remote-research-teams"
  },
  {
    title: "C4 Digital Transformation",
    content:
      "We worked with C4 to overhaul their digital ecosystem, creating a modern brand extension, new website, and integrated tools to scale their conservation mission.",
    video: "/assets/img/c4-walkthru.mp4",
    tags: ["Website Development", "Digital Strategy", "Conservation"],
    poster: "/assets/video/posters/c4.webp",
    slug: "c4-digital-transformation"
  },
  {
    title: "How to save a dinosaur bird",
    content:
      "Many hands (or eyes) make short work of recording observational data on the endangered and misunderstood Southern Cassowary in Australia.",
    video: "/assets/video/cassowary-web.mp4",
    tags: ["Data", "Mapping", "Citizen Science"],
    poster: "/assets/video/posters/cassowary-web.webp",
    slug: "how-to-save-a-dinosaur-bird"
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
    poster: "/assets/video/posters/hello-ai.webp",
    slug: "training"
  },
  {
    title: "Redefining MVP: most valuable poo!",
    content:
      "We're using Vision AI to identify seeds in cassowary poo and help support rainforest regeneration for a quirky yet impactful citizen science project.",
    video: "/assets/video/wall-of-poo.mp4",
    tags: ["Vision AI", "Citizen Science"],
    poster: "/assets/video/posters/wall-of-poo.webp",
    slug: "redefining-mvp"
  },
  {
    title: "Meet 'Cassie'",
    content:
      "She's smart, responsive, and ready to collaborate on cassowary conservation. As an AI Agent powered by RAG, she helps the team analyse data, uncover insights, and make sense of complete reporting.",
    video: "/assets/video/cassie.mp4",
    tags: ["AI Agents", "Workflow", "RAG", "Social Media"],
    poster: "/assets/video/posters/cassie.webp",
    slug: "meet-cassie"
  },
];

export default function ProjectList({ featured, limit }: ProjectListProps) {
  let displayProjects = projectsData;

  if (limit) {
    displayProjects = displayProjects.slice(0, limit);
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pb-6 mb-4">
      {displayProjects.map((project) => {
        return (
          <Link
            href={`/innovation/${project.slug}`}
            key={project.title}
            className="flex flex-col w-full bg-[#f0ebe7] rounded-lg overflow-visible transition-all shadow-sm hover:shadow-lg hover:-translate-y-1 duration-300"
          >
            <div className="relative w-full aspect-video overflow-hidden rounded-t-lg">
              <ResponsiveVideo
                src={project.video}
                poster={project.poster}
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 opacity-75 hover:opacity-100"
              />
            </div>

            <div className="p-6 flex flex-col justify-between h-full">
              <h3 className="text-xl md:text-2xl font-bold mb-2 tracking-tight group-hover:text-[#333]">
                {project.title}
              </h3>
              <div className="text-base leading-relaxed mb-4">{project.content}</div>
              <div className="flex flex-wrap gap-2 mt-auto pt-4">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-gray-200 text-gray-800 text-sm font-medium px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        );
      })}
      {displayProjects.length === 0 && <p>No projects found.</p>}
    </div>
  );
}