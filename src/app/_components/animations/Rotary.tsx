"use client";

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Draggable } from 'gsap/dist/Draggable';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(Draggable);
}

const Rotary: React.FC = () => {
  const circleRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);
  
  // Image URLs for the rotating elements
  const imageURLs = [
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/flair-36.png",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/flair-25.png",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/flair-24.png"
  ];

  // Function to place images around the circle
  const placeImages = (circle: HTMLDivElement) => {
    const angleIncrement = Math.PI * 2 / imageURLs.length;
    const radius = circle.offsetWidth / 2;
    const images: HTMLImageElement[] = [];
    
    imageURLs.forEach((url, i) => {
      const image = new Image();
      images.push(image);
      circle.appendChild(image);
      
      const angle = angleIncrement * i;
      
      gsap.set(image, {
        attr: { src: url },
        position: "absolute", 
        top: 0, 
        left: 0, 
        xPercent: -50, 
        yPercent: -50,
        transformOrigin: "50% 50%",
        x: radius + Math.cos(angle) * radius,
        y: radius + Math.sin(angle) * radius
      });
    });
    
    return images;
  };

  useEffect(() => {
    // Make sure we're in browser environment and refs are available
    if (typeof window === 'undefined' || !circleRef.current) return;
    
    const circle = circleRef.current;
    const images = placeImages(circle);
    
    // Create the spinning animation
    const spin = gsap.timeline({
      repeat: -1, 
      defaults: { duration: 50, ease: "none" }
    });
    
    spin.to(circle, { rotation: 360 })
        .to(images, { rotation: -360 }, 0);
        
    timelineRef.current = spin;
    
    // Make the circle draggable
    Draggable.create(circle, {
      type: 'rotation',
      inertia: true,
      onPressInit: () => {
        if (timelineRef.current) timelineRef.current.pause();
      },
      onDrag: function() {
        // Additional drag behavior could be added here
      }
    });
    
    // Cleanup on unmount
    return () => {
      if (timelineRef.current) {
        timelineRef.current.kill();
      }
      
      // Kill any Draggable instances
      const draggable = Draggable.get(circle);
      if (draggable) draggable.kill();
      
      // Remove all images from the circle
      while (circle.firstChild) {
        circle.removeChild(circle.firstChild);
      }
    };
  }, []);

  return (
    <div className="rotary-container" style={{ position: 'relative', width: '100%', height: '400px', overflow: 'hidden' }}>
      <div 
        ref={circleRef} 
        className="main-circle" 
        style={{ 
          position: 'absolute', 
          top: '50%', 
          left: '50%',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          transform: 'translate(-50%, -50%)',
          cursor: 'grab'
        }}
      />
    </div>
  );
};

export default Rotary;
