import Footer from "components/Footer/Footer";
import Header from "components/Header/Header";
import "./home.css";
import Products from "./Products";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Home() {
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
          <FontAwesomeIcon
            className="fa-solid fa-check"
            style={{
              width: "1.1rem",
            }}
            icon={faCheck}
          />
          Recommended for you
        </h1>
        <Products />
      </main>

      <Footer />
    </>
  );
}
