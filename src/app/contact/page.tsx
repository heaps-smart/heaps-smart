import Container from "@/app/_components/container";
import { Header } from "@/app/_components/header";
import { Footer } from "@/app/_components/footer";

export default function Contact() {
  return (
    <main className="flex flex-col min-h-screen">
      <div className="flex-grow">
      <Container>
        <Header />

        <section className="text-center mb-12">
          <h1 className="text-5xl font-bold tracking-tighter mb-4">
            Nice to meet you.
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-400">
            We’d love to hear from you! Reach out with any questions or inquiries.
          </p>
        </section>

        <section className="flex flex-col items-center text-center space-y-4">
          <h1 className="text-2xl md:text-3xl font-bold tracking-tighter">
            info@heaps-smart.com
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tighter">
            (123) 456-7890
          </h2>
        </section>
      </Container>
      </div>

      <Footer />
    </main>
  );
}
