"use client";

import {
  useEffect,
  useState,
} from "react";

import {
  MessageCircle,
} from "lucide-react";

export default function FloatingWhatsapp() {

  const [number, setNumber] =
    useState("");

  async function fetchSettings() {

    try {

      const res = await fetch(
        "/api/settings"
      );

      const data =
        await res.json();

      setNumber(
        data.whatsappNumber
      );

    } catch (error) {

      console.log(error);

    }
  }

  useEffect(() => {
    fetchSettings();
  }, []);

  return (

    <a
      href={`https://wa.me/${number}`}
      target="_blank"
      className="fixed bottom-6 right-6 z-[999] w-16 h-16 rounded-full bg-green-500 hover:scale-110 transition-all duration-300 shadow-2xl shadow-green-500/40 flex items-center justify-center"
    >

      <MessageCircle
        size={32}
        className="text-white"
      />

    </a>
  );
}