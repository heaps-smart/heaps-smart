import React from 'react';

const CertificateIcon = () => {
	return (
		<svg width="80" height="80" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
			<g fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
				<rect x="15" y="20" width="50" height="40" rx="4" />
				
				<line x1="22" y1="28" x2="58" y2="28" />
				<line x1="22" y1="36" x2="58" y2="36" />
				<line x1="22" y1="44" x2="42" y2="44" />
				
				<circle cx="58" cy="44" r="4" />
				<path d="M56,48l-2,6l4-2l4,2l-2-6" />
			</g>
		</svg>
	);
};

export default CertificateIcon;
