// pages/index.tsx
import Link from 'next/link'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'

export default function HomePage() {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center bg-blue-50 text-center px-4 py-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Simplify Your Customer Follow-ups</h1>
        <p className="text-lg md:text-xl text-gray-700 mb-6 max-w-xl">
          FollowOn helps businesses remember customer promises, follow up smartly, and never lose a sale.
        </p>
        <SignedOut>
          <SignInButton>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
              Get Started
            </button>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <Link href="/dashboard">
            <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition">
              Go to Dashboard
            </button>
          </Link>
        </SignedIn>
      </section>

      {/* How It Works */}
      <section className="px-6 py-16 text-center bg-white">
        <h2 className="text-3xl font-semibold mb-10">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-xl font-bold mb-2">Step 1</h3>
            <p>Enter customer name, mobile number, and when you sent the catalog.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Step 2</h3>
            <p>Set how many days later you want a follow-up reminder.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Step 3</h3>
            <p>We remind you to follow up on time. More conversions, less headache!</p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="px-6 py-16 bg-gray-100 text-center">
        <h2 className="text-3xl font-semibold mb-10">Features</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-xl shadow">
            <h3 className="font-bold text-xl mb-2">Easy Lead Entry</h3>
            <p>Just 3 fields to fill – quick and simple UI for busy teams.</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow">
            <h3 className="font-bold text-xl mb-2">Smart Reminders</h3>
            <p>We remind you automatically when it’s time to follow up.</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow">
            <h3 className="font-bold text-xl mb-2">Mobile Friendly</h3>
            <p>Use it from mobile or desktop – no app download required.</p>
          </div>
        </div>
      </section>

      {/* Screenshots / Demo */}
      <section className="px-6 py-16 text-center">
        <h2 className="text-3xl font-semibold mb-10">Screenshots</h2>
        <p className="text-gray-600 mb-4">Coming Soon...</p>
      </section>

      {/* Pricing */}
      <section className="px-6 py-16 bg-white text-center">
        <h2 className="text-3xl font-semibold mb-10">Simple Pricing</h2>
        <div className="max-w-md mx-auto bg-gray-100 p-8 rounded-xl shadow">
          <h3 className="text-xl font-bold">Free Forever</h3>
          <p className="text-gray-600 mt-2">Use all features for free. No credit card needed.</p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-6 py-16 bg-blue-50 text-center">
        <h2 className="text-3xl font-semibold mb-10">What Users Say</h2>
        <div className="max-w-3xl mx-auto">
          <blockquote className="text-lg italic">“FollowOn made me stop using sticky notes. My conversions increased!”</blockquote>
          <p className="mt-2 font-bold">– A jewelry seller from Tamil Nadu</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-8 bg-gray-900 text-white text-center">
        <p>&copy; {new Date().getFullYear()} FollowOn. All rights reserved.</p>
        <p className="mt-1 text-sm">Built with ❤️ in Trichy</p>
      </footer>
    </div>
  )
}
