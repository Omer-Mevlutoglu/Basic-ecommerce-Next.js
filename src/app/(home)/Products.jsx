import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

// const srcs = [
//   { ProductImage: "./images/1.png" },
//   { ProductImage: "./images/2.webp" },
//   { ProductImage: "./images/3.webp" },
//   { ProductImage: "./images/4.webp" },
//   { ProductImage: "./images/5.webp" },
//   { ProductImage: "./images/6.webp" },
//   { ProductImage: "./images/7.webp" },
//   { ProductImage: "./images/8.png" },
// ];

const Products = async () => {
  try {
    const response = await fetch("http://localhost:3001/products", {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(
        `Failed to fetch products: ${response.status} ${response.statusText}`
      );
    }

    const arrData = await response.json();
    return (
      <section className="products flex">
        {arrData.map((item) => (
          <article title={item.title} key={item.id} className="card">
            <Link href={`/productdetails/${item.id}`}>
              <img width={266} src={item.productImg} />
            </Link>
            <div style={{ width: 266 }} className="content">
              <h1 className="title">{item.title}</h1>
              <p className="description">{item.description}...</p>
              <div
                className="flex"
                style={{
                  justifyContent: "space-between",
                  paddingBottom: "0.7rem",
                }}
              >
                <div className="price">${item.price}</div>
                <button className="add-to-cart flex">
                  <FontAwesomeIcon
                    className="fa-solid fa-cart-plus"
                    style={{
                      width: "1.1rem",
                    }}
                    icon={faCartPlus}
                  />
                  Add To Cart
                </button>
              </div>
            </div>
          </article>
        ))}
      </section>
    );
  } catch (error) {
    console.error("Error fetching products:", error.message);
    return (
      <p style={{ color: "red", textAlign: "center" }}>
        Failed to load products. Please try again later.
      </p>
    );
  }
};

export default Products;
