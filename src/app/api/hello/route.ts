// added in to next.js 13.2
import { cookies, headers } from "next/headers";
import { NextResponse } from "next/server";
// const headerList = headers()
// const referer = headerList.get('referer')
// const cookiesStore = cookies()
// const token = cookiesStore.get('token')


// http://localhost:3000/api/hello
// export async function GET(request: Request) {
//   return new Response('Hello, Next.js!')
// }

// http://localhost:3000/api/hello
export async function GET(request: Request) {
  return NextResponse.json({fname:"John Deo"}) //{"fname":"John Deo"}
}

export async function POST(request: Request) { 
  return NextResponse.json({fname:"John Deo"}) //{"fname":"John Deo"}
}

export async function PUT(request: Request) {
  return NextResponse.json({fname:"John Deo"}) //{"fname":"John Deo"}
 }

 export async function DELETE(request: Request) {
  return NextResponse.json({fname:"John Deo"}) //{"fname":"John Deo"}
 }
