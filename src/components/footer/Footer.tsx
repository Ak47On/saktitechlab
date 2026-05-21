"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative py-16 overflow-hidden">

      {/* Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-purple-600/10 blur-[140px] rounded-full" />

      <div className="container-width relative z-10">

        {/* Main Footer */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 pb-10 border-b border-white/10">

          {/* Brand */}
          <div>

            <div className="flex items-center gap-3 mb-5">

              <Image
                src="/branding/logo.png"
                alt="SaktiTechLab"
                width={42}
                height={42}
                className="object-contain"
              />

              <h2 className="text-2xl font-bold">

                Sakti

                <span className="gradient-text">
                  TechLab
                </span>

              </h2>

            </div>

            <p className="text-white/60 leading-relaxed">
              We build AI powered websites, SaaS products
              and modern digital experiences for startups
              and businesses.
            </p>

          </div>

          {/* Quick Links */}
          <div>

            <h3 className="text-xl font-semibold mb-5">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3 text-white/60">

              <a
                href="#home"
                className="hover:text-white transition-all"
              >
                Home
              </a>

              <a
                href="#services"
                className="hover:text-white transition-all"
              >
                Services
              </a>

              <a
                href="#portfolio"
                className="hover:text-white transition-all"
              >
                Portfolio
              </a>

              <a
                href="#process"
                className="hover:text-white transition-all"
              >
                Process
              </a>

              <a
                href="#contact"
                className="hover:text-white transition-all"
              >
                Contact
              </a>

              <a
                href="/blog"
                className="hover:text-white transition-all"
              >
                Blog
              </a>

              <a
                href="/faq"
                className="hover:text-white transition-all"
              >
                FAQ
              </a>

            </div>

          </div>

          {/* Services */}
          <div>

            <h3 className="text-xl font-semibold mb-5">
              Services
            </h3>

            <div className="flex flex-col gap-3 text-white/60">

              <p>Web Development</p>

              <p>SaaS Development</p>

              <p>AI Integration</p>

              <p>UI/UX Design</p>

              <p>Mobile Apps</p>

              <p>WhatsApp AI</p>

            </div>

          </div>

          {/* Social */}
          <div>

            <h3 className="text-xl font-semibold mb-5">
              Connect
            </h3>

            <div className="flex items-center gap-5 flex-wrap">

              {/* Instagram */}
              <a
                href="#"
                className="hover:scale-125 transition-all duration-300"
              >
                <img
                  src="/social/instagram.png"
                  alt="Instagram"
                  className="w-9 h-9 object-contain"
                />
              </a>

              {/* Facebook */}
              <a
                href="#"
                className="hover:scale-125 transition-all duration-300"
              >
                <img
                  src="/social/facebook.png"
                  alt="Facebook"
                  className="w-9 h-9 object-contain"
                />
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/916268442009"
                target="_blank"
                className="hover:scale-125 transition-all duration-300"
              >
                <img
                  src="/social/whatsapp.png"
                  alt="WhatsApp"
                  className="w-9 h-9 object-contain"
                />
              </a>

              {/* YouTube */}
              <a
                href="#"
                className="hover:scale-125 transition-all duration-300"
              >
                <img
                  src="/social/youtube.png"
                  alt="YouTube"
                  className="w-9 h-9 object-contain"
                />
              </a>

              {/* Threads */}
              <a
                href="#"
                className="hover:scale-125 transition-all duration-300"
              >
                <img
                  src="/social/threads.png"
                  alt="Threads"
                  className="w-9 h-9 object-contain"
                />
              </a>

              {/* Github */}
              <a
                href="#"
                className="hover:scale-125 transition-all duration-300"
              >
                <img
                  src="/social/github.png"
                  alt="Github"
                  className="w-9 h-9 object-contain"
                />
              </a>

            </div>

          </div>

        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-5 pt-7">

          <p className="text-white/40 text-sm text-center md:text-left">
            © 2026 SaktiTechLab. All rights reserved.
          </p>

          <div className="flex gap-5 text-sm text-white/40 flex-wrap justify-center">

            <a
              href="#"
              className="hover:text-white transition-all"
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="hover:text-white transition-all"
            >
              Terms & Conditions
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
}