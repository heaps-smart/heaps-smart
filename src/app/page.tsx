import { useEffect } from "react";
import Container from "@/app/_components/container";
import { Header } from "@/app/_components/header";
import CoverImage from "@/app/_components/cover-image";
import Footer from "@/app/_components/footer";
import { AllPosts } from "@/app/_components/all-posts";
import { getAllPosts } from "@/lib/api";

export default function Index() {
  const allPosts = getAllPosts();

  return (
    <main>
      <Container>
        <Header />
        <section>
          <section className="mb-8 md:mb-16 relative">
            <CoverImage title="Henlo" src="/assets/img/hinchinbrook.jpg" />
            <div className="absolute top-0 left-0 p-8 text-[#355E3B] text-4xl md:text-6xl font-bold tracking-tighter">
              <h1 className="relative inline-flex items-baseline">Technology for Good.</h1>
            </div>
          </section>
          <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
            <div>
              <h3 className="mb-8 text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
                What We Do
              </h3>

              <div className="flex justify-between items-center mr-8">
                <div className="text-center">
                  <img src="/assets/svg/web.svg" alt="Web" width={64} height={64} />
                  <p className="mt-2 text-sm font-semibold tracking-tight">Web</p>
                </div>
                <div className="text-center">
                  <img src="/assets/svg/mobile.svg" alt="Mobile" width={64} height={64} />
                  <p className="mt-2 text-sm font-semibold tracking-tight">Mobile</p>
                </div>
                <div className="text-center">
                  <img src="/assets/svg/data.svg" alt="Data" width={64} height={64} />
                  <p className="mt-2 text-sm font-semibold tracking-tight">Data</p>
                </div>
                <div className="text-center">
                  <img src="/assets/svg/design.svg" alt="Design" width={64} height={64} />
                  <p className="mt-2 text-sm font-semibold tracking-tight">Design</p>
                </div>
                <div className="text-center">
                  <img src="/assets/svg/sound.svg" alt="Sound" width={64} height={64} />
                  <p className="mt-2 text-sm font-semibold tracking-tight">Sound</p>
                </div>
                <div className="text-center">
                  <img src="/assets/svg/training.svg" alt="Training" width={64} height={64} />
                  <p className="mt-2 text-sm font-semibold tracking-tight">Training</p>
                </div>
              </div>
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

        {/* {<AllPosts posts={allPosts} />} */}
      </Container>
      <section className="bg-slate-100 py-8 w-full">
        <div className="container mx-auto px-4 max-w-screen-xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 tracking-tighter">Nice to meet you.</h2>

          <p className="text-lg mb-6">
            We’re creatives, technologists and problem solvers.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white py-2 px-4 rounded font-bold text-lg hover:bg-gray-200"
          >
            Get in touch
          </a>
        </div>
      </section>
      <Footer />
    </main>
  );
}
