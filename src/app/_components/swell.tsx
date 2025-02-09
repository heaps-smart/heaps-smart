export default function SwellCSS({ dark }: { dark?: boolean }) {
  return (
    <div className="relative w-full h-[40px] overflow-hidden" aria-hidden="true">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 40"
        preserveAspectRatio="none"
        className="w-full h-full swell"
      >
        <path
          fill="none"
          stroke={dark ? "black" : "url(#gradient)"}
          strokeWidth={1}
          d="M0,20 C120,10 240,30 360,20 C480,10 600,30 720,20 C840,10 960,30 1080,20 C1200,10 1320,30 1440,20"
        />
        {!dark && (
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0077be" />
              <stop offset="50%" stopColor="#00bfa6" />
              <stop offset="100%" stopColor="#87d4f5" />
            </linearGradient>
          </defs>
        )}
      </svg>
    </div>
  );
}
