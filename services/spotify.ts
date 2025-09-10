import { SpotifyToken } from '@/types/spotifyToken'
import ApiService from './api'



const SpotifyService = {
  getPlaylist:  async () => {
    return await ApiService.get(`${process.env.BASEURL}/playlists/${process.env.GAME_SCORE_PLAYLIST}`)
  },
  getAccessToken: async (): Promise<SpotifyToken> => {
    const clientId = process.env.SPOTIFY_CLIENT_ID
    const clientSecret = process.env.SPOTIFY_CLIENT_SECRET
    if (!clientId || !clientSecret){
      throw new Error("Missing Spotify credentials")
    }

    const body = new URLSearchParams({
      grant_type: "client_credentials",
      client_id: clientId,
      client_secret: clientSecret,
    })
    const response = await ApiService.post("https://accounts.spotify.com/api/token", body)
    return response as SpotifyToken
  }
}
export default SpotifyService