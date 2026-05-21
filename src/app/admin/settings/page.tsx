"use client";

import {
  useEffect,
  useState,
} from "react";

export default function SettingsPage() {

  const [loading, setLoading] =
    useState(true);

  const [saving, setSaving] =
    useState(false);

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

      setLoading(false);

    } catch (error) {

      console.log(error);

      setLoading(false);

    }
  }

  useEffect(() => {
    fetchSettings();
  }, []);

  function handleStatChange(
    index: number,
    field: string,
    value: string
  ) {

    const updatedStats = [
      ...settings.stats,
    ];

    updatedStats[index][field] =
      value;

    setSettings({

      ...settings,

      stats: updatedStats,

    });
  }

  function handleSocialChange(
    index: number,
    field: string,
    value: string
  ) {

    const updatedSocial = [
      ...settings.socialLinks,
    ];

    updatedSocial[index][field] =
      value;

    setSettings({

      ...settings,

      socialLinks:
        updatedSocial,

    });
  }

  async function saveSettings() {

    setSaving(true);

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

    setSaving(false);

    if (res.ok) {

      alert(
        "Settings Updated 😎🔥"
      );

    } else {

      alert(
        "Failed 😭"
      );

    }
  }

  if (loading) {

    return (

      <div className="text-white text-2xl">

        Loading...

      </div>

    );
  }

  return (

    <div className="min-h-screen text-white">

      {/* TOP */}
      <div className="mb-12">

        <h1 className="text-5xl font-bold mb-4">

          Website Settings

        </h1>

        <p className="text-white/50 text-lg">

          Manage website stats,
          social links and contact details.

        </p>

      </div>

      {/* STATS */}
      <div className="bg-white/5 border border-white/10 rounded-[32px] p-8 mb-10">

        <h2 className="text-3xl font-bold mb-8">

          Website Stats

        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          {settings.stats.map(
            (
              stat: any,
              index: number
            ) => (

              <div
                key={index}
                className="bg-black/20 border border-white/10 rounded-2xl p-5"
              >

                <input
                  type="text"
                  value={stat.label}
                  onChange={(e) =>
                    handleStatChange(
                      index,
                      "label",
                      e.target.value
                    )
                  }
                  placeholder="Label"
                  className="w-full bg-white/5 border border-white/10 rounded-xl p-4 mb-4"
                />

                <input
                  type="text"
                  value={stat.value}
                  onChange={(e) =>
                    handleStatChange(
                      index,
                      "value",
                      e.target.value
                    )
                  }
                  placeholder="Value"
                  className="w-full bg-white/5 border border-white/10 rounded-xl p-4"
                />

              </div>

            )
          )}

        </div>

      </div>

      {/* SOCIAL LINKS */}
      <div className="bg-white/5 border border-white/10 rounded-[32px] p-8 mb-10">

        <h2 className="text-3xl font-bold mb-8">

          Social Links

        </h2>

        <div className="grid gap-6">

          {settings.socialLinks.map(
            (
              social: any,
              index: number
            ) => (

              <div
                key={index}
                className="grid md:grid-cols-2 gap-4 bg-black/20 border border-white/10 rounded-2xl p-5"
              >

                <input
                  type="text"
                  value={social.name}
                  onChange={(e) =>
                    handleSocialChange(
                      index,
                      "name",
                      e.target.value
                    )
                  }
                  placeholder="Platform"
                  className="bg-white/5 border border-white/10 rounded-xl p-4"
                />

                <input
                  type="text"
                  value={social.url}
                  onChange={(e) =>
                    handleSocialChange(
                      index,
                      "url",
                      e.target.value
                    )
                  }
                  placeholder="URL"
                  className="bg-white/5 border border-white/10 rounded-xl p-4"
                />

              </div>

            )
          )}

        </div>

      </div>

      {/* CONTACT */}
      <div className="bg-white/5 border border-white/10 rounded-[32px] p-8 mb-10">

        <h2 className="text-3xl font-bold mb-8">

          Contact Info

        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          <input
            type="text"
            value={
              settings.whatsappNumber
            }
            onChange={(e) =>
              setSettings({

                ...settings,

                whatsappNumber:
                  e.target.value,

              })
            }
            placeholder="WhatsApp"
            className="bg-white/5 border border-white/10 rounded-xl p-4"
          />

          <input
            type="email"
            value={settings.email}
            onChange={(e) =>
              setSettings({

                ...settings,

                email:
                  e.target.value,

              })
            }
            placeholder="Email"
            className="bg-white/5 border border-white/10 rounded-xl p-4"
          />

          <input
            type="text"
            value={
              settings.websiteUrl
            }
            onChange={(e) =>
              setSettings({

                ...settings,

                websiteUrl:
                  e.target.value,

              })
            }
            placeholder="Website URL"
            className="bg-white/5 border border-white/10 rounded-xl p-4 md:col-span-2"
          />

        </div>

      </div>

      {/* SAVE */}
      <button
        onClick={saveSettings}
        disabled={saving}
        className="bg-gradient-to-r from-purple-600 to-cyan-500 px-8 py-5 rounded-2xl font-semibold text-lg"
      >

        {saving
          ? "Saving..."
          : "Save Settings"}

      </button>

    </div>
  );
}