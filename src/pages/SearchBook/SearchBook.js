import React from "react";
import { NavLink } from "react-router-dom";
import { Book } from "../../components/Book";
import { useBooks } from "../../context/BookContext";
import "./SearchBook.css";

export const SearchBook = () => {
  const { books, searchResults, search, dispatch, category } = useBooks();

  return (
    <div className="search-book__container">
      {/* <NavLink to="/">Back</NavLink> */}

      <div className="search-book__content">
        <Book
          data={
            search !== ""
              ? searchResults
              : books.filter((book) => book.category.toLowerCase() === "none")
          }
          category={category}
          dispatch={dispatch}
        />
      </div>

      {search !== "" && searchResults.length === 0 &&
      <div className="no__book">Book Does Not Exist</div>}
    </div>
  );
};
