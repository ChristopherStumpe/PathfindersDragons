import React from 'react';
import ThemeContextProvider from './contexts/ThemeContext';
import Navbar from './components/Navbar'
import HookEx from './components/HookEx'
import ThemeToggle from './components/ThemeToggle'
import CharacterContextProvider from './contexts/CharacterContext';
import SongList from './components/SongList'
import BookContextHook from './contexts/BookContextHook'
import BookList from './components/BookList'
function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <CharacterContextProvider>
          <Navbar />
          <HookEx />
          <SongList />
          <BookContextHook>

          <BookList />
          </BookContextHook>
          <ThemeToggle />
        </CharacterContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
