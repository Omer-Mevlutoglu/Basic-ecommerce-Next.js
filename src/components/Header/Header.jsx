import { faBagShopping, faCartShopping, faRightToBracket, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import "./header.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Header = () => {
  return (
    <header id="headerElement" className="flex">
      <div className="logo">
        <FontAwesomeIcon
          className="fa-solid fa-bag-shopping"
          style={{
            width:"1.5rem",
            marginRight:"0.3rem"
          }}
          icon={faBagShopping}
        />
        <span style={{ fontWeight: "bold" }}>AWU</span>
        <p style={{ letterSpacing: "0.5px" }}>Shopping</p>
      </div>
      <div className="links">
        <a
          style={{ position: "relative" }}
          className="cart"
          href="./pages/cart.html"
        >
          <FontAwesomeIcon
         className="fa-solid fa-cart-shopping"
          style={{
            width:"0.8rem"
          }}
          icon={faCartShopping}
        />



          $0.00
          <span className="products-number">2</span>
        </a>
        <a className="sign-in" href="./pages/signin.html">

          <FontAwesomeIcon
        className="fa-solid fa-right-to-bracket"
          style={{
            width:"0.7rem"
          }}
          icon={faRightToBracket}
        />


          Sign in
        </a>
        <a className="register" href="./pages/register.html">
          <i className="fa-solid fa-user-plus" />

          <FontAwesomeIcon
       className="fa-solid fa-user-plus"
          style={{
            width:"0.8rem"
          }}
          icon={faUserPlus}
        />
          
          Register
        </a>
      </div>
    </header>
  );
};

export default Header;
