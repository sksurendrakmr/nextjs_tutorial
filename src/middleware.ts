import { NextResponse, type NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  //Requirement is redirect the user to homepage if /profile is accessed
  return NextResponse.redirect(new URL("/", request.url));
}

//The config object specify a matcher to which this middleware apply to.
export const config = {
  matcher: "/profile",
};
