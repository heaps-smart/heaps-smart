import Container from "@/app/_components/container";
import { Header } from "@/app/_components/header";
import Footer from "@/app/_components/footer";

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

      <div className="relative w-full h-[40px] overflow-hidden" aria-hidden="true">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 40"
          preserveAspectRatio="none"
          className="w-full h-full"
          aria-hidden="true"
        >
          <path
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="1.5"
            d="M0,20 C120,10 240,30 360,20 C480,10 600,30 720,20 C840,10 960,30 1080,20 C1200,10 1320,30 1440,20"
            className="sine-wave"
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0077be" />
              <stop offset="50%" stopColor="#00bfa6" />
              <stop offset="100%" stopColor="#87d4f5" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <Footer inverted={true} />
    </div>
  );
}
