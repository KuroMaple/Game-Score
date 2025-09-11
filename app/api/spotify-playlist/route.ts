import SpotifyService from '@/services/spotify'
import { NextResponse } from 'next/server'

export async function GET (request: Request) {
  try {
    const authHeader = request.headers.get('authorization')
    const token = authHeader?.replace('Bearer ', '')
    if (!token) {
      return NextResponse.json({ error: 'No access token provided' }, { status: 400 })
    }
    const res = await SpotifyService.getPlaylist(token)
    return NextResponse.json(res)
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
        return NextResponse.json({ error: message }, {status: 500})
  }
}