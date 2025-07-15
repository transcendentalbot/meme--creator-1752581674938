import { NextRequest, NextResponse } from 'next/server'

// Example backend API route
export async function GET(request: NextRequest) {
  return NextResponse.json({ 
    message: 'This is your backend API',
    timestamp: new Date().toISOString()
  })
}

export async function POST(request: NextRequest) {
  const body = await request.json()
  
  // Here you would interact with DynamoDB
  // Example: save data, query items, etc.
  
  return NextResponse.json({ 
    success: true,
    received: body 
  })
}