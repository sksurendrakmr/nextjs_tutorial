import { redirect } from "next/navigation";
import { comments } from "../data";
export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  if (parseInt(params.id) > comments.length) {
    redirect("/comments");
  }
  const comment = comments.find(
    (comment) => comment.id === parseInt(params.id)
  );
  return Response.json(comment);
}

/**
 * here, the only value of context is params which is an object containing the dynamic
 * route parameters for the current route.
 *
 * here, we are destructuring { params } from context
 */
