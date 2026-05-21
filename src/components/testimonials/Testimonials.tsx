"use client";

import {
  useEffect,
  useState,
} from "react";

export default function Testimonials() {

  const [testimonials, setTestimonials] =
    useState<any[]>([]);

  async function fetchTestimonials() {

    try {

      const res = await fetch(
        "/api/testimonials"
      );

      const data =
        await res.json();

      setTestimonials(
        Array.isArray(data)
          ? data
          : []
      );

    } catch (error) {

      console.log(error);

    }
  }

  useEffect(() => {
    fetchTestimonials();
  }, []);

  return (

    <section className="py-24 overflow-hidden text-white">

      <div className="max-w-7xl mx-auto px-6">

        {/* TOP */}
        <div className="text-center mb-16">

          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-5 py-2 rounded-full mb-6">

            💬 Testimonials

          </div>

          <h2 className="text-5xl md:text-7xl font-bold mb-6">

            What Clients

            <span className="bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent">

              {" "}Say

            </span>

          </h2>

          <p className="text-white/50 text-lg max-w-2xl mx-auto">

            Real reviews from startups and businesses we worked with.

          </p>

        </div>

      </div>

      {/* SLIDER */}
      <div className="relative">

        <div className="flex gap-8 animate-[scroll_35s_linear_infinite] w-max">

          {[...testimonials,
            ...testimonials,
          ].map(
            (
              item: any,
              index: number
            ) => (

              <div
                key={index}
                className="w-[420px] bg-white/5 border border-white/10 rounded-[32px] p-8 backdrop-blur-xl"
              >

                {/* USER */}
                <div className="flex items-center gap-5 mb-6">

                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 rounded-2xl object-cover"
                  />

                  <div>

                    <h3 className="text-2xl font-bold">

                      {item.name}

                    </h3>

                    <p className="text-white/50">

                      {item.company}

                    </p>

                  </div>

                </div>

                {/* STARS */}
                <div className="flex gap-1 mb-5">

                  {Array.from({
                    length:
                      item.rating,
                  }).map(
                    (_, i) => (

                      <span
                        key={i}
                        className="text-yellow-400 text-2xl"
                      >

                        ★

                      </span>

                    )
                  )}

                </div>

                {/* REVIEW */}
                <p className="text-white/70 leading-relaxed text-lg">

                  "{item.review}"

                </p>

              </div>

            )
          )}

        </div>

      </div>

      {/* STYLE */}
      <style jsx>{`

        @keyframes scroll {

          0% {
            transform:
              translateX(0);
          }

          100% {
            transform:
              translateX(-50%);
          }

        }

      `}</style>

    </section>
  );
}