/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { jwtDecode } from "jwt-decode";
import { getToken } from "next-auth/jwt";

export async function middleware(req: NextRequest) {
  const accessToken = req.cookies.get("accessToken")?.value;
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET }); 

  if (!accessToken && !token) {
    return NextResponse.redirect(new URL("/", req.url)); 
  }

  try {
    const decodedToken: any = accessToken ? jwtDecode(accessToken) : null; 
    if (!decodedToken) {
      return NextResponse.redirect(new URL("/", req.url));
    }
    if (decodedToken.role !== "admin") {
      return NextResponse.redirect(new URL("/", req.url));
    }
  } catch (error) {
    console.error("Error decoding token:", error);
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path"], 
};
