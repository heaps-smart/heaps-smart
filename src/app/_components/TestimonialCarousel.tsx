"use client";

import { useState } from "react";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
}

export default function TestimonialCarousel({ testimonials }: TestimonialCarouselProps) {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right, 0 for initial
  
  const nextTestimonial = () => {
    setDirection(1);
    setCurrentTestimonial((prev) => 
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };
  
  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentTestimonial((prev) => 
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const goToTestimonial = (index: number) => {
    setDirection(index > currentTestimonial ? 1 : -1);
    setCurrentTestimonial(index);
  };

  return (
    <div className="relative flex items-center">
      <button 
        onClick={prevTestimonial}
        className="absolute left-0 sm:left-2 z-10 p-2 sm:p-3 rounded-full bg-white/80 hover:bg-white transition-colors shadow-md"
        aria-label="Previous testimonial"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <div className="w-full overflow-hidden px-8 sm:px-12">
        <div className="min-h-[350px] sm:min-h-[300px] flex items-center justify-center">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className={`w-full transition-all duration-500 ease-in-out absolute ${
                index === currentTestimonial 
                  ? "opacity-100 translate-x-0" 
                  : index < currentTestimonial || (currentTestimonial === 0 && index === testimonials.length - 1)
                    ? "opacity-0 -translate-x-full" 
                    : "opacity-0 translate-x-full"
              }`}
              style={{
                transform: `translateX(${index === currentTestimonial 
                  ? 0 
                  : direction === 1 && index === ((currentTestimonial - 1 + testimonials.length) % testimonials.length)
                    ? '-100%' 
                    : direction === -1 && index === ((currentTestimonial + 1) % testimonials.length)
                      ? '100%'
                      : index < currentTestimonial ? '-100%' : '100%'
                })`
              }}
            >
              <div className="p-4 sm:p-8 pb-12 sm:pb-16 max-w-3xl mx-auto">
                <blockquote className="relative">
                  <p className="text-lg sm:text-xl md:text-2xl leading-relaxed tracking-tight font-light text-gray-800">
                    {testimonial.quote}
                  </p>
                  <div className="mt-4 sm:mt-6">
                    <p className="font-semibold text-base sm:text-lg">{testimonial.name}</p>
                    <p className="text-xs sm:text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </blockquote>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <button 
        onClick={nextTestimonial}
        className="absolute right-0 sm:right-2 z-10 p-2 sm:p-3 rounded-full bg-white/80 hover:bg-white transition-colors shadow-md"
        aria-label="Next testimonial"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
      
      <div className="absolute -bottom-4 sm:-bottom-8 left-0 right-0 flex justify-center space-x-3 pb-2 sm:pb-4">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => goToTestimonial(index)}
            className={`w-2 h-2 sm:w-2 sm:h-2 rounded-full transition-colors ${
              index === currentTestimonial ? "bg-gray-800" : "bg-gray-300"
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
