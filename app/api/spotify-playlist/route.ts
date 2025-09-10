import SpotifyService from '@/services/spotify'
import { NextResponse } from 'next/server'

export async function GET () {
  try {
    const res = SpotifyService.getPlaylist()
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
        return NextResponse.json({ error: message }, {status: 500})
  }
}