import { Logo } from "./logo";

export function HeroLogo() {
  return (
    <section
      className="flex items-center justify-center h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url('/assets/img/rainforest.jpg')`,
      }}
    >
      <div className="bg-black bg-opacity-50 p-8 aspect-square flex items-center justify-center">
        <Logo gradientColor="transparent" />
      </div>
    </section>
  );
}
