'use client';

import { useState, useEffect, useRef, useMemo, Suspense, useReducer, useCallback } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Fuse, { FuseResult } from "fuse.js";
import Container from "@/app/_components/Container";
import Footer from "@/app/_components/Footer";
import Header from "@/app/_components/Header";
import Swell from "@/app/_components/Swell";
import Link from "next/link";
import toolsData from './tools_database_markdown.json';

interface Tool {
  name: string;
  description: string;
  link: string;
  category: string | string[];
  monthly_pricing_aud: string;
  raw_pricing: string;
  non_profit_discount: string;
  non_profit_discount_link: string;
  pricing_details: string;
  hs_recommended: string;
  hs_recommended_details: string;
  affiliate_link: string;
  slug: string;
}

interface ToolCategory {
  name: string;
  description: string;
  tools: Tool[];
}

interface FilterState {
  selectedTag: string | null;
  search: string;
  debouncedSearch: string;
  isDropdownVisible: boolean;
  selectedDropdownIndex: number;
}

type FilterAction = 
  | { type: 'SET_SELECTED_TAG'; payload: string | null }
  | { type: 'SET_SEARCH'; payload: string }
  | { type: 'SET_DEBOUNCED_SEARCH'; payload: string }
  | { type: 'SET_DROPDOWN_VISIBLE'; payload: boolean }
  | { type: 'SET_SELECTED_DROPDOWN_INDEX'; payload: number }
  | { type: 'RESET_FILTERS' };

const filterReducer = (state: FilterState, action: FilterAction): FilterState => {
  switch (action.type) {
    case 'SET_SELECTED_TAG':
      return { ...state, selectedTag: action.payload };
    case 'SET_SEARCH':
      return { ...state, search: action.payload };
    case 'SET_DEBOUNCED_SEARCH':
      return { ...state, debouncedSearch: action.payload };
    case 'SET_DROPDOWN_VISIBLE':
      return { ...state, isDropdownVisible: action.payload, selectedDropdownIndex: -1 };
    case 'SET_SELECTED_DROPDOWN_INDEX':
      return { ...state, selectedDropdownIndex: action.payload };
    case 'RESET_FILTERS':
      return { ...state, search: '', debouncedSearch: '', isDropdownVisible: false, selectedDropdownIndex: -1 };
    default:
      return state;
  }
};

// Helper functions for URL-friendly category slugs
const categoryToSlug = (category: string): string => {
  if (category === "HS Recommended") return "hs-recommended";
  return category.toLowerCase().replace(/\s+/g, '-');
};

const slugToCategory = (slug: string): string => {
  if (slug === "hs-recommended") return "HS Recommended";
  return slug.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');
};

//  Pre-check all categories from a tool
const getToolCategories = (tool: Tool): string[] => {
  return Array.isArray(tool.category) ? tool.category : [tool.category];
};

// Pre-check if a tool belongs to a category
const toolBelongsToCategory = (tool: Tool, categoryName: string): boolean => {
  const categories = getToolCategories(tool);
  return categories.includes(categoryName);
};

// Utility function to get filtered tools by category
const getFilteredTools = (tools: Tool[], categoryName: string): Tool[] => {
  if (categoryName === "HS Recommended") {
    return tools.filter(tool => tool.hs_recommended?.toLowerCase() === "yes");
  }
  return tools.filter(tool => toolBelongsToCategory(tool, categoryName));
};

// Icon mapping configuration
const CATEGORY_ICON_MAP = {
  'ai-solutions': {
    icon: '/assets/svg/ai-solutions.svg',
    keywords: ['ai', 'llm', 'artificial', 'assistant', 'machine learning', 'openai', 'chatgpt', 'gemini']
  },
  'data-infrastructure': {
    icon: '/assets/svg/data-infrastructure.svg',
    keywords: ['data', 'database', 'analytics', 'visualisation', 'crm', 'spreadsheet', 'sheets', 'airtable']
  },
  'digital-communications': {
    icon: '/assets/svg/digital-communications.svg',
    keywords: ['communication', 'email', 'social', 'messaging', 'newsletter', 'marketing', 'slack', 'teams']
  },
  'automation': {
    icon: '/assets/svg/technical-strategic-consultation.svg',
    keywords: ['automation', 'workflow', 'zapier', 'integration', 'process']
  },
  'mapping': {
    icon: '/assets/svg/geospatial-mapping-solutions.svg',
    keywords: ['mapping', 'gis', 'location', 'geographic', 'spatial', 'maps']
  },
  'mobile': {
    icon: '/assets/svg/mobile-applications.svg',
    keywords: ['mobile', 'app', 'ios', 'android', 'smartphone']
  },
  'web': {
    icon: '/assets/svg/web-development.svg',
    keywords: ['web', 'website', 'builder', 'cms', 'wordpress', 'squarespace', 'wix']
  },
  'training': {
    icon: '/assets/svg/training-capacity-building.svg',
    keywords: ['training', 'education', 'learning', 'course', 'tutorial', 'teaching']
  },
  'media': {
    icon: '/assets/svg/sound-engineering.svg',
    keywords: ['sound', 'audio', 'video', 'media', 'recording', 'streaming', 'podcast']
  }
} as const;

