import { configureStore } from "@reduxjs/toolkit";

import restaurantReducer from "./features/restaurantSlice";
import basketReducer from "./features/basketSlice";
export default configureStore({
  reducer: {
    basket: basketReducer,
    restaurant: restaurantReducer,
  },
});
