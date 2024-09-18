import Container from "@/app/_components/container";
import { Header } from "@/app/_components/header";
import { Logo } from "@/app/_components/logo";

export default function Index() {

  return (
    <main>
      <Container>
        <Header />
        <h1 className="text-6xl font-bold mt-12 leading-tight tracking-tighter">Logos</h1>
        <div className="flex flex-wrap">
          <div className="m-4">
            <Logo gradientColor="pink" />
          </div>
          <div className="m-4">
            <Logo gradientColor="purple" />
          </div>
          <div className="m-4">
            <Logo gradientColor="blue" />
          </div>
          <div className="m-4">
            <Logo gradientColor="green" />
          </div>
          <div className="m-4">
            <Logo gradientColor="yellow" />
          </div>
          <div className="m-4">
            <Logo gradientColor="red" />
          </div>
          <div className="m-4">
            <Logo gradientColor="slate" />
          </div>
        </div>
      </Container>
    </main>
  );
}
