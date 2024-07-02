import React from "react";
import Item from "./Item";
import { useSelector } from "react-redux";

const Product = () => {
  const { products } = useSelector((state) => state.products);
  return (
    <div className="container d-flex gap-3 w-100">
      {products.map((product, index) => {
        return (
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
        );
      })}
    </div>
  );
};

export default Product;
