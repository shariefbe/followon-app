import { authMiddleware } from "@clerk/nextjs"

export default authMiddleware({
  publicRoutes: [
    "/",
    "/sign-in",
    "/sign-up",
    "/sign-up/verify-email-address",
  ]
})

export const config = {
  matcher: ["/((?!_next|.*\\..*).*)"],
}
