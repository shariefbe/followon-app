// app/layout.tsx
import "./globals.css"
import { ClerkProvider } from "@clerk/nextjs"

export const metadata = {
  title: "FollowOn",
  description: "Smart customer follow-up tool"
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>{children}</body>
      </html>
    </ClerkProvider>
  )
}
