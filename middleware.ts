// middleware.ts
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("access_token")?.value;
  const { pathname } = req.nextUrl;

  // ✅ If logged in → block signin/signup
  if (token && (pathname.startsWith("/user/signin") || pathname.startsWith("/user/signup"))) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  // ✅ If not logged in → block profile
  if (!token && pathname.startsWith("/profile")) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  // ✅ If token exists → verify
  if (token) {
    try {
      jwt.verify(token, process.env.JWT_SECRET!);
      return NextResponse.next();
    } catch (err) {
      console.error("JWT expired/invalid:", err);
      if (pathname.startsWith("/profile")) {
        return NextResponse.redirect(new URL("/", req.url));
      }
    }
  }

  // ✅ Default: allow all other routes
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/profile",
    "/user/:path*",
  ],
};
