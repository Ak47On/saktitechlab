"use client";

import {
  useEffect,
  useState,
} from "react";

export default function AdminFAQPage() {

  const [faqs, setFaqs] =
    useState<any[]>([]);

  const [question, setQuestion] =
    useState("");

  const [answer, setAnswer] =
    useState("");

  async function fetchFAQs() {

    const res = await fetch("/api/faq");

    const data = await res.json();

    setFaqs(
      Array.isArray(data) ? data : []
    );
  }

  useEffect(() => {
    fetchFAQs();
  }, []);

  async function handleSubmit(
    e: React.FormEvent
  ) {

    e.preventDefault();

    const res = await fetch(
      "/api/faq",
      {

        method: "POST",

        headers: {
          "Content-Type":
            "application/json",
        },

        body: JSON.stringify({
          question,
          answer,
        }),

      }
    );

    if (res.ok) {

      alert("FAQ Added 😎🔥");

      setQuestion("");

      setAnswer("");

      fetchFAQs();

    } else {

      alert("Failed 😭");

    }
  }

  async function handleDelete(
    id: string
  ) {

    const confirmDelete = confirm(
      "Delete FAQ?"
    );

    if (!confirmDelete) return;

    const res = await fetch(
      "/api/faq",
      {

        method: "DELETE",

        headers: {
          "Content-Type":
            "application/json",
        },

        body: JSON.stringify({
          id,
        }),

      }
    );

    if (res.ok) {

      alert("FAQ Deleted 😎🔥");

      fetchFAQs();

    }
  }

  return (

    <div className="min-h-screen bg-black text-white p-10">

      <h1 className="text-5xl font-bold mb-10">
        FAQ Admin Panel
      </h1>

      {/* FORM */}
      <form
        onSubmit={handleSubmit}
        className="grid gap-6 max-w-3xl mb-20"
      >

        {/* QUESTION */}
        <input
          type="text"
          placeholder="Question"
          value={question}
          onChange={(e) =>
            setQuestion(
              e.target.value
            )
          }
          className="bg-white/10 border border-white/10 rounded-xl p-4"
        />

        {/* ANSWER */}
        <textarea
          placeholder="Answer"
          value={answer}
          onChange={(e) =>
            setAnswer(
              e.target.value
            )
          }
          rows={6}
          className="bg-white/10 border border-white/10 rounded-xl p-4"
        />

        {/* BUTTON */}
        <button
          type="submit"
          className="bg-gradient-to-r from-purple-600 to-cyan-500 p-4 rounded-xl font-semibold"
        >
          Add FAQ
        </button>

      </form>

      {/* FAQ LIST */}
      <div className="grid gap-6">

        {faqs.map((faq: any) => (

          <div
            key={faq._id}
            className="bg-white/5 border border-white/10 rounded-2xl p-6"
          >

            <h2 className="text-2xl font-bold mb-3">
              {faq.question}
            </h2>

            <p className="text-white/60 leading-relaxed mb-5">
              {faq.answer}
            </p>

            <button
              onClick={() =>
                handleDelete(
                  faq._id
                )
              }
              className="bg-red-600 hover:bg-red-700 transition-all px-5 py-2 rounded-xl"
            >
              Delete
            </button>

          </div>

        ))}

      </div>

    </div>
  );
}