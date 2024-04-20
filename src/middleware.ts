import { NextResponse, type NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  //Requirement is redirect the user to homepage if /hello is accessed
  if (request.nextUrl.pathname === "/profile") {
    return NextResponse.redirect(new URL("/hello", request.url));
  }
}

/**
 * Apart from handling redirections, middleware also allows URL rewrites which is
 * useful tool for legacy URL support or SEO optimization.
 */
