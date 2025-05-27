import { authMiddleware } from "@clerk/nextjs"

export default authMiddleware({
  publicRoutes: [
    "/",
    "/sign-in",
    "/sign-up",
    "/sign-up/verify-email-address" // 👈 this is the missing route
  ]
})

export const config = {
  matcher: [
    "/((?!_next|.*\\..*|favicon.ico).*)"
  ]
}
