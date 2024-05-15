import { NextRequest, NextResponse } from "next/server";
import { updateSession } from "./app/utils/supabase/middleware";

export async function middleware(request: NextRequest) {
  // console.log("request", request);
  // return NextResponse.next();
  return await updateSession(request);
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
