import type { NextRequest, NextFetchEvent } from "next/server";
import { NextResponse } from "next/server";

export function middleware(req: NextRequest, event: NextFetchEvent) {
    if (req.ua?.isBot) {
      return new Response("bot은 접근 불가.", { status: 403 });
    } else {
        console.log("123")
    }
  }