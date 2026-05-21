import Link from "next/link";

async function getBlogs() {

  const res = await fetch(
    "http://localhost:3000/api/blogs",
    {
      cache: "no-store",
    }
  );

  return res.json();
}

export default async function BlogPage() {

  const blogs = await getBlogs();

  return (

    <div className="min-h-screen bg-black text-white p-10">

      <div className="max-w-7xl mx-auto">

        {/* HEADING */}
        <div className="text-center mb-16">

          <h1 className="text-6xl font-bold mb-5">

            Our

            <span className="bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent">
              {" "}Blogs
            </span>

          </h1>

          <p className="text-white/60 text-lg">
            Latest insights, tutorials and AI content.
          </p>

        </div>

        {/* BLOG GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {blogs.map((blog: any) => (

            <div
              key={blog._id}
              className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:scale-[1.02] transition-all duration-500"
            >

              {/* IMAGE */}
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-[240px] object-cover"
              />

              {/* CONTENT */}
              <div className="p-6">

                <div className="mb-4">

                  <span className="bg-purple-600/20 text-cyan-300 px-3 py-1 rounded-full text-sm">
                    {blog.category}
                  </span>

                </div>

                <h2 className="text-2xl font-bold mb-3">
                  {blog.title}
                </h2>

                <p className="text-white/60 mb-6 line-clamp-3">
                  {blog.description}
                </p>

                <Link
                  href={`/blog/${blog.slug}`}
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-cyan-500 px-5 py-3 rounded-xl font-medium"
                >
                  Read More
                </Link>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}