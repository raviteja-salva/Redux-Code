import styled from "styled-components";

export const Tag = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 12px;
  border: 1px solid;
  padding: 2px;
  border-radius: 2px;

  @media screen and (min-width: 640px) {
    font-size: 16px;
  }
`;

export const EmptyCartContainer = styled.div`
  max-width: 1440px;
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  min-height: calc(100dvh - 195px);

  .empty__cart__image {
    object-fit: cover;
    max-width: 400px;
    width: 90%;
    height: auto;
  }

  & > h3 {
    font-size: 32px;
    font-family: "Work Sans", sans-serif;
    font-weight: 500;
  }
`;

export const CartHeading = styled.div`
  background-color: #f8fafc;
  border-bottom: 2px solid #edf0f5;
  & > h1 {
    font-size: 24px;
    padding: 0.8rem 0;
    font-family: "Work Sans", sans-serif;
    font-weight: 500;
  }

  @media screen and (min-width: 640px) {
    & > h1 {
      font-size: 28px;
      padding: 1.5rem 0;
    }
  }
`;

export const ShoppingcartStyle = styled.div`
  .max_width_1440 {
    max-width: 1440px;
    margin: 0 auto;
    width: 90%;
  }

  .element {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    align-items: center;
    background-color: green;
    font-weight: 700;
  }
  .element__item {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .course__features {
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 16px;
  }
  .course__count {
    font-weight: 500;
    font-family: "Work Sans", sans-serif;
    border-bottom: 2px solid #edf0f5;
    padding: 0.5rem 0;
    font-size: 24px;
    & > span {
      font-size: 28px;
    }
  }

  .element__one {
    display: flex;
    justify-content: space-between;
  }
  .course__details {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 0.3rem;

    @media screen and (min-width: 480px) {
      gap: 0.5rem;
    }
  }

  .course__card__content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .card_container {
    display: grid;
    gap: 1rem;
    max-width: 700px;
  }

  .amount__box {
    display: flex;
    gap: 5px;
    align-items: center;
  }

  /* .amount__cancel__total {
    color: grey;
    font-weight: 700;
  } */
  .amount__off {
    font-weight: 700;
  }
  .element__three__final {
    display: flex;
    flex-direction: column;
    gap: 5px;
    cursor: pointer;
  }
  .summary__box {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    @media (max-width: 920px) {
    }
  }
  .duplicate__title {
    font-weight: 700;
    color: red;
    @media (max-width: 920px) {
    }
  }
  .total__title {
    font-weight: 500;
    font-size: 20px;
    color: grey;
    margin-bottom: 20px;
  }
  .amount__total {
    font-weight: 700;
    font-size: 18px;
    color: red;
  }
  .elements__list {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .info__box {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 15px;
  }
  .info__box__seperate {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 20px 0;
  }

  .divider {
    border: 1px solid #edf0f5;
  }
`;

export const Checkout = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding-bottom: 1rem;

  .flex_col {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .margin_top_16px {
    margin-top: 16px;
  }

  & > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 8px;
    position: relative;
    border: 2px solid #edf0f5;
    padding: 1rem;
    background-color: #fff;
  }

  .checkbox_container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  @media screen and (min-width: 640px) {
    max-width: 380px;
  }

  @media screen and (min-width: 1024px) {
    width: 95%;
    & > div {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      border-radius: 8px;
      position: relative;
      border: 2px solid #edf0f5;
      padding: 1rem;
      background-color: #fff;
    }
  }
`;

export const CoursesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const CourseCard = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 0.5rem;
  overflow-x: auto;
  position: relative;
  font-family: "Work Sans", sans-serif;
  & > *:nth-child(3) {
    cursor: pointer;
    color: red;
    display: block;
    background: none;
    transition: background-color 0.2s linear;
    border: none;
    padding: 0.25rem;
    border-radius: 4px;
    place-self: end;
    & > .icon {
      width: 24px;
      height: 24px;
    }
    &:hover {
      background-color: #fc294744;
    }
  }

  .duplicate__text {
    background-color: none;
    background: none;
    width: 120px;
    padding: 5px;
    font-weight: 700;
    border: 1px solid red;
    color: red;
    border-radius: 20px;
  }

  .course__image {
    object-fit: cover;
    border-radius: 8px;
    display: block;
    max-width: 180px;
    min-width: 120px;
    width: 100%;
    aspect-ratio: 3/2;
  }

  .course_title {
    font-weight: 500;
    font-size: 18px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }

  .course_subtitle {
    font-weight: 500;
    color: grey;
    font-size: 14px;
  }

  .star_icon {
  }

  .rating__box {
    display: flex;
    gap: 5px;
    font-size: 16px;
  }

  .rating {
    font-size: 12px;
    white-space: nowrap;
  }
  .earlybird__box {
    display: flex;
    align-items: center;
    gap: 5px;
    .earlybird__title {
      font-weight: 700;
      color: red;
      font-size: 16px;
    }
    .earlybird__amount {
    }
    @media (max-width: 920px) {
    }
  }
  .price__details {
    display: flex;
    flex-wrap: wrap;
    gap: 0.25rem;

    & > .amount__box {
      & > .amount {
        color: #3c6ff2;
        font-size: 20px;
        font-weight: 500;
        display: flex;
        align-items: center;
        white-space: nowrap;
      }
    }

    & > .amount__cancel {
      color: #e01a3e;
      font-weight: 500;
      white-space: nowrap;
      font-size: 14px;
      align-self: flex-end;
    }
  }

  // increment on font-size
  @media screen and (min-width: 440px) {
    gap: 0.8rem;

    .course_title {
      font-size: 22px;
    }
    .course_subtitle {
      font-size: 18px;
    }

    .price__details {
      & > .amount__box {
        & > .amount {
          font-size: 24px;
        }
      }

      & > .amount__cancel {
        font-size: 18px;
      }
    }
    .rating__box {
      display: flex;
      gap: 5px;
      font-size: 18px;
    }

    .rating {
      font-size: 14px;
    }
  }

  @media screen and (min-width: 640px) {
    .course__image {
      max-width: 240px;
    }
    .course_title {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
    }
  }
`;

export const WarningMessage = styled.p`
  color: #856404; /* A dark yellow color for the warning */
  background-color: #fff3cd; /* A light yellow background */
  border: 1px solid #ffeeba; /* A slightly darker yellow border */
  padding: 10px;
  border-radius: 4px;
  font-size: 14px;
  margin-top: 10px;
`;

export const ErrorMessage = styled.p`
  color: red;
  font-size: 14px;
`;
