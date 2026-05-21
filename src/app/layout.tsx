import type { Metadata } from "next";
import "./globals.css";

import CursorGlow from "@/components/ui/CursorGlow";
import ScrollProgress from "@/components/ui/ScrollProgress";
import Particles from "@/components/ui/Particles";

export const metadata: Metadata = {
  title: "SaktiTechLab | AI Powered Websites & SaaS Products",

  description:
    "SaktiTechLab builds AI powered websites, SaaS platforms, mobile apps and modern digital experiences for startups and businesses.",

  keywords: [
    "Web Development",
    "SaaS Development",
    "AI Websites",
    "Next.js Agency",
    "UI UX Design",
    "Mobile App Development",
  ],

  authors: [
    {
      name: "SaktiTechLab",
    },
  ],

  openGraph: {
    title:
      "SaktiTechLab | AI Powered Websites & SaaS Products",

    description:
      "Modern websites, SaaS products and AI powered digital solutions.",

    url: "https://saktitechlab.vercel.app",

    siteName: "SaktiTechLab",

    images: [
      {
        url: "/branding/logo.png",
        width: 1200,
        height: 630,
        alt: "SaktiTechLab",
      },
    ],

    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body>

        <ScrollProgress />

        <CursorGlow />

        <Particles />

        {children}

      </body>

    </html>
  );
}