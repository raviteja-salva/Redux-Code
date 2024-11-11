import styled, { css } from "styled-components";
export const EntireHeaderStyle = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  @media (max-width: 920px) {
  }
`;
export const NotificationStyled = styled.div`
  background-color: #fc2947;
  text-align: center;
  overflow: hidden;
  .element__box {
    display: flex;
    gap: 40px;
    width: 100vw;
    position: relative;
    height: 3.2rem;
    @media (max-width: 920px) {
      gap: 80px;
      height: 2rem;
    }
  }
  .element {
    width: inherit;
    height: inherit;
    position: absolute;
    left: 0%;
    top: 0%;
    animation: primary 20s linear infinite;
  }
  .primary {
    animation: primary 20s linear infinite;
  }

  .secondary {
    animation: secondary 20s linear infinite;
  }
  @keyframes primary {
    from {
      left: 0%;
    }
    to {
      left: -100%;
    }
  }

  @keyframes secondary {
    from {
      left: 100%;
    }
    to {
      left: 0%;
    }
  }
  .element {
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 68%;
    gap: 40px;
    @media (max-width: 920px) {
      min-width: 70%;
      gap: 15px;
    }
  }
  .element__text {
    font-weight: 700;
    color: white;
    font-size: 20px;
    @media (max-width: 920px) {
      font-size: 7px;
    }
  }
  .button__style {
    font-weight: 700;
    padding: 10px;
    border-radius: 15px;
    border: 3px solid black;
    cursor: pointer;
    @media (max-width: 920px) {
      font-size: 7px;
      padding: 3px;
    }
  }
  @media (max-width: 920px) {
    padding: 10px;
  }
