import React, { useState } from 'react';
//add song is just the passed down prop
const NewSongForm = ({ addSong }) => {
  const [title, setTitle] = useState('');
  const handleSubmit = (e) => {
    // e stands for event
    // prevent default is to prevent the refresh that this default does (we're using hooks, don't want it)
    e.preventDefault();
    addSong(title)
    // clear field on submit, settitle to blank
    setTitle('');
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>Song name:</label>
      <input type="text" value={title} required onChange={(e) => setTitle(e.target.value)} />
      <input type="submit" value="add song" />
    </form>
  )
}

export default NewSongForm;