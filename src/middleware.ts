import {NextResponse} from "next/server";
import {authMiddleware} from "@clerk/nextjs/server";
import {env} from "~/env";

export const runtime = "experimental-edge"
export const preferredRegion = ["pdx1"]

export default authMiddleware({
  // Issue is related to afterAuth function...
  afterAuth: (auth, req, evt) => {
    return NextResponse.next()
    // if (auth.isPublicRoute) return NextResponse.next()
  },
  publicRoutes: ['/(api|trpc)(.*)', "/api/webhook/clerk", "/api/manifest"],
  ignoredRoutes: ["/api/manifest"],
  secretKey: env.CLERK_SECRET_KEY,
  publishableKey: env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY,
});

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
