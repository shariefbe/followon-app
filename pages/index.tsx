// pages/index.tsx
import Link from 'next/link'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import Image from 'next/image'

export default function HomePage() {
  return (
    <div className="font-sans scroll-smooth">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-blue-600">
            FollowOn
          </Link>
          <div className="space-x-6 text-sm font-medium">
            <a href="#features" className="text-gray-700 hover:text-blue-600 transition duration-200">Features</a>
            <a href="#pricing" className="text-gray-700 hover:text-blue-600 transition duration-200">Pricing</a>
            <SignedOut>
              <SignInButton>
                <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-200">
                  Sign In
                </button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col-reverse md:flex-row justify-center items-center bg-blue-50 px-6 py-16">
        <div className="text-center md:text-left md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-blue-800">Never Miss a Follow-Up Again</h1>
          <p className="text-lg text-gray-700 mb-6">
            FollowOn reminds you exactly when to follow up with your customers. More conversions, less stress.
          </p>
          <SignedOut>
            <SignInButton>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
                Get Started Free
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
        </div>
        <div className="md:w-1/2 mb-8 md:mb-0">
          <Image
            src="https://source.unsplash.com/featured/?business,reminder"
            alt="Hero"
            width={600}
            height={400}
            className="rounded-xl shadow-lg object-cover"
          />
        </div>
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
      <section id="features" className="px-6 py-16 bg-gray-100 text-center">
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
        <Image
          src="https://source.unsplash.com/featured/?dashboard,analytics"
          alt="Demo Screenshot"
          width={800}
          height={400}
          className="mx-auto rounded-xl shadow object-cover"
        />
      </section>

      {/* Pricing */}
      <section id="pricing" className="px-6 py-16 bg-white text-center">
        <h2 className="text-3xl font-semibold mb-10">Simple Pricing</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="bg-gray-100 p-8 rounded-xl shadow">
            <h3 className="text-xl font-bold">Free</h3>
            <p className="text-gray-600 mt-2">Up to 10 follow-ups per month</p>
            <p className="mt-4 font-bold text-2xl">$0</p>
          </div>
          <div className="bg-gray-100 p-8 rounded-xl shadow">
            <h3 className="text-xl font-bold">Pro</h3>
            <p className="text-gray-600 mt-2">Up to 200 follow-ups</p>
            <p className="mt-4 font-bold text-2xl">$8/month</p>
          </div>
          <div className="bg-gray-100 p-8 rounded-xl shadow">
            <h3 className="text-xl font-bold">Unlimited</h3>
            <p className="text-gray-600 mt-2">Unlimited follow-ups</p>
            <p className="mt-4 font-bold text-2xl">$20/month</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-6 py-16 bg-blue-50 text-center">
        <h2 className="text-3xl font-semibold mb-10">What Users Say</h2>
        <div className="max-w-3xl mx-auto">
          <blockquote className="text-lg italic">“FollowOn made me stop using sticky notes. My conversions increased!”</blockquote>
          <p className="mt-2 font-bold">– South Jewels from Tamil Nadu</p>
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
