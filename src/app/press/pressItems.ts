export interface PressItem {
  title: string;
  outlet: string;
  type: string;
  date: string; 
  href: string; 
  description: string;
  image: string; 
  alt: string; 
}

export const pressItems: PressItem[] = [
  {
    title: "AI is talking about you behind your back. Now what?",
    outlet: "Our Community / Community Directors Institute",
    type: "Article",
    date: "Oct 2025",
    href: "https://www.communitydirectors.com.au/articles/ai-is-talking-about-you-behind-your-back.-now-what",
    description: "Exploring emerging AI reputation dynamics and practical steps for community organisations to prepare and respond.",
    image: "/assets/img/press/our-community.svg",
    alt: "Logo for Our Community / Community Directors Institute",
  },
  {
    title: "EcoTone Magazine – September 2025 Feature",
    outlet: "EcoTone Magazine",
    type: "Magazine Feature",
    date: "Sept 2025",
    href: "https://www.flipsnack.com/ecotone/ecotone-sept-2025-v45-no3/full-view.html?utm_medium=email&utm_source=raisely&utm_content=September%202025%20Newsletter%20&utm_term=1654a398-f311-419b-85c6-9da612352829",
    description: "Feature highlighting conservation technology and community-led mapping initiatives in coastal habitats.",
    image: "/assets/img/press/ecotone.svg",
    alt: "EcoTone Magazine wordmark",
  },
  {
    title: "Activating Data for Impact (Webinar)",
    outlet: "DiUS",
    type: "Webinar",
    date: "Aug 2025",
    href: "https://www.youtube.com/watch?v=1Bazlu-PWIg",
    description: "Panel discussion on unlocking latent organisational data for measurable social and environmental outcomes.",
    image: "/assets/img/press/dius-webinar.svg",
    alt: "DiUS webinar placeholder graphic",
  },
  {
    title: "Mapping Key to Mission",
  outlet: "The Cassowary Coast Observer",
    type: "News Article",
    date: "Oct 2025",
    href: "https://www.observernews.com.au/mapping-key-to-mission-2025-10-11",
    description: "Local news coverage of cassowary habitat mapping informing on-ground conservation decisions.",
    image: "/assets/img/press/cc-observer.svg",
  alt: "The Cassowary Coast Observer masthead",
  },
];
