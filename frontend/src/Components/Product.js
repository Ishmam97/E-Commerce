import React, { useState, useEffect } from "react";
import Item from "./Item";
import Filter from "./Filters";
import { useSelector } from "react-redux";
import "./css/products.css";

const Product = () => {
  const { products } = useSelector((state) => state.products);
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    setFilteredProducts(products);
  }, [products]);

  const handleFilterChange = (filters) => {
    let filtered = products;

    if (filters.category) {
      filtered = filtered.filter(
        (product) => product.pCat && product.pCat.category && product.pCat.category.toLowerCase() === filters.category.toLowerCase()
      );
    }

    if (filters.priceRange) {
      const [min, max] = filters.priceRange;
      filtered = filtered.filter(
        (product) => product.pPrice >= min && product.pPrice <= max
      );
    }

    setFilteredProducts(filtered);
  };

  return (
    <div className="main-container">
      <Filter onFilterChange={handleFilterChange} />
      <div className="products-container">
        {filteredProducts.map((product, index) => (
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
    </div>
  );
};

export default Product;
