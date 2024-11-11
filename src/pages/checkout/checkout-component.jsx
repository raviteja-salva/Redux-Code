import React from "react";
import { useDispatch, useSelector } from "react-redux";
import HeaderComponent from "../header/header-component";
import { ShoppingcartStyle } from "./checkout-style";
import { removeProduct } from "../../slices/checkoutslice";
const ShoppingcartComponent = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.checkout.productList);
  console.log("This is the product list I am having with me dude", productList);
  const handleProductClick = (product) => {
    const isProductInCart = productList.some(
      (selectedProduct) => selectedProduct.name === product.name
    );

    if (isProductInCart) {
      dispatch(removeProduct(product.name)); // Remove course from cart
    }
  };
  return (
    <>
      <HeaderComponent />
      <ShoppingcartStyle>
        <div className="element">
          {productList?.map((item, index) => {
            return (
              <div className="element__item" key={index}>
                <div>{item?.name}</div>
                <div>{item?.amount}</div>
                <button onClick={() => handleProductClick(item)}>Remove</button>
              </div>
            );
          })}
        </div>
      </ShoppingcartStyle>
    </>
  );
};
export default ShoppingcartComponent;
