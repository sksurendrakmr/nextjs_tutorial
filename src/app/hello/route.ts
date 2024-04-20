//Define and export a function crossponding to GET HTTP

export async function GET() {
  return new Response("Hello World");
}

//Create a route.ts file that exports HTTP verbs as function.

/**
 * Like page routs, route handlers can be organized in folders and nested within subfolders.
 * These allows for cleaner organization and easier management of routes.
 *
 *
 * Be mindful of potential conflicts between page routs and route handlers.
 *
 * To avoid these conflicts between route.ts and page.tsx, and both of them working, we can move the routeHandler to an "api" subdirectory.
 */
