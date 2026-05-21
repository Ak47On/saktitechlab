"use client";

import {
  useEffect,
  useState,
} from "react";

export default function AdminProjectsPage() {

  const [projects, setProjects] =
    useState<any[]>([]);

  const [uploading, setUploading] =
    useState(false);

  const [editingId, setEditingId] =
    useState<string | null>(null);

  const [form, setForm] = useState({

    title: "",

    slug: "",

    category: "",

    description: "",

    image: "",

    liveLink: "",

    githubLink: "",

    techStack: "",

    features: "",

    whatsappNumber: "",

    previewType: "image",

  });

  async function fetchProjects() {

    const res = await fetch(
      "/api/portfolio"
    );

    const data =
      await res.json();

    setProjects(
      Array.isArray(data)
        ? data
        : []
    );
  }

  useEffect(() => {
    fetchProjects();
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

    const method =
      editingId
        ? "PUT"
        : "POST";

    const res = await fetch(
      "/api/portfolio",
      {

        method,

        headers: {
          "Content-Type":
            "application/json",
        },

        body: JSON.stringify({

          ...form,

          id: editingId,

          techStack:
            form.techStack
              .split(","),

          features:
            form.features
              .split(","),

        }),

      }
    );

    if (res.ok) {

      alert(
        editingId
          ? "Project Updated 😎🔥"
          : "Project Added 😎🔥"
      );

      setForm({

        title: "",

        slug: "",

        category: "",

        description: "",

        image: "",

        liveLink: "",

        githubLink: "",

        techStack: "",

        features: "",

        whatsappNumber: "",

        previewType:
          "image",

      });

      setEditingId(null);

      fetchProjects();

    } else {

      alert(
        "Something went wrong 😭"
      );

    }
  }

  async function handleDelete(
    id: string
  ) {

    const confirmDelete =
      confirm(
        "Delete project?"
      );

    if (!confirmDelete)
      return;

    const res = await fetch(
      "/api/portfolio",
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
        "Project Deleted 😎🔥"
      );

      fetchProjects();

    }
  }

  return (

    <div className="min-h-screen text-white">

      {/* TOP */}
      <div className="mb-12">

        <h1 className="text-5xl font-bold mb-4">

          Portfolio CMS

        </h1>

        <p className="text-white/50 text-lg">

          Manage projects,
          previews, links and tech stacks.

        </p>

      </div>

      {/* FORM */}
      <form
        onSubmit={
          handleSubmit
        }
        className="grid lg:grid-cols-2 gap-6 mb-20"
      >

        <input
          type="text"
          name="title"
          placeholder="Project Title"
          value={form.title}
          onChange={
            handleChange
          }
          className="bg-white/5 border border-white/10 rounded-2xl p-4"
        />

        <input
          type="text"
          name="slug"
          placeholder="project-slug"
          value={form.slug}
          onChange={
            handleChange
          }
          className="bg-white/5 border border-white/10 rounded-2xl p-4"
        />

        <input
          type="text"
          name="category"
          placeholder="Category"
          value={form.category}
          onChange={
            handleChange
          }
          className="bg-white/5 border border-white/10 rounded-2xl p-4"
        />

        <input
          type="text"
          name="liveLink"
          placeholder="Live Preview URL"
          value={form.liveLink}
          onChange={
            handleChange
          }
          className="bg-white/5 border border-white/10 rounded-2xl p-4"
        />

        <input
          type="text"
          name="githubLink"
          placeholder="Source Code URL"
          value={form.githubLink}
          onChange={
            handleChange
          }
          className="bg-white/5 border border-white/10 rounded-2xl p-4"
        />

        <input
          type="text"
          name="whatsappNumber"
          placeholder="WhatsApp Number"
          value={
            form.whatsappNumber
          }
          onChange={
            handleChange
          }
          className="bg-white/5 border border-white/10 rounded-2xl p-4"
        />

        <input
          type="text"
          name="techStack"
          placeholder="React, Next.js, MongoDB"
          value={
            form.techStack
          }
          onChange={
            handleChange
          }
          className="bg-white/5 border border-white/10 rounded-2xl p-4 lg:col-span-2"
        />

        <input
          type="text"
          name="features"
          placeholder="Login, Dashboard, API"
          value={
            form.features
          }
          onChange={
            handleChange
          }
          className="bg-white/5 border border-white/10 rounded-2xl p-4 lg:col-span-2"
        />

        {/* IMAGE */}
        <div className="lg:col-span-2 grid gap-4">

          <input
            type="file"
            accept="image/*"
            onChange={
              handleImageUpload
            }
            className="bg-white/5 border border-white/10 rounded-2xl p-4"
          />

          {uploading && (

            <p className="text-cyan-400">

              Uploading...

            </p>

          )}

          {form.image && (

            <img
              src={form.image}
              alt="preview"
              className="w-full h-[300px] object-cover rounded-3xl"
            />

          )}

        </div>

        {/* DESCRIPTION */}
        <textarea
          name="description"
          placeholder="Project Description"
          value={
            form.description
          }
          onChange={
            handleChange
          }
          rows={8}
          className="bg-white/5 border border-white/10 rounded-2xl p-4 lg:col-span-2"
        />

        {/* BUTTON */}
        <button
          type="submit"
          className="bg-gradient-to-r from-purple-600 to-cyan-500 rounded-2xl p-4 font-semibold lg:col-span-2"
        >

          {editingId
            ? "Update Project"
            : "Add Project"}

        </button>

      </form>

      {/* PROJECTS */}
      <div className="grid xl:grid-cols-2 gap-8">

        {projects.map(
          (project: any) => (

            <div
              key={project._id}
              className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden"
            >

              <img
                src={project.image}
                alt={project.title}
                className="w-full h-[280px] object-cover"
              />

              <div className="p-6">

                <h2 className="text-3xl font-bold mb-3">

                  {project.title}

                </h2>

                <p className="text-white/60 mb-5">

                  {project.description}

                </p>

                {/* TECH */}
                <div className="flex flex-wrap gap-3 mb-6">

                  {project.techStack?.map(
                    (
                      tech: string,
                      index: number
                    ) => (

                      <span
                        key={index}
                        className="bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full text-sm"
                      >

                        {tech}

                      </span>

                    )
                  )}

                </div>

                {/* BUTTONS */}
                <div className="flex gap-4 flex-wrap">

                  <button
                    onClick={() => {

                      setEditingId(
                        project._id
                      );

                      setForm({

                        title:
                          project.title,

                        slug:
                          project.slug,

                        category:
                          project.category,

                        description:
                          project.description,

                        image:
                          project.image,

                        liveLink:
                          project.liveLink,

                        githubLink:
                          project.githubLink,

                        techStack:
                          project.techStack?.join(
                            ","
                          ),

                        features:
                          project.features?.join(
                            ","
                          ),

                        whatsappNumber:
                          project.whatsappNumber,

                        previewType:
                          project.previewType,

                      });

                      window.scrollTo({
                        top: 0,
                        behavior:
                          "smooth",
                      });

                    }}
                    className="bg-cyan-600 hover:bg-cyan-700 px-5 py-2 rounded-xl"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() =>
                      handleDelete(
                        project._id
                      )
                    }
                    className="bg-red-600 hover:bg-red-700 px-5 py-2 rounded-xl"
                  >
                    Delete
                  </button>

                  <a
                    href={
                      project.liveLink
                    }
                    target="_blank"
                    className="bg-purple-600 hover:bg-purple-700 px-5 py-2 rounded-xl"
                  >
                    Live Preview
                  </a>

                </div>

              </div>

            </div>

          )
        )}

      </div>

    </div>
  );
}