import { ClerkProvider } from '@clerk/nextjs'
import { useRouter } from 'next/router'

const clerkFrontendApi = process.env.NEXT_PUBLIC_CLERK_FRONTEND_API

function MyApp({ Component, pageProps }) {
  const { pathname } = useRouter()

  return (
    <ClerkProvider frontendApi={clerkFrontendApi} navigate={(to) => window.history.pushState(null, '', to)}>
      <Component {...pageProps} />
    </ClerkProvider>
  )
}

export default MyApp
