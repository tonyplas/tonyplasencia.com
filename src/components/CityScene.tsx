"use client";

import { useEffect, useRef } from "react";

interface Building {
  x: number;
  width: number;
  height: number;
  shade: number;
  windows: { row: number; col: number; lit: boolean }[];
  hasAntenna: boolean;
  antennaHeight: number;
}

interface Drone {
  x: number;
  y: number;
  speedX: number;
  speedY: number;
  size: number;
  blinkPhase: number;
  scanActive: boolean;
  scanTimer: number;
}

interface Walker {
  x: number;
  speed: number;
  hasDog: boolean;
  height: number;
  phase: number;
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

    // Generate buildings with depth layers
    const buildings: Building[] = [];
    const buildingCount = Math.floor(window.innerWidth / 35);
    let bx = 0;
    for (let i = 0; i < buildingCount; i++) {
      const w = 25 + Math.random() * 50;
      const h = 80 + Math.random() * 280;
      const shade = 0.3 + Math.random() * 0.7;
      const windows: Building["windows"] = [];
      const rows = Math.floor(h / 14);
      const cols = Math.floor(w / 10);
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          windows.push({ row: r, col: c, lit: Math.random() > 0.4 });
        }
      }
      buildings.push({
        x: bx,
        width: w,
        height: h,
        shade,
        windows,
        hasAntenna: Math.random() > 0.6,
        antennaHeight: 10 + Math.random() * 30,
      });
      bx += w + 1 + Math.random() * 3;
    }

    // Generate drones — bigger and more visible
    const drones: Drone[] = Array.from({ length: 7 }, () => ({
      x: Math.random() * canvas.width,
      y: 60 + Math.random() * (canvas.height * 0.35),
      speedX: 0.4 + Math.random() * 1.0,
      speedY: 0,
      size: 3 + Math.random() * 3,
      blinkPhase: Math.random() * Math.PI * 2,
      scanActive: false,
      scanTimer: Math.random() * 300,
    }));

    // Generate street walkers — people and chihuahuas
    const walkers: Walker[] = Array.from({ length: 12 }, () => ({
      x: Math.random() * canvas.width,
      speed: (0.2 + Math.random() * 0.5) * (Math.random() > 0.5 ? 1 : -1),
      hasDog: Math.random() > 0.5,
      height: 6 + Math.random() * 4,
      phase: Math.random() * Math.PI * 2,
    }));

    let tick = 0;

    const draw = () => {
      tick++;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const baseY = canvas.height;

      // Horizon glow
      const horizonGrad = ctx.createLinearGradient(0, baseY - 350, 0, baseY);
      horizonGrad.addColorStop(0, "rgba(0, 255, 136, 0)");
      horizonGrad.addColorStop(0.7, "rgba(0, 255, 136, 0.02)");
      horizonGrad.addColorStop(1, "rgba(0, 255, 136, 0.06)");
      ctx.fillStyle = horizonGrad;
      ctx.fillRect(0, baseY - 350, canvas.width, 350);

      // Draw buildings
      buildings.forEach((b) => {
        const bodyShade = Math.floor(8 + b.shade * 8);
        ctx.fillStyle = `rgb(${bodyShade}, ${bodyShade}, ${bodyShade + 6})`;
        ctx.fillRect(b.x, baseY - b.height, b.width, b.height);

        // Building edge highlights
        ctx.strokeStyle = `rgba(0, 255, 136, ${0.06 + b.shade * 0.06})`;
        ctx.lineWidth = 0.5;
        ctx.strokeRect(b.x, baseY - b.height, b.width, b.height);

        // Top edge brighter line
        ctx.strokeStyle = `rgba(0, 255, 136, ${0.1 + b.shade * 0.08})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(b.x, baseY - b.height);
        ctx.lineTo(b.x + b.width, baseY - b.height);
        ctx.stroke();

        // Antenna
        if (b.hasAntenna) {
          const ax = b.x + b.width / 2;
          const ay = baseY - b.height;
          ctx.strokeStyle = "rgba(0, 255, 136, 0.15)";
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(ax, ay);
          ctx.lineTo(ax, ay - b.antennaHeight);
          ctx.stroke();

          // Antenna blink
          const blink = Math.sin(tick * 0.05 + b.x) > 0.3;
          if (blink) {
            ctx.fillStyle = "rgba(255, 50, 50, 0.9)";
            ctx.beginPath();
            ctx.arc(ax, ay - b.antennaHeight, 1.5, 0, Math.PI * 2);
            ctx.fill();
            // Red glow
            ctx.fillStyle = "rgba(255, 50, 50, 0.15)";
            ctx.beginPath();
            ctx.arc(ax, ay - b.antennaHeight, 5, 0, Math.PI * 2);
            ctx.fill();
          }
        }

        // Windows
        b.windows.forEach((w) => {
          if (Math.random() > 0.997) w.lit = !w.lit;

          const wx = b.x + 3 + w.col * 10;
          const wy = baseY - b.height + 5 + w.row * 14;

          if (w.lit) {
            // Window glow halo
            ctx.fillStyle = "rgba(0, 255, 136, 0.04)";
            ctx.fillRect(wx - 2, wy - 2, 10, 12);

            // Window itself
            const brightness = 0.15 + Math.sin(tick * 0.01 + w.row + w.col) * 0.05;
            ctx.fillStyle = `rgba(0, 255, 136, ${brightness})`;
            ctx.fillRect(wx, wy, 6, 8);

            // Window inner highlight
            ctx.fillStyle = "rgba(0, 255, 136, 0.35)";
            ctx.fillRect(wx + 1, wy + 1, 2, 3);
          } else {
            ctx.fillStyle = "rgba(20, 20, 32, 0.6)";
            ctx.fillRect(wx, wy, 6, 8);
          }
        });
      });

      // Draw drones
      drones.forEach((d) => {
        d.x += d.speedX;
        d.y += Math.sin(tick * 0.015 + d.blinkPhase) * 0.4;
        d.scanTimer--;

        if (d.x > canvas.width + 30) {
          d.x = -30;
          d.y = 60 + Math.random() * (canvas.height * 0.35);
        }

        // Activate scan periodically
        if (d.scanTimer <= 0) {
          d.scanActive = !d.scanActive;
          d.scanTimer = d.scanActive ? 80 + Math.random() * 120 : 200 + Math.random() * 300;
        }

        // Drone glow aura
        const auraGrad = ctx.createRadialGradient(d.x, d.y, 0, d.x, d.y, d.size * 8);
        auraGrad.addColorStop(0, "rgba(0, 255, 136, 0.12)");
        auraGrad.addColorStop(1, "rgba(0, 255, 136, 0)");
        ctx.fillStyle = auraGrad;
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.size * 8, 0, Math.PI * 2);
        ctx.fill();

        // Drone body — diamond shape
        ctx.fillStyle = "rgba(0, 255, 136, 0.8)";
        ctx.beginPath();
        ctx.moveTo(d.x, d.y - d.size * 1.2);
        ctx.lineTo(d.x + d.size * 2, d.y);
        ctx.lineTo(d.x, d.y + d.size * 0.6);
        ctx.lineTo(d.x - d.size * 2, d.y);
        ctx.closePath();
        ctx.fill();

        // Drone outline
        ctx.strokeStyle = "rgba(0, 255, 136, 1)";
        ctx.lineWidth = 0.8;
        ctx.beginPath();
        ctx.moveTo(d.x, d.y - d.size * 1.2);
        ctx.lineTo(d.x + d.size * 2, d.y);
        ctx.lineTo(d.x, d.y + d.size * 0.6);
        ctx.lineTo(d.x - d.size * 2, d.y);
        ctx.closePath();
        ctx.stroke();

        // Rotor lines
        const rotorAngle = tick * 0.15 + d.blinkPhase;
        ctx.strokeStyle = "rgba(0, 255, 136, 0.3)";
        ctx.lineWidth = 0.5;
        for (let r = 0; r < 4; r++) {
          const angle = rotorAngle + (r * Math.PI) / 2;
          const rx = d.x + Math.cos(angle) * d.size * 2.5;
          const ry = d.y + Math.sin(angle) * d.size * 1.2;
          ctx.beginPath();
          ctx.arc(rx, ry, d.size * 0.8, 0, Math.PI * 2);
          ctx.stroke();
        }

        // Center light
        ctx.fillStyle = "rgba(255, 255, 255, 0.9)";
        ctx.beginPath();
        ctx.arc(d.x, d.y, 1.2, 0, Math.PI * 2);
        ctx.fill();

        // Blinking nav lights
        const blink = Math.sin(tick * 0.12 + d.blinkPhase) > 0;
        if (blink) {
          // Red left
          ctx.fillStyle = "rgba(255, 50, 50, 0.9)";
          ctx.beginPath();
          ctx.arc(d.x - d.size * 2, d.y, 1.2, 0, Math.PI * 2);
          ctx.fill();
          // Green right
          ctx.fillStyle = "rgba(0, 255, 136, 1)";
          ctx.beginPath();
          ctx.arc(d.x + d.size * 2, d.y, 1.2, 0, Math.PI * 2);
          ctx.fill();
        }

        // Scan beam — cone of light pointing down
        if (d.scanActive) {
          const beamLength = 120 + Math.sin(tick * 0.02) * 20;
          const beamWidth = 25 + Math.sin(tick * 0.03) * 5;
          const gradient = ctx.createLinearGradient(d.x, d.y, d.x, d.y + beamLength);
          gradient.addColorStop(0, "rgba(0, 255, 136, 0.2)");
          gradient.addColorStop(0.5, "rgba(0, 255, 136, 0.08)");
          gradient.addColorStop(1, "rgba(0, 255, 136, 0)");
          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.moveTo(d.x - 2, d.y + d.size);
          ctx.lineTo(d.x + 2, d.y + d.size);
          ctx.lineTo(d.x + beamWidth, d.y + beamLength);
          ctx.lineTo(d.x - beamWidth, d.y + beamLength);
          ctx.closePath();
          ctx.fill();

          // Scan line sweeping
          const scanY = d.y + d.size + ((tick * 2 + d.blinkPhase * 50) % beamLength);
          const scanWidth = ((scanY - d.y) / beamLength) * beamWidth;
          ctx.strokeStyle = "rgba(0, 255, 136, 0.15)";
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(d.x - scanWidth, scanY);
          ctx.lineTo(d.x + scanWidth, scanY);
          ctx.stroke();
        }
      });

      // Draw street walkers — people and chihuahuas at ground level
      walkers.forEach((w) => {
        w.x += w.speed;
        const groundY = baseY - 4;
        const bobble = Math.sin(tick * 0.08 + w.phase) * 0.5;

        // Wrap around
        if (w.x > canvas.width + 20) w.x = -20;
        if (w.x < -20) w.x = canvas.width + 20;

        // Walking leg animation
        const legSwing = Math.sin(tick * 0.1 + w.phase) * 2;

        // Person body — tiny pixel silhouette
        ctx.fillStyle = "rgba(0, 255, 136, 0.25)";
        // Head
        ctx.fillRect(w.x - 1, groundY - w.height + bobble, 3, 3);
        // Torso
        ctx.fillRect(w.x - 1, groundY - w.height + 3 + bobble, 3, w.height * 0.4);
        // Legs
        ctx.fillStyle = "rgba(0, 255, 136, 0.2)";
        ctx.fillRect(w.x - 1 + legSwing * 0.3, groundY - w.height * 0.4 + bobble, 1, w.height * 0.4);
        ctx.fillRect(w.x + 1 - legSwing * 0.3, groundY - w.height * 0.4 + bobble, 1, w.height * 0.4);

        // Chihuahua walking alongside
        if (w.hasDog) {
          const leashDir = w.speed > 0 ? 1 : -1;
          const dogX = w.x + leashDir * (8 + Math.sin(tick * 0.06 + w.phase) * 3);
          const dogBob = Math.sin(tick * 0.15 + w.phase) * 0.5;
          const dogY = groundY - 2;

          // Leash
          ctx.strokeStyle = "rgba(0, 255, 136, 0.1)";
          ctx.lineWidth = 0.5;
          ctx.beginPath();
          ctx.moveTo(w.x + leashDir * 1, groundY - w.height * 0.5 + bobble);
          ctx.lineTo(dogX, dogY - 2 + dogBob);
          ctx.stroke();

          // Dog body — tiny chihuahua shape
          ctx.fillStyle = "rgba(0, 255, 136, 0.25)";
          // Body
          ctx.fillRect(dogX - 2, dogY - 2 + dogBob, 4, 2);
          // Head (slightly bigger for chihuahua proportions)
          ctx.fillRect(dogX + leashDir * 2, dogY - 3 + dogBob, 2, 2);
          // Legs
          const dogLeg = Math.sin(tick * 0.15 + w.phase) * 1;
          ctx.fillRect(dogX - 1 + dogLeg * 0.3, dogY + dogBob, 1, 2);
          ctx.fillRect(dogX + 1 - dogLeg * 0.3, dogY + dogBob, 1, 2);
          // Tail — sticking up (chihuahua style)
          ctx.strokeStyle = "rgba(0, 255, 136, 0.2)";
          ctx.lineWidth = 0.5;
          ctx.beginPath();
          ctx.moveTo(dogX - leashDir * 2, dogY - 1 + dogBob);
          ctx.lineTo(dogX - leashDir * 3, dogY - 4 + dogBob);
          ctx.stroke();
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
      className="fixed inset-0 pointer-events-none z-[1]"
      aria-hidden="true"
    />
  );
}
