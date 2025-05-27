// pages/api/test-supabase.ts
import type { NextApiRequest, NextApiResponse } from 'next'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { data, error } = await supabase.from('followups').select('*').limit(1)

  if (error) {
    return res.status(500).json({ success: false, error: error.message })
  }

  return res.status(200).json({ success: true, data })
}
