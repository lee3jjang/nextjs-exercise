import { NextRequest, NextResponse } from "next/server";
import { updateSession } from "./app/utils/supabase/middleware";

export async function middleware(request: NextRequest) {
  // const pub = rabbit.createPublisher();
  // console.log(request.cookies.getAll());
  // console.log(request.nextUrl);
  // if (request.nextUrl.pathname === "/") {
  //   const url = new URL("/person", request.nextUrl.origin);
  //   return NextResponse.redirect(url);
  // }
  // return await updateSession(request);
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
