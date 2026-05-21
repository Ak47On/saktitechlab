import { NextResponse } from "next/server";

export async function POST(
  req: Request
) {

  try {

    const body =
      await req.json();

    const {
      email,
      password,
    } = body;

    // ADMIN LOGIN
    if (

      email ===
        "admin@saktitechlab.com"

      &&

      password ===
        "admin123"

    ) {

      const response =
        NextResponse.json({

          success: true,

          message:
            "Login successful",

        });

      response.cookies.set(

        "admin-auth",

        "true",

        {
          httpOnly: true,
          secure: false,
          path: "/",
          maxAge: 60 * 60 * 24,
        }

      );

      return response;
    }

    return NextResponse.json(

      {
        success: false,
        message:
          "Invalid credentials",
      },

      {
        status: 401,
      }
    );

  } catch (error) {

    return NextResponse.json(

      {
        success: false,
        message:
          "Server error",
      },

      {
        status: 500,
      }
    );
  }
}