import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  if (!req.cookies.has("id")) {
    return NextResponse.redirect(new URL("/welcome", req.url));
  } else {
    return NextResponse.next();
  }
}

export const config = {
  matcher: ["/dashboard", "/"],
};
