// pages/api/save-lead.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '@/utils/supabaseClient';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, phone, date, reminderDays, type } = req.body;

  const { data, error } = await supabase.from('customer_leads').insert([
    { name, phone, date, reminderDays, type }
  ]);

  if (error) {
    console.error('Supabase error:', error);
    return res.status(500).json({ message: 'Failed to save lead', error });
  }

  return res.status(200).json({ message: 'Lead saved successfully', data });
}
