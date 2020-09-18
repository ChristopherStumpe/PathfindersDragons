import React, { Component, useContext } from 'react';
import { CharacterContext } from '../contexts/CharacterContext';
import { ThemeContext } from '../contexts/ThemeContext';

const Navbar = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const { character, toggleCharacter } = useContext(CharacterContext);
  const theme = isLightTheme ? light : dark
  return(
    <nav style={{ background: theme.ui, color: theme.syntax }}>
      <h1>Context App</h1>
      <div onClick={toggleCharacter}>
        { character ? 'charTrue' : 'charFalse'}
      </div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Settings</li>
      </ul>
    </nav>  
  )  
}

export default Navbar