import { configureStore } from "@reduxjs/toolkit";
import { setupListeners} from "@reduxjs/toolkit/query";
import testReducer from "./reducers/test"

export const store = configureStore({
  reducer: {
    test : testReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
});
// 초기값 정재
setupListeners(store.dispatch)
