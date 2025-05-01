import { Header } from "@/app/_components/header";
import Container from "@/app/_components/container";
import Footer from "@/app/_components/footer";
import Swell from "@/app/_components/swell";
import { CTA } from "../_components/cta";

export default function Page() {
  return (
    <main className="text-black font-sans">
      <div className="bg-[#f8f3ef]">
        <Container>
          <Header variant="light" />

          <h1 className="text-5xl md:text-6xl font-bold tracking-tighter leading-tight md:pr-8 mb-4">
            Bring your big idea to life
          </h1>

          <h2 className="text-xl md:text-2xl font-medium mb-8 text-gray-600">
            We work with your team to move from concept to production-ready product using proven innovation frameworks.
          </h2>

          <h3 className="text-3xl font-semibold mb-4 tracking-tight text-[#333333]">
            Our approach
          </h3>
          <p className="text-lg pb-8 max-w-3xl">
            Our approach to product development is fast, collaborative, and practical. We run design sprints, 
            co-create with your team, and build working prototypes to test real-world impact early. 
            Whether you're technical or not, if you're ready to move, so are we.
          </p>
        </Container>
      </div>

      <div className="bg-[#BEB5B4]">
        <Container>
          <div className="gap-8 py-12">
            <h3 className="text-3xl font-semibold mb-4 tracking-tight text-[#333333]">
              What we offer
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="mr-3 mt-0.5 text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="16" x2="12" y2="12"></line>
                    <line x1="12" y1="8" x2="12.01" y2="8"></line>
                  </svg>
                </div>
                <div>
                  <span className="font-semibold">AI & Data Solutions</span>
                </div>
              </li>
              <li className="flex items-start">
                <div className="mr-3 mt-1 text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                  </svg>
                </div>
                <div>
                  <span className="font-semibold">Product Design & UX</span>
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
                  <span className="font-semibold">Custom Software Development</span>
                </div>
              </li>
            </ul>
          </div>
        </Container>
      </div>

      <Container>
        <CTA heading="Get in touch to start building" />
      </Container>

      <Swell dark />
      <Footer />
    </main>
  );
}
