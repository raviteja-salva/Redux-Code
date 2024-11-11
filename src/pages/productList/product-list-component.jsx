import React from "react";
import {
  Container,
  CourseItem,
  CartButton,
  CartContainer,
  Title,
  CourseListContainer,
  CartSummary,
  CartList,
  CartItem,
} from "./product-list-style";
import { useDispatch, useSelector } from "react-redux";
// import { removeCourse, addCourse } from "../../slices/checkoutslice";

import HeaderComponent from "../header/header-component";
import { addProduct, removeProduct } from "../../slices/checkoutslice";

const ProductListComponent = () => {
  const dispatch = useDispatch();
  const { productList, count } = useSelector((state) => state.checkout);
  const availableProducts = [
    { name: "IPhone", amount: 50000 },
    { name: "Samsung", amount: 10000 },
    { name: "Laptop", amount: 36000 },
  ];
  const handleCourseClick = (product) => {
    const isProductCart = productList.some(
      (selectedProduct) => selectedProduct.name == product.name
    );
    if (isProductCart) {
      dispatch(removeProduct(product.name));
    } else {
      dispatch(addProduct(product));
    }
  };
  return (
    <div>
      <HeaderComponent />
      <Container>
        <Title>Available Products</Title>
        <CourseListContainer>
          {availableProducts.map((product, index) => {
            return (
              <CourseItem key={index}>
                <span>
                  {product.name} - ${product.amount}
                </span>
                <CartButton
                  inCart={productList.some((c) => c.name === product.name)}
                  onClick={() => handleCourseClick(product)}
                >
                  {productList.some((c) => c.name === product.name)
                    ? "Remove"
                    : "Add"}
                </CartButton>
              </CourseItem>
            );
          })}
        </CourseListContainer>
        <CartContainer>
          <Title>Cart</Title>
          <CartSummary>Total Courses: {count}</CartSummary>
          <CartList>
            {productList.map((course) => (
              <CartItem key={course.name}>
                {course.name} - ${course.amount}
              </CartItem>
            ))}
          </CartList>
        </CartContainer>
      </Container>
    </div>
  );
};
export default ProductListComponent;
