import SpotifyTrackItem from './SpotifyTrackItem'

export default interface SpotifyTracks {
  href: string
  limit: number
  next: string | null
  offset: number
  previous: string | null
  total: number
  items: SpotifyTrackItem[]
}
