const MusicPlayer = () => {
  
  return (
  <div
    className='flex justify-center mt-10'
  >
    <audio controls src={"https://www.youtube.com/watch?v=ftj-S6QUcD4&ab_channel=Frygoon"}>
      Your browser does not support the audio element.
    </audio>
  </div>
  )
}

export default MusicPlayer