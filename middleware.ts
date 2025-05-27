import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: [
    "/",
    "/sign-in",
    "/sign-up",
    "/sign-up/verify-email-address(.*)", // regex fix for email verification path
    "/api/webhook/clerk"
  ],
  ignoredRoutes: ["/favicon.ico"]
});

export const config = {
  matcher: ["/((?!_next|.*\\..*).*)"]
};
