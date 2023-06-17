import React from "react";
import { Menu, MenuItem } from "@material-ui/core";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import CheckIcon from "@material-ui/icons/Check";

export const BookMenu = ({ book, category, dispatch }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleUpdateCategory = (event, option, itemId) => {
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
      <div className="menu" onClick={handleClick}>
        <ArrowDropDownIcon fontSize="medium" />
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
            onClick={(event) => handleUpdateCategory(event, option, book.id)}
          >
            {option}
            {book.category === option && <CheckIcon fontSize="small" />}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};
