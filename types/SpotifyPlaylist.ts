import SpotifyExternalUrls from './SpotifyExternalUrls'
import SpotifyImage from './SpotifyImage'
import SpotifyTracks from './SpotifyTracks'
import SpotifyUser from './SpotifyUser'

export interface SpotifyPlaylist {
  collaborative: boolean
  description: string
  external_urls: SpotifyExternalUrls
  href: string
  id: string
  images: SpotifyImage[]
  name: string
  owner: SpotifyUser
  public: boolean
  snapshot_id: string
  tracks: SpotifyTracks
  type: string
  uri: string
}