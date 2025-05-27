// pages/index.tsx
import Link from 'next/link'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'

export default function HomePage() {
  return (
    <div className="font-sans">
      {/* Navigation */}
      <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center sticky top-0 z-50">
        <div className="text-2xl font-bold text-blue-700">FollowOn</div>
        <SignedOut>
          <SignInButton>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">Sign In</button>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <Link href="/dashboard">
            <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">Dashboard</button>
          </Link>
        </SignedIn>
      </nav>

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
        <div className="grid md:grid-cols-2 gap-6">
          <img src="https://source.unsplash.com/featured/?dashboard" alt="Demo Screenshot 1" className="rounded shadow-md mx-auto" />
          <img src="https://source.unsplash.com/featured/?crm" alt="Demo Screenshot 2" className="rounded shadow-md mx-auto" />
        </div>
      </section>

      {/* Pricing */}
      <section className="px-6 py-16 bg-white text-center">
        <h2 className="text-3xl font-semibold mb-10">Simple Pricing</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="p-6 bg-gray-100 rounded-xl shadow">
            <h3 className="text-xl font-bold">Free</h3>
            <p className="text-gray-600 mt-2">Up to 10 follow-ups</p>
            <p className="text-2xl mt-4 font-bold">$0</p>
          </div>
          <div className="p-6 bg-gray-100 rounded-xl shadow">
            <h3 className="text-xl font-bold">Standard</h3>
            <p className="text-gray-600 mt-2">Up to 200 follow-ups</p>
            <p className="text-2xl mt-4 font-bold">$8/mo</p>
          </div>
          <div className="p-6 bg-gray-100 rounded-xl shadow">
            <h3 className="text-xl font-bold">Unlimited</h3>
            <p className="text-gray-600 mt-2">Unlimited follow-ups</p>
            <p className="text-2xl mt-4 font-bold">$20/mo</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 py-16 bg-blue-50 text-center">
        <h2 className="text-3xl font-semibold mb-10">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto space-y-6 text-left">
          <div>
            <h4 className="font-bold">Is FollowOn really free?</h4>
            <p>Yes, our free plan includes all core features and allows up to 10 follow-ups.</p>
          </div>
          <div>
            <h4 className="font-bold">Can I use FollowOn on mobile?</h4>
            <p>Absolutely! FollowOn is fully responsive and works great on all devices.</p>
          </div>
          <div>
            <h4 className="font-bold">How are reminders sent?</h4>
            <p>You’ll receive in-app notifications and email alerts (coming soon).</p>
          </div>
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
