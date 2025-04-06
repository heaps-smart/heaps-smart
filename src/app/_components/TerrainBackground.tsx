"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { ImprovedNoise } from "three/addons/math/ImprovedNoise.js";


function TerrainBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const FOG_COLOR = 0xf4e4d0;
  const FOG_DENSITY = 0.00029;
  const TERRAIN_WIDTH = 128;
  const TERRAIN_HEIGHT = 128;
  const TERRAIN_SIZE = 11000;
  const HEIGHT_MULTIPLIER = 75;
  const TERRAIN_BASE_COLOR = { r: 255, g: 185, b: 195 };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let camera: THREE.PerspectiveCamera;
    let scene: THREE.Scene;
    let renderer: THREE.WebGLRenderer;
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const generateHeight = (width: number, height: number): Float32Array => {
      const size = width * height;
      const data = new Float32Array(size);
      const perlin = new ImprovedNoise();
      const z = Math.random() * 100;
      let quality = 1;

      for (let j = 0; j < 3; j++) {
        for (let i = 0; i < size; i++) {
          const x = i % width;
          const y = ~~(i / width);
          const noise = perlin.noise(x / quality, y / quality, z);
          const adjusted = Math.pow(Math.abs(noise), 1.2);
          data[i] += adjusted * quality * 0.9;
        }
        quality *= 4;
      }

      for (let i = 0; i < size; i++) {
        data[i] *= 0.75;
        if (data[i] > 10) {
          data[i] += Math.random() * 6;
        }
      }

      return data;
    };

    const generateTexture = (data: Float32Array, width: number, height: number): HTMLCanvasElement => {
      const sun = new THREE.Vector3(1, 1, 1).normalize();
      const canvas = document.createElement("canvas");
      canvas.width = width;
      canvas.height = height;

      const context = canvas.getContext("2d");
      if (!context) throw new Error("Failed to get canvas context");

      const image = context.getImageData(0, 0, canvas.width, canvas.height);
      const imageData = image.data;
      const vector3 = new THREE.Vector3();

      for (let i = 0, j = 0; i < imageData.length; i += 4, j++) {
        const dx = data[j - 2] - data[j + 2] || 0;
        const dz = data[j - width * 2] - data[j + width * 2] || 0;

        vector3.set(dx, 2, dz).normalize();
        const shade = vector3.dot(sun);
        const elevation = data[j];
        const scale = 0.5 + elevation * 0.02;

        imageData[i] = Math.min(255, (TERRAIN_BASE_COLOR.r + shade * 50) * scale);
        imageData[i + 1] = Math.min(255, (TERRAIN_BASE_COLOR.g + shade * 20) * scale);
        imageData[i + 2] = Math.min(255, (TERRAIN_BASE_COLOR.b + shade * 10) * scale);
        imageData[i + 3] = 255;
      }

      context.putImageData(image, 0, 0);
      return canvas;
    };

    const data = generateHeight(TERRAIN_WIDTH, TERRAIN_HEIGHT);

    const init = () => {
      scene = new THREE.Scene();
      scene.background = new THREE.Color(FOG_COLOR);
      scene.fog = new THREE.FogExp2(FOG_COLOR, FOG_DENSITY);

      camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 10000);
      camera.position.set(-1000, 500, -1800);
      camera.lookAt(0, 0, 500);

      const geometry = new THREE.PlaneGeometry(
        TERRAIN_SIZE,
        TERRAIN_SIZE,
        TERRAIN_WIDTH - 1,
        TERRAIN_HEIGHT - 1
      );
      geometry.rotateX(-Math.PI / 2);

      const vertices = geometry.attributes.position.array as Float32Array;
      for (let i = 0, j = 0; i < data.length; i++, j += 3) {
        vertices[j + 1] = data[i] * HEIGHT_MULTIPLIER;
      }

      const texture = new THREE.CanvasTexture(generateTexture(data, TERRAIN_WIDTH, TERRAIN_HEIGHT));
      texture.wrapS = THREE.ClampToEdgeWrapping;
      texture.wrapT = THREE.ClampToEdgeWrapping;

      const foregroundMesh = new THREE.Mesh(
        geometry,
        new THREE.MeshPhongMaterial({ map: texture })
      );
      scene.add(foregroundMesh);

      const bgGeometry = geometry.clone();
      const bgVertices = bgGeometry.attributes.position.array as Float32Array;
      for (let i = 0, j = 0; i < data.length; i++, j += 3) {
        bgVertices[j + 1] = data[i] * (HEIGHT_MULTIPLIER * 0.6);
      }

      const bgTexture = texture.clone();
      const bgMaterial = new THREE.MeshPhongMaterial({
        map: bgTexture,
        opacity: 0.4,
        transparent: true,
        depthWrite: false,
      });

      const backgroundMesh = new THREE.Mesh(bgGeometry, bgMaterial);
      backgroundMesh.position.set(0, -20, 3000);
      backgroundMesh.scale.set(1.4, 1, 1.4);
      scene.add(backgroundMesh);

      const dirLight = new THREE.DirectionalLight(0xffffff, 1.2);
      dirLight.position.set(1, 1, 1);
      scene.add(dirLight);

      scene.add(new THREE.AmbientLight(0x888888));

      renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(window.innerWidth, window.innerHeight);
      container.appendChild(renderer.domElement);

      const handleResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      };

      window.addEventListener("resize", handleResize);
    };

    const animate = () => {
      const delta = clock.getDelta();
      camera.position.z += delta * 40;
      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    init();
    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", () => {});
      if (container) container.innerHTML = "";
    };
  }, []);

  return <div ref={containerRef} className="absolute inset-0 w-full h-full z-0" />;
}

export default TerrainBackground;
