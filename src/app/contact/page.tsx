import Container from "@/app/_components/container";
import { Header } from "@/app/_components/header";
import Footer from "@/app/_components/footer";
import Swell from "../_components/swell";

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F7F2EE] text-black font-sans" aria-label="Contact Us">
      <Container>
        <Header variant="light" />
      </Container>

      <main className="flex-grow">
        <Container>
          <section aria-labelledby="get-in-touch">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tighter leading-tight md:pr-8 mb-4 gradient-hero">
              Get in touch.
            </h1>
            <p className="tracking-tight md:text-3xl max-w-4xl mb-6 text-black/80 leading-tight">
              Have a question or want to collaborate? Whether you're a non-profit, a purpose-driven organisation, or someone who believes in technology for good, 
              we'd love to hear from you.
            </p>
            <p className="text-4xl md:text-5xl font-semibold mb-8">
              <a
                href="mailto:hello@heaps-smart.com"
                className="hover:underline"
                aria-label="Send email to hello@heaps-smart.com"
              >
                hello@heaps-smart.com
              </a>
            </p>
          </section>
        </Container>
      </main>
      <Swell dark={true} />
      <Footer inverted={false} />
    </div>
  );
}
