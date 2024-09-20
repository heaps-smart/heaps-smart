import { Logo } from "./logo";

const isProd = process.env.NODE_ENV === 'production';
const basePath = isProd ? "/heaps-smart" : '';

export function HeroLogo() {
  return (
    <section
      className="flex items-center justify-center h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url('${basePath}/assets/img/rainforest.jpg')`,
      }}
    >
      <div className="bg-black bg-opacity-50 p-8 aspect-square flex items-center justify-center">
        <Logo gradientColor="transparent" />
      </div>
    </section>
  );
}
