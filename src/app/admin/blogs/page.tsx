"use client";

import {
  useEffect,
  useState,
} from "react";

export default function AdminBlogsPage() {

  const [blogs, setBlogs] =
    useState<any[]>([]);

  const [uploading, setUploading] =
    useState(false);

  const [editingId, setEditingId] =
    useState<string | null>(null);

  const [form, setForm] = useState({
    title: "",
    slug: "",
    description: "",
    content: "",
    image: "",
    category: "",
  });

  async function fetchBlogs() {

    const res = await fetch("/api/blogs");

    const data = await res.json();

    setBlogs(
      Array.isArray(data) ? data : []
    );
  }

  useEffect(() => {
    fetchBlogs();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) => {

    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

  };

  async function handleImageUpload(
    e: React.ChangeEvent<HTMLInputElement>
  ) {

    const file = e.target.files?.[0];

    if (!file) return;

    setUploading(true);

    const formData = new FormData();

    formData.append("file", file);

    const res = await fetch("/api/upload", {

      method: "POST",

      body: formData,

    });

    const data = await res.json();

    setForm({
      ...form,
      image: data.url,
    });

    setUploading(false);

    alert("Image Uploaded 😎🔥");
  }

  const handleSubmit = async (
    e: React.FormEvent
  ) => {

    e.preventDefault();

    const method =
      editingId ? "PUT" : "POST";

    const res = await fetch(
      "/api/blogs",
      {

        method,

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          ...form,
          id: editingId,
        }),

      }
    );

    if (res.ok) {

      alert(
        editingId
          ? "Blog Updated 😎🔥"
          : "Blog Created 😎🔥"
      );

      setForm({
        title: "",
        slug: "",
        description: "",
        content: "",
        image: "",
        category: "",
      });

      setEditingId(null);

      fetchBlogs();

    } else {

      alert("Something went wrong 😭");

    }
  };

  async function handleDelete(id: string) {

    const confirmDelete = confirm(
      "Delete this blog?"
    );

    if (!confirmDelete) return;

    const res = await fetch("/api/blogs", {

      method: "DELETE",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        id,
      }),

    });

    if (res.ok) {

      alert("Blog Deleted 😎🔥");

      fetchBlogs();

    } else {

      alert("Delete Failed 😭");

    }
  }

  return (

    <div className="min-h-screen bg-black text-white p-10">

      <h1 className="text-5xl font-bold mb-10">
        Admin Blog Panel
      </h1>

      {/* FORM */}
      <form
        onSubmit={handleSubmit}
        className="grid gap-6 max-w-3xl mb-20"
      >

        {/* TITLE */}
        <input
          type="text"
          name="title"
          placeholder="Blog Title"
          value={form.title}
          onChange={handleChange}
          className="bg-white/10 border border-white/10 rounded-xl p-4"
        />

        {/* SLUG */}
        <input
          type="text"
          name="slug"
          placeholder="blog-slug"
          value={form.slug}
          onChange={handleChange}
          className="bg-white/10 border border-white/10 rounded-xl p-4"
        />

        {/* DESCRIPTION */}
        <input
          type="text"
          name="description"
          placeholder="Short Description"
          value={form.description}
          onChange={handleChange}
          className="bg-white/10 border border-white/10 rounded-xl p-4"
        />

        {/* IMAGE UPLOAD */}
        <div className="grid gap-3">

          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="bg-white/10 border border-white/10 rounded-xl p-4"
          />

          {uploading && (

            <p className="text-cyan-400">
              Uploading Image...
            </p>

          )}

          {form.image && (

            <img
              src={form.image}
              alt="Preview"
              className="w-full h-[250px] object-cover rounded-2xl"
            />

          )}

        </div>

        {/* CATEGORY */}
        <input
          type="text"
          name="category"
          placeholder="Category"
          value={form.category}
          onChange={handleChange}
          className="bg-white/10 border border-white/10 rounded-xl p-4"
        />

        {/* CONTENT */}
        <textarea
          name="content"
          placeholder="Blog Content"
          value={form.content}
          onChange={handleChange}
          rows={10}
          className="bg-white/10 border border-white/10 rounded-xl p-4"
        />

        {/* BUTTON */}
        <button
          type="submit"
          className="bg-gradient-to-r from-purple-600 to-cyan-500 p-4 rounded-xl font-semibold"
        >
          {editingId
            ? "Update Blog"
            : "Create Blog"}
        </button>

      </form>

      {/* BLOG LIST */}
      <div className="grid gap-6">

        {blogs.map((blog: any) => (

          <div
            key={blog._id}
            className="bg-white/5 border border-white/10 rounded-2xl p-6"
          >

            {/* IMAGE */}
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-[250px] object-cover rounded-2xl mb-5"
            />

            {/* TITLE */}
            <h2 className="text-2xl font-bold mb-2">
              {blog.title}
            </h2>

            {/* DESCRIPTION */}
            <p className="text-white/60 mb-3">
              {blog.description}
            </p>

            {/* TAGS */}
            <div className="flex gap-3 text-sm flex-wrap mb-5">

              <span className="bg-purple-600/20 px-3 py-1 rounded-full">
                {blog.category}
              </span>

              <span className="bg-cyan-500/20 px-3 py-1 rounded-full">
                {blog.slug}
              </span>

            </div>

            {/* ACTION BUTTONS */}
            <div className="flex gap-3">

              {/* EDIT */}
              <button
                onClick={() => {

                  setEditingId(blog._id);

                  setForm({
                    title: blog.title,
                    slug: blog.slug,
                    description: blog.description,
                    content: blog.content,
                    image: blog.image,
                    category: blog.category,
                  });

                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  });

                }}
                className="bg-cyan-600 hover:bg-cyan-700 transition-all px-5 py-2 rounded-xl"
              >
                Edit
              </button>

              {/* DELETE */}
              <button
                onClick={() =>
                  handleDelete(blog._id)
                }
                className="bg-red-600 hover:bg-red-700 transition-all px-5 py-2 rounded-xl"
              >
                Delete
              </button>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}