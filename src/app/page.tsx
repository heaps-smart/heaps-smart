import Container from "@/app/_components/container";
import { Header } from "@/app/_components/header";
import { HeroLogo } from "@/app/_components/hero-logo";
import Image from "next/image";
import CoverImage from "@/app/_components/cover-image";
import { AllPosts } from "@/app/_components/all-posts";
import { getAllPosts } from "@/lib/api";

export default function Index() {
  const allPosts = getAllPosts();

  return (
    <main>
        <HeroLogo />
        {/* <Header /> */}
        {/* <section>
          <div className="mb-8 md:mb-16">
            <CoverImage title="Henlo" src="/assets/img/mountains.jpg" />
          </div>
          <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
            <div>
              <h3 className="mb-8 text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
                What We Do
              </h3>
              <Image src="/assets/img/what-we-do.png" alt="Henlo" layout="responsive" width={1194} height={354} />
            </div>
            <div>
              <p className="text-lg leading-relaxed mb-4">
                In today’s digital world, not-for-profit organisations often face the challenge of keeping up with rapidly evolving technology while managing limited time, resources, and in-house tech expertise. With pressing issues to address and urgent challenges to tackle, it can be difficult to find the right solutions and support.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                This is where Heaps Smart can help. We specialise in providing expert guidance and tailored tech solutions that help you do more with less. By working closely with your team, we ensure you have the right tools and training to navigate new technologies confidently and efficiently. Our goal is to deliver smart, tech-driven solutions that are easy to maintain and specifically tailored to fit your team and processes.
              </p>
            </div>
          </div>
        </section>
        
        {<AllPosts posts={allPosts} />} */}
      {/* <section className="bg-slate-100 py-8 w-full">
          <div className="container mx-auto px-4 max-w-screen-xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 tracking-tighter">Chat with us for free.</h2>

            <p className="text-lg mb-6">
              We’re known for our enthusiastic approach to people and problems and look forward to helping you achieve your mission. Initial consultations are always free.
            </p>
            <a
              href="/contact"
              className="inline-block bg-white py-2 px-4 rounded font-bold text-lg hover:bg-gray-200"
            >
              Get in touch
            </a>
            </div>
        </section> */}
    </main>
  );
}
