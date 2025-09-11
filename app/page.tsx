'use client'
import { API_ROUTES } from '@/config/apiRoutes'
import ApiService from '@/services/api'
import SpotifyService from '@/services/spotify'
import { SpotifyToken } from '@/types/SpotifyToken'
import { useState } from 'react'

export default function Home() {
  const [token, setToken] = useState('')
  const getPlaylist = async () => {
    if (!token){
      console.error("No access token available")
      return
    }
    const playlist = await ApiService.get(
      API_ROUTES.spotifyPlaylist,
      {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
    )
    console.log(playlist)
  }

  const getAccessToken = async () => {
    const savedToken = localStorage.getItem('spotify_token')
    const savedExpiry = localStorage.getItem('spotify_token_expiry')
    const now = Date.now()

    // check local storage
    if (savedToken && savedExpiry && now < Number(savedExpiry)){
      setToken(savedToken)
      console.log('Token from storage: ', savedToken)
      return
    }

    // Fetch new token
    const res: SpotifyToken = await ApiService.get(API_ROUTES.spotifyAccessToken)

    setToken(res.access_token)
    const expiry = now + (res.expires_in * 1000)
    localStorage.setItem('spotify_token', res.access_token)
    localStorage.setItem('spotify_token_expiry', expiry.toString())
    console.log('Token from API:', res)
  }

  return (
    <div
      className='flex justify-center min-h-screen'
    >
      <main
        className='flex flex-col items-center w-full mt-8'
      >
        <h1
            className='text-8xl text-center'
          >
            Game Score
          </h1>
        <div
          className='flex flex-row mt-8 gap-3'
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
        
      </main>
      <footer
        className='absolute bottom-4 text-gray-500'>
        Made by ⚫🍁
      </footer>
    </div>
  );
}
