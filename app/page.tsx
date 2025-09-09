'use client'
import SpotifyService from '@/services/spotify'
import { useState } from 'react'

export default function Home() {
  const [token, setToken] = useState('')
  const getPlaylist = async () => {
    const playlist = await SpotifyService.getPlaylist()
    console.log(playlist)
  }

  const getAccessToken = async () => {
    const savedToken = localStorage.getItem('spotify_token')
    const savedExpiry = localStorage.getItem('spotify_token_expiry')
    const now = Date.now()
    if (savedToken && savedExpiry && now < Number(savedExpiry)){
      setToken(savedToken)
      console.log('Token from storage: ', savedToken)
      return
    }

    // Fetch new token
    const res = await fetch('/api/spotify-access-token')
    const data = await res.json()
    setToken(data.token.access_token)

    const expiry = now + 60 * 60 * 1000
    localStorage.setItem('spotify_token', data.token.access_token)
    localStorage.setItem('spotify_token_expiry', expiry.toString())
    console.log('Token from API:', data.token)
  }

  return (
    <div
      className='flex justify-center min-h-screen items-center'
    >
      <main>
        <div
          className='flex flex-col'
        >
          <h1
            className='text-lg'
          >
            Game Score
          </h1>
          <div
            className='flex flex-row gap-2'
          >
            <button
            onClick={getAccessToken}
            className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'
            >
            Get Access Token
          </button>
          <button
            onClick={getPlaylist}
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
          >
            Get playlist
          </button>
          </div>
          
        </div>
        
      </main>
      <footer>
        
        
      </footer>
    </div>
  );
}
