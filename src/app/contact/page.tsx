import Container from "@/app/_components/container";
import { Header } from "@/app/_components/header";
import Footer from "@/app/_components/footer";
import Swell from "../_components/swell";

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col bg-[#121212] text-[#FFFFFF] font-sans" aria-label="Contact Page">
      <Container>
        <Header inverted={true} />
      </Container>

      <main className="flex-grow">
        <Container>
          <section className="py-16" aria-labelledby="get-in-touch">
            <h2 id="get-in-touch" className="text-5xl md:text-8xl font-bold mb-8 tracking-tight leading-tight">
              Get in Touch
            </h2>
            <p className="tracking-tight md:text-3xl max-w-4xl mb-6">
              Have a question or want to collaborate? Whether you’re a non-profit, a purpose-driven organisation, or someone who believes in technology for good, 
              we’d love to hear from you.
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
      <Swell />
      <Footer inverted={true} />
    </div>
  );
}
