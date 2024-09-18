import Container from "@/app/_components/container";
import { Header } from "@/app/_components/header";
import CoverImage from "@/app/_components/cover-image";
import { getAllPosts } from "@/lib/api";

export default function Index() {
  const allPosts = getAllPosts();

  return (
    <main>
      <Container>
        <Header />
        <section className="bg-gray-100 p-8 mb-8 rounded-lg">
            <div>
              <h3 className="mb-8 text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
                About Us
              </h3>
            </div>
        </section>
      </Container>
    </main>
  );
}
