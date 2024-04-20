import { NextResponse, type NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  const themePreference = request.cookies.get("theme");
  if (!themePreference) {
    response.cookies.set("theme", "dark");
  }

  response.headers.set("custom-header", "custome-value");
  return response;
}

/**
 * Apart from handling redirections, middleware also allows URL rewrites which is
 * useful tool for legacy URL support or SEO optimization.
 */

/**
 * Cookie and Headers in Middleware
 * ---
 * Requirement
 * --
 * Modify the middleware to handle user preferences for themes and add a custom header for all responses.
 */
