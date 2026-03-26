"use client";

import { useEffect, useRef } from "react";

export default function BinaryRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const fontSize = 13;
    const columns = Math.floor(canvas.width / fontSize);

    // Each column tracks its drop position and speed
    const drops: { y: number; speed: number; chars: string[] }[] = Array.from(
      { length: columns },
      () => ({
        y: Math.random() * -100,
        speed: 0.3 + Math.random() * 0.7,
        chars: Array.from({ length: 40 }, () => (Math.random() > 0.5 ? "1" : "0")),
      })
    );

    const draw = () => {
      // Semi-transparent clear for trail effect
      ctx.fillStyle = "rgba(10, 10, 15, 0.06)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const drop = drops[i];
        const x = i * fontSize;
        const baseY = Math.floor(drop.y);

        // Draw a trail of characters with fading opacity
        const trailLength = 15;
        for (let t = 0; t < trailLength; t++) {
          const charIdx = (baseY - t + 1000) % drop.chars.length;
          const yPos = (baseY - t) * fontSize;

          if (yPos < 0 || yPos > canvas.height) continue;

          if (t === 0) {
            // Lead character — bright white-green
            ctx.fillStyle = "rgba(180, 255, 200, 0.9)";
          } else if (t < 3) {
            // Near-head — bright green
            ctx.fillStyle = `rgba(0, 255, 136, ${0.5 - t * 0.1})`;
          } else {
            // Trail — fading green
            const alpha = 0.25 * (1 - t / trailLength);
            ctx.fillStyle = `rgba(0, 255, 136, ${alpha})`;
          }

          // Occasionally mutate characters
          if (Math.random() > 0.98) {
            drop.chars[charIdx] = Math.random() > 0.5 ? "1" : "0";
          }

          ctx.fillText(drop.chars[charIdx], x, yPos);
        }

        drop.y += drop.speed;

        // Reset when off screen
        if (drop.y * fontSize > canvas.height + trailLength * fontSize) {
          if (Math.random() > 0.95) {
            drop.y = Math.random() * -20;
            drop.speed = 0.3 + Math.random() * 0.7;
          }
        }
      }
    };

    const interval = setInterval(draw, 45);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      aria-hidden="true"
    />
  );
}
