"use client";

import { useEffect, useState } from "react";

export default function CursorGlow() {

  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {

    const moveCursor = (e: MouseEvent) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };

  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 hidden md:block"
    >

      <div
        className="absolute w-[350px] h-[350px] rounded-full bg-cyan-500/10 blur-[120px]"
        style={{
          left: position.x - 175,
          top: position.y - 175,
        }}
      />

    </div>
  );
}