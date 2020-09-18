import React, { Component, useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const HookEx = () => {
  // this isn't a hook itself, but the context works for hooks
  // works for multiple contexts, and for hooks

  const {isLightTheme, light, dark} = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  return (
    <nav style={{ background: theme.ui, color: theme.syntax }}>
      <h1>Hooks comp</h1>
      <ul>
        <li style={{background: theme.ui}}>HomeHooks</li>
        <li style={{ background: theme.ui}}>AboutHooks</li>
        <li style={{ background: theme.ui}}>SettingsHooks</li>
      </ul>
    </nav>
  )
}
  


export default HookEx