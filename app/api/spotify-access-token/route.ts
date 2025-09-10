import SpotifyService from '@/services/spotify'
import { NextResponse } from 'next/server'

export async function GET () {
  try {
    const token = await SpotifyService.getAccessToken()
    return NextResponse.json(token)
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    return NextResponse.json({ error: message }, {status: 500})
  }
}