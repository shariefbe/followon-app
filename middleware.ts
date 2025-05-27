import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: [
    "/",
    "/sign-in",
    "/sign-up",
    "/sign-up/verify-email-address",
    "/api/webhook/clerk" // if you're using Clerk webhooks in the future
  ],
  ignoredRoutes: [
    "/favicon.ico"
  ]
});

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next (static files)
     * - static files like .css, .js, etc.
     */
    "/((?!_next|.*\\..*).*)"
  ]
};
