"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function TorusKnotCanvas() {
  const mountRef = useRef<HTMLDivElement>(null);

	// Set up the canvas size and colors
  useEffect(() => {
    if (!mountRef.current) return;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color("#e8e4e1");

    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
    camera.position.z = 20;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    const canvasSize = 300;
    renderer.setSize(canvasSize, canvasSize);
    mountRef.current.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 1.0);
    scene.add(ambientLight);

    const hoverColor = new THREE.Color("hsl(10, 10%, 80%)");
    const baseColor = new THREE.Color("hsl(10, 15%, 87%)");
    const uniforms = { uColor: { value: baseColor.clone() } };

    const vertexShader = `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `;

    const fragmentShader = `
      uniform vec3 uColor;
      varying vec2 vUv;
      void main() {
        gl_FragColor = vec4(uColor, 1.0);
      }
    `;

    const material = new THREE.ShaderMaterial({
      uniforms,
      vertexShader,
      fragmentShader,
      wireframe: true,
    });

		// Create torus knot geometry
    const geometry = new THREE.TorusKnotGeometry(3.5, 1, 100, 12);
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    const mouse = { x: 0, y: 0 };
    let isHovered = false;
    let frameId: number;

    const initialRotationSpeed = 0.002;
    const tiltMultiplier = 0.02;
    const colorLerpFactor = 0.05;
    const baseScale = 1;
    const scaleAmplitude = 0.05;
    const scaleSpeed = 0.5;
    const clock = new THREE.Clock();

    const animate = () => {
      frameId = requestAnimationFrame(animate);

      // Calculate rotation with tilt 
      const tiltX = isHovered ? mouse.y * tiltMultiplier : 0;
      const tiltY = isHovered ? mouse.x * tiltMultiplier : 0;
      mesh.rotation.x += initialRotationSpeed + tiltX;
      mesh.rotation.y += initialRotationSpeed + tiltY;

      // Update color transition
      uniforms.uColor.value.lerp(isHovered ? hoverColor : baseColor, colorLerpFactor);

      // Scale oscillation based on elapsed time
      const elapsedTime = clock.getElapsedTime();
      const scale = baseScale + Math.sin(elapsedTime * scaleSpeed) * scaleAmplitude;
      mesh.scale.set(scale, scale, scale);

      renderer.render(scene, camera);
    };
    animate();

    const handlePointerMove = (event: PointerEvent) => {
      const rect = renderer.domElement.getBoundingClientRect();
      mouse.x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
      mouse.y = -((event.clientY - rect.top) / rect.height - 0.5) * 2;
    };

    const handlePointerEnter = () => { isHovered = true; };
    const handlePointerLeave = () => { isHovered = false; };

    renderer.domElement.addEventListener("pointermove", handlePointerMove);
    renderer.domElement.addEventListener("pointerenter", handlePointerEnter);
    renderer.domElement.addEventListener("pointerleave", handlePointerLeave);

    return () => {
      cancelAnimationFrame(frameId);
      renderer.domElement.removeEventListener("pointermove", handlePointerMove);
      renderer.domElement.removeEventListener("pointerenter", handlePointerEnter);
      renderer.domElement.removeEventListener("pointerleave", handlePointerLeave);
      if (mountRef.current?.contains(renderer.domElement)) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
      scene.clear();
    };
  }, []);

  return (
		<div
			ref={mountRef}
			className="w-full max-w-[300px] mx-auto aspect-square md:mr-0 md:ml-0"
		/>
	);
}
