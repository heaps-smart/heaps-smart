"use client";

import React, { useEffect, useRef, useCallback } from "react";
import * as THREE from "three";
import { ImprovedNoise } from "three/addons/math/ImprovedNoise.js";

const TERRAIN_BASE_COLOR = { r: 255, g: 210, b: 210 };
const FOG_COLOR = 0xf4e4d0;
const FOG_DENSITY = 0.00029;
const TERRAIN_WIDTH = 128;
const TERRAIN_HEIGHT = 128;
const TERRAIN_SIZE = 11000;
const HEIGHT_MULTIPLIER = 75;
const LOOP_DISTANCE = 4000;

function generateHeight(width: number, height: number, seedZ: number): Float32Array {
  const size = width * height;
  const data = new Float32Array(size);
  const perlin = new ImprovedNoise();
  let quality = 1;

  for (let j = 0; j < 3; j++) {
    for (let i = 0; i < size; i++) {
      const x = i % width;
      const y = ~~(i / width);
      const noise = perlin.noise(x / quality, y / quality, seedZ);
      const adjusted = Math.pow(Math.abs(noise), 1.2);
      data[i] += adjusted * quality * 0.9;
    }
    quality *= 4;
  }

  for (let i = 0; i < size; i++) {
    data[i] *= 0.75;
    if (data[i] > 10) data[i] += Math.random() * 6;
  }

  return data;
}

function generateTexture(data: Float32Array, width: number, height: number): HTMLCanvasElement {
  const sun = new THREE.Vector3(1, 1, 0.5).normalize();
  const canvas = document.createElement("canvas");
  canvas.width = 512;
  canvas.height = 512;
  const context = canvas.getContext("2d");
  if (!context) throw new Error("Failed to get canvas context");

  const image = context.getImageData(0, 0, canvas.width, canvas.height);
  const imageData = image.data;
  const vector3 = new THREE.Vector3();

  for (let i = 0, j = 0; i < imageData.length; i += 4, j++) {
    const dx = data[j - 2] - data[j + 2] || 0;
    const dz = data[j - width * 2] - data[j + width * 2] || 0;
    vector3.set(dx, 2, dz).normalize();
    const shade = Math.max(0.3, vector3.dot(sun));
    const elevation = data[j];
    const scale = 0.5 + elevation * 0.02;
    imageData[i] = Math.min(255, (TERRAIN_BASE_COLOR.r + shade * 70) * scale);
    imageData[i + 1] = Math.min(255, (TERRAIN_BASE_COLOR.g + shade * 40) * scale);
    imageData[i + 2] = Math.min(255, (TERRAIN_BASE_COLOR.b + shade * 30) * scale);
    imageData[i + 3] = 255;
  }

  context.putImageData(image, 0, 0);
  return canvas;
}

function createTerrainMesh(
  data: Float32Array,
  width: number,
  height: number,
  size: number,
  heightMultiplier: number,
  texture: HTMLCanvasElement
): THREE.Mesh {
  const geometry = new THREE.PlaneGeometry(size, size, width - 1, height - 1);
  geometry.rotateX(-Math.PI / 2);
  const vertices = geometry.attributes.position.array as Float32Array;
  for (let i = 0, j = 0; i < data.length; i++, j += 3) {
    vertices[j + 1] = data[i] * heightMultiplier;
  }
  const material = new THREE.MeshPhongMaterial({
    map: new THREE.CanvasTexture(texture),
    emissive: new THREE.Color(0x221111),
    shininess: 12,
    specular: new THREE.Color(0x222222),
  });
  return new THREE.Mesh(geometry, material);
}

interface SceneInitResult {
  scene: THREE.Scene;
  camera: THREE.PerspectiveCamera;
  renderer: THREE.WebGLRenderer;
}

function initScene(container: HTMLDivElement): SceneInitResult {
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(FOG_COLOR);
  scene.fog = new THREE.FogExp2(FOG_COLOR, FOG_DENSITY);

  const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 10000);
  camera.position.set(-1000, 500, -1800);
  camera.lookAt(0, 0, 500);

  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  container.appendChild(renderer.domElement);

  const dirLight = new THREE.DirectionalLight(0xfff8f0, 1.4);
  dirLight.position.set(1, 1, 1);
  scene.add(dirLight);
  scene.add(new THREE.AmbientLight(0xffffff, 0.5));

  return { scene, camera, renderer };
}

function startAnimationLoop(
  scene: THREE.Scene,
  camera: THREE.PerspectiveCamera,
  renderer: THREE.WebGLRenderer
): () => void {
  const clock = new THREE.Clock();
  let cameraTravel = 0;
  let animationFrameId: number;

  const animate = () => {
    const delta = clock.getDelta();
    const move = delta * 60;
    camera.position.z += move;
    cameraTravel += move;
    if (cameraTravel > LOOP_DISTANCE) {
      camera.position.z -= LOOP_DISTANCE;
      cameraTravel = 0;
    }
    renderer.render(scene, camera);
    animationFrameId = requestAnimationFrame(animate);
  };

  animate();
  return () => cancelAnimationFrame(animationFrameId);
}

export default function TerrainBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);

  const handleResize = useCallback(() => {
    if (!cameraRef.current || !rendererRef.current) return;
    cameraRef.current.aspect = window.innerWidth / window.innerHeight;
    cameraRef.current.updateProjectionMatrix();
    rendererRef.current.setSize(window.innerWidth, window.innerHeight);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const { scene, camera, renderer } = initScene(container);
    sceneRef.current = scene;
    cameraRef.current = camera;
    rendererRef.current = renderer;

    const data = generateHeight(TERRAIN_WIDTH, TERRAIN_HEIGHT, Math.random() * 100);
    const bgData = generateHeight(TERRAIN_WIDTH, TERRAIN_HEIGHT, Math.random() * 100);

    const texture = generateTexture(data, TERRAIN_WIDTH, TERRAIN_HEIGHT);
    const fgMesh = createTerrainMesh(data, TERRAIN_WIDTH, TERRAIN_HEIGHT, TERRAIN_SIZE, HEIGHT_MULTIPLIER, texture);
    scene.add(fgMesh);

    const bgTexture = generateTexture(bgData, TERRAIN_WIDTH, TERRAIN_HEIGHT);
    const bgMesh = createTerrainMesh(bgData, TERRAIN_WIDTH, TERRAIN_HEIGHT, TERRAIN_SIZE, HEIGHT_MULTIPLIER * 0.6, bgTexture);
    
    if (bgMesh.material instanceof THREE.Material) {
      bgMesh.material.opacity = 0.4;
      bgMesh.material.transparent = true;
      bgMesh.material.depthWrite = false;
    }
    bgMesh.position.set(0, -20, 3000);
    bgMesh.scale.set(1.4, 1, 1.4);
    scene.add(bgMesh);

    const stop = startAnimationLoop(scene, camera, renderer);
    window.addEventListener("resize", handleResize);

    return () => {
      stop();
      window.removeEventListener("resize", handleResize);
      if (rendererRef.current) {
        rendererRef.current.dispose();
      }
      if (fgMesh.geometry) {
        fgMesh.geometry.dispose();
      }
      if (fgMesh.material instanceof THREE.Material) {
        fgMesh.material.dispose();
      }
      if (bgMesh.geometry) {
        bgMesh.geometry.dispose();
      }
      if (bgMesh.material instanceof THREE.Material) {
        bgMesh.material.dispose();
      }
    };
  }, [handleResize]);

  return <div ref={containerRef} className="absolute inset-0 w-full h-full z-0" />;
}
