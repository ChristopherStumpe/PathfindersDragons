import React, { createContext, useState } from 'react';

export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books, setBooks] = useState([
    {title: 'Dune', id: 1},
    {title: 'Color of Magic', id: 1},
    {title: 'Archers Tale', id: 1},
    {title: 'Enders Game', id: 1},
  ]);
  return (
    <BookContext.Provider value={{books}}>
      {props.children}
    </BookContext.Provider>
  );
}

export default BookContextProvider;