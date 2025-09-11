import SpotifyExternalUrls from './SpotifyExternalUrls'

export default interface SpotifyUser {
  external_urls: SpotifyExternalUrls
  href: string
  id: string
  type: string
  uri: string
  display_name: string
}
