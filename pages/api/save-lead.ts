// pages/api/save-lead.ts
import type { NextApiRequest, NextApiResponse } from 'next'
import { supabase } from '@/utils/supabaseClient'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { name, phone, date, reminderDays, type } = req.body

  if (!name || !phone || !date) {
    return res.status(400).json({ error: 'Missing fields' })
  }

  const { error } = await supabase.from('customer_leads').insert([
    {
      name,
      mobile: phone,
      catalog_date: date,
      reminder_days: reminderDays,
      follow_type: type
    }
  ])

  if (error) {
    console.error('Supabase insert error:', error)
    return res.status(500).json({ error: 'Database insert failed', detail: error.message })
  }

  return res.status(200).json({ message: 'Lead saved successfully' })
}
