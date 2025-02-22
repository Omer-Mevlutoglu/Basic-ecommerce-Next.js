import Footer from "components/Footer/Footer";
import Header from "components/Header/Header";
import "./home.css";
export default function Home() {
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
  return (
    <>
      <div className="top-img">
        <Header />
        <section className="content">
          <p className="lifestyle">Lifestyle collection</p>
          <p className="men">MEN</p>
          <p className="sale">
            SALE UP TO <span>30% OFF</span>
          </p>
          <p className="free-shipping">
            Get Free Shipping on orders over $99.00
          </p>
          <button>Shop Now</button>
        </section>
      </div>
      <main>
        <h1 className="recommended">
          <i className="fa-solid fa-check" />
          Recommended for you
        </h1>

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
      </main>

      <Footer />
    </>
  );
}
