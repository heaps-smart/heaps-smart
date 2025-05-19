import dynamic from "next/dynamic";
import AnimatedHeading from "@/app/_components/AnimatedHeading";
import Container from "@/app/_components/Container";
import CTA from "../_components/CTA";
import Footer from "@/app/_components/Footer";
import Header from "@/app/_components/Header";
import Section from "@/app/_components/Section";
import Swell from "../_components/Swell";
import CheckIcon from "@/app/_components/svg/CheckIcon";
import TestimonialCarousel from "@/app/_components/TestimonialCarousel";

const Rotary = dynamic(() => import("@/app/_components/animations/Rotary"), {
  ssr: false,
});

export default function Training() {
  const testimonials = [
    {
      quote: "I can’t believe how much I’ve learned in such a short time — AI finally makes sense! This is going to save me so much time, and I’m excited to put it into practice and share it with my team.",
      name: "Amanda",
      role: "Customer Support",
    },
    {
      quote: "My 1x1 training with Kate helped me understand the fundamentals that I was missing and introduced me to the exciting new things happening in the world of technology. Before this, I was completely overwhelmed, had never had any formal tech training and kept getting myself in a big mess! But now, it’s starting to click. I’m starting to put the pieces together and for the first time, I actually feel confident working online and out of a traditional office setting. I feel like anything is possible now.",
      name: "Gayle",
      role: "School Counsellor",
    },
    {
      quote: "After more than 40 years in science and research, I thought I’d seen every tool under the sun — but project management was always the part I struggled with. This session opened my eyes to how the right digital tools can streamline everything. I’m now collaborating more easily with my remote team, cutting down the admin, and moving projects forward faster. It means more time for research, and a bit more time in the surf, too.",
      name: "Jack",
      role: "Research Scientist",
    },
  ];

  return (
    <main className="bg-[#f8f3ef] text-black font-sans">
      <Container>
        <Header variant="light" />

        <div className="pt-8 pb:4 lg:pb-16">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight md:pr-8 mb-4">
            Build innovation from within.
          </h1>
          <h2 className="text-xl md:text-2xl font-medium text-gray-800 tracking-tight pb-4 mb-12 max-w-full md:max-w-4xl">
            We work with your team to move from concept to production-ready product using proven innovation frameworks.
          </h2>
        </div>
      </Container>
      <Section bg="bg-[#e8e4e1]">
        <div className="flex flex-col md:flex-row md:items-start md:space-x-8">
          {/* <div className="mt-8 md:mt-0 md:w-1/2 md:justify-start">
            <Rotary />
          </div> */}
          <div className="md:w-1/2">
            <h3 className="text-3xl font-semibold mb-4 tracking-tight text-[#333333]">
              What you'll learn
            </h3>
            <ul className="space-y-3">
              <li className="text-lg flex items-start">
                <CheckIcon className="h-5 w-5 text-emerald-500 mr-2 mt-1 flex-shrink-0" />
                <span><b>Strategy.</b> Cut through noise, prioritise what matters</span>
              </li>
              <li className="text-lg flex items-start">
                <CheckIcon className="h-5 w-5 text-emerald-500 mr-2 mt-1 flex-shrink-0" />
                <span><b>Agile.</b> Work flexibly, iterate quickly, and deliver value sooner</span>
              </li>
              <li className="text-lg flex items-start">
                <CheckIcon className="h-5 w-5 text-emerald-500 mr-2 mt-1 flex-shrink-0" />
                <span><b>AI.</b> Understand and apply emerging tech in real-world ways</span>
              </li>
              <li className="text-lg flex items-start">
                <CheckIcon className="h-5 w-5 text-emerald-500 mr-2 mt-1 flex-shrink-0" />
                <span><b>Tooling & Automation.</b> Set up systems that do the heavy lifting</span>
              </li>
            </ul>
          </div>
        </div>
      </Section>

      <Section bg="bg-[#EFE9E5]">
        <TestimonialCarousel testimonials={testimonials} />
      </Section>

      <CTA heading="Get in touch to start learning." />

      <Swell dark />
      <Footer inverted={false} />
    </main>
  );
}