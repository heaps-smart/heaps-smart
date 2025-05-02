"use client";

interface CTAProps {
  heading: string;
}

export function CTA({ heading }: CTAProps) {
  return (
    <div className="text-center py-10 md:py-16">
      <h3 id="get-started-section" className="text-3xl font-bold mb-6 tracking-tight">
        {heading}
      </h3>
      <a
        href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ3wJdTJq1eTmlBTwyP3ky18tYx7V5A18jD5WVDaRklGIV0U38AReUQGrZoBWUrijhjUDjgEY5QR?gv=true"
        className="inline-block px-6 py-3 bg-[#fcd34d] hover:bg-[#fcbb1e] text-black font-medium rounded-lg transition-colors focus:outline-none"
        aria-label="Schedule a call with Heaps Smart"
        target="_blank"
        rel="noopener noreferrer"
      >
        Schedule a call →
      </a>
    </div>
  );
}