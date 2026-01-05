"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";

interface PostMeta {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: {
    name: string;
    picture: string;
  };
  coverImage: string;
}

interface LabsCarouselProps {
  posts: PostMeta[];
}

function chunk<T>(arr: T[], size: number): T[][] {
  const out: T[][] = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}

export default function LabsCarousel({ posts }: LabsCarouselProps) {
  const [cardsPerPage, setCardsPerPage] = useState(3);
  const [pageIndex, setPageIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;

      // Mobile: show 3 stacked, no carousel
      if (w < 768) {
        setIsMobile(true);
        setCardsPerPage(3);
        setPageIndex(0);
        return;
      }

      setIsMobile(false);

      // Tablet: 2 per page; Desktop: 3 per page
      const next = w < 1024 ? 2 : 3;
      setCardsPerPage(next);
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const pages = useMemo(() => chunk(posts, cardsPerPage), [posts, cardsPerPage]);
  const maxPageIndex = Math.max(0, pages.length - 1);

  useEffect(() => {
    setPageIndex((i) => Math.min(i, maxPageIndex));
  }, [maxPageIndex]);

  if (!posts?.length) return null;

  const isFirst = pageIndex === 0;
  const isLast = pageIndex === maxPageIndex;

  const Card = ({ post }: { post: PostMeta }) => (
    <Link
      href={`/labs/${post.slug}`}
      className="group flex flex-col bg-white rounded-lg overflow-hidden transition-all duration-300 ease-in-out transform hover:-translate-y-1 p-6 border border-black/10 text-left h-full justify-between"
      aria-label={`Read ${post.title}`}
    >
      <div>
        <div className="flex items-start justify-between mb-2">
          <h4 className="text-xl font-semibold">{post.title}</h4>
          {post.coverImage ? (
            <img
              src={post.coverImage}
              alt={`Cover for ${post.title}`}
              className="w-14 h-14 ml-4 rounded-md object-cover flex-shrink-0"
              loading="lazy"
            />
          ) : null}
        </div>

        <div className="mt-2 text-black/60 text-base">{post.excerpt}</div>
      </div>

      <div className="flex items-center gap-2 mt-4 pt-2 border-t border-slate-100">
        {post.author.picture ? (
          <img
            src={post.author.picture}
            alt={post.author.name}
            className="w-8 h-8 rounded-full border border-slate-200"
            loading="lazy"
          />
        ) : null}

        <span className="text-sm text-black/80 font-medium">{post.author.name}</span>
        <span className="h-5 border-l border-slate-200 mx-2" aria-hidden="true" />
        <span className="text-sm text-black/60">
          {new Date(post.date).toLocaleDateString(undefined, {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </span>
      </div>
    </Link>
  );

  // Mobile: exactly three stacked cards (no buttons, no sliding)
  if (isMobile) {
    const mobilePosts = posts.slice(0, 3);
    return (
      <div className="grid grid-cols-1 gap-4">
        {mobilePosts.map((post) => (
          <Card key={post.slug} post={post} />
        ))}
      </div>
    );
  }

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-300 ease-in-out py-4"
          style={{ transform: `translateX(-${pageIndex * 100}%)` }}
        >
          {pages.map((page, i) => (
            <div key={`page-${i}`} className="w-full flex-shrink-0" aria-hidden={i !== pageIndex}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {page.map((post) => (
                  <Card key={post.slug} post={post} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        type="button"
        onClick={() => setPageIndex((i) => Math.max(0, i - 1))}
        disabled={isFirst}
        aria-label="Previous page"
        className={[
          "absolute -left-12 lg:-left-20 top-1/2 -translate-y-1/2 z-20",
          "p-2 sm:p-3 rounded-full bg-white/80 backdrop-blur transition-colors border border-black/10",
          isFirst ? "opacity-40 cursor-not-allowed" : "opacity-100 cursor-pointer hover:bg-white",
        ].join(" ")}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 sm:h-6 sm:w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        type="button"
        onClick={() => setPageIndex((i) => Math.min(maxPageIndex, i + 1))}
        disabled={isLast}
        aria-label="Next page"
        className={[
          "absolute -right-12 lg:-right-20 top-1/2 -translate-y-1/2 z-20",
          "p-2 sm:p-3 rounded-full bg-white/80 backdrop-blur transition-colors border border-black/10",
          isLast ? "opacity-40 cursor-not-allowed" : "opacity-100 cursor-pointer hover:bg-white",
        ].join(" ")}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 sm:h-6 sm:w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}
