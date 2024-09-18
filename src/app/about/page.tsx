import Container from "@/app/_components/container";
import { Header } from "@/app/_components/header";
import CoverImage from "@/app/_components/cover-image";
import { getAllPosts } from "@/lib/api";

export default function Index() {
  const allPosts = getAllPosts();

  return (
    <main>
      <Container>
        <Header />
        <section className="bg-gray-100 p-8 mb-8 rounded-lg">
          <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
            <div>
              <h3 className="mb-8 text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
                About Us
              </h3>
            </div>
            <div>
        <p className="text-lg leading-relaxed mb-4">
          At Heaps Smart, we believe in the power of technology to solve meaningful problems. 
          Our mission is to provide expert guidance and tailored tech solutions to NGOs and 
          government organizations, enabling them to achieve their goals efficiently.
        </p>
        <h2 className="text-2xl font-bold mb-2">Our Founders</h2>
        <p className="text-lg leading-relaxed mb-4">
          Kate Blank and Derek Blank, with years of experience in the tech industry, are the 
          co-founders of Heaps Smart. They are passionate about using technology to promote 
          sustainability and inclusivity.
        </p>
        <h2 className="text-2xl font-bold mb-2">Our Values</h2>
        <ul className="list-disc pl-5 mb-4">
          <li>Technology for Good</li>
          <li>Sustainability and Environmental Impact</li>
          <li>Inclusive and Ethical Development</li>
        </ul>
        <p className="text-lg leading-relaxed">
          We are committed to empowering organizations to leverage the latest technology while 
          maintaining ethical standards and reducing their environmental impact.
        </p>
            </div>
          </div>
        </section>
      </Container>
    </main>
  );
}
