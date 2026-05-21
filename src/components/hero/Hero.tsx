"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
    >

      {/* Background Glow */}
      <div className="absolute top-[-200px] right-[-150px] w-[500px] h-[500px] bg-purple-600/30 blur-[120px] rounded-full" />

      <div className="absolute bottom-[-200px] left-[-150px] w-[400px] h-[400px] bg-cyan-500/20 blur-[120px] rounded-full" />

      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="container-width relative z-10 grid lg:grid-cols-[1.1fr_0.9fr] gap-14 items-center">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >

          {/* Badge */}
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-sm text-white/80 mb-4 mt-4">
            🚀 AI Powered Web Solutions
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-[1.05] mb-4">

            We Build AI Powered

            <span className="gradient-text block">
              Websites & SaaS Products
            </span>

          </h1>

          {/* Description */}
          <p className="text-white/60 text-base md:text-lg leading-relaxed max-w-xl mb-7">

            SaktiTechLab helps startups, businesses and creators
            build modern websites, SaaS platforms and AI powered
            digital experiences.

          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">

            <a
              href="#contact"
              className="glow-button px-8 py-4 rounded-2xl font-medium inline-flex items-center justify-center"
            >
              Start Your Project
            </a>

            <a
              href="#portfolio"
              className="glass px-8 py-4 rounded-2xl font-medium hover:bg-white/10 transition-all inline-flex items-center justify-center"
            >
              View Our Work
            </a>

          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-8">

            {[
              {
                number: "50+",
                label: "Projects",
              },

              {
                number: "20+",
                label: "Clients",
              },

              {
                number: "3+",
                label: "Years",
              },

              {
                number: "99%",
                label: "Satisfaction",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="glass rounded-2xl p-3 text-center"
              >

                <h3 className="font-bold text-xl">
                  {item.number}
                </h3>

                <p className="text-white/50 text-sm">
                  {item.label}
                </p>

              </div>
            ))}

          </div>

        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >

          <div className="glass rounded-[32px] p-4 overflow-hidden">

            {/* Browser Top */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">

              <div className="flex items-center gap-2">

                <div className="w-3 h-3 rounded-full bg-red-500" />

                <div className="w-3 h-3 rounded-full bg-yellow-500" />

                <div className="w-3 h-3 rounded-full bg-green-500" />

              </div>

              <div className="glass px-4 py-2 rounded-xl text-sm">
                ⚡ Modern UI
              </div>

            </div>

            {/* Website Preview */}
            <div className="relative w-full h-[260px] sm:h-[420px] md:h-[460px] rounded-3xl overflow-hidden bg-black">

              <iframe
                src="https://aaryandeveloper.netlify.app/"
                className="w-full h-full rounded-3xl"
                style={{
                  overflow: "hidden",
                }}
              />

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}