import SpotifyTrack from './SpotifyTrack'
import SpotifyUser from './SpotifyUser'

export default interface SpotifyTrackItem {
  added_at: string
  added_by: SpotifyUser
  is_local: boolean
  track: SpotifyTrack
}
  