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
          <div className="w-full md:w-3/4 text-left">
            <ul className="space-y-12">
              {posts.map((post) => (
                <li key={post.slug} className="group pb-8">
                  <Link href={`/posts/${post.slug}`} className="block">
                    <h2 className="text-2xl md:text-3xl font-semibold mb-2 text-black/90 tracking-tight group-hover:underline">
                      {post.title}
                    </h2>
                    <p className="text-lg text-black/60 mb-2 leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="text-lg text-black/60 mb-2">
                      {post.author && (
                        <div className="flex items-center gap-3 mt-2">
                          {post.author.picture && (
                            <img
                              src={post.author.picture}
                              alt={post.author.name}
                              className="w-10 h-10 rounded-full border border-slate-200"
                            />
                          )}
                          <span className="text-base text-black/80 font-medium">
                            {post.author.name}
                          </span>
                          {post.date && (
                            <>
                              <span className="mx-2 text-black/30">|</span>
                              <span className="text-base text-black/80 font-medium">
                                {new Date(post.date).toLocaleDateString(undefined, {
                                  year: "numeric",
                                  month: "long",
                                  day: "numeric",
                                })}
                              </span>
                            </>
                          )}
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
