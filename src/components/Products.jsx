import React from "react";
import Product from "./Product";
import ProductForm from "./ProductForm";

const Products = () => {
  return (
    <div className="productWrapper">
      <div className="productContainer" id="lws-productContainer">
        {/* Product item start */}
        <Product />
        {/* Product item ends */}
      </div>
      <div>
        {/* Product form start */}
        <ProductForm />
        {/* Product form ends */}
      </div>
    </div>
  );
};

export default Products;
