"use client";

import Link from "next/link";
import React from "react";
import ResponsiveVideo from "./ResponsiveVideo";

const Tag = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-block bg-gray-100 text-gray-800 text-xs font-semibold mr-2 mb-2 px-2.5 py-0.5 rounded-full">
    {children}
  </span>
);

interface Project {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  video: string;
  poster: string;
}

interface InnovationProjectCardProps {
  project: Project;
}

export default function InnovationProjectCard({ project }: InnovationProjectCardProps) {
  return (
    <Link
      href={`/innovation/${project.slug}`}
      className="group flex flex-col bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1"
    >
      <div className="relative w-full aspect-video">
        <ResponsiveVideo
          src={project.video}
          poster={project.poster}
          className="absolute inset-0 w-full h-full object-cover opacity-75 group-hover:opacity-100 transition-opacity duration-300"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-3 text-black/90 group-hover:text-[#333] transition-colors">
          {project.title}
        </h3>
        <p className="text-sm text-black/70 mb-4 leading-relaxed flex-grow">
          {project.description}
        </p>
        <div className="flex flex-wrap mt-auto">
          {project.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
      </div>
    </Link>
  );
}
