"use client";

import { useEffect, useState } from "react";

const glitchChars =
  "ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝ01◆◇■□▲▼".split(
    ""
  );

const loadingPhases = [
  "初期化中",
  "脆弱性スキャン",
  "侵入準備",
  "エクスプロイト実行",
  "シェル取得完了",
];

function randomGlitchText(length: number): string {
  let result = "";
  for (let i = 0; i < length; i++) {
    result += glitchChars[Math.floor(Math.random() * glitchChars.length)];
  }
  return result;
}

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);
  const [phase, setPhase] = useState(0);
  const [glitchText, setGlitchText] = useState("");

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setGlitchText(randomGlitchText(48));
    }, 70);

    const phaseInterval = setInterval(() => {
      setPhase((p) => (p < loadingPhases.length - 1 ? p + 1 : p));
    }, 700);

    const finish = () => {
      clearInterval(glitchInterval);
      clearInterval(phaseInterval);
      setPhase(loadingPhases.length - 1);
      setFading(true);
      setTimeout(() => setVisible(false), 600);
    };

    const images = Array.from(document.images);
    const unloaded = images.filter((img) => !img.complete);

    if (unloaded.length === 0) {
      const timer = setTimeout(finish, 1200);
      return () => {
        clearTimeout(timer);
        clearInterval(glitchInterval);
        clearInterval(phaseInterval);
      };
    }

    let remaining = unloaded.length;
    unloaded.forEach((img) => {
      const handler = () => {
        remaining--;
        if (remaining <= 0) finish();
      };
      img.addEventListener("load", handler);
      img.addEventListener("error", handler);
    });

    const safetyTimeout = setTimeout(finish, 4000);

    return () => {
      clearInterval(glitchInterval);
      clearInterval(phaseInterval);
      clearTimeout(safetyTimeout);
      unloaded.forEach((img) => {
        img.removeEventListener("load", () => {});
        img.removeEventListener("error", () => {});
      });
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-black transition-opacity duration-500 ${
        fading ? "opacity-0" : "opacity-100"
      }`}
      aria-hidden="true"
    >
      <div
        className="relative text-center"
        style={{ fontFamily: "var(--font-pressstart), monospace" }}
      >
        <div
          className="mb-6 text-2xl font-bold text-[var(--brand)] sm:text-4xl"
          style={{
            textShadow:
              "2px 0 #ff0040, -2px 0 #00ffff, 0 0 12px rgba(0,255,255,0.5)",
            animation: "glitch-shift 0.3s infinite steps(2)",
          }}
        >
          Pwning
        </div>

        <div
          className="mb-4 text-lg tracking-widest text-[var(--brand)] sm:text-2xl"
          style={{
            textShadow: "1px 0 #ff0040, -1px 0 #00ffff",
          }}
        >
          {loadingPhases[phase]}
        </div>

        <div
          className="mx-auto max-w-md break-all text-base text-[var(--muted)]"
          style={{
            fontFamily: "var(--font-vt323), monospace",
            textShadow: "0 0 4px rgba(0,255,255,0.3)",
          }}
        >
          {glitchText}
        </div>

        <div className="mx-auto mt-6 h-1 w-48 overflow-hidden bg-[rgba(0,255,255,0.1)]">
          <div
            className="h-full bg-[var(--brand)]"
            style={{
              animation: "loading-bar 1.2s ease-in-out forwards",
            }}
          />
        </div>
      </div>

      <style>{`
        @keyframes glitch-shift {
          0% { transform: translate(0); }
          20% { transform: translate(-2px, 1px); }
          40% { transform: translate(2px, -1px); }
          60% { transform: translate(-1px, -1px); }
          80% { transform: translate(1px, 1px); }
          100% { transform: translate(0); }
        }
        @keyframes loading-bar {
          0% { width: 0%; }
          100% { width: 100%; }
        }
      `}</style>
    </div>
  );
}