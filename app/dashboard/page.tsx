"use client"

import { useEffect, useState } from "react"
import { useUser, useAuth, SignInButton, UserButton } from "@clerk/nextjs"
import { useRouter } from "next/navigation"
import axios from "axios"

export default function Dashboard() {
  const { isSignedIn, isLoaded } = useAuth()
  const router = useRouter()

  const [followType, setFollowType] = useState("catalog")
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    reminderDays: ""
  })

  useEffect(() => {
    console.log("✅ Dashboard page loaded")
  }, [])

  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      router.push("/")
    }
  }, [isLoaded, isSignedIn, router])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await axios.post("/api/save-lead", {
        ...formData,
        type: followType
      })
      alert("Lead saved successfully!")
      setFormData({ name: "", phone: "", date: "", reminderDays: "" })
    } catch (error) {
      console.error("❌ API Error:", error)
      alert("Failed to save lead")
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col md:flex-row gap-6">
      <div className="absolute top-4 right-4">
        <UserButton afterSignOutUrl="/" />
      </div>

      {/* Left Side: Form */}
      <div className="bg-white rounded-xl shadow-md p-6 w-full md:w-1/2">
        <h1 className="text-2xl font-bold text-blue-700 mb-4">Add Follow-Up</h1>
        <div className="mb-4 flex gap-2">
          {["catalog", "bought", "payment"].map((type) => (
            <button
              key={type}
              onClick={() => setFollowType(type)}
              className={`px-4 py-2 rounded-md ${followType === type ? "bg-blue-600 text-white" : "bg-gray-200"}`}
            >
              {type === "catalog" ? "Catalog Sent" : type === "bought" ? "Bought Today" : "Payment Promise"}
            </button>
          ))}
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Customer Name"
            className="w-full px-4 py-2 border rounded-md"
          />
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="Mobile Number"
            className="w-full px-4 py-2 border rounded-md"
          />
          {(followType === "catalog" || followType === "bought") && (
            <>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-md"
              />
              <select
                name="reminderDays"
                value={formData.reminderDays}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-md"
              >
                <option value="">Reminder After...</option>
                <option value="3">3 Days</option>
                <option value="5">5 Days</option>
                <option value="7">7 Days</option>
              </select>
            </>
          )}
          {followType === "payment" && (
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md"
            />
          )}

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
          >
            Save
          </button>
        </form>
      </div>

      {/* Right Side: Static Follow-ups */}
      <div className="bg-white rounded-xl shadow-md p-6 w-full md:w-1/2">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Today's Follow-ups</h2>
        <ul className="space-y-2 text-gray-700">
          <li>📦 Nithya (Catalog Follow-up)</li>
          <li>💰 Kalaiyarasi (Payment Reminder)</li>
          <li>🛍️ Viji (Bought Today Follow-up)</li>
          <li className="text-gray-400">(Static demo list)</li>
        </ul>
      </div>
    </div>
  )
}
