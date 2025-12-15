"use client";

import { useEffect, useRef } from "react";

// A lightweight, theme-aware Matrix-style code rain background
// - Uses devicePixelRatio for crisp rendering
// - Adapts colors to light/dark theme
// - Resizes with the window
// - Pointer-events disabled by parent container to avoid blocking UI
export default function CodeRainBackground({ density = 0.9, speed = 1.0 }: { density?: number; speed?: number }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const teardownRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let dpr = Math.max(1, window.devicePixelRatio || 1);

    const getTheme = () => {
      // Detect dark mode from documentElement class
      const isDark = document.documentElement.classList.contains("dark");
      // Colors tuned for subtle, non-distracting background
      return isDark
        ? {
            bg: "rgba(0,0,0,0.85)",
            head: "rgba(34, 197, 94, 0.95)", // green-500
            trail: "rgba(34, 197, 94, 0.12)",
          }
        : {
            bg: "rgba(255,255,255,0.85)",
            head: "rgba(17, 24, 39, 0.9)", // gray-900
            trail: "rgba(17, 24, 39, 0.08)",
          };
    };

    let theme = getTheme();

    const codepoints = (
      "01<>[]{};/\\|=+*#@$%&^~" +
      "ABCDEFGHIJKLMNOPQRSTUVWXYZ" +
      "abcdefghijklmnopqrstuvwxyz"
    ).split("");

    // columns = number of vertical streams
    let columns = 0;
    let fontSize = 16; // will scale with DPR
    let drops: number[] = [];

    const resize = () => {
      dpr = Math.max(1, window.devicePixelRatio || 1);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = width + "px";
      canvas.style.height = height + "px";

      fontSize = Math.max(12, Math.round(16 * dpr));
      ctx.font = `${fontSize}px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace`;

      columns = Math.floor((canvas.width / fontSize) * density);
      drops = new Array(columns).fill(0).map(() => Math.floor(Math.random() * (canvas.height / fontSize)));
    };

    resize();

    const stepBase = Math.max(1, Math.round(speed * dpr));

    const draw = () => {
      // Faint overlay to create trailing effect
      ctx.fillStyle = theme.bg;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < columns; i++) {
        // Randomly choose a character for the head
        const text = codepoints[(Math.random() * codepoints.length) | 0];

        // Head
        ctx.fillStyle = theme.head;
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        // Trail (slightly behind the head)
        if (drops[i] > 0) {
          ctx.fillStyle = theme.trail;
          const trailY = (drops[i] - 1) * fontSize;
          ctx.fillText(text, i * fontSize, trailY);
        }

        // Reset drop randomly after it passes the bottom for variety
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        // Move the drop
        drops[i] += stepBase;
      }

      rafRef.current = requestAnimationFrame(draw);
    };

    rafRef.current = requestAnimationFrame(draw);

    const handleResize = () => {
      cancelAnimationFrame(rafRef.current || 0);
      resize();
      theme = getTheme();
      rafRef.current = requestAnimationFrame(draw);
    };

    window.addEventListener("resize", handleResize);

    // Listen to theme changes (ThemeProvider toggles .dark on html)
    const observer = new MutationObserver(() => {
      const next = getTheme();
      theme = next;
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

    teardownRef.current = () => {
      observer.disconnect();
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(rafRef.current || 0);
    };

    return () => {
      teardownRef.current?.();
    };
  }, [density, speed]);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10" aria-hidden>
      <canvas ref={canvasRef} className="block w-full h-full" />
    </div>
  );
}
