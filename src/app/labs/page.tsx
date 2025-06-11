import fs from "fs";
import path from "path";
import Link from "next/link";
import matter from "gray-matter";
import Container from "@/app/_components/Container";
import Header from "@/app/_components/Header";
import Footer from "@/app/_components/Footer";
import Swell from "@/app/_components/Swell";

export default function PostsIndex() {
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
        published: data.published === true,
        author: data.author || null,
      };
    })
    .filter((post) => post.published)
    .sort((a, b) => (a.date < b.date ? 1 : -1));

  return (
    <div className="min-h-screen flex flex-col bg-[#f8f3ef] text-black font-sans">
      <main className="flex-1 flex flex-col">
        <Container>
          <Header variant="light" />
        </Container>
        <Container>
          <div className="py-8 md:py-12">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-black/80 leading-tight md:leading-none pb-4">
              Labs: testing shiny new things
            </h2>
            <p className="text-lg md:text-xl max-w-3xl mb-4 text-black/70 leading-relaxed">
              Heaps Smart Labs is where we explore new tools, technologies, and ideas that can help us work better. 
              Here are some of our latest experiments and findings.
            </p>
            <div className="h-1 w-24 bg-yellow-400 mt-4 mb-2 rounded-full"></div>
          </div>
        </Container>

        <Container>
          <div className="w-full md:w-3/4 text-left my-12">
            <ul className="space-y-16">
              {posts.map((post) => (
                <li key={post.slug} className="group bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300">
                  <Link href={`/posts/${post.slug}`} className="block">
                    <h2 className="text-2xl md:text-3xl font-semibold mb-5 text-black/90 tracking-tight group-hover:underline decoration-2 underline-offset-2">
                      {post.title}
                    </h2>
                    <p className="text-lg text-black/80 mb-8 leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="text-lg text-black/70 border-t border-gray-200 pt-6 mt-2">
                      {post.author && (
                        <div className="flex items-center gap-4 mt-2">
                          {post.author.picture && (
                            <img
                              src={post.author.picture}
                              alt={post.author.name}
                              className="w-12 h-12 rounded-full border border-slate-100 shadow-sm"
                            />
                          )}
                          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                            <span className="text-base text-black/80 font-medium">
                              {post.author.name}
                            </span>
                            {post.date && (
                              <>
                                <span className="hidden sm:inline mx-1 text-black/30">|</span>
                                <span className="text-base text-black/60">
                                  {new Date(post.date).toLocaleDateString(undefined, {
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                  })}
                                </span>
                              </>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </main>
      <Swell dark />
      <Footer />
    </div>
  );
}
