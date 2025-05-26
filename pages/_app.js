import { ClerkProvider } from '@clerk/clerk-react'
import { useRouter } from 'next/router'

const clerkPubKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY

function MyApp({ Component, pageProps }) {
  const router = useRouter()

  return (
    <ClerkProvider publishableKey={clerkPubKey} navigate={(to) => router.push(to)}>
      <Component {...pageProps} />
    </ClerkProvider>
  )
}

export default MyApp
