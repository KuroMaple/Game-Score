type MusicPlayerProps = {
  src: string
}
const MusicPlayer = ({ src }: MusicPlayerProps) => {
  
  return (
  <div
    className='flex justify-center mt-10'
  >
    <audio controls src={src}>
      Your browser does not support the audio element.
    </audio>
  </div>
  )
}

export default MusicPlayer