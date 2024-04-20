import { type NextRequest } from "next/server";
import { headers } from "next/headers";

//M1
// export async function GET(request: NextRequest) {
//   const requestHeaders = new Headers(request.headers);
//   console.log(requestHeaders.get("Authorization"));
//   return new Response("Profile API data");
// }
export async function GET(request: NextRequest) {
  //headers return from the headers() are read only
  //To set headers, we need to return a new response with the new header.
  const headerList = headers();
  console.log(headerList.get("Authorization"));

  const requestHeaders = new Headers(request.headers);
  console.log(requestHeaders.get("Authorization"));
  //To set headers, we need to return a new response with new headers.
  return new Response("Profile API data", {
    headers: {
      "Content-Type": "text/html",
    },
  });
}

/**
 * There are two ways to read headers in route handler.
 * 1. using request parameter
 * 2. headers() that nextjs provides.
 */
