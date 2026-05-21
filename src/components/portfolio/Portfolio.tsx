"use client";

import {
  useEffect,
  useState,
} from "react";

import Link from "next/link";

export default function Portfolio() {

  const [projects, setProjects] =
    useState<any[]>([]);

  async function fetchProjects() {

    try {

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

    } catch (error) {

      console.log(error);

    }
  }

  useEffect(() => {
    fetchProjects();
  }, []);

  return (

    <section
      id="portfolio"
      className="py-24 px-6 text-white"
    >

      <div className="max-w-7xl mx-auto">

        {/* TOP */}
        <div className="text-center mb-16">

          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-5 py-2 rounded-full mb-6">

            🚀 Our Portfolio

          </div>

          <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">

            Featured <br />

            <span className="bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent">

              Projects

            </span>

          </h2>

          <p className="text-white/50 text-lg max-w-2xl mx-auto">

            Premium digital products and platforms designed for startups, businesses and creators.

          </p>

        </div>

        {/* PROJECTS */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

          {projects.map(
            (project: any) => (

              <div
                key={project._id}
                className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:-translate-y-2 transition-all duration-300"
              >

                {/* IMAGE */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-[260px] object-cover"
                />

                {/* CONTENT */}
                <div className="p-6">

                  <span className="text-cyan-400 text-sm">

                    {project.category}

                  </span>

                  <h3 className="text-3xl font-bold mt-3 mb-4">

                    {project.title}

                  </h3>

                  <p className="text-white/50 mb-6 line-clamp-3">

                    {project.description}

                  </p>

                  {/* TECH STACK */}
                  <div className="flex flex-wrap gap-2 mb-6">

                    {project.techStack?.slice(
                      0,
                      3
                    ).map(
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

                    <Link
                      href={`/projects/${project.slug}`}
                      className="bg-gradient-to-r from-purple-600 to-cyan-500 px-5 py-3 rounded-xl font-medium"
                    >

                      View Project

                    </Link>

                    <a
                      href={
                        project.liveLink
                      }
                      target="_blank"
                      className="bg-white/10 hover:bg-white/20 transition-all px-5 py-3 rounded-xl"
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

    </section>
  );
}