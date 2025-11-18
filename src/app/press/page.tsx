import Container from "@/app/_components/Container";
import Header from "@/app/_components/Header";
import Footer from "@/app/_components/Footer";
import Swell from "@/app/_components/Swell";

export default function PressPage() {
  const items = [
    {
      title: "AI is talking about you behind your back. Now what?",
      outlet: "Our Community / Community Directors Institute",
      type: "Article",
      date: "Oct 2025",
      href: "https://www.communitydirectors.com.au/articles/ai-is-talking-about-you-behind-your-back.-now-what",
      description: "Exploring emerging AI reputation dynamics and practical steps for community organisations to prepare and respond.",
  image: "https://files.ourcommunity.com.au/general/Articles/_large/RobotWatcher_AI_shutterstock_2380761979.jpg",
      alt: "Our Community article thumbnail",
    },
    {
      title: "EcoTone Magazine – September 2025 Feature",
      outlet: "EcoTone Magazine",
      type: "Magazine Feature",
      date: "Sept 2025",
      href: "https://www.flipsnack.com/ecotone/ecotone-sept-2025-v45-no3/full-view.html?utm_medium=email&utm_source=raisely&utm_content=September%202025%20Newsletter%20&utm_term=1654a398-f311-419b-85c6-9da612352829",
      description: "Feature highlighting conservation technology and community-led mapping initiatives in coastal habitats.",
      image: "/assets/img/press/ecotone.svg",
      alt: "EcoTone magazine feature placeholder thumbnail",
    },
    {
      title: "Activating Data for Impact (Webinar)",
      outlet: "DiUS",
      type: "Webinar",
      date: "Aug 2025",
      href: "https://www.youtube.com/watch?v=1Bazlu-PWIg",
      description: "Panel discussion on unlocking latent organisational data for measurable social and environmental outcomes.",
  image: "https://img.youtube.com/vi/1Bazlu-PWIg/maxresdefault.jpg",
      alt: "DiUS webinar thumbnail",
    },
    {
      title: "Mapping Key to Mission",
      outlet: "The Cassowary Coast Observer",
      type: "News Article",
      date: "Oct 2025",
      href: "https://www.observernews.com.au/mapping-key-to-mission-2025-10-11",
      description: "Local news coverage of cassowary habitat mapping informing on-ground conservation decisions.",
      image: "/assets/img/press/cc-observer.svg",
      alt: "The Cassowary Coast Observer article placeholder thumbnail",
    },
  ];

  const logoPng = "/assets/img/heaps-smart-logo-og.png";
  const logoSvg = "/assets/img/heaps-smart-logo-og.svg";
  // Heuristic pick of profile photos from public assets; replace with preferred ones later
  const profiles = [
    { label: "Profile - Cassie", src: "/assets/img/cassie-1.webp" },
    { label: "Profile - Hinchinbrook", src: "/assets/img/hinchinbrook.jpg" },
  ];

  return (
    <main className="bg-[#F7F2EE] text-black font-sans">
      <Container>
        <Header variant="light" />
      </Container>

      <Container>
        <header className="pt-8 pb-6">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tighter">Press</h1>
          <p className="mt-3 text-lg text-black/80 max-w-2xl">
            A small selection of articles, features and appearances. If you need a
            quote, bio, imagery or background, we’re happy to help.
          </p>
        </header>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold tracking-tight mb-5">Coverage & Appearances</h2>
          <ul className="space-y-6">
            {items.map(item => (
              <li key={item.href}>
                <article className="group flex flex-col sm:flex-row gap-5">
                  <div className="sm:w-48 w-full aspect-[16/9] bg-white border border-black/10 rounded-md overflow-hidden flex items-center justify-center">
                    <img
                      src={item.image}
                      alt={item.alt}
                      className="object-contain w-full h-full p-2 sm:p-3 group-hover:opacity-90 transition-opacity"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex-1 flex flex-col">
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                      <h3 className="text-xl font-bold tracking-tight leading-snug">
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline decoration-black/30 hover:decoration-black"
                        >
                          {item.title}
                        </a>
                      </h3>
                      <span className="text-xs font-semibold uppercase tracking-wide bg-gray-100 text-gray-700 px-2 py-1 rounded">
                        {item.type}
                      </span>
                    </div>
                    <div className="flex items-center gap-x-3 mt-1">
                      <span className="text-sm text-black/65 font-medium">{item.outlet}</span> - 
                      <span className="text-sm text-black/65 font-medium">{item.date}</span>
                    </div>
                    <p className="text-sm text-black/70 leading-relaxed mt-2">{item.description}</p>
                    <div className="mt-3">
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-semibold underline hover:text-black"
                        aria-label={`Open external link: ${item.title}`}
                      >
                        {item.type === 'Webinar' ? 'Watch' : 'Read'} →
                      </a>
                    </div>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </section>

      </Container>

      <Swell dark={true} />
      <Footer />
    </main>
  );
}
