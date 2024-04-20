import { type NextRequest } from "next/server";
import { headers, cookies } from "next/headers";

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

  //read a cookie
  const theme = request.cookies.get("theme");

  //M2 to set a cookie
  cookies().set("resultsPerPage", "20");

  //M2 to read the cookie
  cookies().get("resultsPerPage");

  const requestHeaders = new Headers(request.headers);
  console.log(requestHeaders.get("Authorization"));
  //To set headers, we need to return a new response with new headers.
  return new Response("Profile API data", {
    headers: {
      "Content-Type": "text/html",
      "Set-Cookie": "theme=dark", //set a cookie
    },
  });
}

/**
 * There are two ways to read headers in route handler.
 * 1. using request parameter
 * 2. headers() that nextjs provides.
 */

/**
 * There are two approaches to set and get a cookie.
 *
 * To set a cookie, the first option is to return a new response using the setCookie header.
 *
 * 2. To set and get cookies using the cookies() provided by nextjs
 */
