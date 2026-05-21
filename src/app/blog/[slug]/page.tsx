import { notFound } from "next/navigation";

async function getBlog(slug: string) {

  const res = await fetch(
    "http://localhost:3000/api/blogs",
    {
      cache: "no-store",
    }
  );

  const blogs = await res.json();

  return blogs.find(
    (blog: any) => blog.slug === slug
  );
}

export default async function BlogDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {

  const { slug } = await params;

  const blog = await getBlog(slug);

  if (!blog) {
    return notFound();
  }

  return (

    <div className="min-h-screen bg-black text-white">

      {/* HERO */}
      <div className="relative h-[500px] overflow-hidden">

        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-full object-cover opacity-40"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="absolute bottom-10 left-10 max-w-4xl">

          <span className="bg-purple-600/20 text-cyan-300 px-4 py-2 rounded-full text-sm">

            {blog.category}

          </span>

          <h1 className="text-6xl font-bold mt-6 mb-5">
            {blog.title}
          </h1>

          <p className="text-white/70 text-xl">
            {blog.description}
          </p>

        </div>

      </div>

      {/* CONTENT */}
      <div className="max-w-4xl mx-auto px-6 py-20">

        <div className="text-white/80 leading-[2] text-lg whitespace-pre-line">

          {blog.content}

        </div>

      </div>

    </div>
  );
}