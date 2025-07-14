import React from 'react';

interface YellowBulletProps {
  className?: string;
}

export default function YellowBullet({ className = '' }: YellowBulletProps) {
  return (
    <div className={`w-5 h-5 mr-3 text-[#fcd34d] transition-colors ${className}`}>
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10z"/>
      </svg>
    </div>
  );
}
