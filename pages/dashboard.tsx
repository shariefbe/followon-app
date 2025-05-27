Great! Now that your `/api/save-lead.ts` endpoint is ready, let's update your Dashboard form to actually send data to Supabase via this API.

Please replace the content of your `pages/dashboard.tsx` file with the following working version:

```tsx
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton
} from "@clerk/nextjs";
import { useState } from "react"

export default function Dashboard() {
  const [followType, setFollowType] = useState("catalog")
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [date, setDate] = useState("")
  const [days, setDays] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const res = await fetch("/api/save-lead", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name,
        phone,
        followType,
        date,
        days: followType === "payment" ? null : days
      })
    })

    const result = await res.json()
    if (res.ok) {
      setMessage("Lead saved successfully!")
      setName("")
      setPhone("")
      setDate("")
      setDays("")
    } else {
      setMessage("Failed to save lead")
    }
  }

  return (
    <>
      <SignedIn>
        <div className="min-h-screen bg-gray-100 p-6 flex flex-col md:flex-row gap-6">
          <div className="absolute top-4 right-4">
            <UserButton afterSignOutUrl="/" />
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 w-full md:w-1/2">
            <h1 className="text-2xl font-bold text-blue-700 mb-4">Add Follow-Up</h1>

            <div className="mb-4 flex gap-2">
              <button className={`px-4 py-2 rounded-md ${followType === "catalog" ? "bg-blue-600 text-white" : "bg-gray-200"}`} onClick={() => setFollowType("catalog")}>Catalog Sent</button>
              <button className={`px-4 py-2 rounded-md ${followType === "bought" ? "bg-blue-600 text-white" : "bg-gray-200"}`} onClick={() => setFollowType("bought")}>Bought Today</button>
              <button className={`px-4 py-2 rounded-md ${followType === "payment" ? "bg-blue-600 text-white" : "bg-gray-200"}`} onClick={() => setFollowType("payment")}>Payment Promise</button>
            </div>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <input type="text" placeholder="Customer Name" value={name} onChange={(e) => setName(e.target.value)} className="w-full px-4 py-2 border rounded-md" required />
              <input type="tel" placeholder="Mobile Number" value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full px-4 py-2 border rounded-md" required />

              {followType !== "payment" && (
                <>
                  <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="w-full px-4 py-2 border rounded-md" required />
                  <select value={days} onChange={(e) => setDays(e.target.value)} className="w-full px-4 py-2 border rounded-md" required>
                    <option value="">Reminder After...</option>
                    <option value="3">3 Days</option>
                    <option value="5">5 Days</option>
                    <option value="7">7 Days</option>
                  </select>
                </>
              )}

              {followType === "payment" && (
                <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="w-full px-4 py-2 border rounded-md" required />
              )}

              <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">Save</button>
              {message && <p className="text-sm text-green-600 mt-2">{message}</p>}
            </form>
          </div>

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
  )
}
```

Once pasted, deploy it and test adding a follow-up. Tell me what message you get — then we’ll go to the next step (display today's follow-ups from Supabase).
