'use client';

import Container from "@/app/_components/container";
import { Header } from "@/app/_components/header";
import Footer from "@/app/_components/footer";
import Image from "next/image";

export default function Projects() {
  return (
    <main className="bg-[#f8f3ef] text-black font-sans">
      <Container>
        <Header />
      </Container>

      <Container>
          <h2 className="text-6xl md:text-7xl font-bold tracking-tighter text-black/80">
            What we're working on
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mb-20">
            Heaps Smart collaborates with non-profits, researchers and innovators to deliver purposeful solutions with lasting impact.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {[
              {
                title: "How to save a dinosaur bird",
                content:
                  "Many hands (or eyes) make short work of recording observational data on the endangered and mysterious Southern Cassowary.",
                video: "/assets/video/cassowary-web.mp4",
              },
              {
                title: "Redefining MVP: Most Valuable Poo!",
                content:
                  "We're using Vision AI to identify seeds in cassowary poop for a quirky yet educational science initiative.",
                image: "/assets/img/cassowary-poo.jpg",
              },
              {
                title: "Building 'Casey'",
                content:
                  "Building an AI Agent (RAG) to join the cassowary conservation team to review reports, surface insights, analyse data and never sleep.",
                image: "/assets/img/cassowary-researcher.jpg",
              },
              {
                title: "Hello, AI",
                content:
                  "Helping individuals and teams build tech capacity with a relaxed, beginner-friendly intro to the world of AI. Join a session.",
                image: "/assets/img/mountains.jpg",
              },
            ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex flex-col w-full bg-[#f0ebe7] rounded-lg overflow-hidden transition-all cursor-pointer"
                >
                    <div className="relative w-full h-[30vh]">
                      {idx === 0 ? (
                        <video
                          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 opacity-75 hover:opacity-100"
                          muted
                          playsInline
                          onMouseEnter={(e) => e.currentTarget.play()}
                          onMouseLeave={(e) => {
                            e.currentTarget.pause();
                            e.currentTarget.currentTime = 0;
                          }}
                        >
                          <source src="/assets/video/cassowary-web.mp4" type="video/mp4" />
                        </video>
                      ) : (
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover transition-opacity duration-300 opacity-75 hover:opacity-100"
                        />
                      )}
                    </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-2 tracking-tight">
                    {item.title}
                    </h3>
                    <p className="text-base leading-relaxed">{item.content}</p>
                  </div>
                </div>
            ))}
          </div>
      </Container>

      <div className="relative bg-[#f8f3ef] py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 tracking-tight">
          See More On LinkedIn
        </h2>
        <a
          href="https://www.linkedin.com/in/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-4 bg-white text-black text-lg font-bold rounded-lg hover:bg-gray-100 transition-all"
        >
          Visit LinkedIn
        </a>
      </div>

      <Footer />
    </main>
  );
}
