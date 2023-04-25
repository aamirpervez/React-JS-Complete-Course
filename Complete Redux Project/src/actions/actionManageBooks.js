export const GET_BOOKS = "REDUX_SAGA_GET_BOOKS";
export const ADD_BOOK = "REDUX_SAGA_ADD_BOOK";
export const REMOVE_BOOK = "REDUX_SAGA_REMOVE_BOOK";

export const actionGetBooks = (dispatch) => {
  dispatch({ type: GET_BOOKS });
};

export const actionAddBook = (dispatch, objBook) => {
  dispatch({ type: ADD_BOOK, payload: objBook });
};

export const actionRemoveBook = (dispatch, bookid) => {
  dispatch({ type: REMOVE_BOOK, payload: { bookid: bookid } });
};
