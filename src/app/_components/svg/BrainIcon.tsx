import React from 'react';

const BrainIcon = () => {
  return (
    <svg width="80" height="80" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
      <g fill="none" stroke="#4A90E2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        {/* Left brain hemisphere */}
        <path d="M30,32c-3.3,0-6,2.7-6,6c0,1.8,0.8,3.4,2,4.5" />
        <path d="M30,48c-2.2,0-4,1.8-4,4s1.8,4,4,4c1.1,0,2.1-0.4,2.8-1.2" />
        <path d="M26,38c-3.3,0-6,2.7-6,6c0,2.3,1.3,4.3,3.2,5.3" />
        <path d="M36,26c-2.2,0-4,1.8-4,4c0,1.7,1,3.1,2.5,3.7" />
        <path d="M40,50c-1.1,0-2,0.9-2,2c0,1.1,0.9,2,2,2" />
        
        {/* Right brain hemisphere */}
        <path d="M50,32c3.3,0,6,2.7,6,6c0,1.8-0.8,3.4-2,4.5" />
        <path d="M50,48c2.2,0,4,1.8,4,4s-1.8,4-4,4c-1.1,0-2.1-0.4-2.8-1.2" />
        <path d="M54,38c3.3,0,6,2.7,6,6c0,2.3-1.3,4.3-3.2,5.3" />
        <path d="M44,26c2.2,0,4,1.8,4,4c0,1.7-1,3.1-2.5,3.7" />
        <path d="M40,50c1.1,0,2,0.9,2,2c0,1.1-0.9,2-2,2" />
        
        {/* Connecting structures */}
        <path d="M40,24v4" />
        <path d="M34,30h12" />
        <path d="M28,38h24" />
        <path d="M32,46h16" />
        <path d="M36,54h8" />
        
        {/* Brain outline */}
        <path d="M40,20c-11,0-20,9-20,20c0,11,9,20,20,20s20-9,20-20C60,29,51,20,40,20z" />
      </g>
    </svg>
  );
};

export default BrainIcon;
