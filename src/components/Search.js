import React from "react";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import SearchIcon from "@material-ui/icons/Search";
import { useLocation, useNavigate } from "react-router";
import { NavLink } from "react-router-dom";

import "./Search.css";
import { useBooks } from "../context/BookContext";

export const Search = () => {
  let location = useLocation();
  const navigate = useNavigate();
  const { search, dispatch } = useBooks();

  const handleClick = () => {
    navigate("/search");
  };

  return (
    <div className="search__bar__container">
      {location.pathname === "/search" && (
        <NavLink to="/" style={{ color: "#000"}}>
          <KeyboardBackspaceIcon />
        </NavLink>
      )}
      <div className="input__container" onClick={handleClick}>
        <input
          onChange={(e) =>
            dispatch({
              type: "BOOK_SEARCH",
              payload: e.target.value,
            })
          }
          className="search__bar"
          placeholder="Search Book/Author"
          type="text"
        />
        <SearchIcon />
      </div>
    </div>
  );
};
