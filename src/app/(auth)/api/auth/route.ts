export async function POST(req: Request) {
  const body = await req.json();
  const accessToken = body.accessToken as string;
  const refreshToken = body.refreshToken as string;
  const userId = body.id as string;
  if (!accessToken || !refreshToken) {
    return new Response(JSON.stringify({ message: "Không nhận được token" }), {
      status: 400,
    });
  }

  // `accessToken=${accessToken}; refreshToken=${refreshToken}; userId=${id}; Path=/; HttpOnly; SameSite=Lax; Secure`;

  const accessTokenCookie = `accessToken=${accessToken}; HttpOnly; Path=/; Max-Age=3600; SameSite=Strict; Secure`;
  const refreshTokenCookie = `refreshToken=${refreshToken}; HttpOnly; Path=/; Max-Age=604800; SameSite=Strict; Secure`;
  const userIdCookie = `userId=${userId}; HttpOnly; Path=/; Max-Age=3600; SameSite=Strict; Secure`;

  return new Response(JSON.stringify(body), {
    status: 200,
    headers: {
      "Set-Cookie": `${accessTokenCookie}, ${refreshTokenCookie}, ${userIdCookie}`,
      "Content-Type": "application/json",
    },
  });
}
