"use client";

import { useState } from "react";

export default function ContactForm() {

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {

    e.preventDefault();

    setLoading(true);

    const form = e.currentTarget;

    const data = new FormData(form);

    const response = await fetch(
      "https://formspree.io/f/mykvgvpp",
      {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      }
    );

    if (response.ok) {
      setSuccess(true);
      form.reset();
    }

    setLoading(false);
  }

  return (
    <section
      id="contact"
      className="relative pt-4 pb-20 md:pt-8 md:pb-24 overflow-hidden"
    >

      <div className="container-width relative z-10">

        <div className="glass rounded-[32px] p-8 md:p-12">

          {/* Heading */}
          <div className="max-w-2xl mb-12">

            <div className="glass inline-flex px-4 py-2 rounded-full text-sm text-white/70 mb-3">
              🚀 Contact Us
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight mb-3">

              Let's Build Something

              <span className="gradient-text block">
                Amazing Together
              </span>

            </h2>

            <p className="text-white/60 text-lg leading-relaxed mb-5">
              Tell us about your project and we’ll help
              bring your vision to life.
            </p>

          </div>

          {/* Form */}
          <form
            action="https://formspree.io/f/mldnbjpo"
            method="POST"
            className="grid gap-6"
          >

            <input
              type="text"
              name="name"
              required
              placeholder="Your Name"
              className="glass px-5 py-4 rounded-2xl outline-none bg-transparent"
            />

            <input
              type="email"
              name="email"
              required
              placeholder="Your Email"
              className="glass px-5 py-4 rounded-2xl outline-none bg-transparent"
            />

            <input
              type="text"
              name="company"
              placeholder="Business Name"
              className="glass px-5 py-4 rounded-2xl outline-none bg-transparent md:col-span-2"
            />

            <textarea
              name="message"
              required
              placeholder="Tell us about your project..."
              rows={6}
              className="glass px-5 py-4 rounded-2xl outline-none bg-transparent md:col-span-2 resize-none"
            />

            <button
              type="submit"
              className="bg-gradient-to-r from-purple-600 to-cyan-500 rounded-2xl p-5 font-semibold text-lg"
            >

              Send Message

            </button>

          </form>

        </div>

      </div>

    </section>
  );
}