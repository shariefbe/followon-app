// pages/dashboard.tsx
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { useState } from "react";
import axios from "axios";

export default function Dashboard() {
  const [followType, setFollowType] = useState("catalog");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    reminderDays: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/save-lead", {
        ...formData,
        type: followType
      });
      alert("Lead saved successfully!");
      setFormData({ name: "", phone: "", date: "", reminderDays: "" });
    } catch (error) {
      alert("Failed to save lead");
    }
  };

  return (
    <>
      <SignedIn>
        <div className="min-h-screen bg-gray-100 p-6 flex flex-col md:flex-row gap-6">
          <div className="absolute top-4 right-4">
            <UserButton afterSignOutUrl="/" />
          </div>

          {/* Left Side: Form */}
          <div className="bg-white rounded-xl shadow-md p-6 w-full md:w-1/2">
            <h1 className="text-2xl font-bold text-blue-700 mb-4">Add Follow-Up</h1>

            {/* Follow-up Type Buttons */}
            <div className="mb-4 flex gap-2">
              {[
                { key: "catalog", label: "Catalog Sent" },
                { key: "bought", label: "Bought Today" },
                { key: "payment", label: "Payment Promise" }
              ].map((btn) => (
                <button
                  key={btn.key}
                  className={`px-4 py-2 rounded-md ${followType === btn.key ? "bg-blue-600 text-white" : "bg-gray-200"}`}
                  onClick={() => setFollowType(btn.key)}
                >
                  {btn.label}
                </button>
              ))}
            </div>

            {/* Form Fields */}
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
                  placeholder="Payment Date Promised"
                  className="w-full px-4 py-2 border rounded-md"
                />
              )}

              <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
                Save
              </button>
            </form>
          </div>

          {/* Right Side: Static Follow-ups */}
          <div className="bg-white rounded-xl shadow-md p-6 w-full md:w-1/2">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Today's Follow-ups</h2>
            <ul className="space-y-2 text-gray-700">
              <li>📦 Nithya (Catalog Follow-up)</li>
              <li>💰 kalaiyarasi (Payment Reminder)</li>
              <li>🛍️ Viji (Bought Today Follow-up)</li>
              <li className="text-gray-400">(Static demo list)</li>
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
