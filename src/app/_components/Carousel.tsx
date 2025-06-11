"use client";

import { useState } from "react";

interface Card {
  title: string;
  description: string;
  tags: string;
}

interface CarouselProps {
  cards: Card[];
}

const Carousel: React.FC<CarouselProps> = ({ cards }) => {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const visibleCards = 3;
  const maxIndex = cards.length - visibleCards;
  const handlePrev = () => setCarouselIndex((i) => Math.max(i - 1, 0));
  const handleNext = () => setCarouselIndex((i) => Math.min(i + 1, maxIndex));

  return (
    <div className="relative max-w-full">
      <div className="overflow-x-hidden">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${carouselIndex * 360}px)` }}
        >
          {cards.map((item, index) => (
            <div
              key={index}
              className="w-[340px] max-w-xs bg-[#181818] p-6 rounded-lg shadow-md border border-[#222] flex flex-col justify-between mx-2 first:ml-0 last:mr-0"
              style={{ minWidth: 340, marginRight: index === cards.length - 1 ? 0 : 24 }}
            >
              <div>
                <h4 className="text-lg font-bold mb-2 text-white">{item.title}</h4>
                <p className="text-white text-base mb-2">{item.description}</p>
              </div>
              <p className="text-xs text-[#fcd34d] font-semibold mt-2">Tags: {item.tags}</p>
            </div>
          ))}
        </div>
      </div>
      <button
        className="absolute left-0 top-1/2 -translate-y-1/2 p-2 bg-[#222] text-white rounded-full border border-[#444] hover:bg-[#333] focus:outline-none shadow z-10"
        aria-label="Previous slide"
        onClick={handlePrev}
        disabled={carouselIndex === 0}
        style={{ opacity: carouselIndex === 0 ? 0.4 : 1 }}
      >
        <span className="text-xl">◀</span>
      </button>
      <button
        className="absolute right-0 top-1/2 -translate-y-1/2 p-2 bg-[#222] text-white rounded-full border border-[#444] hover:bg-[#333] focus:outline-none shadow z-10"
        aria-label="Next slide"
        onClick={handleNext}
        disabled={carouselIndex === maxIndex}
        style={{ opacity: carouselIndex === maxIndex ? 0.4 : 1 }}
      >
        <span className="text-xl">▶</span>
      </button>
    </div>
  );
};

export default Carousel;