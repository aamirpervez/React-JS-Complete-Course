import { loadState, saveState } from "../helper/sessionStorage";
import { GET_BOOKS, ADD_BOOK } from "../actions/actionManageBooks";

const sessionkey1 = "bookscollections";

const initialState = {
  books: loadState(sessionkey1, []),
};

const reducerManageBooks = (state = initialState, action) => {
  switch (action.type) {
    case GET_BOOKS: {
      saveState(sessionkey1, action.data);

      return {
        ...state,
        books: action.data,
      };
    }
    case ADD_BOOK: {
      let newBooks = JSON.parse(JSON.stringify(state.books));

      let ob = {
        bookid: action.payload.bookid,
        bookname: action.payload.bookname,
        author: action.payload.author,
        status: action.payload.status,
        rating: action.payload.rating,
      };

      newBooks.push(ob);

      saveState(sessionkey1, newBooks);

      return {
        ...state,
        books: newBooks,
      };
    }
    default:
      return state;
  }
};

export default reducerManageBooks;
