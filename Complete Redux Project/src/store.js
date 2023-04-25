// import { createStore } from "redux";
// import rootReducer from "./reducers/index";
// const store = createStore(rootReducer);

// export default store;

import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers/index";
import sagaManageBooks from "./saga/sagaManageBooks";
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: rootReducer,
  middleware: () => [sagaMiddleware],
});

sagaMiddleware.run(sagaManageBooks);
export default store;
