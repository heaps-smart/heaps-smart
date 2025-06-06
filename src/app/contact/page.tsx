import AnimatedHeading from "@/app/_components/AnimatedHeading";
import Container from "@/app/_components/Container";
import Footer from "@/app/_components/Footer";
import Header from "@/app/_components/Header";
import Swell from "@/app/_components/Swell";

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F7F2EE] text-black font-sans" aria-label="Contact Us">
      <Container>
        <Header variant="light" />
      </Container>

      <main className="flex-grow">
        <Container>
          <section aria-labelledby="get-in-touch">
            <AnimatedHeading>
              Get in touch.
            </AnimatedHeading>
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
