import { ClerkProvider } from '@clerk/clerk-react'

const clerkFrontendApi = 'process.env.NEXT_PUBLIC_CLERK_FRONTEND_API'

function MyApp({ Component, pageProps }) {
  return (
    <ClerkProvider frontendApi={clerkFrontendApi}>
      <Component {...pageProps} />
    </ClerkProvider>
  )
}

export default MyApp
