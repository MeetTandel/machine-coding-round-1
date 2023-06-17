import { createContext, useContext, useReducer } from "react";
import { BookReducer, initialBookState } from "../reducers/BookReducer";

const BookContext = createContext();

export function BookProvider({ children }) {
  const [bookState, dispatch] = useReducer(BookReducer, initialBookState);

  const searchResults =
    bookState.search !== ""
      ? bookState.data.filter((book) =>
          book.title.toLowerCase().includes(bookState.search) || 
          book.author.toLowerCase().includes(bookState.search)
        )
      : [];

  return (
    <BookContext.Provider
      value={{
        books: bookState.data,
        category: bookState.category,
        search: bookState.search,
        searchResults,
        dispatch,
      }}
    >
      {children}
    </BookContext.Provider>
  );
}
export const useBooks = () => useContext(BookContext);
