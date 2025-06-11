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
          <section aria-labelledby="lets-talk">
            <AnimatedHeading>
              Let's talk.
            </AnimatedHeading>
            <p className="tracking-tight md:text-3xl max-w-4xl mb-6 text-black/80 leading-tight">
              Whether you're just starting out with automation or already deep in the tools and need a hand, we're here to help.
            </p>
            <div className="mb-8">
              <h3 className="text-3xl font-semibold mb-4">Email us</h3>
              <p>
                Reach us directly: <a href="mailto:hello@heaps-smart.com" className="hover:underline text-black" aria-label="Send email to hello@heaps-smart.com">hello@heaps-smart.com</a>
              </p>
            </div>
            <div className="mb-8">
              <h3 className="text-3xl font-semibold mb-4">Schedule a call</h3>
              <p>
                Schedule a free 30-minute call to talk through what you're working on and how we can help.
              </p>
              <a href="[scheduling link]" className="hover:underline text-black" aria-label="Schedule a call">Schedule a call →</a>
            </div>
            <div className="mb-8">
              <h3 className="text-3xl font-semibold mb-4">Follow our work</h3>
              <p>
                Stay in the loop with smart tools, case studies, and ideas for working better.
              </p>
              <a href="[LinkedIn link]" className="hover:underline text-black" aria-label="Visit LinkedIn">LinkedIn →</a>
              <br />
              <a href="[blog link]" className="hover:underline text-black" aria-label="Visit blog">Our latest from The Lab →</a>
            </div>
          </section>
        </Container>
      </main>
      <Swell dark={true} />
      <Footer inverted={false} />
    </div>
  );
}
