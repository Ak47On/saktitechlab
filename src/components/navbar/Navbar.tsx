"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  {
    name: "Home",
    href: "#home",
  },

  {
    name: "Services",
    href: "#services",
  },

  {
    name: "Portfolio",
    href: "#portfolio",
  },

  {
    name: "Process",
    href: "#process",
  },

  {
    name: "Contact",
    href: "#contact",
  },
];

export default function Navbar() {

  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-4 left-0 w-full z-50 px-4">

      <nav className="max-w-7xl mx-auto glass rounded-2xl border border-white/10">

        <div className="flex items-center justify-between px-5 md:px-8 h-[72px]">

          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 shrink-0"
          >

            <Image
              src="/branding/logo.png"
              alt="SaktiTechLab"
              width={38}
              height={38}
              priority
              className="object-contain"
            />

            <h1 className="text-xl md:text-2xl font-bold whitespace-nowrap">

              Sakti

              <span className="gradient-text">
                TechLab
              </span>

            </h1>

          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">

            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm text-white/70 hover:text-white transition-all duration-300"
              >
                {link.name}
              </a>
            ))}

          </div>

          {/* CTA */}
          <div className="hidden md:flex">

            <a
              href="#contact"
              className="glow-button px-6 py-2.5 rounded-xl text-sm font-medium"
            >
              Let's Talk
            </a>

          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white"
          >

            {open
              ? <X size={24} />
              : <Menu size={24} />
            }

          </button>

        </div>

        {/* Mobile Menu */}
        {open && (

          <div className="md:hidden border-t border-white/10 px-5 py-6">

            <div className="flex flex-col gap-5">

              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-white/70 hover:text-white transition-all"
                >
                  {link.name}
                </a>
              ))}

              <a
                href="#contact"
                className="glow-button px-6 py-3 rounded-xl text-center mt-2"
              >
                Let's Talk
              </a>

            </div>

          </div>

        )}

      </nav>

    </header>
  );
}