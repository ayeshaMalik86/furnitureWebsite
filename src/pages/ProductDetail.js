import React from "react";
import ProductDetail from "../productDetailsComponents/ProductDetails";
import DescriptionReviews from "../productDetailsComponents/DescriptionReviews";

const ProductDetailPage = () => {
  return (
    <main>
        <ProductDetail/>
        <DescriptionReviews/>
    </main>
  );
};

export default ProductDetailPage;
