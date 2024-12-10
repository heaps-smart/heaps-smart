import Container from "@/app/_components/container";
import { Header } from "@/app/_components/header";
import Footer from "@/app/_components/footer";
import Image from "next/image";

export default function Projects() {
  return (
    <main className="bg-[#FFFFFF] text-[#000000] font-sans">
      <Container>
        <Header />
      </Container>

      <Container>
        <section className="py-16 px-6 md:px-12">
          <h2 className="text-6xl sm:text-7xl md:text-8xl font-bold mb-12 tracking-tight">
            Projects
          </h2>
          <p className="text-xl md:text-2xl max-w-4xl mb-16 tracking-tight">
            We work with a variety of non-profits and purpose-driven organizations to create impactful solutions. 
            Visit our LinkedIn to see more of our recent work.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {[
              {
                title: "Sustainable Solutions",
                content:
                  "Developed a web platform for a global non-profit to track and reduce their carbon footprint.",
              },
              {
                title: "Community Engagement",
                content:
                  "Designed a mobile app to connect volunteers with local conservation projects.",
              },
              {
                title: "Digital Advocacy",
                content:
                  "Built a campaign site to raise awareness and funds for critical environmental issues.",
              },
              {
                title: "Education Outreach",
                content:
                  "Created an e-learning platform for schools to teach sustainability practices.",
              },
            ].map((item, idx) => (
              <div key={idx}>
                <h3 className="text-lg font-semibold mb-4">{item.title}</h3>
                <p className="text-sm leading-relaxed">{item.content}</p>
              </div>
            ))}
          </div>
        </section>
      </Container>

      {/* Call-to-Action Section */}
      <div className="relative bg-[#F5F5F5] text-[#000000] py-16 text-center">
        <h2 className="text-[2rem] font-semibold mb-8 tracking-tight">
          See more on LinkedIn.
        </h2>
        <a
          href="https://www.linkedin.com/in/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-3 bg-[#000000] text-[#FFFFFF] text-lg font-semibold rounded transition-opacity hover:opacity-80"
        >
          Visit our LinkedIn
        </a>
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
}
