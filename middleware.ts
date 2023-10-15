import { authMiddleware, redirectToSignIn } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export default authMiddleware({
  async afterAuth(auth, request, event) {
    if (!auth.userId && !auth.isPublicRoute) {
      return redirectToSignIn({ returnBackUrl: request.url });
    }
    if (auth.userId && !auth.orgId && request.nextUrl.pathname !== "/portal") {
      return NextResponse.redirect(new URL("/portal", request.url));
    }
  },
});

export const config = {
  matcher: ["/portal/:path*", "/api/:path*", "/auth/:path*"],
};
