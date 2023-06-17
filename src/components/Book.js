import React from "react";
import { Menu, MenuItem } from "@material-ui/core";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import CheckIcon from "@material-ui/icons/Check";

import "./Book.css";

export const Book = ({ data, category, dispatch }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleUpdateCategory = (event, option, itemId) => {
    // setSelectedIndex(index);
    // console.log("option", option)

    // console.log("id", itemId, option);
    dispatch({
      type: "EDIT_BOOK_DATA",
      payload: {
        id: itemId,
        category: option,
      },
    });

    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      {data.map((book) => (
        <div className="book" key={book.id}>
          <div className="image-container">
            <img src={book.image} alt="book_image" />
            <div className="menu" onClick={handleClick}>
              <ArrowDropDownIcon fontSize="medium" />
            </div>
          </div>
          <div className="book-details">
            <p>{book.name}</p>
            <p className="light-text">{book.author}</p>
          </div>

          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            {category.map((option, index) => (
              <MenuItem
                key={option}
                disabled={index === 0}
                selected={book.category === option}
                onClick={(event) =>
                  handleUpdateCategory(event, option, book.id)
                }
              >
                {option}
                {book.category === option && <CheckIcon fontSize="small" />}
              </MenuItem>
            ))}
          </Menu>
        </div>
      ))}
    </>
  );
};
