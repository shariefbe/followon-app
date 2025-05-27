// pages/_app.tsx
import { ClerkProvider } from '@clerk/nextjs'
import { useRouter } from 'next/router'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const router = useRouter()

  return (
    <ClerkProvider
      routerPush={router.push}
      routerReplace={router.replace}
      router={router}
    >
      <Component {...pageProps} />
    </ClerkProvider>
  )
}

export default MyApp
