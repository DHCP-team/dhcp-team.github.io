"use client";

import { useEffect, useRef } from "react";

export default function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const chars =
      "01ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝ".split("");

    const fontSize = 18;
    let columns = 0;
    let drops: number[] = [];

    const setup = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = window.innerWidth + "px";
      canvas.style.height = window.innerHeight + "px";
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
      ctx.imageSmoothingEnabled = false;

      columns = Math.floor(window.innerWidth / fontSize);
      drops = Array(columns)
        .fill(0)
        .map(() => Math.floor(Math.random() * (window.innerHeight / fontSize)));
    };

    setup();

    let animationId: number;
    let frameCount = 0;

    const draw = () => {
      frameCount++;

      ctx.fillStyle = "rgba(0, 0, 0, 0.015)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${fontSize}px "Courier New", monospace`;
      ctx.textBaseline = "top";

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        const isHead = Math.random() > 0.98;
        if (isHead) {
          ctx.fillStyle = "#ffffff";
        } else {
          ctx.fillStyle = "#00ffff";
        }
        ctx.fillText(text, x, y);

        if (y > canvas.height / (window.devicePixelRatio || 1) && Math.random() > 0.99) {
          drops[i] = 0;
        }

        if (frameCount % 16 === 0) {
          drops[i]++;
        }
      }

      animationId = requestAnimationFrame(draw);
    };

    draw();

    const handleResize = () => setup();
    window.addEventListener("resize", handleResize);

    const handleVisibility = () => {
      if (document.hidden) {
        cancelAnimationFrame(animationId);
      } else {
        draw();
      }
    };
    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, []);

  return <canvas id="matrix-bg" ref={canvasRef} aria-hidden="true" />;
}