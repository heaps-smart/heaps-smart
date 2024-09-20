import Container from "@/app/_components/container";
import { Header } from "@/app/_components/header";
import CoverImage from "@/app/_components/cover-image";
export default function Index() {

  return (
    <main>
      <Container>
        <Header />
        <section className="bg-gray-100 p-8 mb-8 rounded-lg">
            <div>
              <h3 className="mb-8 text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
                About Us
              </h3>
              <p className="mb-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa cupiditate facere, modi quod sunt, impedit ducimus, optio veniam quae magni corrupti tempore? Molestiae laboriosam autem enim? Cumque ab at molestiae.</p>

               <p className="mb-8">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam ducimus praesentium in atque, vitae iusto, temporibus quibusdam officia reiciendis rem doloremque repudiandae velit provident quasi mollitia aliquam eos, illo ea?</p>
            </div>
        </section>
      </Container>
    </main>
  );
}
