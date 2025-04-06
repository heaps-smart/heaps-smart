"use server";

import { Post } from "@/interfaces/post";
import fs from "fs/promises"; // Use the promise-based version of fs
import matter from "gray-matter";
import { join } from "path";

const postsDirectory = join(process.cwd(), "_posts");

export async function getPostSlugs() {
  return await fs.readdir(postsDirectory);
}

export async function getPostBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = await fs.readFile(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return { ...data, slug: realSlug, content } as Post;
}

export async function getAllPosts(): Promise<Post[]> {
  const slugs = await getPostSlugs();

  const posts = await Promise.all(
    slugs.map(async (slug) => {
      const post = await getPostBySlug(slug);
      const fullPath = join(postsDirectory, `${slug}`);
      const stats = await fs.stat(fullPath);
      const lastModified = stats.mtime; // Get the last modified time
      return { ...post, lastModified };
    })
  );

  return posts.sort((post1, post2) => (post1.lastModified > post2.lastModified ? -1 : 1));
}
