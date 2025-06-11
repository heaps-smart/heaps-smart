import Container from "@/app/_components/Container";
import Footer from "@/app/_components/Footer";
import Header from "@/app/_components/Header";
import Swell from "@/app/_components/Swell";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-[#f8f3ef] text-black font-sans">
      <main className="flex-1 flex flex-col">
        <Container>
          <Header variant="light" />
        </Container>

        <Container>
          <div className="py-8 md:py-12">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-black/80 leading-tight md:leading-none pb-4">
              About Heaps Smart
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mb-4 text-black/70 leading-relaxed">
              We help teams work smarter with AI-powered tools and automations.
            </p>
            <div className="h-1 w-24 bg-yellow-400 mt-4 mb-12 rounded-full"></div>
          </div>
        </Container>

        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 pb-16">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-6">Our Mission</h2>
              <p className="text-lg text-black/80 mb-6 leading-relaxed">
                At Heaps Smart, we believe in using technology to eliminate busywork and free up 
                time for the work that matters most. We partner with teams to design and implement 
                custom automations that seamlessly integrate with your existing systems.
              </p>
              <p className="text-lg text-black/80 mb-6 leading-relaxed">
                Our solutions are built for real people solving real problems. We bring deep expertise 
                in AI, automation, and workflow design to help organizations of all sizes work more 
                efficiently.
              </p>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-6">Our Approach</h2>
              <p className="text-lg text-black/80 mb-6 leading-relaxed">
                We take a human-centered approach to automation, focusing on the unique needs of your team. 
                Our process starts with understanding your workflows, identifying bottlenecks, and designing
                solutions that make a meaningful difference in how you work.
              </p>
              <p className="text-lg text-black/80 mb-6 leading-relaxed">
                From simple workflow automations to complex AI integrations, we build tools that are 
                tailored to your specific needs and easy for your team to adopt.
              </p>
            </div>
          </div>
        </Container>

        <Container>
          <div className="bg-[#EBE4DD] p-10 rounded-xl shadow-sm mb-16">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">Get in Touch</h2>
            <p className="text-lg text-black/80 mb-8 leading-relaxed max-w-2xl">
              Ready to streamline your workflows and eliminate busywork? Let's talk about how
              we can help your team work smarter.
            </p>
            <a 
              href="mailto:hello@heaps-smart.com"
              className="inline-block bg-[#fcd34d] px-8 py-3 text-black font-medium rounded-md hover:bg-[#fbbf24] transition-colors"
            >
              Contact Us
            </a>
          </div>
        </Container>
      </main>

      <Swell dark />
      <Footer />
    </div>
  );
}
