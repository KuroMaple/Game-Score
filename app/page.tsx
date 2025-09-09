'use client'
import MusicPlayer from '@/components/MusicPlayer'
import SpotifyService from '@/services/spotify'

export default function Home() {
  const getPlaylist = () => {
    const playlist = SpotifyService.getPlaylist
    console.log(playlist)
  }
  return (
    <div>
      <main>
        <div>
          <h1>
            Game Score
          </h1>
          <MusicPlayer />
          <button
            onClick={getPlaylist}
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
          >
            Get playlist
          </button>
        </div>
        
      </main>
      <footer>
        
        
      </footer>
    </div>
  );
}
