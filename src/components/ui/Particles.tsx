"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const particles = Array.from({ length: 20 });

export default function Particles() {

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">

      {particles.map((_, index) => {

        const size = Math.random() * 6 + 2;

        return (
          <motion.div
            key={index}
            className="absolute rounded-full bg-white/10"

            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: Math.random() * 0.5 + 0.2,
            }}

            animate={{
              y: [
                Math.random() * window.innerHeight,
                -100,
              ],
            }}

            transition={{
              duration: Math.random() * 15 + 10,
              repeat: Infinity,
              ease: "linear",
            }}

            style={{
              width: size,
              height: size,
            }}
          />
        );
      })}

    </div>
  );
}