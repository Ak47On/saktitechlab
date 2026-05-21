"use client";

import {
  Bell,
  Search,
  Settings,
  LogOut,
  KeyRound,
} from "lucide-react";

import {
  useState,
} from "react";

export default function AdminTopbar() {

  const [open, setOpen] =
    useState(false);

  return (

    <div className="sticky top-0 z-50 mb-10">

      <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl px-6 py-4 flex items-center justify-between">

        {/* LEFT */}
        <div>

          <h1 className="text-2xl font-bold text-white">

            SaktiTechLab CMS

          </h1>

          <p className="text-white/40 text-sm mt-1">

            Manage your website easily 😎🔥

          </p>

        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-4 relative">

          {/* SEARCH */}
          <div className="hidden md:flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-3 rounded-2xl w-[260px]">

            <Search
              size={18}
              className="text-white/40"
            />

            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent outline-none text-sm w-full text-white placeholder:text-white/30"
            />

          </div>

          {/* NOTIFICATION */}
          <button className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-all">

            <Bell size={20} />

          </button>

          {/* PROFILE */}
          <button
            onClick={() =>
              setOpen(!open)
            }
            className="flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-2 rounded-2xl hover:bg-white/10 transition-all"
          >

            <div className="w-11 h-11 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 flex items-center justify-center font-bold text-white">

              A

            </div>

            <div className="hidden md:block text-left">

              <h3 className="font-semibold text-sm text-white">

                Admin

              </h3>

              <p className="text-white/40 text-xs">

                Super Admin

              </p>

            </div>

          </button>

          {/* DROPDOWN */}
          {open && (

            <div className="absolute top-[80px] right-0 w-[300px] bg-[#0b0b0b] border border-white/10 rounded-3xl p-4 shadow-2xl">

              {/* PROFILE INFO */}
              <div className="flex items-center gap-4 mb-5 pb-5 border-b border-white/10">

                <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-purple-600 to-cyan-500 flex items-center justify-center text-xl font-bold text-white">

                  A

                </div>

                <div>

                  <h3 className="font-bold text-lg text-white">

                    Admin

                  </h3>

                  <p className="text-white/40 text-sm">

                    Super Admin

                  </p>

                </div>

              </div>

              {/* MENU */}
              <div className="grid gap-3">

                {/* CHANGE USERNAME */}
                <button className="flex items-center gap-4 bg-white/5 hover:bg-white/10 transition-all px-4 py-4 rounded-2xl text-white">

                  <Settings size={20} />

                  Change Username

                </button>

                {/* CHANGE PASSWORD */}
                <button className="flex items-center gap-4 bg-white/5 hover:bg-white/10 transition-all px-4 py-4 rounded-2xl text-white">

                  <KeyRound size={20} />

                  Change Password

                </button>

                {/* LOGOUT */}
                <button
                  onClick={() => {

                    document.cookie =
                      "admin-auth=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;";

                    window.location.href =
                      "/admin/login";

                  }}
                  className="flex items-center gap-4 bg-red-600 hover:bg-red-700 transition-all px-4 py-4 rounded-2xl text-white"
                >

                  <LogOut size={20} />

                  Logout

                </button>

              </div>

            </div>

          )}

        </div>

      </div>

    </div>
  );
}