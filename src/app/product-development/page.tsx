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

        <div className="pt-8 pb:4 lg:pb-8">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight md:pr-8 mb-4">
            Bring big ideas to life.
          </h1>
          <h2 className="text-xl md:text-2xl font-medium text-gray-800 tracking-tight pb-4 mb-12 max-w-full md:max-w-4xl">
            We work with your team to move from concept to production-ready product using proven innovation frameworks.
          </h2>
        </div>
      </Container>

      <Section bg="bg-[#E5E0DF]">
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
            We implement practical AI solutions ranging from basic automations to complex data analysis systems.<br />Our focus is on <b>doing more with less</b>: creating usable tools that solve specific problems with your workflows.
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
            We design for real users — building intuitive, accessible interfaces and smooth user journeys that drive real engagement and clarity.<br />Our product backgrounds are centered on years of <b>usability experience</b> and <b>user research</b>.
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
          Need something custom? We build web apps, internal tools, and platforms tailored to your needs—fast, scalable, and maintainable.<br />
          We are experts in building full-stack cross-platform solutions for both web and mobile using <b>JavaScript</b>, <b>Python</b>, <b>SQL</b>, and beyond.
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
