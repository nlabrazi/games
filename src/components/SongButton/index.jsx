import React, { useState, useEffect } from 'react'
import { StyledSongButton } from 'components/styles/StyledSongButton';

const useAudio = audioPath => {
  const [audio] = useState(new Audio(audioPath))
  const [playing, setPlaying] = useState(false)

  const toggle = () => setPlaying(!playing)

  useEffect(() => {
      playing ? audio.play() : audio.pause()
    },
    [playing, audio]
  )

  useEffect(() => {
    audio.addEventListener('ended', () => {
      audio.currentTime = 0
      audio.play()
      setPlaying(true)
    })
  }, [audio])

  return [playing, toggle]
}

const SongButton = ({ audioPath }) => {
  const [playing, toggle] = useAudio(audioPath)

  return (
    <div>
      <StyledSongButton onClick={toggle}>{playing ? 'Pause' : 'Play'}>Song</StyledSongButton>
    </div>
  )
}

export default SongButton
