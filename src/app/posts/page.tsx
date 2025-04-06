import { getAllPosts } from "@/lib/api";
import Container from "@/app/_components/container";
import Link from "next/link";

export default async function AllPosts() {
  const posts = await getAllPosts(); // Ensure this runs server-side

  return (
    <Container>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {posts.map((post) => (
          <li key={post.slug} className="border rounded-lg overflow-hidden">
            <Link href={`/posts/${post.slug}`} className="block">
              <img
                src={post.coverImage || "/assets/img/rainforest.jpg"}
                alt={post.title}
                className="w-full aspect-[16/9] object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold">{post.title}</h2>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </Container>
  );
}
