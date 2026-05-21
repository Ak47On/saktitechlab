import { NextResponse } from "next/server";

import connectDB from "@/lib/mongodb";

import Portfolio from "@/models/Portfolio";


// GET PROJECTS
export async function GET() {

  try {

    await connectDB();

    const projects =
      await Portfolio.find().sort({
        createdAt: -1,
      });

    return NextResponse.json(
      projects
    );

  } catch (error) {

    console.log(error);

    return NextResponse.json(

      {
        error:
          "Failed to fetch portfolio",
      },

      {
        status: 500,
      }
    );
  }
}


// CREATE PROJECT
export async function POST(
  req: Request
) {

  try {

    await connectDB();

    const body =
      await req.json();

    const project =
      await Portfolio.create(body);

    return NextResponse.json(
      project
    );

  } catch (error) {

    console.log(error);

    return NextResponse.json(

      {
        error:
          "Failed to create project",
      },

      {
        status: 500,
      }
    );
  }
}


// UPDATE PROJECT
export async function PUT(
  req: Request
) {

  try {

    await connectDB();

    const body =
      await req.json();

    const updatedProject =
      await Portfolio.findByIdAndUpdate(

        body.id,

        body,

        {
          new: true,
        }
      );

    return NextResponse.json(
      updatedProject
    );

  } catch (error) {

    console.log(error);

    return NextResponse.json(

      {
        error:
          "Failed to update project",
      },

      {
        status: 500,
      }
    );
  }
}


// DELETE PROJECT
export async function DELETE(
  req: Request
) {

  try {

    await connectDB();

    const { id } =
      await req.json();

    await Portfolio.findByIdAndDelete(
      id
    );

    return NextResponse.json({

      message:
        "Project deleted",

    });

  } catch (error) {

    console.log(error);

    return NextResponse.json(

      {
        error:
          "Failed to delete project",
      },

      {
        status: 500,
      }
    );
  }
}