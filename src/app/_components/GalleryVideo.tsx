"use client";

interface GalleryVideoProps {
  src: string;
  alt: string;
}

export default function GalleryVideo({ src, alt }: GalleryVideoProps) {
  return (
		<video
			src={src}
			width={800}
			height={450}
			className="h-[45vh] w-auto object-cover shadow-md transition-transform duration-300 ease-in-out hover:scale-102"
			muted
			loop
			playsInline
			aria-label={alt}
			onMouseEnter={e => e.currentTarget.play()}
			onMouseLeave={e => { e.currentTarget.pause(); e.currentTarget.currentTime = 0; }}
		>
			Sorry, your browser does not support embedded videos.
		</video>
  );
}
