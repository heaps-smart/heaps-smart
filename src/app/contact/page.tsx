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
          <div className="py-8 md:py-12">
            <section aria-labelledby="lets-talk">
              <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-black/80 leading-tight md:leading-none pb-4">
                Let's talk
              </h2>
              <p className="tracking-tight md:text-3xl max-w-4xl mb-4 text-black/80 leading-tight">
                Whether you're just starting out with automation or already deep in the tools and need a hand, we're here to help.
              </p>
              <div className="h-1 w-24 bg-yellow-400 mt-4 mb-8 rounded-full"></div>
            
              <div className="my-8">
                <p className="text-5xl font-bold tracking-tight mb-4">
                  <a href="mailto:hello@heaps-smart.com" className="hover:underline text-black font-bold" aria-label="Send email to hello@heaps-smart.com">hello@heaps-smart.com</a>
                </p>
              </div>
              <div className="mb-8">
                <p className="mb-4">
                  Or, schedule a free 20-minute call to talk through what you're working on and how we can help.
                </p>
                <a
                  href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ3wJdTJq1eTmlBTwyP3ky18tYx7V5A18jD5WVDaRklGIV0U38AReUQGrZoBWUrijhjUDjgEY5QR?gv=true"
                  className="inline-block px-6 py-3 bg-[#fcd34d] hover:bg-[#fcbb1e] text-black font-medium rounded-lg transition-colors focus:outline-none"
                  aria-label="Schedule a call with Heaps Smart"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book a call →
                </a>
              </div>
              <div className="mb-8">
                <h3 className="text-3xl font-semibold mb-4 tracking-tighter">Follow our work on LinkedIn</h3>
                <p>
                  Stay in the loop with smart tools, case studies, and ideas for working better.
                </p>
                <a
                  href="https://www.linkedin.com/company/heaps-smart"
                  className="inline-block mt-4 text-black"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow Heaps Smart on LinkedIn"
                >
                  Follow us on LinkedIn →
                </a>
              </div>
            </section>
          </div>
        </Container>
      </main>
      <Swell dark={true} />
      <Footer inverted={false} />
    </div>
  );
}
