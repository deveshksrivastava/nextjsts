import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: 'ME' })
}

// http://localhost:3000/api/hello
export async function GET(request: Request) {
  return new Response('Maya, Next.js!')
}
