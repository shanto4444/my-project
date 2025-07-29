import { configureStore } from "@reduxjs/toolkit";
import { CartSlice } from "./components/slices/CartSlice";

export default configureStore({
  reducer: {
    CartItemManeger: CartSlice.reducer,
  },
});
