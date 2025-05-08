import Container from "@/app/_components/container";
import CTA from "@/app/_components/cta";
import Footer from "@/app/_components/footer";
import Header from "@/app/_components/header";
import ProjectList from "@/app/_components/project-list";
import Section from "@/app/_components/section";
import Swell from "@/app/_components/swell";

export default function Page() {
  return (
    <main className="bg-[#f8f3ef] text-black font-sans">
      <Container>
        <Header variant="light" />

        <h1 className="text-5xl md:text-6xl font-bold tracking-tighter leading-tight md:pr-8 mb-4 gradient-hero">
          Prototype. Scale. Innovate.
        </h1>

        <h2 className="text-xl md:text-2xl font-medium mb-4 text-gray-800 tracking-tight">
          Partner with our Innovation Labs to solve bold challenges through rapid experimentation.
        </h2>

        <div className="prose prose-lg mb-12 max-w-none">
          <p>
            We are constantly building, testing, tinkering and learning using the latest technologies,
            tools and automations. Forward-thinking organisations can tap into our Innovation Labs by
            engaging our team on a fixed or long-term basis.
          </p>
        </div>
      </Container>

      <Section bg="bg-[#e8e4e1]">
        <h3 className="text-2xl font-semibold mb-6 tracking-tight">Engage our Labs to:</h3>
        <ul className="space-y-4">
          <li className="flex items-start">
            <div className="mr-3 mt-1 text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
            <div>
              <span className="font-semibold">Prototype fast.</span> Test bold ideas and emerging tech with low risk
            </div>
          </li>
          <li className="flex items-start">
            <div className="mr-3 mt-1 text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
            <div>
              <span className="font-semibold">Customise smart solutions.</span> Customise one of our proven tools to your unique needs
            </div>
          </li>
          <li className="flex items-start">
            <div className="mr-3 mt-1 text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
            <div>
              <span className="font-semibold">Empower your team.</span> Build in-house capability with hands-on training and fresh tools
            </div>
          </li>
        </ul>
      </Section>

      <Container>
        <div className="my-16">
          <h2 className="text-3xl font-semibold mb-8 tracking-tight">Our latest Labs</h2>
          <ProjectList featured />
        </div>

        <CTA heading="Get in touch to start innovating." />
      </Container>

      <Swell dark />
      <Footer />
    </main>
  );
}
