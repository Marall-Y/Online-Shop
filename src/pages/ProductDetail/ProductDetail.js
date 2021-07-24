import React, { useEffect, useState } from "react";

import { callApi } from "../../utils/callApi";

const ProductDetail = ({ location, match }) => {
  const [product, setProduct] = useState({});

  // find product item from product list
  const findProduct = (ProductList) => {
    const productItem = ProductList.find(
      (item) => item.id === +match.params.id
    );
    productItem && setProduct(productItem);
  };

  useEffect(() => {
    // call api again on refresh page
    if (location.data) {
      findProduct(location.data);
    } else {
      //call api
      callApi("products.json", findProduct);
    }
  }, []);

  return product.title ? (
    <>
      <h1>{product.id}</h1>
      <h1>{product.title}</h1>
      <h1>{product.price}</h1>
    </>
  ) : (
    <h1>Loading</h1>
  );
};

export default ProductDetail;
