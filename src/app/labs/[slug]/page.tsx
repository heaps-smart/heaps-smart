import Container from "@/app/_components/Container";
import Footer from "@/app/_components/Footer";
import Header from "@/app/_components/Header";
import Swell from "@/app/_components/Swell";
import path from "path";
import fs from "fs";
import matter from "gray-matter";
import markdownToHtml from "@/lib/markdownToHtml";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import "@/styles/markdown.css";

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

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const postsDirectory = path.join(process.cwd(), "_posts");
  const fullPath = path.join(postsDirectory, `${params.slug}.md`);
  
  if (!fs.existsSync(fullPath)) {
    return {
      title: "Post Not Found",
      description: "The requested post could not be found.",
    };
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data } = matter(fileContents);

  return {
    title: `${data.title} | Heaps Smart Labs`,
    description: data.excerpt || "Read the latest insights and experiments from Heaps Smart.",
    keywords: Array.isArray(data.tags) ? data.tags.join(", ") : "",
    authors: data.author ? [{ name: data.author.name }] : [{ name: "Heaps Smart" }],
    openGraph: {
      title: data.title,
      description: data.excerpt || "Read the latest insights and experiments from Heaps Smart.",
      url: `https://www.heaps-smart.com/labs/${params.slug}`,
      siteName: "Heaps Smart",
      images: data.coverImage ? [
        {
          url: data.coverImage,
          width: 1200,
          height: 630,
          alt: data.title,
        },
      ] : [
        {
          url: "/assets/img/heaps-smart-logo-og.png",
          width: 1200,
          height: 630,
          alt: "Heaps Smart Labs",
        },
      ],
      locale: "en_AU",
      type: "article",
      publishedTime: data.date,
    },
    twitter: {
      card: "summary_large_image",
      title: data.title,
      description: data.excerpt || "Read the latest insights and experiments from Heaps Smart.",
      images: data.coverImage ? [data.coverImage] : ["/assets/img/heaps-smart-logo-og.png"],
    },
    alternates: {
      canonical: `https://www.heaps-smart.com/labs/${params.slug}`,
    },
  };
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
