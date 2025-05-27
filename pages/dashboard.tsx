// pages/dashboard.tsx
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
  useUser
} from "@clerk/nextjs";
import { useState } from "react";

export default function Dashboard() {
  const { isLoaded } = useUser(); // <-- Wait for Clerk to load
  const [followType, setFollowType] = useState("catalog");

  // 💡 Show nothing until Clerk is ready
  if (!isLoaded) return null;

  return (
    <>
      <SignedIn>
        <div className="min-h-screen bg-gray-100 p-6 flex flex-col md:flex-row gap-6">
          {/* Logout Button */}
          <div className="absolute top-4 right-4">
            <UserButton afterSignOutUrl="/" />
          </div>

          {/* Left: Follow-up Type Form */}
          <div className="bg-white rounded-xl shadow-md p-6 w-full md:w-1/2">
            <h1 className="text-2xl font-bold text-blue-700 mb-4">Add Follow-Up</h1>

            {/* Follow-up Type Selection */}
            <div className="mb-4 flex gap-2">
              <button
                className={`px-4 py-2 rounded-md ${
                  followType === "catalog" ? "bg-blue-600 text-white" : "bg-gray-200"
                }`}
                onClick={() => setFollowType("catalog")}
              >
                Catalog Sent
              </button>
              <button
                className={`px-4 py-2 rounded-md ${
                  followType === "bought" ? "bg-blue-600 text-white" : "bg-gray-200"
                }`}
                onClick={() => setFollowType("bought")}
              >
                Bought Today
              </button>
              <button
                className={`px-4 py-2 rounded-md ${
                  followType === "payment" ? "bg-blue-600 text-white" : "bg-gray-200"
                }`}
                onClick={() => setFollowType("payment")}
              >
                Payment Promise
              </button>
            </div>

            {/* Form Based on Follow-Up Type */}
            <form className="space-y-4">
              <input type="text" placeholder="Customer Name" className="w-full px-4 py-2 border rounded-md" />
              <input type="tel" placeholder="Mobile Number" className="w-full px-4 py-2 border rounded-md" />
              {followType === "catalog" && (
                <>
                  <input type="date" placeholder="Catalog Sent Date" className="w-full px-4 py-2 border rounded-md" />
                  <select className="w-full px-4 py-2 border rounded-md">
                    <option value="">Reminder After...</option>
                    <option value="3">3 Days</option>
                    <option value="5">5 Days</option>
                    <option value="7">7 Days</option>
                  </select>
                </>
              )}
              {followType === "bought" && (
                <>
                  <input type="date" placeholder="Bought Date" className="w-full px-4 py-2 border rounded-md" />
                  <select className="w-full px-4 py-2 border rounded-md">
                    <option value="">Reminder After...</option>
                    <option value="3">3 Days</option>
                    <option value="5">5 Days</option>
                    <option value="7">7 Days</option>
                  </select>
                </>
              )}
              {followType === "payment" && (
                <>
                  <input type="date" placeholder="Payment Date Promised" className="w-full px-4 py-2 border rounded-md" />
                </>
              )}
              <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
                Save
              </button>
            </form>
          </div>

          {/* Right: Today's Follow-Ups */}
          <div className="bg-white rounded-xl shadow-md p-6 w-full md:w-1/2">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Today's Follow-ups</h2>
            <ul className="space-y-2 text-gray-700">
              <li>📦 Priya (Catalog Follow-up)</li>
              <li>💰 Arjun (Payment Reminder)</li>
              <li>🛍️ Divya (Bought Today Follow-up)</li>
              <li className="text-gray-400">(This is static demo list)</li>
            </ul>
          </div>
        </div>
      </SignedIn>

      <SignedOut>
        <div className="min-h-screen flex items-center justify-center bg-white">
          <div className="text-center">
            <p className="mb-4 text-lg text-gray-700">You must sign in to access the dashboard.</p>
            <SignInButton redirectUrl="/dashboard" />
          </div>
        </div>
      </SignedOut>
    </>
  );
}
