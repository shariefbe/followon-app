// pages/api/save-lead.ts
import type { NextApiRequest, NextApiResponse } from 'next'
import { supabase } from '@/utils/supabaseClient'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { name, phone, date, reminderDays } = req.body

  const { data, error } = await supabase.from('customer_leads').insert([
    {
      name: name,
      mobile: phone,
      catalog_date: date,
      reminder_days: reminderDays ? parseInt(reminderDays) : null
    }
  ])

  if (error) {
    console.error('Supabase error:', error)
    return res.status(500).json({ success: false, error: error.message })
  }

  return res.status(200).json({ success: true, data })
}
