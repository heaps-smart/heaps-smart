"use client";

import React, { useRef } from "react";

interface ResponsiveVideoProps {
  src: string;
  poster?: string;
  className?: string;
}

function isMobile() {
  if (typeof window === "undefined") return false;
  return /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

export default function ResponsiveVideo({ src, poster, className = "" }: ResponsiveVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  React.useEffect(() => {
    if (isMobile() && videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, []);

  const handlePlayDesktop = () => {
    if (!isMobile() && videoRef.current) {
      videoRef.current.play();
    }
  };

  const handlePauseDesktop = () => {
    if (!isMobile() && videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const handleClickMobile = () => {
    if (isMobile() && videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
    }
  };

  return (
    <video
      ref={videoRef}
      className={className}
      muted
      playsInline
      preload="none"
      poster={poster}
      onMouseEnter={handlePlayDesktop}
      onMouseLeave={handlePauseDesktop}
      onClick={handleClickMobile}
      tabIndex={isMobile() ? 0 : -1}
    >
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}
