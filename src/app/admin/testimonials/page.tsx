"use client";

import {
  useEffect,
  useState,
} from "react";

export default function TestimonialsPage() {

  const [testimonials, setTestimonials] =
    useState<any[]>([]);

  const [uploading, setUploading] =
    useState(false);

  const [form, setForm] =
    useState({

      name: "",

      company: "",

      review: "",

      rating: 5,

      image: "",

    });

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

  function handleChange(
    e: any
  ) {

    setForm({

      ...form,

      [e.target.name]:
        e.target.value,

    });
  }

  async function handleImageUpload(
    e: any
  ) {

    const file =
      e.target.files?.[0];

    if (!file) return;

    setUploading(true);

    const formData =
      new FormData();

    formData.append(
      "file",
      file
    );

    const res = await fetch(
      "/api/upload",
      {

        method: "POST",

        body: formData,

      }
    );

    const data =
      await res.json();

    setForm({

      ...form,

      image: data.url,

    });

    setUploading(false);

    alert(
      "Image Uploaded 😎🔥"
    );
  }

  async function handleSubmit(
    e: any
  ) {

    e.preventDefault();

    const res = await fetch(
      "/api/testimonials",
      {

        method: "POST",

        headers: {
          "Content-Type":
            "application/json",
        },

        body: JSON.stringify(
          form
        ),

      }
    );

    if (res.ok) {

      alert(
        "Testimonial Added 😎🔥"
      );

      setForm({

        name: "",

        company: "",

        review: "",

        rating: 5,

        image: "",

      });

      fetchTestimonials();

    }
  }

  async function handleDelete(
    id: string
  ) {

    const confirmDelete =
      confirm(
        "Delete testimonial?"
      );

    if (!confirmDelete)
      return;

    const res = await fetch(
      "/api/testimonials",
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

      alert(
        "Deleted 😎🔥"
      );

      fetchTestimonials();

    }
  }

  return (

    <div className="min-h-screen text-white">

      {/* TOP */}
      <div className="mb-10">

        <h1 className="text-5xl font-bold mb-4">

          Testimonials CMS

        </h1>

        <p className="text-white/50 text-lg">

          Manage client reviews and ratings.

        </p>

      </div>

      {/* FORM */}
      <form
        onSubmit={
          handleSubmit
        }
        className="bg-white/5 border border-white/10 rounded-[32px] p-8 mb-10 grid lg:grid-cols-2 gap-6"
      >

        {/* NAME */}
        <input
          type="text"
          name="name"
          placeholder="Client Name"
          value={form.name}
          onChange={
            handleChange
          }
          className="bg-black/20 border border-white/10 rounded-2xl p-4"
        />

        {/* COMPANY */}
        <input
          type="text"
          name="company"
          placeholder="Company"
          value={form.company}
          onChange={
            handleChange
          }
          className="bg-black/20 border border-white/10 rounded-2xl p-4"
        />

        {/* RATING */}
        <input
          type="number"
          name="rating"
          placeholder="Rating"
          value={form.rating}
          onChange={
            handleChange
          }
          className="bg-black/20 border border-white/10 rounded-2xl p-4"
        />

        {/* IMAGE */}
        <div>

          <input
            type="file"
            accept="image/*"
            onChange={
              handleImageUpload
            }
            className="bg-black/20 border border-white/10 rounded-2xl p-4 w-full"
          />

          {uploading && (

            <p className="text-cyan-400 mt-3">

              Uploading...

            </p>

          )}

        </div>

        {/* PREVIEW */}
        {form.image && (

          <img
            src={form.image}
            alt="preview"
            className="w-24 h-24 rounded-2xl object-cover"
          />

        )}

        {/* REVIEW */}
        <textarea
          name="review"
          placeholder="Client Review"
          value={form.review}
          onChange={
            handleChange
          }
          rows={6}
          className="bg-black/20 border border-white/10 rounded-2xl p-4 lg:col-span-2"
        />

        {/* BUTTON */}
        <button
          type="submit"
          className="bg-gradient-to-r from-purple-600 to-cyan-500 rounded-2xl p-4 font-semibold lg:col-span-2"
        >

          Add Testimonial

        </button>

      </form>

      {/* LIST */}
      <div className="grid xl:grid-cols-2 gap-8">

        {testimonials.map(
          (
            item: any
          ) => (

            <div
              key={item._id}
              className="bg-white/5 border border-white/10 rounded-[32px] p-6"
            >

              <div className="flex items-center gap-5 mb-5">

                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 rounded-2xl object-cover"
                />

                <div>

                  <h2 className="text-2xl font-bold">

                    {item.name}

                  </h2>

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
                  (_, index) => (

                    <span
                      key={index}
                      className="text-yellow-400 text-2xl"
                    >

                      ★

                    </span>

                  )
                )}

              </div>

              {/* REVIEW */}
              <p className="text-white/70 leading-relaxed mb-6">

                {item.review}

              </p>

              {/* DELETE */}
              <button
                onClick={() =>
                  handleDelete(
                    item._id
                  )
                }
                className="bg-red-600 hover:bg-red-700 transition-all px-5 py-3 rounded-2xl"
              >

                Delete

              </button>

            </div>

          )
        )}

      </div>

    </div>
  );
}