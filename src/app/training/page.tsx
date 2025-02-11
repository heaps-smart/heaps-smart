"use client";
import Container from "@/app/_components/container";
import { Header } from "@/app/_components/header";
import Footer from "@/app/_components/footer";
import Image from "next/image";
import { useEffect, useState } from "react";
import { PopupButton } from "react-calendly";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

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
  ];

  const [showLearn, setShowLearn] = useState(false);
  const [showHow, setShowHow] = useState(false);
  const [showNeed, setShowNeed] = useState(false);

  return (
    <div className="min-h-screen flex flex-col text-black font-sans" aria-label="About Us Page">
      <div className="bg-[#F7F2EE]">
        <Container>
          <Header variant="light" />
        </Container>

        <Container>
          <h2 id="technology-for-good" className="text-6xl md:text-7xl font-bold tracking-tighter text-black/80">
            What is AI? <span className="text-black/90">Start here.</span>
          </h2>
            <div className="relative mt-auto mb-12">
              <p className="tracking-tight md:text-3xl max-w-4xl mb-4 text-black/80">
                We're running relaxed, beginner-friendly online training that will get you started in the world of AI.
              </p>
              <p className="tracking-tight md:text-2xl max-w-4xl mb-8 text-black/80">
                In just 90 mins, you’ll learn the basics and get hands-on with easy-to-use AI tools. Sessions run every Thursday, join us!
              </p>
              <PopupButton
                url="https://calendly.com/heaps-smart/coffee-sessions-90mins"
                rootElement={document.body}
                text="Sign up now →"
                className="inline-block px-8 py-3 bg-[#007999] text-white text-lg font-semibold rounded hover:bg-[#004c73] transition-all"
              />
            </div>
        </Container>
      </div>

      <Container>
        <div className="gap-8 my-12">
          <h3
            className="text-3xl font-semibold mb-4 tracking-tight text-[#333333] cursor-pointer flex items-center"
            onClick={() => setShowLearn(!showLearn)}
          >
            What You'll Learn
            <div className="ml-2">
              {showLearn ? <FaChevronUp size={26} /> : <FaChevronDown size={26} />}
            </div>
          </h3>
          {showLearn && (
            <ul className="mb-6 list-disc pl-5">
                <li className="text-lg">What is AI?</li>
                <li className="text-lg">What is happening today in AI, and how does it impact me?</li>
                <li className="text-lg">What is the current trajectory of AI and why is it so important?</li>
                <li className="text-lg">How do I access and use AI tools?</li>
            </ul>
          )}
        </div>

        <div className="gap-8 mb-12">
          <h3
            className="text-3xl font-semibold mb-4 tracking-tight text-[#333333] cursor-pointer flex items-center"
            onClick={() => setShowHow(!showHow)}
          >
            How It Works
            <div className="ml-2">
              {showHow ? <FaChevronUp size={26} /> : <FaChevronDown size={26} />}
            </div>
          </h3>
          {showHow && (
            <ol className="mb-6 list-decimal pl-5">
              <li className="mb-2 text-lg">
                <b>Sign Up</b>
                <br />
                Register online and pay the course fee. We'll follow up with an email to confirm your session options.
              </li>
              <li className="mb-2 text-lg">
                <b>Bring friends or meet new ones!</b>
                <br />
                Each 90-minute session is held online with a small group of 2–5 participants.
              </li>
              <li className="mb-2 text-lg">
                <b>Learn & discuss</b>
                <br />
                Get hands-on, ask questions, and discuss real-world AI topics during the session.
              </li>
              <li className="mb-2 text-lg">
                <b>Tools & takeaways</b>
                <br />
                You'll leave with a handy cheat sheet of all the concepts, access to practical AI tools, and the confidence to start applying what you've learned straight away.
              </li>
            </ol>
          )}
        </div>

        <div className="gap-8">
          <h3
            className="text-3xl font-semibold mb-4 tracking-tight text-[#333333] cursor-pointer flex items-center"
            onClick={() => setShowNeed(!showNeed)}
          >
            What You'll Need
            <div className="ml-2">
              {showNeed ? <FaChevronUp size={26} /> : <FaChevronDown size={26} />}
            </div>
          </h3>
          {showNeed && (
            <ul className="mb-6 list-disc pl-5">
              <li className="text-lg">A computer with a reliable Wi-Fi connection.</li>
              <li className="text-lg">A quiet space where you can focus for 90 minutes.</li>
              <li className="text-lg">A cup of coffee, tea, or water to enjoy during the session.</li>
            </ul>
          )}
        </div>
      </Container>

      <div className="bg-[#F7F2EE] mt-8 mb-4 py-16">
        <Container>
          <h3 className="text-4xl font-bold text-center mb-12 tracking-tight text-black/80">
            What People Are Saying
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="p-6 rounded-2xl transition-transform duration-300 hover:scale-105"
              >
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
        </Container>
      </div>

      <Footer inverted={false} />
    </div>
  );
}
