import React from "react";
const srcs = [
  { ProductImage: "./images/1.png" },
  { ProductImage: "./images/2.webp" },
  { ProductImage: "./images/3.webp" },
  { ProductImage: "./images/4.webp" },
  { ProductImage: "./images/5.webp" },
  { ProductImage: "./images/6.webp" },
  { ProductImage: "./images/7.webp" },
  { ProductImage: "./images/8.png" },
];
const Products = () => {
  return (
    <section className="products flex">
      {srcs.map((item) => {
        return (
          <article key={item.ProductImage} className="card">
            <a href="/pages/product-details.html">
              <img width={266} src={item.ProductImage} alt="" srcSet="" />
            </a>
            <div style={{ width: 266 }} className="content">
              <h1 className="title">Product Title</h1>
              <p className="description">
                Lorem ipsum dolor sit amet consectetur elit adipisicing . Ex
                tempore dolor in, accusantium laudantium accusamus.
              </p>
              <div
                className="flex"
                style={{
                  justifyContent: "space-between",
                  paddingBottom: "0.7rem",
                }}
              >
                <div className="price">$100</div>
                <button className="add-to-cart flex">
                  <i className="fa-solid fa-cart-plus" />
                  Add To Cart
                </button>
              </div>
            </div>
          </article>
        );
      })}
    </section>
  );
};

export default Products;
