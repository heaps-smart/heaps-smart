"use client";

import Image from "next/image";
import React from "react";

interface HoverImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

const HoverImage = ({ src, alt, width, height }: HoverImageProps) => {
  return (
    <div className="hover-image-container">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="hover-image"
      />
      <style jsx>{`
        .hover-image-container {
          display: inline-block;
          overflow: hidden;
        }

        .hover-image {
          filter: grayscale(100%);
          transition: filter 0.5s ease;
        }

        .hover-image-container:hover .hover-image {
          filter: grayscale(0%);
        }
      `}</style>
    </div>
  );
};

export default HoverImage;