`;

export const HeaderStyled = styled.div`
  height: 100%;
  background-color: #ffffff;
  z-index: 100;

  display: block;
  @media (max-width: 1024px) {
    display: none;
  }
  section {
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    #close {
      position: absolute;
      left: 0;
      z-index: 1;
      @media (max-width: 1024px) {
      }
    }
    i {
      display: none;
      @media (max-width: 1024px) {
        display: block;
      }
    }
    .close__icon {
      display: none;
      @media (max-width: 1024px) {
        display: block;
        margin-left: auto;
      }
    }
    .search__icon {
      display: block;
      @media (max-width: 1024px) {
        display: none;
      }
    }
    .element {
      display: flex;
      align-items: center;
      gap: 10px;

      & > .Logo-Image {
      }
      @media screen and (min-width: 768px) {
        & > .Logo-Image {
          width: 160px;
          height: 40px;
          aspect-ratio: 4/1;
          position: relative;
          left: -20px;
        }
      }
    }
    .element__item {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 20px;
      @media (max-width: 1024px) {
      }
    }
    .button__box {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;

      @media (max-width: 1024px) {
      }
    }
    .button__element {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 10px;
      @media (max-width: 1024px) {
      }
    }
    .element__component {
      display: flex;
      align-items: center;
      gap: 20px;
      @media (max-width: 920px) {
      }
    }
    .shopping__cart {
      position: relative;
      cursor: pointer;

      transition: transform 0.15s ease-in-out;
      @media (max-width: 920px) {
      }
    }
    .shopping__cart:hover {
      transform: scale(1.1);
      @media (max-width: 920px) {
      }
    }
    .shopping__number {
      position: absolute;
      top: -40%;
      right: -50%;
      background-color: red;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      padding: 4px;
      border-radius: 4px;
    }
    .navbar {
      height: 100%;
      position: relative;
      div {
        display: none;
        @media (max-width: 1024px) {
          display: block;
          position: absolute;
          right: 15px;
          top: 40px;
        }
      }
      @media (max-width: 1024px) {
        top: 0;
        left: 0;
        height: 100%;
        width: 50%;
        position: fixed;
        padding: 100px 20px 20px 20px;
        z-index: 1;
        background-color: rgb(240, 240, 240);
        transform: translate(${(props) => props.value});
        transition: transform 0.2s ease-out;
      }
    }
    .icon__style {
      margin-left: 5px;
      @media (max-width: 1024px) {
      }
    }
    ul {
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.25rem;
      @media (max-width: 1024px) {
        min-height: auto;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
      }
    }
    li {
      padding: 10px 16px;
      cursor: pointer;
      border-radius: 10px;
      @media (max-width: 1024px) {
      }
    }
    li:hover {
      background: #e8e8e8bb;
      transition: 300ms;
      @media (max-width: 1024px) {
        background: none;
        border-radius: 0px;
        border-style: none;
        border-width: 0px;
        transition: 0s;
      }
    }
    // remove animaiton slideDown
    /* .click__box {
      animation: slideDown 300ms ease-in-out forwards;
      @media (max-width: 1024px) {
      }
    }
    @keyframes slideDown {
      0% {
        opacity: 0;
        transform: translateY(-60px);
      }
      100% {
        opacity: 1;
        transform: translateY(0);
      }
    } */
    .link {
      text-decoration: none;
      color: black;
      font-family: "Work Sans", sans-serif;
      font-weight: 500;
      font-size: 16px;
      cursor: pointer;
      @media (max-width: 1024px) {
        font-size: 12px;
      }
    }
    @media (max-width: 1024px) {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
  .dropdown {
    position: relative;
    @media (max-width: 1024px) {
    }
    .dropdown__content {
      display: none;
      position: absolute;
      z-index: 1;
      @media (max-width: 1024px) {
      }
    }
  }
  .dropdown:hover {
    position: relative;
    @media (max-width: 1024px) {
    }
    .dropdown__content {
      position: absolute;
      display: block;
      z-index: 1;
      @media (max-width: 1024px) {
      }
    }
  }
`;

export const StyledButtonForHeader = styled.button`
  color: #090909;
  padding: 8px 16px;
  font-size: 16px;
  border-radius: 0.5em;
  background: #e8e8e8;
  border: 1px solid #e8e8e8;
  transition: all 0.3s;
  white-space: nowrap;
  cursor: pointer;
  font-family: "Work Sans", sans-serif;
  font-weight: 500;

  &.width_full {
    width: 100%;
  }

  &:hover {
    border: 1px solid white;
  }
  ${({ $primary }) =>
    $primary &&
    css`
      cursor: pointer;
      color: #fff;
      background: #fc2947;
      border: 1px solid #fc2947;
    `}
`;
export const MobileStyled = styled.div`
  display: none;
  @media (max-width: 1024px) {
    padding: 4px 8px;
    display: block;
    background-color: #fff;
  }
  .mobile__section {
    @media (max-width: 1024px) {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .company__logo {
      width: 160px;
      height: 40px;
      aspect-ratio: 4/1;
      position: relative;
      left: -20px;
      object-fit: cover;
    }
  }
  .navbar {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    top: 0;
    right: 0;
    min-height: 100vh;
    width: 60%;
    position: fixed;
    padding: 0px 20px 20px 20px;
    z-index: 50;
    overflow-y: auto;
    /* background-color: rgb(240, 240, 240); */
    background-color: #fff;
    transform: translate(${(props) => props.value});
    box-shadow: 2px 0px 5px rgba(0, 0, 0, 0.5);
    transition: transform 0.2s ease-out;
    .close-icon {
      display: flex;
      width: 100%;
      justify-content: space-between;
      border-radius: 20px;
      padding: 20px 0 10px 10px;

      & > .xicon__style {
        width: 30px;
        height: 30px;
        padding: 0.2rem;
        border-radius: 50px;
        color: #fc2947;
        transition: color 0.3s linear, background-color 0.3s linear;
        &:hover {
          cursor: pointer;
          background-color: #fc2947;
          color: white;
        }
      }
    }

    ul {
      display: flex;
      flex-direction: column;
    }
    li {
      padding: 10px 0px;
    }
    .click__box {
      animation: slideDown 300ms ease-in-out forwards;
      @media (max-width: 1024px) {
      }
    }

    @keyframes slideDown {
      0% {
        opacity: 0;
        transform: translateY(-60px);
      }
      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }
    .search__bar {
      padding: 1rem;
      margin-bottom: 15px;
      width: 100%;
      height: 10px;
      background-color: #ffffff;
      border: 2px solid transparent;
      font-family: "Work Sans", sans-serif;
      border-radius: 20px;
      font-size: 18px;

      &:focus {
        outline: none;
        border: 2px solid #eee;
      }
      @media (max-width: 1024px) {
      }
    }
    .search__content {
      display: flex;
      flex-direction: column;

      @media (max-width: 1024px) {
      }
    }
    .search__subdivision {
      @media (max-width: 1024px) {
      }
    }
    .sub__title {
      font-weight: 700;
      font-size: 16px;
      padding-bottom: 10px;
      @media (max-width: 1024px) {
      }
    }
    .link {
      font-family: "Work Sans", sans-serif;
      display: flex;
      text-decoration: none;
      font-weight: 400;
      font-size: 20px;
      color: #000;
      border-radius: 8px;
      font-size: 18px;
      transition: background-color 0.2s linear;
      cursor: pointer;
      &:hover {
        color: blue;
      }
    }

    .button__box {
      margin-top: 20px;
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    .login__button {
      background-color: #ffffff;
      @media (max-width: 1024px) {
      }
    }
    .login__button__text {
      color: black;
      font-weight: 700;
      @media (max-width: 1024px) {
      }
    }
  }
  .profile__container {
    display: flex;
    align-items: center;
    gap: 12px;
  }
  .profile__item {
    display: flex;
    flex-direction: column;
  }
  .profile__name {
    font-weight: 700;
    font-size: 15px;
  }
  .profile__designation {
    font-weight: 400;
    font-size: 16px;
  }
  .profile__size {
    width: 80px;
    height: 80px;
  }
  .shopping__cart {
    position: relative;
    cursor: pointer;
    z-index: 10;
  }

  .shopping__number {
    position: absolute;
    right: -8px;
    top: -8px;
    background-color: #fc2947;
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 0;
    letter-spacing: 0;
    border-radius: 50%;
    width: 16px;
    height: 16px;
    color: white;

    & > .number {
      font-size: 14px;
      font-weight: 500;
    }
    @media (max-width: 920px) {
    }
  }
  .image__container {
    display: flex;
    align-items: center;
    gap: 10px;
    @media (max-width: 920px) {
    }
  }
`;
export const WallStyle = styled.div`
  position: absolute;
  top: calc(100% + 5px);
  right: 0;
  z-index: 10;
  transition: all 0.3s ease;
`;
