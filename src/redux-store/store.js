import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { ProductSlice } from "./features/productSlice";

const rootReducer = combineReducers({
  product: ProductSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
