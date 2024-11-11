import styled from "styled-components";

// Styled components
export const Container = styled.div`
  padding: 20px;
  max-width: 500px;
  margin: auto;
  font-family: Arial, sans-serif;
`;

export const Title = styled.h2`
  text-align: center;
  color: #333;
`;

export const CourseListContainer = styled.ul`
  list-style-type: none;
  padding: 0;
  margin-bottom: 20px;
`;

export const CourseItem = styled.li`
  margin: 10px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CartButton = styled.button`
  padding: 8px 16px;
  background-color: ${(props) => (props.inCart ? "#ff4c4c" : "#4caf50")};
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background-color: ${(props) => (props.inCart ? "#ff3333" : "#45a049")};
  }
`;

export const CartContainer = styled.div`
  margin-top: 30px;
  padding: 10px;
  border-top: 2px solid #ddd;
`;

export const CartList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 10px 0;
`;

export const CartItem = styled.li`
  padding: 5px 0;
  color: #555;
`;

export const CartSummary = styled.p`
  font-weight: bold;
  color: #333;
`;
