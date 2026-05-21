"use client";

import {
  Monitor,
  LayoutDashboard,
  PenTool,
  Sparkles,
  ShoppingCart,
  Search,
  Smartphone,
  MessageCircle,
  Gamepad2,
} from "lucide-react";

import Reveal from "@/components/ui/Reveal";

const services = [
  {
    title: "Web Development",
    description:
      "Modern responsive websites for businesses, schools and NGOs.",
    icon: Monitor,
  },

  {
    title: "SaaS Development",
    description:
      "Scalable SaaS products with dashboards and automation.",
    icon: LayoutDashboard,
  },

  {
    title: "UI/UX Design",
    description:
      "Modern interfaces with smooth user experiences.",
    icon: PenTool,
  },

  {
    title: "AI Integration",
    description:
      "AI powered solutions and smart business automation.",
    icon: Sparkles,
  },

  {
    title: "E-Commerce",
    description:
      "High converting online stores with payment systems.",
    icon: ShoppingCart,
  },

  {
    title: "SEO & Performance",
    description:
      "Faster websites optimized for Google ranking.",
    icon: Search,
  },

  {
    title: "Mobile App Development",
    description:
      "Modern Android & iOS apps built for scalability.",
    icon: Smartphone,
  },

  {
    title: "WhatsApp AI Integration",
    description:
      "AI based WhatsApp automation and smart replies.",
    icon: MessageCircle,
  },

  {
    title: "Gaming Platform Development",
    description:
      "Gaming websites and tournament management systems.",
    icon: Gamepad2,
  },
];

export default function Services() {
  return (
    <section
  id="services"
  className="relative pt-2 pb-20 md:pt-6 md:pb-24"
>

      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-purple-600/20 blur-[140px] rounded-full" />

      <Reveal>

        <div className="container-width relative z-10">

          {/* Heading */}
          <div className="text-center max-w-3xl mx-auto mb-20">

            <div className="glass inline-flex px-4 py-2 rounded-full text-sm text-white/70 mb-6">
              ⚡ Our Services
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight mb-6">

              Services That Drive

              <span className="gradient-text block">
                Digital Growth
              </span>

            </h2>

            <p className="text-white/60 text-lg leading-relaxed">
              End-to-end digital solutions for startups,
              businesses and creators.
            </p>

          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:p-8">

            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <div
                  key={index}
                  className="glass rounded-3xl p-6 md:p-8 hover:scale-[1.03] hover:border-purple-500/30 transition-all duration-500 group"
                >

                  {/* Icon */}
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-purple-600 to-cyan-500 flex items-center justify-center mb-6">

                    <Icon className="w-8 h-8" />

                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-semibold mb-4">
                    {service.title}
                  </h3>

                  {/* Desc */}
                  <p className="text-white/60 leading-relaxed">
                    {service.description}
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