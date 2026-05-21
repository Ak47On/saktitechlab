import { NextResponse } from "next/server";

import type {
  NextRequest,
} from "next/server";

export function middleware(
  request: NextRequest
) {

  const isLoggedIn =
    request.cookies.get(
      "admin-auth"
    );

  const isAdminRoute =
    request.nextUrl.pathname.startsWith(
      "/admin"
    );

  const isLoginPage =
    request.nextUrl.pathname ===
    "/admin/login";

  // NOT LOGGED IN
  if (
    isAdminRoute &&
    !isLoggedIn &&
    !isLoginPage
  ) {

    return NextResponse.redirect(
      new URL(
        "/admin/login",
        request.url
      )
    );

  }

  // ALREADY LOGGED IN
  if (
    isLoginPage &&
    isLoggedIn
  ) {

    return NextResponse.redirect(
      new URL(
        "/admin",
        request.url
      )
    );

  }

  return NextResponse.next();
}

export const config = {

  matcher: ["/admin/:path*"],

};