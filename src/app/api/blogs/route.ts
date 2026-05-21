import { NextResponse } from "next/server";

import connectDB from "@/lib/mongodb";

import Blog from "@/models/Blog";


// GET BLOGS
export async function GET() {

  try {

    await connectDB();

    const blogs = await Blog.find().sort({
      createdAt: -1,
    });

    return NextResponse.json(blogs);

  } catch (error) {

    return NextResponse.json(
      {
        error: "Failed to fetch blogs",
      },

      {
        status: 500,
      }
    );
  }
}


// CREATE BLOG
export async function POST(req: Request) {

  try {

    await connectDB();

    const body = await req.json();

    const blog = await Blog.create(body);

    return NextResponse.json(blog);

  } catch (error) {

    return NextResponse.json(
      {
        error: "Failed to create blog",
      },

      {
        status: 500,
      }
    );
  }
}


// UPDATE BLOG
export async function PUT(req: Request) {

  try {

    await connectDB();

    const body = await req.json();

    const updatedBlog =
      await Blog.findByIdAndUpdate(

        body.id,

        {
          title: body.title,
          slug: body.slug,
          description: body.description,
          content: body.content,
          image: body.image,
          category: body.category,
        },

        {
          new: true,
        }
      );

    return NextResponse.json(updatedBlog);

  } catch (error) {

    return NextResponse.json(
      {
        error: "Failed to update blog",
      },

      {
        status: 500,
      }
    );
  }
}


// DELETE BLOG
export async function DELETE(req: Request) {

  try {

    await connectDB();

    const { id } = await req.json();

    await Blog.findByIdAndDelete(id);

    return NextResponse.json({
      message: "Blog deleted",
    });

  } catch (error) {

    return NextResponse.json(
      {
        error: "Failed to delete blog",
      },

      {
        status: 500,
      }
    );
  }
}