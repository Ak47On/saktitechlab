"use client";

import Link from "next/link";

import {
  LayoutDashboard,
  FileText,
  HelpCircle,
  FolderKanban,
  Settings,
  LogOut,
} from "lucide-react";

import { usePathname } from "next/navigation";

const links = [

  {
    name: "Dashboard",
    href: "/admin",
    icon: LayoutDashboard,
  },

  {
    name: "Blogs",
    href: "/admin/blogs",
    icon: FileText,
  },

  {
    name: "Projects",
    href: "/admin/projects",
    icon: FolderKanban,
  },

  {
    name: "FAQ",
    href: "/admin/faq",
    icon: HelpCircle,
  },

  {
    name: "Settings",
    href: "/admin/settings",
    icon: Settings,
  },

];

export default function AdminSidebar() {

  const pathname =
    usePathname();

  return (

    <aside className="hidden lg:flex flex-col w-[300px] p-6">

      <div className="sticky top-6 h-[calc(100vh-48px)] bg-white/5 border border-white/10 backdrop-blur-2xl rounded-[32px] p-6 flex flex-col">

        {/* LOGO */}
        <div className="mb-12">

          <div className="w-16 h-16 rounded-3xl bg-gradient-to-r from-purple-600 to-cyan-500 flex items-center justify-center text-3xl font-bold mb-5 shadow-2xl shadow-cyan-500/20">

            S

          </div>

          <h1 className="text-3xl font-bold text-white leading-tight">

            SaktiTechLab

          </h1>

          <p className="text-white/40 mt-2">

            Premium CMS Dashboard 😎🔥

          </p>

        </div>

        {/* NAVIGATION */}
        <div className="flex flex-col gap-3 flex-1">

          {links.map((link) => {

            const Icon =
              link.icon;

            const active =
              pathname ===
              link.href;

            return (

              <Link
                key={link.href}
                href={link.href}
                className={`group flex items-center gap-4 px-5 py-4 rounded-2xl transition-all duration-300 ${
                  active
                    ? "bg-gradient-to-r from-purple-600 to-cyan-500 text-white shadow-xl shadow-cyan-500/20"
                    : "hover:bg-white/10 text-white/60 hover:text-white"
                }`}
              >

                <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${
                  active
                    ? "bg-white/20"
                    : "bg-white/5 group-hover:bg-white/10"
                }`}>

                  <Icon size={20} />

                </div>

                <span className="font-medium text-[15px]">

                  {link.name}

                </span>

              </Link>

            );
          })}

        </div>

      </div>

    </aside>
  );
}