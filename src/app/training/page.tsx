"use client";
import Container from "@/app/_components/container";
import { Header } from "@/app/_components/header";
import Footer from "@/app/_components/footer";
import Image from "next/image";
import { useEffect } from "react";
import { FaQuoteLeft } from "react-icons/fa";

export default function Training() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://js.stripe.com/v3/pricing-table.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

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
    {
      quote: "Wow! So much to think about.",
      name: "Liz",
      role: "Non-profit Director",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans" aria-label="Coffee Sessions Page">
      
      <div className="bg-gradient-to-r bg-[#F8F3EF] mb-12">
        <Container className="relative">
          <Header variant="light" />

          <h2 id="technology-for-good" className="text-4xl sm:text-5xl md:text-8xl font-bold mt-28 mb-12 tracking-tight text-black/85">
            What is AI? Start here.
          </h2>
          <div className="relative mt-auto mb-12">
            <p className="tracking-tight md:text-3xl max-w-4xl mb-4 text-black/80">
              Curious about AI but don’t know where to begin? Join me for a <b>Coffee Session: "Hello, AI"</b> &mdash; a relaxed, beginner-friendly intro to the world of AI.
            </p>
            <p className="tracking-tight md:text-2xl max-w-4xl mb-4 text-black/80">
              In just 90 minutes, I'll guide you and a small group online through the basics, so you can start using AI with confidence—no jargon, no stress, just practical know-how.
            </p>
            <a
              href="#"
              className="inline-block mt-4 px-8 py-3 bg-[#FFFFFF] text-[#000000] text-lg font-semibold rounded transition-opacity hover:opacity-80"
            >
              Sign Up Now
            </a>
          </div>
        </Container>
      </div>

      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <h3 className="text-3xl font-semibold mb-4 tracking-tight text-[#333333]">What You'll Learn</h3>
            <ul className="mb-6 list-disc pl-5">
              <li>What is AI?</li>
              <li>What is happening today in AI, and how does it impact me?</li>
              <li>What is the current trajectory of AI and why is it so important?</li>
              <li>How do I access and use AI tools?</li>
            </ul>
          </div>
          <div className="relative">
            <Image
              src="/assets/img/mountains.jpg"
              alt="What you'll learn about AI"
              fill
              className="object-cover transition-opacity duration-300 opacity-75 hover:opacity-100 max-h-[30vh]"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <h3 className="text-3xl font-semibold mb-4 tracking-tight text-[#333333]">How It Works</h3>
            <ol className="mb-6 list-decimal pl-5">
              <li className="mb-2"><b>Sign Up</b><br />Register online and pay the course fee. We'll follow up with an email to confirm your session options.</li>
              <li className="mb-2"><b>Bring friends or meet new ones!</b><br />Each 90-minute session is held online with a small group of 2–5 participants.</li>
              <li className="mb-2"><b>Learn & discuss</b><br />Get hands-on, ask questions, and discuss real-world AI topics during the session.</li>
              <li className="mb-2"><b>Tools & takeaways</b><br />You'll leave with a handy cheat sheet of all the concepts, access to practical AI tools, and the confidence to start applying what you've learned straight away.</li>
            </ol>
          </div>
          <div className="relative">
            <Image
              src="/assets/img/mountains.jpg"
              alt="How our AI training works"
              fill
              className="object-cover transition-opacity duration-300 opacity-75 hover:opacity-100 max-h-[30vh] "
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-3xl font-semibold mb-4 tracking-tight text-[#333333]">What You'll Need</h3>
            <ul className="mb-6 list-disc pl-5">
              <li>A computer with a reliable Wi-Fi connection.</li>
              <li>A quiet space where you can focus for 90 minutes.</li>
              <li>A cup of coffee, tea, or water to enjoy during the session.</li>
            </ul>
          </div>
          <div className="relative aspect-[4/3]">
            <Image
              src="/assets/img/mountains.jpg"
              alt="What you need for the AI training session"
              fill
              className="object-cover transition-opacity duration-300 opacity-75 hover:opacity-100"
            />
          </div>
        </div>
      </Container>

      <div className="bg-[#F8F3EF] mt-8 mb-4 py-16">
        <Container>
          <h3 className="text-4xl font-bold text-center mb-12 tracking-tight text-black/80">
            What People Are Saying
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-white/10 p-6 rounded-2xl transition-transform duration-300 hover:scale-105"
              >
                <p className="text-lg italic">{testimonial.quote}</p>
                <div className="flex items-center mt-6 space-x-4">
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-black/60">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>

      <Footer inverted={false} />
    </div>
  );
}
