import { NextResponse } from "next/server";

import connectDB from "@/lib/mongodb";

import Testimonial from "@/models/Testimonial";


// GET
export async function GET() {

  try {

    await connectDB();

    const testimonials =
      await Testimonial.find().sort({
        createdAt: -1,
      });

    return NextResponse.json(
      testimonials
    );

  } catch (error) {

    console.log(error);

    return NextResponse.json(

      {
        error:
          "Failed to fetch testimonials",
      },

      {
        status: 500,
      }
    );
  }
}


// CREATE
export async function POST(
  req: Request
) {

  try {

    await connectDB();

    const body =
      await req.json();

    const testimonial =
      await Testimonial.create(
        body
      );

    return NextResponse.json(
      testimonial
    );

  } catch (error) {

    console.log(error);

    return NextResponse.json(

      {
        error:
          "Failed to create testimonial",
      },

      {
        status: 500,
      }
    );
  }
}


// DELETE
export async function DELETE(
  req: Request
) {

  try {

    await connectDB();

    const { id } =
      await req.json();

    await Testimonial.findByIdAndDelete(
      id
    );

    return NextResponse.json({

      message:
        "Deleted",

    });

  } catch (error) {

    console.log(error);

    return NextResponse.json(

      {
        error:
          "Delete failed",
      },

      {
        status: 500,
      }
    );
  }
}