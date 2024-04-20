import { NextRequest } from "next/server";
import { comments } from "./data";
/**
 * To handle the query parameter effectively, we need the request parameter.
 * NextRequest ->NextRequest object provides convenient methods for managing query parameters with ease.
 *
 * Useful for sort, filter and pagination for the data.
 */
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams; //access all query parameters
  const query = searchParams.get("query"); //get individual query
  const filteredComments = query
    ? comments.filter((comment) => comment.text.includes(query))
    : comments;
  return Response.json(filteredComments);
}
/**
 * Every route handler function receives the standard web "request" object as parameter
 *
 */
export async function POST(request: Request) {
  const comment = await request.json();
  const newComment = {
    id: comments.length + 1,
    text: comment.text,
  };
  comments.push(newComment);
  return new Response(JSON.stringify(newComment), {
    headers: {
      "Content-Type": "application/json",
    },
    status: 201,
  });
}

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  const body = await request.json();
  const { text } = body;

  const index = comments.findIndex(
    (comment) => comment.id === parseInt(params.id)
  );
  comments[index].text = text;
  return Response.json(comments[index]);
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const index = comments.findIndex(
    (comment) => comment.id === parseInt(params.id)
  );
  const deletedComment = comments[index];
  comments.splice(index, 1);
  return Response.json(deletedComment);
}
