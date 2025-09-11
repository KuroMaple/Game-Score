'use client'
import MusicPlayer from '@/components/MusicPlayer'
import { SpotifyPlaylist } from '@/types/SpotifyPlaylist'
import getRandomTrackItem from '@/utils/spotifyUtils'
import { useEffect, useState } from 'react'

const MusicPage = () => {
  const [playlist, setPlaylist] = useState<SpotifyPlaylist | null>(null)
  // const [previewURL, setPreviewUrl] = useState<string | null>(null)
  useEffect(() => {
    const savedPlaylist = localStorage.getItem('spotify_playlist')
    if (savedPlaylist) {
      setPlaylist(JSON.parse(savedPlaylist))
      console.log('Playlist from storage: ', savedPlaylist)
    }
    else {
      console.error("No playlist found in local storage, navigating back to home")
      window.location.href = '/'
    }
  }, [])
  const getRandomSong = () => {
    if(!playlist){
      console.error("Playlist not set, unable to generate random song")
      return
    }
    playlist.tracks.items.forEach(item => {
      console.log(item.track.preview_url);
    })  
    // setPreviewUrl(songURL ?? null)
  }
  return (
    <div
      className='flex flex-col gap-10'
    >
      <h1
        className='text-8xl text-center'
      >
        Music Page
      </h1>
      {/* {previewURL && <MusicPlayer src={previewURL}/>} */}
      <div
        className='flex justify-center'
      >
        <button
          className='bg-green-400 hover:bg-green-600 text-white p-4 rounded'
          onClick={getRandomSong}
        >
          Get Random Playlist
        </button>
      </div>
      
    </div>
  )
}
export default MusicPage