import React from 'react';
import SongDetails from './SongDetails';
import '../App.css';

const SongList = (props) => {
  const songNodes = props.songs.map((song, index) => {
    return(
      <SongDetails
      title = {song["im:name"].label}
      artist = {song["im:artist"].label}
      artwork={song["im:image"][2].label}
      sample={song.link[1].attributes.href}
      position = {index+1}
      key={index}
      genre={song.category.attributes.label}
      />
    )

  })

  return (
    <>
    {songNodes}
    </>
  )
}

export default SongList
