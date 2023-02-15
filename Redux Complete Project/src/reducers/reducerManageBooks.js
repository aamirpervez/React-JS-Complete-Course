const initialState = {
  books: [
    {
      bookid: 1111,
      bookname: "Book 1",
      author: "Alex",
      status: "Available",
      rating: 5,
    },
  ],
};

const reducerManageBooks = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_BOOK": {
      let newBooks = JSON.parse(JSON.stringify(state.books));

      let ob = {
        bookid: action.payload.bookid,
        bookname: action.payload.bookname,
        author: action.payload.author,
        status: action.payload.status,
        rating: action.payload.rating,
      };

      newBooks.push(ob);

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
