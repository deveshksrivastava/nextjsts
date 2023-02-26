// export default function handler1(req:any, res:any) {
//     if (req.method === 'POST') {
//       // save to DB!
//       console.log(req.body)
//       res.json({message: 'ok'})
//     }
//   }

  export async function POST(request: Request) {
    console.log(request.body)
    return new Response('Maya, Next.js!')
  }
  


import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: 'John Doe' })
}