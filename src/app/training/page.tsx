"use client";
import Container from "@/app/_components/container";
import { Header } from "@/app/_components/header";
import Footer from "@/app/_components/footer";
import Swell from "../_components/swell";
import Section from "@/app/_components/section";
import { CTA } from "../_components/cta";

export default function Training() {
  const testimonials = [
    {
      quote: "I've learned more in the past 20 minutes than I've learned in the last six years.",
      name: "Amanda",
      role: "Customer Support",
    },
    {
      quote: "This helped me understand the fundamentals and introduced me to the exciting new things happening in the world of technology.",
      name: "Gayle",
      role: "School Counsellor",
    },
    {
      quote: "ChatGPT is my new best friend.",
      name: "Jack",
      role: "Research Scientist",
    },
  ];

  return (
    <main className="bg-[#f8f3ef] text-black font-sans">
      <Container>
        <Header variant="light" />

        <h1 className="text-5xl md:text-6xl font-bold tracking-tighter leading-tight md:pr-8 mb-4 gradient-hero">
          Build innovation from within.
        </h1>
        <h2 className="text-xl md:text-2xl mb-12 font-medium text-gray-800 tracking-tight pb-4">
          Empower your team to work smarter, faster, and more creatively.
        </h2>
      </Container>

      <Section bg="bg-[#e8e4e1]">
        <h3 className="text-3xl font-semibold mb-4 tracking-tight text-[#333333]">
          Our approach
        </h3>
        <p className="text-lg max-w-3xl pb-4">
          We train by doing. From strategy workshops to agile sprints, we work side-by-side with your team — solving their problems, building their confidence, and sharpening their technical toolkits.
        </p>
      </Section>

      <Section bg="bg-[#BEB5B4]">
        <h3 className="text-3xl font-semibold mb-4 tracking-tight text-[#333333]">
          What you'll learn
        </h3>
        <ul className="list-disc pl-5 space-y-3">
          <li className="text-lg">
            <b>Strategy.</b> Cut through noise, prioritise what matters
          </li>
          <li className="text-lg">
            <b>Agile.</b> Work flexibly, iterate quickly, and deliver value sooner
          </li>
          <li className="text-lg">
            <b>AI.</b> Understand and apply emerging tech in real-world ways
          </li>
          <li className="text-lg">
            <b>Tooling & Automation.</b> Set up systems that do the heavy lifting
          </li>
        </ul>
      </Section>

      <Section bg="bg-[#EFE9E5]">
        <h3 className="text-4xl font-bold text-center tracking-tight text-black/80">
          From our learners
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
        <div key={index} className="p-6 rounded-2xl transition-transform duration-300 hover:scale-105">
          <p className="text-lg italic">{testimonial.quote}</p>
          <div className="flex items-center mt-6 space-x-3">
            <div>
          <p className="font-semibold">{testimonial.name}</p>
          <p className="text-sm text-black/60">{testimonial.role}</p>
            </div>
          </div>
        </div>
          ))}
        </div>
      </Section>

      <CTA heading="Get in touch to start learning." />

      <Swell dark />
      <Footer inverted={false} />
    </main>
  );
}