//Put Methods
//API Calls.
// Make Functions (* is the generator operator, when we execute asyn opertaions it returns the results once
// async operations completes its execuation then it retuns the result).
//with generator function we need to use yeild.

import { put } from "redux-saga/effects";
import { GET_BOOKS } from "../actions/actionManageBooks";

function* sagaManageBooks() {
  let data = yield fetch("http://localhost:3500/Books");
  data = yield data.json();

  yield put({ type: GET_BOOKS, data: data });
}

export default sagaManageBooks;
