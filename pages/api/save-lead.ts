// pages/api/save-lead.ts
import type { NextApiRequest, NextApiResponse } from 'next'
import { supabase } from '@/utils/supabaseClient'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { name, phone, date, reminderDays, type } = req.body

  console.log("Incoming lead data:", req.body) // ✅ Debug log

  const { error } = await supabase.from('customer_leads').insert({
    name,
    mobile: phone,
    catalog_date: date,
    reminder_days: reminderDays,
    follow_type: type || null  // optional: if you added this column
  })

  if (error) {
    console.error("Supabase Insert Error:", error) // ✅ Log the actual error
    return res.status(500).json({ error: error.message })
  }

  res.status(200).json({ success: true })
}
