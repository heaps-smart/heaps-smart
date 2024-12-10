import Container from "@/app/_components/container";
import { Header } from "@/app/_components/header";
import Footer from "@/app/_components/footer";

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FFFFFF] text-[#000000] font-sans">
      {/* Header */}
      <Container>
        <Header />
      </Container>

      <main className="flex-grow">
        <Container>
          <section className="py-16">
            <h2 className="text-5xl md:text-8xl font-bold mb-8 tracking-tight leading-tight">
              Get in Touch
            </h2>
            <p className="tracking-tight md:text-3xl max-w-4xl mb-6">
              Have a question or want to collaborate? Whether you’re a non-profit, a purpose-driven organisation, or someone who believes in technology for good, 
              we’d love to hear from you.
            </p>
            <p className="text-4xl md:text-5xl font-semibold mb-8">
              <a
                href="mailto:hello@heaps-smart.com"
                className="text-neutral-700 dark:text-neutral-200 hover:underline"
              >
                hello@heaps-smart.com
              </a>
            </p>
          </section>
        </Container>
      </main>

      <Footer />
    </div>
  );
}
