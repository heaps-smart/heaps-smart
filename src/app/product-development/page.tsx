import AnimatedHeading from "@/app/_components/animated-heading";
import Container from "@/app/_components/container";
import CTA from "@/app/_components/cta";
import Footer from "@/app/_components/footer";
import Header from "@/app/_components/header";
import Section from "@/app/_components/section";
import Swell from "@/app/_components/swell";

export default function ProductDevelopment() {
  return (
    <main className="bg-[#f8f3ef] text-black font-sans">
      <Container>
        <Header variant="light" />

        <AnimatedHeading>
          Bring your big idea to life.
        </AnimatedHeading>
        <h2 className="text-xl md:text-2xl font-medium text-gray-800 tracking-tight pb-4 mb-12">
          We work with your team to move from concept to production-ready product using proven innovation frameworks.
        </h2>
      </Container>

      <Section bg="bg-[#e8e4e1]">
        <h3 className="text-3xl font-semibold mb-4 tracking-tight text-[#333333]">
          Our approach
        </h3>
        <p className="text-lg max-w-3xl pb-4">
          Our approach to product development is fast, collaborative, and practical. We run design sprints, 
          co-create with your team, and build working prototypes to test real-world impact early. 
          Whether you're technical or not, if you're ready to move, so are we.
        </p>
      </Section>

      <Section bg="bg-[#BEB5B4]">
        <h3 className="text-3xl font-semibold mb-4 tracking-tight text-[#333333]">
          What we offer
        </h3>
        <ul className="space-y-6">
          <li className="flex items-start">
            <div className="mr-3 mt-0.5 text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
              </svg>
            </div>
            <div>
              <p className="font-semibold">AI & Data Solutions</p>
              <p className="text-base text-black/80">
                From simple automations to intelligent workflows, we help you harness AI to save time, improve accuracy, and unlock insights from your data.
              </p>
            </div>
          </li>

          <li className="flex items-start">
            <div className="mr-3 mt-1 text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </div>
            <div>
              <p className="font-semibold">Product Design & UX</p>
              <p className="text-base text-black/80">
                We design for real users — building intuitive, accessible interfaces and smooth user journeys that drive real engagement and clarity.
              </p>
            </div>
          </li>

          <li className="flex items-start">
            <div className="mr-3 mt-1 text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="16 18 22 12 16 6"></polyline>
                <polyline points="8 6 2 12 8 18"></polyline>
              </svg>
            </div>
            <div>
              <p className="font-semibold">Custom Software Development</p>
              <p className="text-base text-black/80">
                Need something custom? We build web apps, internal tools, and custom platforms tailored to your needs — fast, scalable, and maintainable.
              </p>
            </div>
          </li>
        </ul>
      </Section>

      <CTA heading="Get in touch to start building." />

      <Swell dark />
      <Footer />
    </main>
  );
}
