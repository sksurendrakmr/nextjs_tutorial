export const dynamic = "force-dynamic"; // ensuring the handler is executed for each user request

export async function GET() {
  return Response.json({
    time: new Date().toLocaleDateString(),
  });
}
