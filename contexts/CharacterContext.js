import React, { Component, createContext } from 'react';

export const CharacterContext = createContext();

class CharacterContextProvider extends Component {
  state = {
    character: true
  }
  toggleCharacter = () => {
    this.setState({ character: !this.state.character})
  }
  render() {
    return ( 
      <CharacterContext.Provider value={{...this.state, toggleCharacter: this.toggleCharacter}}>
        { this.props.children }
      </CharacterContext.Provider>
    );
  }
}

export default CharacterContextProvider;