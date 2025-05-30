import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { auth } from "./lib/auth";

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const session = await auth.api.getSession({
    headers: await request.headers,
  });
  if (
    !request.nextUrl.pathname.startsWith("/sign-in") ||
    !request.nextUrl.pathname.startsWith("/sign-up")
  ) {
    if (!session) {
      return NextResponse.redirect(new URL("/sign-in", request.url));
    }
  }
  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/about/:path*",
};
