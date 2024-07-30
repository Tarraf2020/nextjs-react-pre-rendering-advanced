// middleware file allow you to set up code that will run on every equest that is
// sent to any page or any route anywhere intire the website so we can inspect the request,
// block or redirect the request or do whatever we wat to.
// https://nextjs.org/docs/app/building-your-application/routing/middleware

import { NextResponse } from "next/server";

export function middleware(request) {
  // console.log(request);
  return NextResponse.next();
}