// Get appropriate icon for a category
const getCategoryIcon = (category: string | string[]): string => {
  const categoryString = Array.isArray(category) ? category[0] : category;
  const categoryLower = categoryString.toLowerCase();
  
  // Find matching icon based on keywords
  for (const [, config] of Object.entries(CATEGORY_ICON_MAP)) {
    if (config.keywords.some(keyword => categoryLower.includes(keyword))) {
      return config.icon;
    }
  }
  
  // Default fallback icon
  return '/assets/svg/technical-strategic-consultation.svg';
};

// Error boundary and validation for tools data
const validateToolsData = (data: unknown): Tool[] => {
  if (!Array.isArray(data)) {
    console.error('Tools data is not an array');
    return [];
  }
  
  return data.filter((tool: unknown): tool is Tool => {
    return tool !== null && 
           typeof tool === 'object' && 
           'name' in tool &&
           'slug' in tool &&
           'category' in tool &&
           typeof (tool as Record<string, unknown>).name === 'string' && 
           typeof (tool as Record<string, unknown>).slug === 'string' &&
           (typeof (tool as Record<string, unknown>).category === 'string' || 
            Array.isArray((tool as Record<string, unknown>).category));
  });
};

function ToolsPageContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  
  // Validate and process tools data
  const validatedTools = useMemo(() => validateToolsData(toolsData), []);
  
  // Calculate allTags first (moved before state initialization)
  const allTags = useMemo(() => {
    const allCategories = new Set<string>();
    validatedTools.forEach((tool: Tool) => {
      const categories = getToolCategories(tool);
      categories.forEach(category => allCategories.add(category));
    });
    // Add HS Recommended as a special category if there are any recommended tools
    const hasRecommendedTools = validatedTools.some(tool => 
      tool.hs_recommended?.toLowerCase() === "yes"
    );
    if (hasRecommendedTools) {
      allCategories.add("HS Recommended");
    }
    return Array.from(allCategories).sort((a, b) => {
      // Put HS Recommended first
      if (a === "HS Recommended") return -1;
      if (b === "HS Recommended") return 1;
      return a.localeCompare(b);
    });
  }, [validatedTools]);

  // Initialize state with proper selectedTag from URL or default to HS Recommended
  const initialSelectedTag = useMemo(() => {
    const categoryParam = searchParams.get('category');
    if (categoryParam) {
      // Convert slug back to category name and validate it exists
      const categoryName = slugToCategory(categoryParam);
      const validCategory = allTags.find(tag => 
        tag.toLowerCase() === categoryName.toLowerCase()
      );
      return validCategory || "HS Recommended";
    }
    // Default to HS Recommended if no category parameter is present
    return "HS Recommended";
  }, [searchParams, allTags]);

  // Use reducer for filter state management with properly initialized selectedTag
  const [filterState, dispatch] = useReducer(filterReducer, {
    selectedTag: initialSelectedTag,
    search: '',
    debouncedSearch: '',
    isDropdownVisible: false,
    selectedDropdownIndex: -1
  });

  const inputRef = useRef<HTMLInputElement | null>(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const shadowClass = "shadow-sm hover:shadow-md";

  // Debounce search
  useEffect(() => {
    const handler = setTimeout(() => {
      dispatch({ type: 'SET_DEBOUNCED_SEARCH', payload: filterState.search });
    }, 200);

    return () => {
      clearTimeout(handler);
    };
  }, [filterState.search]);

  const allTools = useMemo(() => validatedTools, [validatedTools]);

  const fuse = useMemo(() =>
    new Fuse(allTools, {
      keys: [
        { name: "name", weight: 0.7 },
        { 
          name: "category", 
          weight: 0.5,
          getFn: (tool) => {
            const categories = getToolCategories(tool);
            return categories.join(' ');
          }
        },
        { name: "description", weight: 0.3 },
      ],
      threshold: 0.3,
      ignoreLocation: true,
    }), [allTools]);

  const searchResults = useMemo((): FuseResult<Tool>[] => {
    if (filterState.debouncedSearch.trim().length <= 1) return [];
    
    const query = filterState.debouncedSearch.trim().toLowerCase();
    
    // Check for exact matches in tool names
    const exactMatch = allTools.find(tool => 
      tool.name.toLowerCase() === query
    );
    
    // If there is an exact match, return only that tool
    if (exactMatch) {
      return [{ item: exactMatch, score: 0, refIndex: 0 }];
    }
    
    // Otherwise, return fuzzy search results
    return Array.from(
      new Map(
        fuse.search(filterState.debouncedSearch).map((result) => [
          result.item.name.toLowerCase(), result
        ])
      ).values()
    )
      .sort((a, b) => {
        const aExactMatch = a.item.name.toLowerCase() === query;
        const bExactMatch = b.item.name.toLowerCase() === query;

        if (aExactMatch && !bExactMatch) return -1;
        if (!aExactMatch && bExactMatch) return 1;
        return (a.score || 0) - (b.score || 0);
      })
      .slice(0, 6);
  }, [filterState.debouncedSearch, fuse, allTools]);

  const filteredCategories = useMemo(() => {
    if (filterState.debouncedSearch.trim().length > 1) {
      const matchingCategory = allTags.find(
        (category) =>
          category.toLowerCase() === filterState.debouncedSearch.trim().toLowerCase()
      );

      if (matchingCategory) {
        const tools = getFilteredTools(validatedTools, matchingCategory);
        
        return [{
          name: matchingCategory,
          description: "",
          tools: tools,
        }];
      }

      return [{
        name: "",
        description: "",
        tools: searchResults.map((result) => result.item),
      }];
    }

    if (filterState.selectedTag) {
      const tools = getFilteredTools(validatedTools, filterState.selectedTag);
      
      return [{
        name: filterState.selectedTag,
        description: "",
        tools: tools,
      }];
    }

    // Group tools by category (excluding HS Recommended when showing all)
    const categoryMap = new Map<string, Tool[]>();
    validatedTools.forEach((tool: Tool) => {
      const categories = getToolCategories(tool);
      categories.forEach(category => {
        if (!categoryMap.has(category)) {
          categoryMap.set(category, []);
        }
        categoryMap.get(category)!.push(tool);
      });
    });

    // When showing "All", don't include HS Recommended as a separate category
    // HS Recommended tools will still appear under their regular categories

    return Array.from(categoryMap.entries())
      .map(([categoryName, tools]) => ({
        name: categoryName,
        description: "",
        tools: tools.filter((tool: Tool) => {
          const matchesSearch =
            tool.name.toLowerCase().includes(filterState.debouncedSearch.toLowerCase()) ||
            tool.description.toLowerCase().includes(filterState.debouncedSearch.toLowerCase());
          return matchesSearch;
        }),
      }))
      .filter((category) => category.tools.length > 0)
      .sort((a, b) => a.name.localeCompare(b.name));
  }, [filterState.debouncedSearch, filterState.selectedTag, searchResults, allTags, validatedTools]);

  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node) &&
      inputRef.current &&
      !inputRef.current.contains(event.target as Node)
    ) {
      dispatch({ type: 'SET_DROPDOWN_VISIBLE', payload: false });
    }
  }, []);

  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    if (event.key === "Escape") {
      dispatch({ type: 'SET_DROPDOWN_VISIBLE', payload: false });
    } else if (event.key === "Enter" && filterState.selectedDropdownIndex >= 0) {
      const selectedTool = searchResults[filterState.selectedDropdownIndex];
      if (selectedTool) {
        window.location.href = `/tools-for-nonprofits/${selectedTool.item.slug}`;
      }
    } else if (event.key === "ArrowDown") {
      event.preventDefault();
      const nextIndex = Math.min(filterState.selectedDropdownIndex + 1, searchResults.length - 1);
      dispatch({ type: 'SET_SELECTED_DROPDOWN_INDEX', payload: nextIndex });
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      const prevIndex = Math.max(filterState.selectedDropdownIndex - 1, -1);
      dispatch({ type: 'SET_SELECTED_DROPDOWN_INDEX', payload: prevIndex });
    }
  }, [filterState.selectedDropdownIndex, searchResults]);

  // Setup event listeners to close dropdown when clicking outside or pressing keys
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleClickOutside, handleKeyDown]);

  const handleTagClick = (tag: string) => {
    dispatch({ type: 'RESET_FILTERS' });
    const newSelectedTag = filterState.selectedTag === tag ? null : tag;
    dispatch({ type: 'SET_SELECTED_TAG', payload: newSelectedTag });
    
    // Update URL parameter
    const params = new URLSearchParams(searchParams.toString());
    if (newSelectedTag) {
      params.set('category', categoryToSlug(newSelectedTag));
    } else {
      params.delete('category');
    }
    
    // Use replace to avoid adding to browser history
    const newUrl = params.toString() ? `?${params.toString()}` : '/tools-for-nonprofits';
    router.replace(newUrl, { scroll: false });
  };

  // Auto-select category tag when search matches a category name exactly
  useEffect(() => {
    if (filterState.debouncedSearch.trim().length > 1) {
      const matchingCategory = allTags.find(
        (category) =>
          category.toLowerCase() === filterState.debouncedSearch.trim().toLowerCase()
      );

      if (matchingCategory) {
        dispatch({ type: 'SET_SELECTED_TAG', payload: matchingCategory });
        return;
      }

      if (filterState.selectedTag) {
        dispatch({ type: 'SET_SELECTED_TAG', payload: null });
      }
    }
  }, [filterState.debouncedSearch, filterState.selectedTag, allTags]);

  // Set default URL parameter for HS Recommended when no category is specified
  useEffect(() => {
    const categoryParam = searchParams.get('category');
    if (!categoryParam && filterState.selectedTag === "HS Recommended") {
      const params = new URLSearchParams(searchParams.toString());
      params.set('category', categoryToSlug("HS Recommended"));
      const newUrl = `?${params.toString()}`;
      router.replace(`/tools-for-nonprofits${newUrl}`, { scroll: false });
    }
  }, [searchParams, filterState.selectedTag, router]);

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
            <p className="text-lg md:text-xl max-w-3xl mb-4 text-black/70 leading-relaxed tracking-tight">
            As part of our work, we get to test heaps of products. We've pulled together some of the best tools for non-profits across a bunch of categories and we hope you find it useful. If you have questions or another great tool we should know about?{" "}
            <Link href="/contact" className="text-black-800 underline">
              Get in touch →
            </Link>
            </p>
          <div className="h-1 w-24 bg-yellow-400 mt-4 mb-6 rounded-full"></div>

          <div className="relative mb-6">
            <input
              ref={inputRef}
              type="text"
              placeholder="Search tools..."
              className="w-full px-4 py-3 text-lg border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
              value={filterState.search}
              onChange={(e) => {
                dispatch({ type: 'SET_SEARCH', payload: e.target.value });
                dispatch({ type: 'SET_DROPDOWN_VISIBLE', payload: true });
              }}
              onFocus={() => {
                if (filterState.search.trim().length > 1) {
                  dispatch({ type: 'SET_DROPDOWN_VISIBLE', payload: true });
                }
              }}
            />
            {filterState.search && (
              <button
                onClick={() => {
                  dispatch({ type: 'SET_SEARCH', payload: '' });
                  dispatch({ type: 'SET_DROPDOWN_VISIBLE', payload: false });
                }}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none"
                aria-label="Clear search"
              >
                ✕
              </button>
            )}

            {filterState.isDropdownVisible && searchResults.length > 0 && (
              <div
                ref={dropdownRef}
                className="absolute z-50 mt-2 w-full bg-white border border-gray-300 rounded-lg shadow-md max-h-72 overflow-y-auto"
                role="listbox"
                aria-label="Search results"
              >
                {searchResults.map((result, index) => {
                  const tool = result.item;
                  return (
                    <Link
                      key={tool.name}
                      href={`/tools-for-nonprofits/${tool.slug}`}
                      className={`block px-4 py-3 transition-colors flex justify-between items-center ${
                        index === filterState.selectedDropdownIndex 
                          ? 'bg-yellow-100' 
                          : 'hover:bg-yellow-100'
                      }`}
                      role="option"
                      aria-selected={index === filterState.selectedDropdownIndex}
                      onClick={() => dispatch({ type: 'SET_DROPDOWN_VISIBLE', payload: false })}
                    >
                      <div>
                        <div className="font-semibold text-black/90">{tool.name}</div>
                        <div className="text-sm text-black/60">
                          {tool.non_profit_discount || "–"}
                        </div>
                      </div>
                      <span className="text-black/50">→</span>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>

          {/* Desktop: Category Pills */}
          <div className="hidden md:flex flex-wrap gap-3 mb-6">
            <button
              onClick={() => {
                dispatch({ type: 'RESET_FILTERS' });
                dispatch({ type: 'SET_SELECTED_TAG', payload: null });
                router.replace('/tools-for-nonprofits', { scroll: false });
              }}
              className={`px-4 py-2 text-sm rounded-full font-medium transition-colors shadow ${
                filterState.selectedTag === null
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
                  filterState.selectedTag === tag
                    ? "bg-yellow-500 text-black"
                    : "bg-gray-200 text-gray-600 hover:bg-yellow-400"
                }`}
              >
                {tag === "HS Recommended" ? "★ HS Recommended" : tag}
              </button>
            ))}
          </div>

          {/* Mobile: Category Dropdown */}
          <div className="md:hidden mb-12">
            <label htmlFor="category-select" className="block text-sm font-medium text-black/70 mb-3">
              Filter by category:
            </label>
            <select
              id="category-select"
              value={filterState.selectedTag || ""}
              onChange={(e) => {
                const value = e.target.value;
                if (value === "") {
                  dispatch({ type: 'RESET_FILTERS' });
                  dispatch({ type: 'SET_SELECTED_TAG', payload: null });
                  router.replace('/tools-for-nonprofits', { scroll: false });
                } else {
                  handleTagClick(value);
                }
              }}
              className="w-full px-4 py-3 text-base border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 bg-white appearance-none cursor-pointer"
            >
              <option value="">All categories</option>
              {allTags.map((tag) => (
                <option key={tag} value={tag}>
                  {tag === "HS Recommended" ? "★ HS Recommended" : tag}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="space-y-16 mb-16">
          {filteredCategories.map((category: ToolCategory) => (
            <div key={category.name} className="space-y-6">
              <div>
                <h2 className="text-3xl font-semibold tracking-tight text-black/80">
                  {category.name === "HS Recommended" ? "Heaps Smart Recommended" : category.name}
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.tools.map((tool: Tool) => (
                  <Link
                    key={tool.name}
                    href={`/tools-for-nonprofits/${tool.slug}`}
                    className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-6 flex flex-col border border-gray-200"
                  >
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 mr-4 bg-[#F7F2EE] rounded-full p-2 flex items-center justify-center">
                        <img 
                          src={getCategoryIcon(tool.category)} 
                          alt={`${Array.isArray(tool.category) ? tool.category[0] : tool.category} icon`}
                          className="w-6 h-6"
                        />
                      </div>
                      <div className="flex flex-col">
                        <h3 className="text-xl font-semibold text-black/80">{tool.name}</h3>
                        {tool.hs_recommended?.toLowerCase() === "yes" && (
                          <span className="text-xs text-green-600 font-medium">★ HS Recommended</span>
                        )}
                      </div>
                    </div>
                    {tool.non_profit_discount && (
                      <div className="text-base font-medium text-purple-900 mb-2 tracking-tight font-semibold">
                        {tool.non_profit_discount}
                      </div>
                    )}

                    <p className="text-black/70 mb-4 flex-grow leading-relaxed">{tool.description}</p>

                    <div
                      className={`inline-block text-center w-full px-4 py-2 bg-[#fcd34d] hover:bg-[#fcbb1e] text-black font-medium rounded-lg transition-colors focus:outline-none ${shadowClass}`}
                    >
                      View details →
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white p-8 rounded-lg shadow-sm mb-16 border border-gray-200">
          <h2 className="text-2xl font-semibold mb-4 text-black/80">Need help choosing the right tools?</h2>
          <p className="mb-6 text-black/70 leading-relaxed">
            Every organisation has unique needs. We can help you select and implement the right tools for your specific requirements.
          </p>
          <Link
            href="/contact"
            className="inline-block px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-black font-medium rounded-lg transition-colors focus:outline-none shadow-sm hover:shadow-md"
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

function ToolsPageLoading() {
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
          <div className="h-1 w-24 bg-yellow-400 mt-4 mb-6 rounded-full"></div>
        </div>
      </Container>
      <Swell dark />
      <Footer />
    </main>
  );
}

export default function ToolsPage() {
  return (
    <Suspense fallback={<ToolsPageLoading />}>
      <ToolsPageContent />
    </Suspense>
  );
}
