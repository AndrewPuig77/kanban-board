// src/app/api/hello/route.ts
import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({
    message: 'Hello from the Kanban Board API!',
    timestamp: new Date().toISOString(),
    project: 'MyCritters Onboarding - Kanban Board'
  })
}