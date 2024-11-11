import React from "react";
import { EntireHeaderStyle, HeaderStyled } from "./header-style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faBars,
  faClose,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const HeaderComponent = () => {
  const navigate = useNavigate();
  const count = useSelector((state) => state.checkout.count);
  return (
    <EntireHeaderStyle>
      <EntireHeaderStyle>
        <HeaderStyled>
          <section tabIndex={0} role="button" aria-label="Close dropdown">
            <div className="element">
              <img
                src="/agh-logo1.webp"
                alt="AGH"
                className="Logo-Image"
                width={160}
                height={40}
              />
              <div className="navbar">
                <div
                  tabIndex={0} // Makes the div focusable
                  role="button" // Indicates the element acts as a button
                  aria-label="Close header" // Provides a description for screen readers
                >
                  <FontAwesomeIcon icon={faClose} />
                </div>
                <ul>
                  <li onClick={() => navigate("/home")}>
                    {/* <a href="/home" className="link"> */}
                    Home
                    {/* </a> */}
                  </li>
                  <li>
                    <a href="/#about-us" className="link">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="/#our-services" className="link">
                      Our Services
                    </a>
                  </li>
                  <li className="link">My Courses</li>
                </ul>
              </div>
            </div>
            <div
              tabIndex={0}
              role="button"
              aria-label="Open header"
              className="close__icon"
            >
              <FontAwesomeIcon icon={faBars} size="lg" />
            </div>
            <div className="element__item">
              <div className="element__component">
                <div
                  className="shopping__cart"
                  role="button"
                  tabIndex={0}
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    navigate("/shopping-cart");
                  }}
                >
                  <FontAwesomeIcon icon={faCartShopping} size="xl" />
                  {
                    <div className="shopping__number">
                      <div className="number">{count}</div>
                    </div>
                  }
                </div>
              </div>
            </div>
          </section>
        </HeaderStyled>
      </EntireHeaderStyle>
    </EntireHeaderStyle>
  );
};
export default HeaderComponent;
