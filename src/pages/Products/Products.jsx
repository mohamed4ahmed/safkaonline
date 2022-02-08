import React, { useEffect } from "react";
import ProductsContainer from "../../containers/Products/Products";
const Products = () => {
  useEffect(() => {
    document.title = "Products - Safka For Clothes";
  }, []);

  return (
    <>
      <ProductsContainer />
    </>
  );
};

export default Products;
