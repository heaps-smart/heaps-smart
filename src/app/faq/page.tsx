import { Metadata } from "next";
import Container from "@/app/_components/Container";
import Header from "@/app/_components/Header";
import Footer from "@/app/_components/Footer";

export const metadata: Metadata = {
  title: "FAQ - Frequently Asked Questions | Heaps Smart",
  description: "Common questions about working with Heaps Smart and how we can help your organisation with technology solutions.",
  keywords: "FAQ, frequently asked questions, non-profit technology, pricing, services, Heaps Smart",
  authors: [{ name: "Heaps Smart" }],
  openGraph: {
    title: "FAQ - Frequently Asked Questions",
    description: "Common questions about working with Heaps Smart and how we can help your organisation with technology solutions.",
    url: "https://www.heaps-smart.com/faq",
    siteName: "Heaps Smart",
    images: [
      {
        url: `https://www.heaps-smart.com/api/og?title=${encodeURIComponent("Frequently Asked Questions")}`,
        width: 1200,
        height: 630,
        alt: "Heaps Smart FAQ",
      },
    ],
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FAQ - Frequently Asked Questions",
    description: "Common questions about working with Heaps Smart and how we can help your organisation with technology solutions.",
    images: [`https://www.heaps-smart.com/api/og?title=${encodeURIComponent("Frequently Asked Questions")}`],
  },
  alternates: {
    canonical: "https://www.heaps-smart.com/faq",
  },
};

const faqs = [
  {
    question: "Do you only work with non-profits?",
    answer: "Most of our work is with non-profits and mission-driven organisations. That's where our experience and focus lie but if you're a for-profit and would like our help, we're more than happy to support you."
  },
  {
    question: "Do you work with startups and small teams?",
    answer: "Yes. We often work with early-stage startups and small teams that need practical, affordable systems to grow."
  },
  {
    question: "Can you work with the tools we already have?",
    answer: "Yes. We don't throw anything out unless it's truly holding you back. Often we adapt your existing tools and connect them together before suggesting anything new."
  },
  {
    question: "What if we don't have a tech person on staff?",
    answer: "That's okay. We can act as your product and tech partner, bridging the gap between your goals and the technical work."
  },
  {
    question: "How do you price your work?",
    answer: "We keep it transparent. Smaller jobs (like connecting systems or building a simple dashboard) are usually a fixed price quoted upfront. Larger projects (like custom software or websites) are broken into clear phases with an upfront retainer based model."
  },
  {
    question: "What about training and handover?",
    answer: "Every project includes training and simple notes or videos. Our goal is that your team can confidently use the system without depending on us every day, although we're here if you need us."
  },
  {
    question: "Can we start small?",
    answer: "Absolutely. Many of our projects begin with a quick audit, a workshop, or fixing one workflow. You'll see results quickly and can decide if you want to go further."
  }
];

export default function FAQ() {
  return (
    <main className="bg-[#F7F2EE] text-[#111111] font-sans min-h-screen">
      <Container>
        <Header />
      </Container>

      <Container>
        <div className="py-16">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-black/80 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-black/70 mb-12 max-w-3xl">
            Common questions about working with Heaps Smart and how we can help your organisation.
          </p>

          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-black/90 mb-3">
                  {faq.question}
                </h3>
                <p className="text-black/70 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg text-black/70 mb-6">
              Still have questions? We'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ3wJdTJq1eTmlBTwyP3ky18tYx7V5A18jD5WVDaRklGIV0U38AReUQGrZoBWUrijhjUDjgEY5QR?gv=true"
                className="inline-block px-6 py-3 bg-[#fcd34d] hover:bg-[#fcbb1e] text-black font-medium rounded-lg transition-colors focus:outline-none"
                aria-label="Schedule a call with Heaps Smart"
                target="_blank"
                rel="noopener noreferrer"
              >
                Schedule a call →
              </a>
              <a
                href="/contact"
                className="inline-block px-6 py-3 bg-white hover:bg-gray-50 text-black font-medium rounded-lg transition-colors focus:outline-none border border-gray-300"
                aria-label="Contact us"
              >
                Contact us
              </a>
            </div>
          </div>
        </div>
      </Container>

      <Footer />
    </main>
  );
}