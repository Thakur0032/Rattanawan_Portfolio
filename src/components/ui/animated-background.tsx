"use client";

import { useEffect, useRef } from "react";

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    // Soft, serene colors for the gradient
    const colors = [
      [255, 154, 139], // Soft peach
      [144, 201, 181], // Calming teal
      [255, 253, 240], // Warm white
      [227, 213, 202]  // Soft tan
    ];

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 0.005;

      const gradient = ctx.createLinearGradient(
        0, 0, 
        canvas.width, canvas.height
      );

      // Create a slowly shifting gradient
      const shift1 = Math.sin(time) * 0.2;
      const shift2 = Math.cos(time * 0.8) * 0.2;

      gradient.addColorStop(0, `rgba(${colors[0][0]}, ${colors[0][1]}, ${colors[0][2]}, 0.3)`);
      gradient.addColorStop(0.3 + shift1, `rgba(${colors[1][0]}, ${colors[1][1]}, ${colors[1][2]}, 0.3)`);
      gradient.addColorStop(0.7 + shift2, `rgba(${colors[2][0]}, ${colors[2][1]}, ${colors[2][2]}, 0.4)`);
      gradient.addColorStop(1, `rgba(${colors[3][0]}, ${colors[3][1]}, ${colors[3][2]}, 0.3)`);
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw large, soft, moving orbs
      const drawOrb = (xBase: number, yBase: number, radius: number, r: number, g: number, b: number, speed: number, offset: number) => {
        const x = xBase + Math.sin(time * speed + offset) * 200;
        const y = yBase + Math.cos(time * speed + offset) * 200;
        
        const rg = ctx.createRadialGradient(x, y, 0, x, y, radius);
        rg.addColorStop(0, `rgba(${r}, ${g}, ${b}, 0.15)`);
        rg.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);
        
        ctx.fillStyle = rg;
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fill();
      };

      drawOrb(canvas.width * 0.2, canvas.height * 0.2, 600, colors[1][0], colors[1][1], colors[1][2], 0.5, 0);
      drawOrb(canvas.width * 0.8, canvas.height * 0.8, 700, colors[0][0], colors[0][1], colors[0][2], 0.3, Math.PI);
      drawOrb(canvas.width * 0.5, canvas.height * 0.5, 800, colors[2][0], colors[2][1], colors[2][2], 0.2, Math.PI / 2);

      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener("resize", resize);
    resize();
    animate();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[-2]"
    />
  );
}
