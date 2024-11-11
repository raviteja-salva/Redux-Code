import { createSlice } from "@reduxjs/toolkit";
import { CourseItem } from "../pages/productList/product-list-style";
const initialState = {
  count: 0,
  productList: [],
};
const checkoutSlice = createSlice({
  name: "checkout",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const product = action.payload;

      //   return product + 1;
      const productExists = state.productList.some(
        (c) => c.name === product.name
      );
      if (productExists !== -1) {
        state.productList.push(product);
        state.count = state.productList.length;
      }
    },
    removeProduct: (state, action) => {
      const product = action.payload;

      const productExists = state.productList.findIndex(
        (c) => c.name === product
      );
      console.log("I am coming till this poiunt");

      if (productExists !== -1) {
        state.productList.splice(productExists, 1);
        state.count = state.productList.length;
      }
    },
  },
});
export const { addProduct, removeProduct } = checkoutSlice.actions;
export default checkoutSlice.reducer;
