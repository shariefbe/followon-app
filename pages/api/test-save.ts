// pages/api/test-save.ts
import type { NextApiRequest, NextApiResponse } from 'next'
import { supabase } from '@/utils/supabaseClient'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { data, error } = await supabase.from('leads').insert([
    {
      name: 'Test User',
      phone: '9999999999',
      date: '2024-05-28',
      reminderDays: '3',
      type: 'catalog'
    }
  ])

  if (error) {
    console.error('❌ Supabase insert error:', error)
    return res.status(500).json({ success: false, error })
  }

  return res.status(200).json({ success: true, data })
}
