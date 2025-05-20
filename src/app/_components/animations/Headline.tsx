"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const rotatingWords = [
  "rainforests",
  "cassowaries",
  "oceans",
  "education",
  "queensland",
  "good",
];

export default function AnimatedHeadline() {
  const wordRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);
  const containerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1, paused: false, defaults: { ease: "power2.out", duration: 1.2 } });
    timelineRef.current = tl;

    wordRefs.current.forEach((word, i) => {
      if (!word) return;
      const delay = i * 2; // space out more
      const wordTL = gsap.timeline();

      if (i !== 0) {
        wordTL.fromTo(
          word,
          { yPercent: -100, opacity: 0 },
          { yPercent: 0, opacity: 1 }
        );
      } else {
        gsap.set(word, { yPercent: 0, opacity: 1 });
      }

      if (i !== wordRefs.current.length - 1) {
        wordTL.to(word, { yPercent: 100, opacity: 0 }, "+=1.8");
      }

      tl.add(wordTL, delay);
    });

    const node = containerRef.current;
    if (node) {
      node.addEventListener("mouseenter", () => tl.pause());
      node.addEventListener("mouseleave", () => tl.play());
    }

    return () => {
      tl.kill();
      if (node) {
        node.removeEventListener("mouseenter", () => tl.pause());
        node.removeEventListener("mouseleave", () => tl.play());
      }
    };
  }, []);

  return (
    <h1
      id="technology-for-good"
      className="text-4xl md:text-8xl font-sans font-bold mt-2 mb-2 tracking-tighter text-black/80"
    >
      Technology for
      <span
        ref={containerRef}
        className="ml-4 relative inline-block align-baseline h-[1.2em] w-auto"
      >
        {rotatingWords.map((word, i) => (
          <span
            key={i}
            ref={(el) => (wordRefs.current[i] = el)}
            className="absolute top-0 left-0 w-full block text-black/80"
            style={{ opacity: i === 0 ? 1 : 0, whiteSpace: "nowrap" }}
          >
            {word}
          </span>
        ))}
      </span>
    </h1>
  );
}
