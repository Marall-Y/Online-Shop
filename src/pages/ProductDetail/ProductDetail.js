import React from "react";

const ProductDetail = (props) => {
  const data = props.location.data;

  console.log(data);

  const product = data.find((item) => {
    console.log(item);
  });

  return <div>hi</div>;
};

export default ProductDetail;
