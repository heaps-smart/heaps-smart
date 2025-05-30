import dynamic from "next/dynamic";
import AnimatedHeading from "@/app/_components/AnimatedHeading";
import Container from "@/app/_components/Container";
import CTA from "@/app/_components/CTA";
import Footer from "@/app/_components/Footer";
import Header from "@/app/_components/Header";
import Section from "@/app/_components/Section";
import Swell from "@/app/_components/Swell";
import LightningIcon from "@/app/_components/svg/LightningIcon";
import HeartIcon from "@/app/_components/svg/HeartIcon";
import CodeIcon from "@/app/_components/svg/CodeIcon";
import LatestPosts from "@/app/_components/LatestPosts";

const BubbleGroupsCanvas = dynamic(() => import("@/app/_components/animations/Bubble"), {
  ssr: false,
});

export default function ProductDevelopment() {
  return (
    <main className="bg-[#f8f3ef] text-black font-sans">
      <Container>
        <Header variant="light" />

        <div className="pt-8 pb:4 lg:pb-16">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight md:pr-8 mb-4">
            Bring big ideas to life.
          </h1>
          <h2 className="text-xl md:text-2xl font-medium text-gray-800 tracking-tight pb-4 mb-12 max-w-full md:max-w-4xl">
            We work with your team to move from concept to production-ready product using proven innovation frameworks.
          </h2>
        </div>
      </Container>

      <Section bg="bg-[#e8e4e1]">
        <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-8 mb-8">
          <div className="md:w-1/2">
            <h3 className="text-3xl font-semibold mb-4 tracking-tight text-[#333333]">
              Our approach
            </h3>
            <p className="text-lg max-w-3xl pb-4">
              Our approach to product development is fast, collaborative, and practical. We run design sprints,
              co-create with your team, and build working prototypes to test real-world impact early.
              Whether you're technical or not, if you're ready to move, so are we.
            </p>
          </div>
        </div>

        <LatestPosts limit={2} />
      </Section>

      <Section bg="bg-[#BEB5B4]">
        <h3 className="text-3xl font-semibold mb-4 tracking-tight text-[#333333]">
          What we offer
        </h3>
        <ul className="space-y-6">
          <li className="flex items-start">
            <div className="mr-3 mt-0.5 text-primary">
              <LightningIcon />
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
              <HeartIcon />
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
              <CodeIcon />
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
