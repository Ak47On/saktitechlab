import { NextResponse } from "next/server";

import connectDB from "@/lib/mongodb";

import FAQ from "@/models/FAQ";


// GET FAQ
export async function GET() {

  try {

    await connectDB();

    const faqs = await FAQ.find();

    return NextResponse.json(faqs);

  } catch (error) {

    console.log(error);

    return NextResponse.json(
      {
        error: "Failed to fetch FAQs",
      },

      {
        status: 500,
      }
    );
  }
}


// CREATE FAQ
export async function POST(req: Request) {

  try {

    await connectDB();

    const body = await req.json();

    const faq = await FAQ.create(body);

    return NextResponse.json(faq);

  } catch (error) {

    console.log(error);

    return NextResponse.json(
      {
        error: "Failed to create FAQ",
      },

      {
        status: 500,
      }
    );
  }
}


// DELETE FAQ
export async function DELETE(req: Request) {

  try {

    await connectDB();

    const { id } = await req.json();

    await FAQ.findByIdAndDelete(id);

    return NextResponse.json({
      message: "FAQ deleted",
    });

  } catch (error) {

    console.log(error);

    return NextResponse.json(
      {
        error: "Failed to delete FAQ",
      },

      {
        status: 500,
      }
    );
  }
}