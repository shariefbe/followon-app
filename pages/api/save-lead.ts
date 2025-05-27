// pages/api/save-lead.ts
import type { NextApiRequest, NextApiResponse } from 'next'
import { supabase } from '@/utils/supabaseClient'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Only POST requests allowed' })
  }

  const { name, phone, followType, date, days } = req.body

  const { data, error } = await supabase.from('leads').insert([
    {
      customer_name: name,
      phone_number: phone,
      follow_type: followType,
      follow_date: date,
      reminder_after_days: days,
    },
  ])

  if (error) {
    return res.status(500).json({ message: 'Failed to save', error })
  }

  res.status(200).json({ message: 'Lead saved successfully', data })
}
