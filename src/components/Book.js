import React from "react";

import "./Book.css";
import { BookMenu } from "./BookMenu";

export const Book = ({ data, category, dispatch }) => {

  return (
    <>
      {data.map((book) => (
        <div className="book" key={book.id}>
          <div className="book-container">
            <img src={book.image} alt="book_image" />

            <div className="book-details">
              <p>{book.name}</p>
              <p className="light-text">{book.author}</p>
            </div>

            <BookMenu
              dispatch={dispatch}
              book={book}
              category={category}
            />
          </div>
        </div>
      ))}
    </>
  );
};
