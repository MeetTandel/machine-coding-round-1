import React from "react";
import { Book } from "../../components/Book";
import { useBooks } from "../../context/BookContext";
import "./Home.css";

export const Home = () => {
  const { books, category, dispatch } = useBooks();

  return (
    <div className="home__container">
      <div className="currently-reading">
        <div className="title__container">
          <h2 className="home__title">Currently Reading</h2>
        </div>
        <div className="books__container">
          <Book
            data={books.filter(
              (item) => item.category.toLowerCase() === "currently reading"
            )}
            category={category}
            dispatch={dispatch}
          />
        </div>
      </div>

      <div className="want-to-read">
      <div className="title__container">
        <h2 className="home__title">Want to Read</h2>
      </div>
        <div className="books__container">
          <Book
            data={books.filter(
              (item) => item.category.toLowerCase() === "want to read"
            )}
            category={category}
            dispatch={dispatch}
          />
        </div>
      </div>

      <div className="read">
      <div className="title__container">
        <h2 className="home__title">Read</h2>
      </div>
        <div className="books__container">
          <Book
            data={books.filter(
              (item) => item.category.toLowerCase() === "read"
            )}
            category={category}
            dispatch={dispatch}
          />
        </div>
      </div>
    </div>
  );
};
