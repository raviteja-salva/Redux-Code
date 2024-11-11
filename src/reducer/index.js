import { combineReducers } from "@reduxjs/toolkit";
import checkoutslice from "../slices/checkoutslice";

const rootReducer = combineReducers({
  checkout: checkoutslice,
});
export default rootReducer;
