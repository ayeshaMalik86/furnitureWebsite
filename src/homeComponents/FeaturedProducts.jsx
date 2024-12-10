import React from "react";
import "../styles/homeComponents/FeaturedProducts.css";

const FeaturedProducts = () => {
  const products = [
    { id: 1, label: "", imgSrc: "assets/images/black-image.jpg", price: "$56.20", tag: "Furniture" },
    { id: 2, label: "New", imgSrc: "assets/images/monitor-stand.jpg", price: "$56.20", tag: "Furniture" },
    { id: 3, label: "New", imgSrc: "assets/images/office-chair.jpg", price: "$56.20", tag: "Furniture" },
    { id: 4, label: "Sale", imgSrc: "assets/images/wooden-desk.jpg", price: "$56.20", tag: "Furniture" },
    { id: 5, label: "Sale", imgSrc: "assets/images/wooden-desk.jpg", price: "$56.20", tag: "Furniture" },
    { id: 6, label: "Sale", imgSrc: "assets/images/wooden-desk.jpg", price: "$56.20", tag: "Furniture" },

];

  return (
    <div className="featured-products">
      <h2>Featured Products</h2>
      <div className="product-carousel">
        <button className="carousel-control prev">prev</button>
        <div className="product-list">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              {product.label && <span className={`label ${product.label.toLowerCase()}`}>{product.label}</span>}
              <img src={product.imgSrc} alt="Product" className="product-image" />
              <h3 className="product-name">DUMMY PRODUCT NAME</h3>
              <p className="product-tag">{product.tag}</p>
              <p className="product-price">{product.price}</p>
              <div className="product-rating">★★★★★</div>
            </div>
          ))}
        </div>
        <button className="carousel-control next">next</button>
      </div>
    </div>
  );
};

export default FeaturedProducts;
