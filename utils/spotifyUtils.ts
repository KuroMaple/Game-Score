import SpotifyTrackItem from '@/types/SpotifyTrackItem'

const getRandomTrackItem = (trackItems: SpotifyTrackItem[]) => {
  if(!trackItems){
    console.error("util.getRandomTrack: no trackItems specified")
    return
  }
  const randomIndex = Math.floor(Math.random() * trackItems.length)
  return trackItems[randomIndex]
}

export default getRandomTrackItem