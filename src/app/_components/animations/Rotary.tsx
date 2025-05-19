"use client";

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Draggable } from 'gsap/dist/Draggable';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(Draggable);
}

export default function Rotary() {
	const circleRef = useRef<HTMLDivElement>(null);
	const spinRef = useRef<gsap.core.Timeline | null>(null);
	
	// Updated image URLs with flat SVG icons related to "training"
	const imageURLs = [
		"data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22%234A5568%22%20width%3D%2232px%22%20height%3D%2232px%22%3E%3Cpath%20d%3D%22M18%202H6c-1.1%200-2%20.9-2%202v16c0%201.1.9%202%202%202h12c1.1%200%202-.9%202-2V4c0-1.1-.9-2-2-2zM6%204h5v8l-2.5-1.5L6%2012V4z%22%2F%3E%3C%2Fsvg%3E",
		"data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22%234A5568%22%20width%3D%2232px%22%20height%3D%2232px%22%3E%3Cpath%20d%3D%22M3.5%2018.49l6-6.01%204%204L22%206.92l-1.41-1.41-7.09%207.97-4-4L2%2016.99l1.5%201.5z%22%2F%3E%3C%2Fsvg%3E",
		"data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22%234A5568%22%20width%3D%2232px%22%20height%3D%2232px%22%3E%3Cpath%20d%3D%22M5%2013.18v4L12%2021l7-3.82v-4L12%2017l-7-3.82zM12%203L1%209l11%206%209-4.91V17h2V9L12%203z%22%2F%3E%3C%2Fsvg%3E"
	];
	
	useEffect(() => {
		if (!circleRef.current) return;
		
		const circle = circleRef.current;
		
		function placeImages() {
			const angleIncrement = Math.PI * 2 / imageURLs.length;
			const radius = circle.offsetWidth / 2;
			const images: HTMLImageElement[] = [];
			
			for (let i = 0; i < imageURLs.length; i++) {
				const image = new Image();
				images.push(image);
				circle.appendChild(image);
				const angle = angleIncrement * i;
				
				gsap.set(image, {
					attr: { src: imageURLs[i] },
					position: "absolute",
					top: 0,
					left: 0,
					xPercent: -50,
					yPercent: -50,
					transformOrigin: "50% 50%",
					x: radius + Math.cos(angle) * radius,
					y: radius + Math.sin(angle) * radius
				});
			}
			return images;
		}
		
		const images = placeImages();
		const spin = gsap.timeline({
			repeat: -1, 
			defaults: { duration: 40, ease: "none" }
		});
		
		spin.to(circle, { rotation: 360 })
				.to(images, { rotation: -360 }, 0);
		
		spinRef.current = spin;
		
		// Create draggable with enhanced bidirectional support
		Draggable.create(circle, {
			type: 'rotation',
			inertia: true,
			throwResistance: 0.5, // Slightly increased for better control
			onPressInit: () => {
				// When interaction starts, pause the auto-rotation
				spin.pause();
			},
			onDrag: function() {
				// Handle drag in any direction by updating timeline progress
				const angle = (this.rotation % 360 + 360) % 360; // Normalize angle between 0-360
				spin.progress(angle / 360);
			},
			onThrowUpdate: function() {
				// Same for throw updates - handle any direction
				const angle = (this.rotation % 360 + 360) % 360;
				spin.progress(angle / 360);
			},
			onThrowComplete: function() {
				try {
					// Store final rotation for smooth transition
					const finalRotation = this.rotation;
					const normalizedAngle = (finalRotation % 360 + 360) % 360;
					
					// Set timeline to current position before resuming
					spin.progress(normalizedAngle / 360);
					
					// Resume auto-rotation with smooth transition
					gsap.to(spin, {
						timeScale: 1,
						duration: 1.5,
						ease: "power2.inOut",
						onStart: () => { spin.resume(); }
					});
				} catch (error) {
					// Failsafe - always resume animation even if there was an error
					console.warn("Error in rotation handling, resuming animation", error);
					spin.resume();
				}
			}
		});
		
		// Ensure animation resumes if user interacts and leaves without completing a throw
		circle.addEventListener('mouseleave', () => {
			if (spin.paused()) {
				const currentAngle = (gsap.getProperty(circle, "rotation") as number % 360 + 360) % 360;
				spin.progress(currentAngle / 360);
				spin.resume();
			}
		});
		
		// Cleanup on unmount
		return () => {
			spin.kill();
			const draggable = Draggable.get(circle);
			if (draggable) draggable.kill();
			
			while (circle.firstChild) {
				circle.removeChild(circle.firstChild);
			}
		};
	}, [imageURLs]);

	return (
		<div 
			className="rotary-container" 
			style={{ 
				position: 'relative', 
				width: '100%', 
				height: '400px', 
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center'
			}}
		>
			<div 
				ref={circleRef} 
				className="main-circle"
				style={{ 
					position: 'relative',
					width: '300px',
					height: '300px',
					backgroundColor: '#f4f1eb',
					border: '1px solid #e0e0e0',
					boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
					borderRadius: '50%',
					cursor: 'grab'
				}}
			/>
		</div>
	);
}

