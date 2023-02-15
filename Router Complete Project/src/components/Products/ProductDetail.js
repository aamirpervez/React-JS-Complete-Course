import React from "react";
import { useParams } from "react-router-dom";
function ProductDetail() {
  const params = useParams();

  return (
    <>
      <h1>Product Detail</h1>
      <p>Product ID : {params.productid}</p>
    </>
  );
}

export default ProductDetail;
