'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function CyberPlanetGSAP() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = canvas.width = canvas.offsetWidth;
    let height = canvas.height = canvas.offsetHeight;
    const center = { x: width / 2, y: height / 2 };
    const earthRadius = 80;

    // Create neon rings
    const rings = Array.from({ length: 3 }, () => ({
      radius: earthRadius + 20 + Math.random() * 30,
      angle: Math.random() * Math.PI * 2,
      color: `hsl(${Math.random() * 360}, 100%, 50%)`,
    }));

    // Create particles
    const particles = Array.from({ length: 80 }, () => ({
      radius: earthRadius + 50 + Math.random() * 50,
      angle: Math.random() * Math.PI * 2,
      size: 2 + Math.random() * 2,
      color: `hsl(${Math.random() * 360}, 100%, 50%)`,
    }));

    const ship = { angle: 0, radius: earthRadius + 100, size: 10 };

    // GSAP Animations
    rings.forEach(ring => {
      gsap.to(ring, {
        angle: `+=6.283`, // 360° in radians
        duration: 12 + Math.random() * 8,
        repeat: -1,
        ease: 'linear',
      });
    });

    particles.forEach(p => {
      gsap.to(p, {
        angle: `+=6.283`,
        duration: 8 + Math.random() * 6,
        repeat: -1,
        ease: 'linear',
      });
    });

    gsap.to(ship, {
      angle: `+=6.283`,
      duration: 10,
      repeat: -1,
      ease: 'linear',
    });

    let earthRotation = { angle: 0 };
    gsap.to(earthRotation, {
      angle: `+=6.283`,
      duration: 20,
      repeat: -1,
      ease: 'linear',
    });

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw Earth (rotating)
      ctx.save();
      ctx.translate(center.x, center.y);
      ctx.rotate(earthRotation.angle);
      ctx.beginPath();
      ctx.arc(0, 0, earthRadius, 0, Math.PI * 2);
      ctx.fillStyle = '#0d6efd';
      ctx.fill();
      ctx.restore();

      // Draw neon rings
      rings.forEach(r => {
        ctx.save();
        ctx.beginPath();
        ctx.strokeStyle = r.color;
        ctx.shadowBlur = 20;
        ctx.shadowColor = r.color;
        ctx.lineWidth = 2;
        ctx.arc(center.x, center.y, r.radius, r.angle, r.angle + 0.2);
        ctx.stroke();
        ctx.restore();
      });

      // Draw particles
      particles.forEach(p => {
        const x = center.x + Math.cos(p.angle) * p.radius;
        const y = center.y + Math.sin(p.angle) * p.radius;
        ctx.save();
        ctx.beginPath();
        ctx.fillStyle = p.color;
        ctx.shadowBlur = 15;
        ctx.shadowColor = p.color;
        ctx.arc(x, y, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      // Draw spaceship
      const shipX = center.x + Math.cos(ship.angle) * ship.radius;
      const shipY = center.y + Math.sin(ship.angle) * ship.radius;
      ctx.save();
      ctx.fillStyle = '#ff0';
      ctx.shadowBlur = 20;
      ctx.shadowColor = '#ff0';
      ctx.beginPath();
      ctx.moveTo(shipX, shipY);
      ctx.lineTo(shipX - ship.size, shipY + ship.size / 2);
      ctx.lineTo(shipX - ship.size, shipY - ship.size / 2);
      ctx.closePath();
      ctx.fill();
      ctx.restore();

      requestAnimationFrame(draw);
    };

    draw();

    const handleResize = () => {
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
      center.x = width / 2;
      center.y = height / 2;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section style={{ position: 'relative', height: '600px', background: '#000' }}>
      <canvas ref={canvasRef} style={{ width: '100%', height: '100%', display: 'block' }} />
    </section>
  );
}