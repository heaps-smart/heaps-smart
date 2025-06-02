"use client";

import React, { useRef, useState, useEffect } from "react";

interface ResponsiveVideoProps {
  src: string;
  poster?: string;
  className?: string;
}

export default function ResponsiveVideo({ src, poster, className = "" }: ResponsiveVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.load();
    setIsLoaded(true);

    const playVideo = () => {
      if (video && isLoaded) {
        const playPromise = video.play();

        if (playPromise !== undefined) {
          playPromise.catch((err) => {
            setError("Video playback prevented. Please ensure your browser allows autoplay.");
            console.error("Video playback prevented:", err);
          });
        }
      }
    };

    video.addEventListener("loadedmetadata", playVideo);

    return () => {
      video.removeEventListener("loadedmetadata", playVideo);
      video.pause();
    };
  }, [isLoaded]);

  return (
    <div className="relative w-full h-full">
      <video
        ref={videoRef}
        className={className}
        muted
        playsInline
        autoPlay
        loop
        preload="metadata"
        poster={poster}
        tabIndex={-1}
      >
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );
}
