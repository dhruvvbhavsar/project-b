import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const cookie = req.cookies.has("id") 
  if(cookie) {
    return NextResponse.redirect(new URL("/dashboard", req.url))
  }
  return NextResponse.next()
}

export const config = {
  matcher: ["/", "/welcome", "/verify-otp", "/registration"]
} 
