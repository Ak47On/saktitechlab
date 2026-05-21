"use client";

import { ArrowRight } from "lucide-react";

export default function ContactCTA() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">

      {/* Glow */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-500/20 blur-[140px] rounded-full" />

      <div className="container-width relative z-10">

        <div className="glass rounded-[40px] p-10 md:p-16 relative overflow-hidden">

          {/* Background Glow */}
          <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-purple-600/20 blur-[120px] rounded-full" />

          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">

            {/* Left */}
            <div>

              <div className="glass inline-flex px-4 py-2 rounded-full text-sm text-white/70 mb-6">
                🚀 Let's Work Together
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight mb-6">

                Have a Project

                <span className="gradient-text block">
                  In Mind?
                </span>

              </h2>

              <p className="text-white/60 text-lg leading-relaxed max-w-xl">
                We create modern websites, SaaS products and AI powered
                digital experiences for startups and businesses.
              </p>

            </div>

            {/* Right */}
            <div className="flex flex-col sm:flex-row gap-5 lg:justify-end">

              <button className="glow-button px-8 py-5 rounded-2xl font-medium flex items-center justify-center gap-2">

                Start Your Project

                <ArrowRight className="w-5 h-5" />

              </button>

              <a
                href="https://wa.me/916268442009"
                target="_blank"
                className="glass px-8 py-4 rounded-2xl font-medium hover:bg-white/10 transition-all inline-flex items-center justify-center"
              >
                Schedule A Call
              </a>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}