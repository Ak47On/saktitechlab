"use client";

import {
  SearchCheck,
  PencilRuler,
  Code2,
  Rocket,
  Bug,
} from "lucide-react";

import Reveal from "@/components/ui/Reveal";

const steps = [
  {
    title: "Discovery",
    description:
      "We understand your business goals and project requirements.",
    icon: SearchCheck,
  },

  {
    title: "Design",
    description:
      "Modern UI/UX designs focused on smooth user experience.",
    icon: PencilRuler,
  },

  {
    title: "Development",
    description:
      "Scalable development using latest modern technologies.",
    icon: Code2,
  },

  {
    title: "Testing",
    description:
      "Performance optimization and bug fixing before deployment.",
    icon: Bug,
  },

  {
    title: "Launch",
    description:
      "Project deployment with long-term maintenance and support.",
    icon: Rocket,
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="relative pt-2 pb-20 md:pt-6 md:pb-24 overflow-hidden"
    >

      {/* Glow */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[500px] h-[500px] bg-purple-600/20 blur-[140px] rounded-full" />

      <Reveal>

        <div className="container-width relative z-10">

          {/* Heading */}
          <div className="text-center max-w-3xl mx-auto mb-10">

            <div className="glass inline-flex px-4 py-2 rounded-full text-sm text-white/70 mb-6">
              ⚡ Our Process
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight mb-6">

              Simple Process

              <span className="gradient-text block">
                Powerful Results
              </span>

            </h2>

            <p className="text-white/60 text-lg leading-relaxed">
              A streamlined workflow for delivering premium digital products.
            </p>

          </div>

          {/* Timeline */}
          <div className="grid md:grid-cols-2 xl:grid-cols-5 gap-6">

            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div
                  key={index}
                  className="glass rounded-[32px] p-6 md:p-8 text-center hover:scale-[1.03] transition-all duration-500 relative"
                >

                  {/* Step Number */}
                  <div className="absolute top-5 right-5 text-white/10 text-5xl font-bold">
                    0{index + 1}
                  </div>

                  {/* Icon */}
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-r from-purple-600 to-cyan-500 flex items-center justify-center mb-6">

                    <Icon className="w-8 h-8" />

                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-semibold mb-4">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-white/60 leading-relaxed">
                    {step.description}
                  </p>

                </div>
              );
            })}

          </div>

        </div>

      </Reveal>

    </section>
  );
}