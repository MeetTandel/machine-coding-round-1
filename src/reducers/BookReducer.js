import books from "../data.json";

export const initialBookState = {
  data: books ?? [],
  category: ["Move to...", "Currently Reading", "Want to Read", "Read", "None"],
  search: "",
};

export const BookReducer = (state, { type, payload }) => {
  switch (type) {
    case "EDIT_BOOK_DATA":
      return {
        ...state,
        data: state.data.map((book) =>
          book.id === payload.id
            ? {
                ...book,
                category: payload.category,
              }
            : book
        ),
      };
    case "BOOK_SEARCH":
      return {
        ...state,
        search: payload,
      };
    default:
      return { ...state };
  }
};
