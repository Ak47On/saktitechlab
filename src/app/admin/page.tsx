"use client";

import {
  useEffect,
  useState,
} from "react";

import {
  FolderKanban,
  Users,
  Star,
  Briefcase,
} from "lucide-react";

export default function AdminDashboard() {

  const [settings, setSettings] =
    useState<any>(null);

  async function fetchSettings() {

    try {

      const res = await fetch(
        "/api/settings"
      );

      const data =
        await res.json();

      setSettings(data);

    } catch (error) {

      console.log(error);

    }
  }

  useEffect(() => {
    fetchSettings();
  }, []);

  const icons = [

    FolderKanban,

    Users,

    Briefcase,

    Star,

  ];

  if (!settings) {

    return (

      <div className="text-white text-3xl">

        Loading...

      </div>

    );
  }

  return (

    <div className="min-h-screen text-white">

      {/* HERO */}
      <div className="bg-white/5 border border-white/10 rounded-[40px] p-10 mb-10">

        <h1 className="text-6xl font-bold mb-5">

          Welcome Back

          <span className="bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent">

            {" "}Admin 😎🔥

          </span>

        </h1>

        <p className="text-white/50 text-lg max-w-3xl mb-10">

          Control your entire website from one powerful CMS dashboard.

        </p>

        {/* SERVICES */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

          {/* MongoDB */}
          <a
            href="https://cloud.mongodb.com"
            target="_blank"
            className="bg-black/20 border border-white/10 rounded-3xl p-6 hover:bg-white/10 transition-all"
          >

            <div className="text-5xl mb-5">
              🍃
            </div>

            <h2 className="text-2xl font-bold mb-2">

              MongoDB

            </h2>

            <p className="text-green-400">

              Connected

            </p>

          </a>

          {/* Cloudinary */}
          <a
            href="https://cloudinary.com"
            target="_blank"
            className="bg-black/20 border border-white/10 rounded-3xl p-6 hover:bg-white/10 transition-all"
          >

            <div className="text-5xl mb-5">
              ☁️
            </div>

            <h2 className="text-2xl font-bold mb-2">

              Cloudinary

            </h2>

            <p className="text-cyan-400">

              Active Uploads

            </p>

          </a>

          {/* Mail */}
          <div className="bg-black/20 border border-white/10 rounded-3xl p-6">

            <div className="text-5xl mb-5">
              📩
            </div>

            <h2 className="text-2xl font-bold mb-2">

              Mail System

            </h2>

            <p className="text-purple-400">

              Connected

            </p>

          </div>

          {/* Website */}
          <a
            href={settings.websiteUrl}
            target="_blank"
            className="bg-gradient-to-r from-purple-600/20 to-cyan-500/20 border border-cyan-500/20 rounded-3xl p-6 hover:scale-[1.02] transition-all"
          >

            <div className="text-5xl mb-5">
              🌐
            </div>

            <h2 className="text-2xl font-bold mb-2">

              SaktiTechLab

            </h2>

            <p className="text-cyan-400">

              Live Website

            </p>

          </a>

        </div>

      </div>

      {/* STATS CMS */}
      <div className="mb-10">

        <div className="flex items-center justify-between mb-8">

          <h2 className="text-4xl font-bold">

            Website Stats CMS

          </h2>

          <button
            onClick={async () => {

              const res = await fetch(
                "/api/settings",
                {

                  method: "PUT",

                  headers: {
                    "Content-Type":
                      "application/json",
                  },

                  body: JSON.stringify(
                    settings
                  ),

                }
              );

              if (res.ok) {

                alert(
                  "Stats Updated 😎🔥"
                );

              }

            }}
            className="bg-gradient-to-r from-purple-600 to-cyan-500 px-6 py-3 rounded-2xl font-medium"
          >

            Save Stats

          </button>

        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

          {settings.stats.map(
            (
              stat: any,
              index: number
            ) => {

              const Icon =
                icons[index] ||
                FolderKanban;

              return (

                <div
                  key={index}
                  className="bg-white/5 border border-white/10 rounded-[32px] p-8 hover:bg-white/10 transition-all"
                >

                  <div className="w-16 h-16 rounded-3xl bg-gradient-to-r from-purple-600 to-cyan-500 flex items-center justify-center mb-8">

                    <Icon size={30} />

                  </div>

                  {/* VALUE */}
                  <input
                    type="text"
                    value={stat.value}
                    onChange={(e) => {

                      const updatedStats =
                        [...settings.stats];

                      updatedStats[index]
                        .value =
                        e.target.value;

                      setSettings({

                        ...settings,

                        stats:
                          updatedStats,

                      });

                    }}
                    className="w-full bg-transparent text-5xl font-bold outline-none mb-3"
                  />

                  {/* LABEL */}
                  <input
                    type="text"
                    value={stat.label}
                    onChange={(e) => {

                      const updatedStats =
                        [...settings.stats];

                      updatedStats[index]
                        .label =
                        e.target.value;

                      setSettings({

                        ...settings,

                        stats:
                          updatedStats,

                      });

                    }}
                    className="w-full bg-transparent text-white/50 text-lg outline-none"
                  />

                </div>

              );
            }
          )}

        </div>

      </div>

      {/* SOCIAL LINKS */}
<div className="mt-14">

  <div className="flex items-center justify-between mb-8">

    <h2 className="text-4xl font-bold">

      Social Links CMS

    </h2>

    <button
      onClick={async () => {

        const res = await fetch(
          "/api/settings",
          {

            method: "PUT",

            headers: {
              "Content-Type":
                "application/json",
            },

            body: JSON.stringify(
              settings
            ),

          }
        );

        if (res.ok) {

          alert(
            "Social Links Updated 😎🔥"
          );

        }

      }}
      className="bg-gradient-to-r from-purple-600 to-cyan-500 px-6 py-3 rounded-2xl font-medium"
    >

      Save Links

    </button>

  </div>

  {/* ADD BUTTON */}
  <button
    onClick={() => {

      setSettings({

        ...settings,

        socialLinks: [

          ...settings.socialLinks,

          {

            name: "",

            url: "",

            logo: "",

          },

        ],

      });

    }}
    className="mb-8 bg-white/10 hover:bg-white/20 transition-all px-5 py-3 rounded-2xl"
  >

    + Add Social Link

  </button>

  <div className="grid gap-5">

    {settings.socialLinks.map(
      (
        social: any,
        index: number
      ) => (

        <div
          key={index}
          className="bg-white/5 border border-white/10 rounded-3xl p-5 flex flex-col lg:flex-row gap-5 items-start lg:items-center"
        >

          {/* LOGO */}
          <div className="w-16 h-16 rounded-2xl bg-black/20 border border-white/10 overflow-hidden flex items-center justify-center">

            {social.logo ? (

              <img
                src={social.logo}
                alt={social.name}
                className="w-full h-full object-cover"
              />

            ) : (

              <span className="text-white/30 text-sm">

                Logo

              </span>

            )}

          </div>

          {/* UPLOAD */}
          <input
            type="file"
            accept="image/*"
            onChange={async (e) => {

              const file =
                e.target.files?.[0];

              if (!file) return;

              const formData =
                new FormData();

              formData.append(
                "file",
                file
              );

              const res =
                await fetch(
                  "/api/upload",
                  {

                    method:
                      "POST",

                    body:
                      formData,

                  }
                );

              const data =
                await res.json();

              const updatedLinks =
                [
                  ...settings.socialLinks,
                ];

              updatedLinks[index]
                .logo =
                data.url;

              setSettings({

                ...settings,

                socialLinks:
                  updatedLinks,

              });

            }}
            className="text-sm"
          />

          {/* TITLE */}
          <input
            type="text"
            value={social.name}
            placeholder="Instagram"
            onChange={(e) => {

              const updatedLinks =
                [
                  ...settings.socialLinks,
                ];

              updatedLinks[index]
                .name =
                e.target.value;

              setSettings({

                ...settings,

                socialLinks:
                  updatedLinks,

              });

            }}
            className="flex-1 bg-black/20 border border-white/10 rounded-2xl p-4 outline-none"
          />

          {/* URL */}
          <input
            type="text"
            value={social.url}
            placeholder="https://instagram.com"
            onChange={(e) => {

              const updatedLinks =
                [
                  ...settings.socialLinks,
                ];

              updatedLinks[index]
                .url =
                e.target.value;

              setSettings({

                ...settings,

                socialLinks:
                  updatedLinks,

              });

            }}
            className="flex-1 bg-black/20 border border-white/10 rounded-2xl p-4 outline-none"
          />

          {/* DELETE */}
          <button
            onClick={() => {

              const updatedLinks =
                settings.socialLinks.filter(
                  (
                    _: any,
                    i: number
                  ) =>
                    i !== index
                );

              setSettings({

                ...settings,

                socialLinks:
                  updatedLinks,

              });

            }}
            className="bg-red-600 hover:bg-red-700 transition-all px-5 py-3 rounded-2xl"
          >

            Delete

          </button>

        </div>

      )
    )}

  </div>

</div>

    </div>
  );
}