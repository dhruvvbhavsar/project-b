
import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest){
    
    if(req.cookies.has('id') && !req.nextUrl.pathname.startsWith("/registration")) {
        return NextResponse.redirect(new URL('/dashboard', req.url))
    }
}

export const config = {
    matcher: ['/', '/verify-otp', '/welcome', '/registration']
}