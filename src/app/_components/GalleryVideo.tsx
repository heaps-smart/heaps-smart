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
			className="h-[45vh] w-auto object-cover shadow-md"
			muted
			loop
			autoPlay
			playsInline
			aria-label={alt}
		/>
  );
}
