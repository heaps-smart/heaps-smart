import fs from "fs";
import path from "path";
import matter from "gray-matter";
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

function getLatestPosts(limit = 2): PostMeta[] {
  const postsDirectory = path.join(process.cwd(), "_posts");
  const filenames = fs.readdirSync(postsDirectory);
  const posts = filenames
    .filter((name) => name.endsWith(".md"))
    .map((filename) => {
      const filePath = path.join(postsDirectory, filename);
      const fileContents = fs.readFileSync(filePath, "utf8");
      const { data } = matter(fileContents);
      return {
        slug: filename.replace(/\.md$/, ""),
        title: data.title,
        excerpt: data.excerpt,
        date: data.date,
        author: data.author || { name: "", picture: "" },
        coverImage: data.coverImage || (data.ogImage && data.ogImage.url) || "",
        published: data.published === true,
      };
    })
    .filter((post) => post.published)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
  return posts.slice(0, limit);
}

export default function LatestPosts({ limit = 2 }: { limit?: number }) {
  const posts = getLatestPosts(limit);
  const gridCols = limit === 3 ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" : "grid-cols-1 md:grid-cols-2";
  return (
    <div className={`grid ${gridCols} gap-8 mb-4`}>
      {posts.map((post) => (
        <Link
          key={post.slug}
          href={`/labs/${post.slug}`}
          className="group flex flex-col bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1 p-6 border border-black/10 text-left h-full justify-between"
          aria-label={`Read ${post.title}`}
        >
          <div>
            <div className="flex items-start justify-between mb-2">
              <h4 className="text-xl font-semibold">{post.title}</h4>
              {post.coverImage && (
                <img
                  src={post.coverImage}
                  alt={`Cover for ${post.title}`}
                  className="w-14 h-14 ml-4 rounded-md object-cover flex-shrink-0"
                />
              )}
            </div>
            <div className="mt-2">
              <div className="text-black/60 text-base mb-2">{post.excerpt}</div>
            </div>
          </div>
          <div className="flex items-center gap-2 mt-4 pt-2 border-t border-slate-100">
            {post.author.picture && (
              <img
                src={post.author.picture}
                alt={post.author.name}
                className="w-8 h-8 rounded-full border border-slate-200"
              />
            )}
            <span className="text-sm text-black/80 font-medium">{post.author.name}</span>
            <span className="h-5 border-l border-slate-200 mx-2" aria-hidden="true"></span>
            <span className="text-sm text-black/60">{new Date(post.date).toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" })}</span>
          </div>
        </Link>
      ))}
    </div>
  );
}
