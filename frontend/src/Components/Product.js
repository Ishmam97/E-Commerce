import React from "react";
import Item from "./Item";
import { useSelector } from "react-redux";
import "./css/products.css";

const Product = () => {
  const { products } = useSelector((state) => state.products);

  return (
    <div className="products-container">
      {products.map((product, index) => (
        <Item
          key={index}
          id={product._id}
          img={product.filename}
          name={product.pName}
          price={product.pPrice}
          qt={product.pQty}
          cat={product.pCat.category}
          desc={product.pDesc}
        />
      ))}
    </div>
  );
};

export default Product;
