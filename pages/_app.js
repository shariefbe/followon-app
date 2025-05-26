import { ClerkProvider } from '@clerk/clerk-react'

const clerkFrontendApi = 'https://wired-monkey-63.clerk.accounts.dev'

function MyApp({ Component, pageProps }) {
  return (
    <ClerkProvider frontendApi={clerkFrontendApi}>
      <Component {...pageProps} />
    </ClerkProvider>
  )
}

export default MyApp
