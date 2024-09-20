import Container from "@/app/_components/container";
import { Header } from "@/app/_components/header";
import { AllPosts } from "@/app/_components/all-posts";
import { Footer } from "@/app/_components/footer";
import { getAllPosts } from "@/lib/api";

export default function Work() {
  const allPosts = getAllPosts();

  return (
    <main>
      <Container>
        <Header />
        {<AllPosts posts={allPosts} />}
      </Container>
      <Footer />
    </main>
  );
}
