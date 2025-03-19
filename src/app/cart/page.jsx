import React from "react";
import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";
import Image from "next/image";
import { arrData } from "data/products";
import "./cart.css";

const Cart = () => {
  // Use a test product from the arrData (using the first product for demonstration)
  const testProduct = arrData[0];

  return (
    <div className="page-container">
      <Header />
      <main className="cart-container">
        <h1>Your Cart</h1>
        <div className="cart-items">
          <article className="cart-item">
            <Image
              src={testProduct.productImg}
              alt={testProduct.title}
              width={100}
              height={100}
            />
            <div className="item-details">
              <h2>{testProduct.title}</h2>
              <p className="price">${testProduct.price}</p>
              <p className="description">{testProduct.description}</p>
            </div>
          </article>
        </div>
        <div className="cart-summary">
          <p>Total: ${testProduct.price}</p>
          <button className="btn">Checkout</button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Cart;
