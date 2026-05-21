"use client";

import {
  useState,
} from "react";

import {
  useRouter,
} from "next/navigation";

export default function AdminLoginPage() {

  const router =
    useRouter();

  const [username, setUsername] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  async function handleLogin(
    e: any
  ) {

    e.preventDefault();

    setLoading(true);

    // SIMPLE LOGIN
    if (

      username === "admin" &&

      password === "admin123"

    ) {

      document.cookie =
        "admin-auth=true; path=/";

      router.push("/admin");

    } else {

      alert(
        "Wrong credentials 😭"
      );

    }

    setLoading(false);
  }

  return (

    <div className="min-h-screen bg-black flex items-center justify-center px-6">

      <div className="w-full max-w-[500px] bg-white/5 border border-white/10 rounded-[40px] p-10">

        {/* TOP */}
        <div className="text-center mb-10">

          <div className="w-24 h-24 rounded-[30px] bg-gradient-to-r from-purple-600 to-cyan-500 flex items-center justify-center text-5xl font-bold mx-auto mb-6 shadow-2xl shadow-cyan-500/20">

            S

          </div>

          <h1 className="text-5xl font-bold text-white mb-4">

            Admin Login

          </h1>

          <p className="text-white/50 text-lg">

            Secure access to SaktiTechLab CMS 😎🔥

          </p>

        </div>

        {/* FORM */}
        <form
          onSubmit={
            handleLogin
          }
          className="grid gap-6"
        >

          {/* USERNAME */}
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) =>
              setUsername(
                e.target.value
              )
            }
            className="bg-black/20 border border-white/10 rounded-2xl p-5 text-white outline-none"
          />

          {/* PASSWORD */}
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) =>
              setPassword(
                e.target.value
              )
            }
            className="bg-black/20 border border-white/10 rounded-2xl p-5 text-white outline-none"
          />

          {/* BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className="bg-gradient-to-r from-purple-600 to-cyan-500 rounded-2xl p-5 text-lg font-semibold hover:scale-[1.02] transition-all"
          >

            {loading
              ? "Logging in..."
              : "Login"}

          </button>

        </form>

        {/* DEMO */}
        <div className="mt-8 text-center text-white/40 text-sm">

          Username: admin <br />

          Password: admin123

        </div>

      </div>

    </div>
  );
}