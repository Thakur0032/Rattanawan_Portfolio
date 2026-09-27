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

    // Deep luxury dark navy and Tiffany Blue ambient tones
    const colors = [
      [2, 12, 27],     // Deep navy (#020C1B)
      [80, 200, 198],  // Tiffany Blue (#50C8C6)
      [10, 25, 47],    // Elevated dark navy (#0A192F)
      [17, 34, 64]     // Card navy (#112240)
    ];

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 0.003;

      // Base background fill
      ctx.fillStyle = "#020C1B";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Subtle ambient moving orbs
      const drawOrb = (xBase: number, yBase: number, radius: number, r: number, g: number, b: number, speed: number, offset: number, opacity: number) => {
        const x = xBase + Math.sin(time * speed + offset) * 120;
        const y = yBase + Math.cos(time * speed + offset) * 120;
        
        const rg = ctx.createRadialGradient(x, y, 0, x, y, radius);
        rg.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${opacity})`);
        rg.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);
        
        ctx.fillStyle = rg;
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fill();
      };

      // Soft Tiffany blue glow in top corner
      drawOrb(canvas.width * 0.25, canvas.height * 0.2, 500, colors[1][0], colors[1][1], colors[1][2], 0.3, 0, 0.04);
      // Soft deep navy glow
      drawOrb(canvas.width * 0.8, canvas.height * 0.7, 600, colors[3][0], colors[3][1], colors[3][2], 0.2, Math.PI, 0.15);
      // Subtle center glow
      drawOrb(canvas.width * 0.5, canvas.height * 0.4, 550, colors[1][0], colors[1][1], colors[1][2], 0.15, Math.PI / 2, 0.03);

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
