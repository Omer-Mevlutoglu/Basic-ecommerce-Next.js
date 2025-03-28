import Footer from "components/Footer/Footer";
import Header from "components/Header/Header";
import "./productdetails.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { notFound } from "next/navigation";
import Image from "next/image";
import { arrData } from "data/products";

/**
 * @param {any} id
 */
// async function getData(id) {
//   const res = await fetch(`http://localhost:3001/products/${id}`, {
//     cache: "no-store",
//   });

//   if (!res.ok) {
//     notFound();
//   }

//   return res.json();
// }
// export async function generateMetadata({ params }) {
//   // const objData = await getData(params.id);

//   return {
//     title: objData.title,
//     description: objData.description,
//   };
// }

const Page = async ({ params }) => {
  // const objData = await getData(params.id);
  const objData = arrData.find((item) => {
    return item.id == params.id;
  });
  return (
    <div
      style={{
        height: "100vh",
        display: "grid",
        alignItems: "center",
        gridTemplateRows: "auto 1fr auto",
      }}
    >
      <Header />
      <main style={{ textAlign: "center" }} className="flex">
        <Image width={266} height={260} alt="ssss" src={objData.productImg} />
        <div className="product-details">
          <div style={{ justifyContent: "space-between" }} className="flex">
            <h2>{objData.title}</h2>
            <p className="price">{objData.price}</p>
          </div>
          <p className="description">{objData.description}</p>
          <button className="flex add-to-cart">
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
      </main>
      <Footer />
    </div>
  );
};

export default Page;
