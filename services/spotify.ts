import ApiService from './api'

const BASEURL = "https://api.spotify.com/v1"
const GameScorePlaylist = "4PpdBcNlXbC5WmfmYGgP41"

const SpotifyService = {
  getPlaylist:  () => {
    ApiService.get(`${BASEURL}/v1/playlists/${GameScorePlaylist}`)
  }
}
export default SpotifyService