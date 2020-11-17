import React, { useState, useEffect } from 'react';
import uuid from 'uuid/v1';
import NewSongForm from './NewSongForm'

const SongList = () => {
  const [songs, setSongs] = useState([
    { title: 'almost home', id: 1},
    { title: 'memory gospel', id: 2},
    {title: 'this wild darkness', id: 3}
  ]);
  //can use state as many times as i want
  const [age, setAge] = useState(20);
  const addSong = (title) => {
    setSongs([...songs, { title, id: uuid()}])
  }
  //runs every time component renders (state change)
  // except the array passed in, songs, says only run when songs changes. empty array for only on load
  useEffect(() => {
    console.log('useEffect hook ran', songs)
  }, [songs])
  useEffect(() => {
    console.log('useEffect hook ran', age)
  }, [age])
  //es6 shorthand since value and key are same so I can just say title
  //use uuid invoke to generate unique ids. just npm installed the package
  //use spread syntax so it keeps old songs and doesnt replace everything
  return (
    <div className="song-list">
      <ul>
        {songs.map(song => {
          return ( <li key={song.id}>{song.title}</li>)
        })}
      </ul>
      <NewSongForm addSong={addSong}/>
        {/* add song is just a standard prop here */}
      <button onClick={() => setAge(age + 1)}>add 1 to age: {age}</button>
    </div>
  )
}

export default SongList;