import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/api";
import { CMS_NAME } from "@/lib/constants";
import markdownToHtml from "@/lib/markdownToHtml";
import Container from "@/app/_components/container";

interface PageProps {
  params: {
    slug: string;
  };
}

export default async function PostPage({ params }) {
  const { slug } = params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return notFound();
  }

  const content = await markdownToHtml(post.content || "");

  return (
    <div className="w-full">
      <Container flex className="py-4">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-black/80 leading-tight md:leading-none">
          {post.title}
        </h1>
        {/* Add other header components here if needed */}
      </Container>
      
      <div className="relative w-screen left-1/2 right-1/2 -ml-[50vw] my-8">
        <img
          src={post.headerImage || "/assets/img/rainforest.jpg"}
          alt={post.title}
          className="w-full aspect-[16/9] object-cover"
        />
      </div>
      
      <Container>
        <div className="prose prose-lg max-w-[60%] mx-auto leading-relaxed mb-16">
          {/* Render post content with increased paragraph spacing */}
          <div 
            dangerouslySetInnerHTML={{ __html: content }}
            className="[&>p]:mb-8 [&>h2]:mt-10 [&>h3]:mt-8 [&>ul]:mb-8 [&>ol]:mb-8 [&>blockquote]:mb-8" 
          />
        </div>
      </Container>
    </div>
  );
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const title = `${post.title}`;

  return {
    title,
    openGraph: {
      title,
      images: [post.ogImage?.url || "/assets/img/hinchinbrook.jpg"],
    },
  };
}

export async function generateStaticParams() {
  const posts = await getAllPosts();

  // Ensure posts is an array
  if (!Array.isArray(posts)) {
    throw new Error("getAllPosts did not return an array");
  }

  return posts.map((post) => ({
    slug: post.slug,
  }));
}
