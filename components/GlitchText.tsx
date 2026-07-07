"use client";

import { useEffect, useState, useRef } from "react";

const glitchChars =
  "ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉ01#%&@!?:<>[]{}=".split("");

type GlitchTextProps = {
  text: string;
  interval?: number;
  className?: string;
  style?: React.CSSProperties;
};

export default function GlitchText({
  text,
  interval = 5000,
  className,
  style,
}: GlitchTextProps) {
  const [display, setDisplay] = useState(text);
  const [glitching, setGlitching] = useState(false);
  const [lockWidth, setLockWidth] = useState<number | null>(null);
  const measureRef = useRef<HTMLSpanElement>(null);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    if (measureRef.current) {
      const rect = measureRef.current.getBoundingClientRect();
      setLockWidth(rect.width);
    }
  }, [text, className, style]);

  useEffect(() => {
    let mounted = true;

    const triggerGlitch = () => {
      if (!mounted) return;
      setGlitching(true);

      let frames = 0;
      const totalFrames = 18;

      const tick = () => {
        if (!mounted) return;
        frames++;
        const progress = frames / totalFrames;
        const intensity = 1 - progress;

        const scrambled = text
          .split("")
          .map((ch) => {
            if (ch === " ") return " ";
            if (Math.random() < intensity * 0.7) {
              return glitchChars[Math.floor(Math.random() * glitchChars.length)];
            }
            return ch;
          })
          .join("");

        setDisplay(scrambled);

        if (frames < totalFrames) {
          rafRef.current = requestAnimationFrame(tick);
        } else {
          setDisplay(text);
          setGlitching(false);
        }
      };

      rafRef.current = requestAnimationFrame(tick);
    };

    const cycle = setInterval(triggerGlitch, interval);

    return () => {
      mounted = false;
      clearInterval(cycle);
      cancelAnimationFrame(rafRef.current);
    };
  }, [text, interval]);

  return (
    <>
      <span
        ref={measureRef}
        className={className}
        style={{
          ...style,
          visibility: "hidden",
          position: "absolute",
          whiteSpace: "nowrap",
        }}
        aria-hidden="true"
      >
        {text}
      </span>
      <span
        className={className}
        style={{
          ...style,
          display: "inline-block",
          width: lockWidth !== null ? `${lockWidth}px` : undefined,
          overflow: "hidden",
          whiteSpace: "nowrap",
          ...(glitching
            ? {
                textShadow:
                  "2px 0 #ff0040, -2px 0 #00ffff, 0 0 8px rgba(0,255,255,0.4)",
                animation: "glitch-jitter 0.08s infinite steps(2)",
              }
            : {}),
        }}
        suppressHydrationWarning
      >
        {display}
        {glitching && (
          <style>{`
            @keyframes glitch-jitter {
              0% { transform: translate(0); }
              25% { transform: translate(-1px, 1px); }
              50% { transform: translate(1px, -1px); }
              75% { transform: translate(-1px, -1px); }
              100% { transform: translate(0); }
            }
          `}</style>
        )}
      </span>
    </>
  );
}