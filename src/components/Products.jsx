import React from "react";
import Product from "./Product";
import ProductForm from "./ProductForm";
import { useSelector } from "react-redux";

const Products = () => {
  const products = useSelector((state) => state.products);
  console.log(products.length);
  return (
    <div className="productWrapper">
      <div className="productContainer" id="lws-productContainer">
        {/* Product item start */}
        {products.length <= 0 ? (
          <h4>No Product Found</h4>
        ) : (
          products.map((product) => (
            <Product key={product.id} product={product} />
          ))
        )}
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
