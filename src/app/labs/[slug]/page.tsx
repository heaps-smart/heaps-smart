import Container from "@/app/_components/Container";
import Footer from "@/app/_components/Footer";
import Header from "@/app/_components/Header";
import Swell from "@/app/_components/Swell";
import path from "path";
import fs from "fs";
import matter from "gray-matter";
import markdownToHtml from "@/lib/markdownToHtml";
import { notFound } from "next/navigation";
import "@/styles/markdown.css";
import Head from "next/head";

export async function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), "_posts");
  const filenames = fs.readdirSync(postsDirectory);
  return filenames
    .filter((name) => name.endsWith(".md"))
    .map((filename) => ({ slug: filename.replace(/\.md$/, "") }));
}

interface PostPageProps {
  params: { slug: string };
}

export default async function PostPage({ params }: PostPageProps) {
  const postsDirectory = path.join(process.cwd(), "_posts");
  const fullPath = path.join(postsDirectory, `${params.slug}.md`);
  if (!fs.existsSync(fullPath)) return notFound();
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  const html = await markdownToHtml(content);

  return (
    <main className="bg-[#f8f3ef] text-black font-sans">
      <Head>
        <title>{data.title}</title>
        <meta name="description" content={data.excerpt} />
        <meta property="og:title" content={data.title} />
        <meta property="og:description" content={data.excerpt} />
        <meta property="og:type" content="article" />
        {data.coverImage && (
          <meta property="og:image" content={data.coverImage} />
        )}
        <meta property="og:url" content={`https://heapsmart.com.au/posts/${params.slug}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={data.title} />
        <meta name="twitter:description" content={data.excerpt} />
        {data.coverImage && (
          <meta name="twitter:image" content={data.coverImage} />
        )}
      </Head>
      <Container>
        <Header variant="light" />
      </Container>
      <Container>
        <header className="pt-8 pb-12 md:pb-8 mb-4">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight md:pr-8 mb-4">
            {data.title}
          </h1>
          <div className="flex flex-wrap gap-1 mb-6">
            {Array.isArray(data.tags) &&
              data.tags.map((tag: string) => (
                <span
                  key={tag}
                  className="inline-block bg-transparent text-slate-500 text-sm px-1 py-0.5 border-b border-slate-200"
                >
                  {tag}
                </span>
              ))}
          </div>
          <div className="text-lg text-black/60 mb-2">
						{data.author && (
							<div className="flex items-center gap-3 mt-2">
								{data.author.picture && (
									<img
										src={data.author.picture}
										alt={data.author.name}
										className="w-10 h-10 rounded-full border border-slate-200"
									/>
								)}
								<span className="text-base text-black/80 font-medium">
									{data.author.name}
								</span>
                {data.date && (
                  <>
										<span className="mx-2 text-black/30">|</span>
                    <span className="text-base text-black/80 font-medium">
                      {new Date(data.date).toLocaleDateString(undefined, {
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
        </header>
      </Container>
      <Container>
        <div className="w-full md:w-3/4">
          <article
            className="markdown"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </Container>
      <Swell dark />
      <Footer />
    </main>
  );
}
