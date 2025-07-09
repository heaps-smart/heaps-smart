'use client';

import { useState, useEffect, useRef, useMemo } from "react";
import Fuse from "fuse.js";
import Container from "@/app/_components/Container";
import Footer from "@/app/_components/Footer";
import Header from "@/app/_components/Header";
import Swell from "@/app/_components/Swell";
import Link from "next/link";
import toolCategoriesData from './tool-categories-full.json';

interface Tool {
  name: string;
  description: string;
  image: string;
  link: string;
  tags: string[];
  pricing: string;
  raw_pricing: string;
  monthly_pricing_aud: string;
  non_profit_discount_view: string;
  non_profit_discount: string;
  hs_recommended: string;
  category?: string;
  affiliate_link?: string;
  original_website?: string;
}

interface ToolCategory {
  name: string;
  description: string;
  tools: Tool[];
}

export default function ToolsPage() {
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(search);
    }, 200);

    return () => {
      clearTimeout(handler);
    };
  }, [search]);

  const allTags = useMemo(() => (
    Array.from(
      new Set(
        toolCategoriesData.flatMap((category: ToolCategory) =>
          category.tools.flatMap((tool) => tool.tags)
        )
      )
    ).sort()
  ), []);

  const allTools = useMemo(() =>
    toolCategoriesData.flatMap((category) =>
      category.tools.map((tool) => ({
        ...tool,
        category: category.name,
      }))
    ), []);

  const fuse = useMemo(() =>
    new Fuse(allTools, {
      keys: ["name", "description", "tags", "category"],
      threshold: 0.3,
      ignoreLocation: true,
    }), [allTools]);

  const searchResults =
    debouncedSearch.trim().length > 1
      ? Array.from(
          new Map(
            fuse.search(debouncedSearch).map((result) => [
              result.item.name.toLowerCase(), result
            ])
          ).values()
        )
          .sort((a, b) => {
            const query = debouncedSearch.trim().toLowerCase();
            const aExactMatch = a.item.name.toLowerCase() === query;
            const bExactMatch = b.item.name.toLowerCase() === query;

            if (aExactMatch && !bExactMatch) return -1;
            if (!aExactMatch && bExactMatch) return 1;
            return (a.score || 0) - (b.score || 0);
          })
          .slice(0, 6)
      : [];

  const filteredCategories = useMemo(() =>
    toolCategoriesData
      .map((category: ToolCategory) => {
        const filteredTools = category.tools.filter((tool: Tool) => {
          const matchesSearch =
            tool.name.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
            tool.description.toLowerCase().includes(debouncedSearch.toLowerCase());

          const matchesTag =
            !selectedTag || tool.tags.includes(selectedTag);

          return matchesSearch && matchesTag;
        });

        return { ...category, tools: filteredTools };
      })
      .filter((category) => category.tools.length > 0)
      .sort((a, b) => a.name.localeCompare(b.name))
  , [debouncedSearch, selectedTag]);

  const shadowClass = "shadow-sm hover:shadow-md";

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node) &&
      inputRef.current &&
      !inputRef.current.contains(event.target as Node)
    ) {
      setIsDropdownVisible(false);
    }
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      setIsDropdownVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleTagClick = (tag: string) => {
    setSelectedTag((prev) => (prev === tag ? null : tag));
  };

  const getToolLink = (tool: Tool) =>
    tool.affiliate_link?.startsWith('https') ? tool.affiliate_link : tool.original_website;

  return (
    <main className="bg-[#F7F2EE] text-black font-sans">
      <Container>
        <Header variant="light" />
      </Container>

      <Container>
        <div className="py-8 md:py-12">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-black/80 leading-tight md:leading-none pb-4">
            Tools for non-profits
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mb-4 text-black/70 leading-relaxed">
            We've tested hundreds of tools to find the ones that deliver the most value for non-profits and businesses.
            Here are our top recommendations across various categories.
          </p>
          <div className="h-1 w-24 bg-yellow-400 mt-4 mb-6 rounded-full"></div>

          <div className="relative mb-6">
            <input
              ref={inputRef}
              type="text"
              placeholder="Search tools..."
              className="w-full px-4 py-3 text-lg border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setIsDropdownVisible(true);
              }}
              onFocus={() => {
                if (search.trim().length > 1) {
                  setIsDropdownVisible(true);
                }
              }}
            />
            {search && (
              <button
                onClick={() => {
                  setSearch("");
                  setIsDropdownVisible(false);
                }}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none"
                aria-label="Clear search"
              >
                ✕
              </button>
            )}

            {isDropdownVisible && searchResults.length > 0 && (
              <div
                ref={dropdownRef}
                className="absolute z-50 mt-2 w-full bg-white border border-gray-300 rounded-lg shadow-md max-h-72 overflow-y-auto"
              >
                {searchResults.map((result) => {
                  const tool = result.item;
                  const toolLink = getToolLink(tool);
                  return (
                    <a
                      key={tool.name}
                      href={toolLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-4 py-3 hover:bg-yellow-100 transition-colors flex justify-between items-center"
                    >
                      <div>
                        <div className="font-semibold text-black/90">{tool.name}</div>
                        <div className="text-sm text-black/60">
                          {tool.non_profit_discount || "–"}
                        </div>
                      </div>
                      <span className="text-black/50">→</span>
                    </a>
                  );
                })}
              </div>
            )}
          </div>

          <div className="flex flex-wrap gap-3 mb-12">
            <button
              onClick={() => setSelectedTag(null)}
              className={`px-4 py-2 text-sm rounded-full font-medium transition-colors shadow ${
                selectedTag === null
                  ? "bg-yellow-500 text-black"
                  : "bg-gray-200 text-gray-600 hover:bg-yellow-400"
              }`}
            >
              All
            </button>
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => handleTagClick(tag)}
                className={`px-4 py-2 text-sm rounded-full font-medium transition-colors shadow ${
                  selectedTag === tag
                    ? "bg-yellow-500 text-black"
                    : "bg-gray-200 text-gray-600 hover:bg-yellow-400"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-16 mb-16">
          {filteredCategories.map((category: ToolCategory) => (
            <div key={category.name} className="space-y-6">
              <div>
                <h2 className="text-3xl font-semibold tracking-tight text-black/80">{category.name}</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.tools.map((tool: Tool) => (
                  <div
                    key={tool.name}
                    className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-6 flex flex-col border border-gray-200"
                  >
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 mr-4 bg-[#F7F2EE] rounded-full p-2 flex items-center justify-center">
                        <img src={tool.image || "/placeholder-icon.png"} alt={tool.name || "Tool icon"} className="w-6 h-6" />
                      </div>
                      <div className="flex flex-col">
                        <h3 className="text-xl font-semibold text-black/80">{tool.name}</h3>
                        {tool.hs_recommended?.toLowerCase() === "yes" && (
                          <span className="text-xs text-green-600 font-medium">★ HS Recommended</span>
                        )}
                      </div>
                    </div>
                    {tool.non_profit_discount && (
                      <div className="text-base font-medium text-purple-800 mb-2 font-semibold">
                        {tool.non_profit_discount}
                      </div>
                    )}

                    <p className="text-black/70 mb-4 flex-grow leading-relaxed">{tool.description}</p>

                    <a
                      href={getToolLink(tool)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-block text-center w-full px-4 py-2 bg-[#fcd34d] hover:bg-[#fcbb1e] text-black font-medium rounded-lg transition-colors focus:outline-none ${shadowClass}`}
                    >
                      View non-profit pricing →
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className={`bg-white p-8 rounded-lg ${shadowClass} mb-16 border border-gray-200`}>
          <h2 className="text-2xl font-semibold mb-4 text-black/80">Need help choosing the right tools?</h2>
          <p className="mb-6 text-black/70 leading-relaxed">
            Every organization has unique needs. We can help you select and implement the right tools for your specific requirements.
          </p>
          <Link
            href="/contact"
            className={`inline-block px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-black font-medium rounded-lg transition-colors focus:outline-none ${shadowClass}`}
          >
            Get in touch →
          </Link>
        </div>
      </Container>

      <Swell dark />
      <Footer />
    </main>
  );
}
