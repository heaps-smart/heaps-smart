"use client";

interface CTAProps {
  heading: string;
}

export function CTA({ heading }: CTAProps) {
  return (
    <div className="text-center py-16 md:py-8 mb-16">
      <h3 id="get-started-section" className="text-3xl font-bold mb-6 tracking-tight">
        {heading}
      </h3>
      <a
        href="/contact"
        className="inline-block px-6 py-3 bg-[#fcd34d] hover:bg-[#fcbb1e] text-black font-medium rounded-lg transition-colors focus:outline-none"
        aria-label="Schedule a call with Heaps Smart"
      >
        Schedule a time for a chat →
      </a>
    </div>
  );
}