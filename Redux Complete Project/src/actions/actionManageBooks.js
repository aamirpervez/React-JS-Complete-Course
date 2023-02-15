export const actionAddBook = (objBook) => {
  return { type: "ADD_BOOK", payload: objBook };
};

export const actionRemoveBook = (bookid) => {
  return { type: "REMOVE_BOOK", payload: { bookid: bookid } };
};
