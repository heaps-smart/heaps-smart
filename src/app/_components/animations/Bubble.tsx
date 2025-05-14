"use client";

import { useEffect, useRef, useState } from "react";
import * as d3 from "d3";

type BubbleDatum = {
  id: number;
  radius: number;
  side: "left" | "right";
  x: number;
  y: number;
  vx?: number;
  vy?: number;
  jitterOffset: number;
};

export default function BubbleGroupsCanvas() {
  const ref = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 500, height: 200 });
  const mouseRef = useRef<{ x: number; y: number } | null>(null);
  const groupedRef = useRef(false);

  useEffect(() => {
    const resize = () => {
      const container = containerRef.current;
      if (container) {
        const rect = container.getBoundingClientRect();
        setDimensions({ width: rect.width, height: rect.width * 0.3 });
      }
    };

    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  useEffect(() => {
    const { width, height } = dimensions;
    const center = { x: width / 2, y: height / 2 };
    const radiusBase = 4;
    const jitterAmplitude = 0.4;
    const jitterFrequency = 0.009;
    const repelRadius = 80;
    const repelStrength = 0.1;

    const nodes: BubbleDatum[] = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      radius: radiusBase,
      side: Math.random() < 0.35 ? "left" : "right",
      x: center.x + (Math.random() - 0.5) * 100,
      y: center.y + (Math.random() - 0.5) * 100,
      jitterOffset: Math.random() * 1000,
    }));

    const svg = d3.select(ref.current);
    svg.selectAll("*").remove();
    svg
      .attr("viewBox", `0 0 ${width} ${height}`)
      .attr("preserveAspectRatio", "xMidYMid meet");

    const bubbles = svg
      .selectAll<SVGCircleElement, BubbleDatum>("circle")
      .data(nodes, (d) => d.id)
      .enter()
      .append("circle")
      .attr("r", (d) => d.radius)
      .attr("fill", (d) =>
        d.side === "left" ? `hsl(10, 10%, 60%)` : `hsl(10, 10%, 70%)`
      );

    const simulation = d3
      .forceSimulation<BubbleDatum>(nodes)
      .velocityDecay(0.25)
      .force(
        "x",
        d3
          .forceX<BubbleDatum>()
          .strength(0.06)
          .x((d) => (d.side === "left" ? width * 0.3 : width * 0.7))
      )
      .force("y", d3.forceY<BubbleDatum>().strength(0.06).y(center.y))
      .force("charge", d3.forceManyBody<BubbleDatum>().strength(-3));

    function updatePositions() {
      const now = Date.now();

      bubbles
        .attr("cx", (d) => {
          const jitterX =
            Math.sin(now * jitterFrequency + d.jitterOffset) * jitterAmplitude;

          const mouse = mouseRef.current;
          let repelX = 0;
          if (mouse) {
            const dx = d.x - mouse.x;
            const dy = d.y - mouse.y;
            const distSq = dx * dx + dy * dy;
            const maxDistSq = repelRadius * repelRadius;
            if (distSq < maxDistSq && distSq > 0.1) {
              const strength = repelStrength * (1 - distSq / maxDistSq);
              repelX = (dx / Math.sqrt(distSq)) * strength;
            }
          }

          return d.x + jitterX + repelX;
        })
        .attr("cy", (d) => {
          const jitterY =
            Math.cos(now * jitterFrequency + d.jitterOffset) * jitterAmplitude;

          const mouse = mouseRef.current;
          let repelY = 0;
          if (mouse) {
            const dx = d.x - mouse.x;
            const dy = d.y - mouse.y;
            const distSq = dx * dx + dy * dy;
            const maxDistSq = repelRadius * repelRadius;
            if (distSq < maxDistSq && distSq > 0.1) {
              const strength = repelStrength * (1 - distSq / maxDistSq);
              repelY = (dy / Math.sqrt(distSq)) * strength;
            }
          }

          return d.y + jitterY + repelY;
        });
    }

    const animationLoop = d3.timer(() => {
      updatePositions();
    });

    function groupBubbles() {
      groupedRef.current = true;
      simulation.force("x", d3.forceX<BubbleDatum>().strength(0.06).x(center.x));
      simulation.alpha(1).restart();
    }

    function splitBubbles() {
      groupedRef.current = false;
      simulation
        .force(
          "x",
          d3
            .forceX<BubbleDatum>()
            .strength(0.06)
            .x((d) => (d.side === "left" ? width * 0.3 : width * 0.7))
        )
        .alpha(1)
        .restart();
    }

    svg.on("mousemove", function (event) {
      const [mouseX, mouseY] = d3.pointer(event);
      mouseRef.current = { x: mouseX, y: mouseY };

      const normX = mouseX / width;

      bubbles.attr("fill", (d) => {
        const base = d.side === "left" ? 60 : 70;
        const shift = normX * 3;
        return `hsl(10, 10%, ${base + shift}%)`;
      });

      const shouldBeGrouped = mouseX < width / 2;
      if (shouldBeGrouped !== groupedRef.current) {
        shouldBeGrouped ? groupBubbles() : splitBubbles();
      }
    });

    svg.on("mouseleave", () => {
      mouseRef.current = null;
    });

    splitBubbles();
    const timeout = setTimeout(() => {
      if (!groupedRef.current) groupBubbles();
    }, 5000);

    return () => {
      clearTimeout(timeout);
      simulation.stop();
      animationLoop.stop();
    };
  }, [dimensions]);

  return (
    <div
      ref={containerRef}
      className="w-full max-w-[500px] mx-auto px-4 md:px-0 md:mr-0"
    >
      <svg ref={ref} className="w-full h-auto aspect-[5/2]" />
    </div>
  );
}
