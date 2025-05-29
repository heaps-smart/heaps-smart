"use client";

import React from "react";
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
};

const projectsData: Project[] = [
  {
    title: "How to save a dinosaur bird",
    content:
      "Many hands (or eyes) make short work of recording observational data on the endangered and misunderstood Southern Cassowary in Australia.",
    video: "/assets/video/cassowary-web.mp4",
    tags: ["Data", "Mapping", "Citizen Science"],
    poster: "/assets/video/posters/cassowary-web.webp",
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
  },
  {
    title: "Redefining MVP: most valuable poo!",
    content:
      "We're using Vision AI to identify seeds in cassowary poo and help support rainforest regeneration for a quirky yet impactful citizen science project.",
    video: "/assets/video/wall-of-poo.mp4",
    tags: ["Vision AI", "Citizen Science"],
    poster: "/assets/video/posters/wall-of-poo.webp",
  },
  {
    title: "Meet 'Casey'",
    content:
      "She's smart, responsive, and ready to collaborate on cassowary conservation. As an AI Agent powered by RAG, she helps the team analyse data, uncover insights, and make sense of complete reporting.",
    video: "/assets/video/casey.mp4",
    tags: ["AI Agents", "Workflow", "RAG", "Social Media"],
    poster: "/assets/video/posters/casey.webp",
  },
];

export default function ProjectList({ featured, limit }: ProjectListProps) {
  let displayProjects = projectsData;

  if (limit) {
    displayProjects = displayProjects.slice(0, limit);
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
      {displayProjects.map((project) => {
        return (
          <div
            key={project.title}
            className="flex flex-col w-full bg-[#f0ebe7] rounded-lg overflow-hidden transition-all shadow-sm hover:shadow-md"
          >
            <div className="relative w-full aspect-video">
              <ResponsiveVideo
                src={project.video}
                poster={project.poster}
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 opacity-75 hover:opacity-100"
              />
            </div>

            <div className="p-6 flex flex-col justify-between h-full">
              <h3 className="text-xl md:text-2xl font-bold mb-2 tracking-tight">
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
          </div>
        );
      })}
      {displayProjects.length === 0 && <p>No projects found.</p>}
    </div>
  );
}