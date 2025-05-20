"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function TorusKnotCanvas() {
  const mountRef = useRef<HTMLDivElement>(null);

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

    // === Configurable Visual Parameters ===
    const pulseSpeed = 1.0;
    const waveFrequency = 1.5;

    const baseHue = 30 / 360; // Pale matte brown
    const baseSaturation = 0.10;
    const baseLightness = 0.70;

    const hoverHue = 180 / 360; // Pale matte teal
    const hoverSaturation = 0.15;
    const hoverLightness = 0.70;

    const pulseHue = 0.1; // Prevent overshooting into purple
    const pulseLightness = 0.06;
    const pulseSharpness = 0.12;

    const uniforms = {
      time: { value: 0 },
      pulseSpeed: { value: pulseSpeed },
      waveFrequency: { value: waveFrequency },
      hue: { value: baseHue },
      saturation: { value: baseSaturation },
      lightness: { value: baseLightness },
      hoverHue: { value: hoverHue },
      hoverSaturation: { value: hoverSaturation },
      hoverLightness: { value: hoverLightness },
      mixAmount: { value: 0.0 },
      pulseHue: { value: pulseHue },
      pulseLightness: { value: pulseLightness },
      pulseSharpness: { value: pulseSharpness },
    };

    const vertexShader = `
      varying vec3 vPosition;
      void main() {
        vPosition = position;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `;

    const fragmentShader = `
      uniform float time;
      uniform float pulseSpeed;
      uniform float waveFrequency;
      uniform float hue;
      uniform float saturation;
      uniform float lightness;
      uniform float hoverHue;
      uniform float hoverSaturation;
      uniform float hoverLightness;
      uniform float mixAmount;
      uniform float pulseHue;
      uniform float pulseLightness;
      uniform float pulseSharpness;

      varying vec3 vPosition;

      vec3 hsl2rgb(float h, float s, float l) {
        float c = (1.0 - abs(2.0 * l - 1.0)) * s;
        float x = c * (1.0 - abs(mod(h * 6.0, 2.0) - 1.0));
        float m = l - 0.5 * c;
        vec3 rgb;

        if (h < 1.0/6.0) rgb = vec3(c, x, 0.0);
        else if (h < 2.0/6.0) rgb = vec3(x, c, 0.0);
        else if (h < 3.0/6.0) rgb = vec3(0.0, c, x);
        else if (h < 4.0/6.0) rgb = vec3(0.0, x, c);
        else if (h < 5.0/6.0) rgb = vec3(x, 0.0, c);
        else rgb = vec3(c, 0.0, x);

        return rgb + vec3(m);
      }

      void main() {
        float finalHue = mix(hue, hoverHue, mixAmount);
        float finalSat = mix(saturation, hoverSaturation, mixAmount);
        float finalLight = mix(lightness, hoverLightness, mixAmount);

        // Travel along the shape
        float wave = sin(vPosition.y * waveFrequency - time * pulseSpeed) * 0.5 + 0.5;
        float pulse = mix(0.0, 1.0, smoothstep(0.5 - pulseSharpness, 0.5 + pulseSharpness, wave)) * mixAmount;

        finalLight += pulse * pulseLightness;
        finalHue += pulse * pulseHue;

        // Clamp to keep in teal range (prevent purple)
        finalHue = clamp(finalHue, 0.45, 0.6);

        vec3 colour = hsl2rgb(mod(finalHue, 1.0), finalSat, clamp(finalLight, 0.0, 1.0));
        gl_FragColor = vec4(colour, 1.0);
      }
    `;

    const material = new THREE.ShaderMaterial({
      uniforms,
      vertexShader,
      fragmentShader,
      wireframe: true,
    });

    const geometry = new THREE.TorusKnotGeometry(3.5, 1, 100, 12);
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    const mouse = { x: 0, y: 0 };
    let isHovered = false;
    let frameId: number;

    const initialRotationSpeed = 0.002;
    const tiltMultiplier = 0.02;
    const baseScale = 1;
    const scaleAmplitude = 0.05;
    const scaleSpeed = 0.5;
    const clock = new THREE.Clock();

    const animate = () => {
      frameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();
      uniforms.time.value = elapsedTime;

      const target = isHovered ? 1.0 : 0.0;
      const current = uniforms.mixAmount.value;
      uniforms.mixAmount.value += (target - current) * 0.05;

      const tiltX = isHovered ? mouse.y * tiltMultiplier : 0;
      const tiltY = isHovered ? mouse.x * tiltMultiplier : 0;
      mesh.rotation.x += initialRotationSpeed + tiltX;
      mesh.rotation.y += initialRotationSpeed + tiltY;

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
