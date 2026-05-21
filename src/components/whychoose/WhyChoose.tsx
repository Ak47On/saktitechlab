"use client";

import {
  ShieldCheck,
  Zap,
  Sparkles,
  Headphones,
} from "lucide-react";

const features = [
  {
    title: "Modern Tech Stack",
    description:
      "Built with latest technologies for speed and scalability.",
    icon: Sparkles,
  },

  {
    title: "Fast Performance",
    description:
      "Optimized websites with excellent loading speed.",
    icon: Zap,
  },

  {
    title: "Secure & Reliable",
    description:
      "Secure architecture and reliable deployment systems.",
    icon: ShieldCheck,
  },

  {
    title: "Dedicated Support",
    description:
      "We provide continuous support after project delivery.",
    icon: Headphones,
  },
];

export default function WhyChoose() {
  return (
    <section
      className="relative py-20 md:py-32 overflow-hidden"
    >

      {/* Glow */}
      <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-cyan-500/20 blur-[140px] rounded-full" />

      <div className="container-width relative z-10">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20">

          <div className="glass inline-flex px-4 py-2 rounded-full text-sm text-white/70 mb-6">
            🚀 Why Choose Us
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight mb-6">

            We Build More Than

            <span className="gradient-text block">
              Just Websites
            </span>

          </h2>

          <p className="text-white/60 text-lg leading-relaxed">
            We focus on performance, scalability and modern user experience.
          </p>

        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:p-8">

          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="glass rounded-[32px] p-6 md:p-8 hover:scale-[1.03] transition-all duration-500"
              >

                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-purple-600 to-cyan-500 flex items-center justify-center mb-6">

                  <Icon className="w-8 h-8" />

                </div>

                {/* Title */}
                <h3 className="text-2xl font-semibold mb-4">
                  {feature.title}
                </h3>

                {/* Desc */}
                <p className="text-white/60 leading-relaxed">
                  {feature.description}
                </p>

              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}