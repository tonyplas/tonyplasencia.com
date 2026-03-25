"use client";

import { useEffect, useRef } from "react";

interface Building {
  x: number;
  width: number;
  height: number;
  windows: { row: number; col: number; lit: boolean }[];
}

interface Drone {
  x: number;
  y: number;
  speedX: number;
  speedY: number;
  size: number;
  blinkPhase: number;
}

export default function CityScene() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Generate buildings
    const buildings: Building[] = [];
    const buildingCount = Math.floor(window.innerWidth / 40);
    let bx = 0;
    for (let i = 0; i < buildingCount; i++) {
      const w = 20 + Math.random() * 40;
      const h = 60 + Math.random() * 200;
      const windows: Building["windows"] = [];
      const rows = Math.floor(h / 16);
      const cols = Math.floor(w / 10);
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          windows.push({ row: r, col: c, lit: Math.random() > 0.5 });
        }
      }
      buildings.push({ x: bx, width: w, height: h, windows });
      bx += w + 2;
    }

    // Generate drones
    const drones: Drone[] = Array.from({ length: 5 }, () => ({
      x: Math.random() * canvas.width,
      y: 40 + Math.random() * (canvas.height * 0.3),
      speedX: 0.3 + Math.random() * 0.8,
      speedY: Math.sin(Math.random() * Math.PI) * 0.2,
      size: 2 + Math.random() * 2,
      blinkPhase: Math.random() * Math.PI * 2,
    }));

    let tick = 0;

    const draw = () => {
      tick++;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const baseY = canvas.height;

      // Draw buildings as pixel blocks rising from bottom
      buildings.forEach((b) => {
        // Building body
        ctx.fillStyle = "#0d0d14";
        ctx.fillRect(b.x, baseY - b.height, b.width, b.height);

        // Building outline
        ctx.strokeStyle = "rgba(0, 255, 136, 0.08)";
        ctx.lineWidth = 0.5;
        ctx.strokeRect(b.x, baseY - b.height, b.width, b.height);

        // Windows
        b.windows.forEach((w) => {
          // Randomly toggle some windows
          if (Math.random() > 0.998) w.lit = !w.lit;

          const wx = b.x + 4 + w.col * 10;
          const wy = baseY - b.height + 6 + w.row * 16;
          if (w.lit) {
            ctx.fillStyle = "rgba(0, 255, 136, 0.2)";
            ctx.fillRect(wx, wy, 6, 8);
            // Glow
            ctx.fillStyle = "rgba(0, 255, 136, 0.05)";
            ctx.fillRect(wx - 1, wy - 1, 8, 10);
          } else {
            ctx.fillStyle = "rgba(30, 30, 46, 0.5)";
            ctx.fillRect(wx, wy, 6, 8);
          }
        });
      });

      // Draw drones
      drones.forEach((d) => {
        d.x += d.speedX;
        d.y += Math.sin(tick * 0.02 + d.blinkPhase) * 0.3;

        if (d.x > canvas.width + 20) d.x = -20;

        // Drone body
        ctx.fillStyle = "rgba(0, 255, 136, 0.6)";
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.size, 0, Math.PI * 2);
        ctx.fill();

        // Blinking light
        const blink = Math.sin(tick * 0.1 + d.blinkPhase) > 0;
        if (blink) {
          ctx.fillStyle = "rgba(255, 50, 50, 0.8)";
          ctx.beginPath();
          ctx.arc(d.x, d.y - d.size - 1, 1, 0, Math.PI * 2);
          ctx.fill();
        }

        // Glow trail
        ctx.fillStyle = "rgba(0, 255, 136, 0.08)";
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.size * 4, 0, Math.PI * 2);
        ctx.fill();

        // Scan beam (occasional)
        if (Math.sin(tick * 0.03 + d.blinkPhase) > 0.8) {
          const gradient = ctx.createLinearGradient(d.x, d.y, d.x, d.y + 80);
          gradient.addColorStop(0, "rgba(0, 255, 136, 0.15)");
          gradient.addColorStop(1, "rgba(0, 255, 136, 0)");
          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.moveTo(d.x - 3, d.y);
          ctx.lineTo(d.x + 3, d.y);
          ctx.lineTo(d.x + 15, d.y + 80);
          ctx.lineTo(d.x - 15, d.y + 80);
          ctx.fill();
        }
      });

      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animId);
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
