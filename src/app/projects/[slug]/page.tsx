import Image from "next/image";
import Link from "next/link";

import {
  Globe,
  MessageCircle,
  Code2,
  Database,
  Sparkles,
  Smartphone,
  Gamepad2,
  ShoppingCart,
  GraduationCap,
  UtensilsCrossed,
} from "lucide-react";

const projects = [
  {
    slug: "saas-dashboard",

    title: "AI SaaS Dashboard",

    category: "SaaS Platform",

    image: "/projects/saas.png",

    description:
      "A premium AI powered SaaS platform designed for startups and businesses to manage analytics, automation, users and workflows.",

    overview:
      "This AI SaaS Dashboard is designed for startups, agencies and modern businesses that need a centralized system for analytics, automation and business management. The platform combines premium UI/UX with scalable architecture and AI powered features to improve workflow efficiency and productivity. The dashboard focuses on simplicity, modern design and smooth user experience while maintaining enterprise-level scalability and performance.",

    features: [
      "AI Analytics Dashboard",
      "Authentication System",
      "Responsive UI",
      "Dark Dashboard",
      "Modern SaaS Architecture",
      "Real-time Monitoring",
    ],

    tech: [
      {
        name: "Next.js",
        icon: Globe,
      },

      {
        name: "TypeScript",
        icon: Code2,
      },

      {
        name: "MongoDB",
        icon: Database,
      },

      {
        name: "Framer Motion",
        icon: Sparkles,
      },
    ],

    benefits: [
      "Improves workflow management",
      "Modern scalable architecture",
      "Better user engagement",
      "Faster analytics tracking",
    ],
  },

  {
    slug: "delivery-app",

    title: "Delivery App UI",

    category: "Delivery Platform",

    image: "/projects/delivery.png",

    description:
      "A modern instant delivery platform inspired by Blinkit and Zepto with premium mobile-first UI.",

    overview:
      "This delivery platform is built for businesses that want to provide instant delivery services for groceries, food and local products. The application focuses on smooth mobile experience, modern ordering system and fast customer interaction. The UI is optimized for modern users who expect clean design and seamless navigation.",

    features: [
      "Live Order Tracking",
      "Modern Mobile UI",
      "Fast Checkout",
      "Payment Integration",
      "Responsive Design",
      "Product Categories",
    ],

    tech: [
      {
        name: "Next.js",
        icon: Globe,
      },

      {
        name: "React",
        icon: Smartphone,
      },

      {
        name: "Firebase",
        icon: Database,
      },

      {
        name: "Tailwind CSS",
        icon: Sparkles,
      },
    ],

    benefits: [
      "Improves customer experience",
      "Fast ordering process",
      "Modern delivery workflow",
      "Smooth mobile performance",
    ],
  },

  {
    slug: "gamehub",

    title: "Gaming Platform",

    category: "Gaming Website",

    image: "/projects/gamehub.png",

    description:
      "A futuristic gaming platform for esports communities, tournaments and gamers.",

    overview:
      "GameHub is a premium gaming platform designed for esports organizations, gaming communities and tournaments. The platform combines futuristic visuals, immersive UI and modern gaming features to create an engaging user experience for gamers and gaming communities.",

    features: [
      "Tournament System",
      "Gaming Dashboard",
      "Leaderboards",
      "Dark Gaming UI",
      "Responsive Layout",
      "Community Features",
    ],

    tech: [
      {
        name: "Next.js",
        icon: Globe,
      },

      {
        name: "MongoDB",
        icon: Database,
      },

      {
        name: "Socket.io",
        icon: Gamepad2,
      },

      {
        name: "Tailwind CSS",
        icon: Sparkles,
      },
    ],

    benefits: [
      "Better gaming engagement",
      "Modern esports experience",
      "Premium gamer interface",
      "Scalable gaming architecture",
    ],
  },

  {
    slug: "school-erp",

    title: "School ERP Dashboard",

    category: "Education Platform",

    image: "/projects/eudm.png",

    description:
      "A complete school and education management platform with modern dashboard experience.",

    overview:
      "This School ERP system is designed for schools, coaching institutes and educational organizations. The dashboard helps manage students, teachers, attendance, reports and communication through a centralized and easy-to-use system.",

    features: [
      "Student Management",
      "Attendance Tracking",
      "Teacher Dashboard",
      "Result Management",
      "Responsive Dashboard",
      "Modern Education UI",
    ],

    tech: [
      {
        name: "Next.js",
        icon: Globe,
      },

      {
        name: "MongoDB",
        icon: Database,
      },

      {
        name: "TypeScript",
        icon: Code2,
      },

      {
        name: "Tailwind CSS",
        icon: GraduationCap,
      },
    ],

    benefits: [
      "Simplifies school management",
      "Improves communication",
      "Centralized system",
      "Better operational efficiency",
    ],
  },

  {
    slug: "restaurant-dashboard",

    title: "Restaurant Dashboard",

    category: "Restaurant System",

    image: "/projects/food.png",

    description:
      "A premium restaurant management dashboard with analytics and order systems.",

    overview:
      "This restaurant management system is designed for cafes, restaurants and food businesses that need modern digital tools for operations. The dashboard helps manage orders, analytics, food items and customer engagement with a clean modern interface.",

    features: [
      "Order Management",
      "Food Analytics",
      "Customer Dashboard",
      "Restaurant Reports",
      "Responsive Layout",
      "Modern UI Design",
    ],

    tech: [
      {
        name: "Next.js",
        icon: Globe,
      },

      {
        name: "MongoDB",
        icon: Database,
      },

      {
        name: "Tailwind CSS",
        icon: UtensilsCrossed,
      },

      {
        name: "TypeScript",
        icon: Code2,
      },
    ],

    benefits: [
      "Improves restaurant workflow",
      "Fast order management",
      "Better business analytics",
      "Modern customer experience",
    ],
  },

  {
    slug: "whatsapp-ai",

    title: "WhatsApp AI Dashboard",

    category: "AI Automation",

    image: "/projects/whatsappd.png",

    description:
      "An AI powered WhatsApp automation dashboard for businesses and customer support.",

    overview:
      "This WhatsApp AI system helps businesses automate customer communication, support and lead generation using intelligent AI powered workflows. The dashboard is built for modern businesses that want to reduce manual support workload and improve customer engagement.",

    features: [
      "AI Chat Automation",
      "Customer Support System",
      "Smart Reply System",
      "Lead Management",
      "Responsive Dashboard",
      "Modern UI",
    ],

    tech: [
      {
        name: "Next.js",
        icon: Globe,
      },

      {
        name: "OpenAI API",
        icon: Sparkles,
      },

      {
        name: "MongoDB",
        icon: Database,
      },

      {
        name: "WhatsApp API",
        icon: MessageCircle,
      },
    ],

    benefits: [
      "Reduces support workload",
      "Improves customer communication",
      "AI powered automation",
      "Modern business workflow",
    ],
  },
];

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {

  const { slug } = await params;

  const project = projects.find(
    (item) => item.slug === slug
  );

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white text-4xl">
        Project Not Found
      </div>
    );
  }

  return (
    <main className="relative min-h-screen py-32 overflow-hidden">

      {/* Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/20 blur-[140px] rounded-full" />

      <div className="container-width relative z-10">

        {/* Back */}
        <Link
          href="/"
          className="glass px-5 py-3 rounded-xl inline-flex mb-10 hover:bg-white/10 transition-all"
        >
          ← Back to Home
        </Link>

        {/* Hero */}
        <div className="grid lg:grid-cols-2 gap-14 items-center mb-24">

          {/* Left */}
          <div>

            <p className="text-cyan-400 mb-4">
              {project.category}
            </p>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              {project.title}
            </h1>

            <p className="text-white/60 text-lg leading-relaxed mb-8">
              {project.description}
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">

              <button className="glow-button px-8 py-4 rounded-2xl flex items-center gap-3">

                <Globe className="w-5 h-5" />

                Live Preview

              </button>

              <a
                href="https://wa.me/916268442009"
                target="_blank"
                className="glass px-8 py-4 rounded-2xl flex items-center gap-3 hover:bg-white/10 transition-all"
              >

                <MessageCircle className="w-5 h-5" />

                Contact

              </a>

            </div>

          </div>

          {/* Right */}
          <div className="glass rounded-[32px] p-4 overflow-hidden">

            <Image
              src={project.image}
              alt={project.title}
              width={1600}
              height={1200}
              className="rounded-3xl w-full h-[250px] md:h-[500px] object-cover"
            />

          </div>

        </div>

        {/* Overview */}
        <div className="glass rounded-[32px] p-8 md:p-12 mb-12">

          <h2 className="text-3xl font-bold mb-6">
            Project Overview
          </h2>

          <p className="text-white/60 leading-relaxed text-lg">
            {project.overview}
          </p>

        </div>

        {/* Features + Tech */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">

          {/* Features */}
          <div className="glass rounded-[32px] p-8">

            <h2 className="text-3xl font-bold mb-8">
              Features
            </h2>

            <div className="space-y-4">

              {project.features.map((feature) => (
                <div
                  key={feature}
                  className="glass px-5 py-4 rounded-2xl text-white/80"
                >
                  ✨ {feature}
                </div>
              ))}

            </div>

          </div>

          {/* Tech */}
          <div className="glass rounded-[32px] p-8">

            <h2 className="text-3xl font-bold mb-8">
              Tech Stack
            </h2>

            <div className="flex flex-wrap gap-4">

              {project.tech.map((tech) => {
                const Icon = tech.icon;

                return (
                  <div
                    key={tech.name}
                    className="glass px-5 py-3 rounded-2xl flex items-center gap-3 w-fit"
                  >

                    <Icon className="w-5 h-5 text-cyan-400" />

                    <span className="text-white/80">
                      {tech.name}
                    </span>

                  </div>
                );
              })}

            </div>

          </div>

        </div>

        {/* Benefits */}
        <div className="glass rounded-[32px] p-8 md:p-12">

          <h2 className="text-3xl font-bold mb-8">
            Business Benefits
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            {project.benefits.map((benefit) => (
              <div
                key={benefit}
                className="glass rounded-2xl p-6 text-white/70"
              >
                🚀 {benefit}
              </div>
            ))}

          </div>

        </div>

      </div>

    </main>
  );
}