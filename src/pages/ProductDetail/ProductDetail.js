import axios from "axios";
import React, { useEffect, useState } from "react";

const ProductDetail = ({location, match}) => {

const [product, setProduct] = useState({})

// find product item form product list
const findProduct = (ProductList) => {
  const productItem = ProductList.find(item => item.id == match.params.id);
  productItem && setProduct(productItem);
}

useEffect(()=> {
  // call api again on refresh page
  if(location.data) {
    findProduct(location.data)
  } else {
    //call api
    axios
      .get(
        "https://online-shop-49336-default-rtdb.firebaseio.com/products.json"
      )
      .then((response) => {
        const data = response.data;
        findProduct(data)
      })
      .catch((err) => {
        console.log(err);
      });
  }
},[])

  return (
    product.title 
      ? (
        <>
          <h1>{product.id}</h1>
          <h1>{product.title}</h1>
          <h1>{product.price}</h1>
        </>
      )
      : <h1>Loading</h1>
  );
};

export default ProductDetail;
