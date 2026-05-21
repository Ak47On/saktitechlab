import { NextResponse } from "next/server";

import connectDB from "@/lib/mongodb";

import Settings from "@/models/Settings";


// GET SETTINGS
export async function GET() {

  try {

    await connectDB();

    let settings =
      await Settings.findOne();

    // CREATE DEFAULT SETTINGS
    if (!settings) {

      settings =
        await Settings.create({

          stats: [

            {
              label: "Projects",
              value: "50+",
            },

            {
              label: "Clients",
              value: "20+",
            },

            {
              label: "Years",
              value: "3+",
            },

            {
              label: "Satisfaction",
              value: "99%",
            },

          ],

          socialLinks: [

            {
              name: "Instagram",
              url: "",
            },

            {
              name: "GitHub",
              url: "",
            },

            {
              name: "YouTube",
              url: "",
            },

            {
              name: "LinkedIn",
              url: "",
            },

          ],

          whatsappNumber:
            "6268442009",

          email:
            "admin@saktitechlab.com",

          websiteUrl:
            "https://saktitechlab.com",

        });

    }

    return NextResponse.json(
      settings
    );

  } catch (error) {

    console.log(error);

    return NextResponse.json(

      {
        error:
          "Failed to fetch settings",
      },

      {
        status: 500,
      }
    );
  }
}


// UPDATE SETTINGS
export async function PUT(
  req: Request
) {

  try {

    await connectDB();

    const body =
      await req.json();

    let settings =
      await Settings.findOne();

    if (!settings) {

      settings =
        await Settings.create(
          body
        );

    } else {

      settings =
        await Settings.findByIdAndUpdate(

          settings._id,

          body,

          {
            new: true,
          }
        );

    }

    return NextResponse.json(
      settings
    );

  } catch (error) {

    console.log(error);

    return NextResponse.json(

      {
        error:
          "Failed to update settings",
      },

      {
        status: 500,
      }
    );
  }
}