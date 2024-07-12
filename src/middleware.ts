import { NextResponse, type NextRequest } from "next/server";
export async function middleware(request: NextRequest) {
  const rewriteURL = new URL("/thing1", getHost(request));

  return NextResponse.rewrite(rewriteURL);
}

function getHost(request: NextRequest) {
  const proto =
    request.headers.get("x-forwarded-proto") ??
    // Remove trailing colon
    request.nextUrl.protocol.slice(0, -1) ??
    "http";
  const host =
    request.headers.get("x-forwarded-host") ??
    request.nextUrl.host ??
    "localhost:8000";

  return `${proto}://${host}`;
}
