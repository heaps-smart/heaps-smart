"use client";

import { useEffect, useState } from 'react';

const taglines = [
  "Technology for Campers",
  "Technology for Cassowaries",
  "Technology for Bananas"
];

const HeroBanner = () => {
  const [currentTagline, setCurrentTagline] = useState(taglines[0]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTagline(prevTagline => {
        const currentIndex = taglines.indexOf(prevTagline);
        const nextIndex = (currentIndex + 1) % taglines.length;
        return taglines[nextIndex];
      });
    }, 4000); // Change every 4 seconds

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, []);

  return (
    <div style={styles.heroBanner}>
      <h1 style={styles.tagline}>{currentTagline}</h1>
    </div>
  );
};

const styles = {
  heroBanner: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#282c34',
    color: 'white',
    textAlign: 'center',
  },
  tagline: {
    fontSize: '3rem',
    opacity: 0,
    transition: 'opacity 1s ease-in-out',
    animation: 'fadeIn 4s infinite'
  },
};

export default HeroBanner;
