import {
  faBagShopping,
  faCartShopping,
  faRightToBracket,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import "./header.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
const Header = () => {
  return (
    <header id="headerElement" className="flex">
      <Link href={"/"} className="logo">
        <FontAwesomeIcon
          className="fa-solid fa-bag-shopping"
          style={{
            width: "1.5rem",
            marginRight: "0.3rem",
          }}
          icon={faBagShopping}
        />
        <span style={{ fontWeight: "bold" }}>AWU</span>
        <p style={{ letterSpacing: "0.5px" }}>Shopping</p>
      </Link>

      <nav className="links">
        <Link style={{ position: "relative" }} className="cart" href="/cart">
          <FontAwesomeIcon
            className="fa-solid fa-cart-shopping"
            style={{
              width: "0.8rem",
            }}
            icon={faCartShopping}
          />
          $500.00
          <span className="products-number">1</span>
        </Link>

        <Link className="sign-in" href="/signIn">
          <FontAwesomeIcon
            className="fa-solid fa-right-to-bracket"
            style={{
              width: "0.7rem",
            }}
            icon={faRightToBracket}
          />
          Sign in
        </Link>

        <Link className="register" href="/register">
          <i className="fa-solid fa-user-plus" />
          <FontAwesomeIcon
            className="fa-solid fa-user-plus"
            style={{
              width: "0.8rem",
            }}
            icon={faUserPlus}
          />
          Register
        </Link>
      </nav>
    </header>
  );
};

export default Header;
