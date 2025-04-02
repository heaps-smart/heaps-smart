"use client";

import Container from "@/app/_components/container";
import { useEffect, useState } from "react";
import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

interface Post {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  coverImage?: string;
  tags: string[];
}

export default function Posts() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const allPosts = await getAllPosts();
      setPosts(allPosts);
    };
    fetchPosts();
  }, []);

  return (
    <>
      <Container>
        <div className="py-12">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-black/80 leading-tight md:leading-none pb-4">
            Blog
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mb-12">
            Thoughts and insights on AI, technology, and building digital experiences for purpose-driven organizations.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {posts.map((post) => (
              <Link 
                href={`/posts/${post.slug}`} 
                key={post.slug}
                className="group"
              >
                <article className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all">
                  {post.coverImage && (
                    <div className="aspect-video w-full overflow-hidden">
                      <img 
                        src={post.coverImage} 
                        alt={post.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-2 tracking-tight">
                      {post.title}
                    </h3>
                    <p className="text-black/60 mb-1">
                      {new Date(post.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })} · {post.author}
                    </p>
                    <p className="text-base leading-relaxed mb-4">{post.excerpt}</p>
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag, index) => (
                        <span key={index} className="bg-gray-200 text-gray-800 text-sm font-medium px-3 py-1 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </>
  );
}
