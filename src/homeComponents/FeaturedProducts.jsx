import React, { useState, useEffect } from "react";
import "../styles/homeComponents/FeaturedProducts.css";

const FeaturedProducts = () => {
  const products = [
    { id: 1, label: "", imgSrc: "assets/images/black-image.jpg", price: "$45", tag: "Furniture", title:"Black Chair" },
    { id: 2, label: "New", imgSrc: "assets/images/monitor-stand.jpg", price: "$56.20", tag: "Furniture", title:"Monitor Stand" },
    { id: 3, label: "New", imgSrc: "assets/images/office-chair.jpg", price: "$89.70", tag: "Furniture", title:"Office Chair" },
    { id: 4, label: "Sale", imgSrc: "assets/images/wooden-desk.jpg", price: "$40.50", tag: "Furniture" , title:"Wooden desk"},
  ];

  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  const prevSlide = () => {
    setIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000); 
    return () => clearInterval(interval); 
  }, []);

  const getVisibleProducts = () => {
    const windowWidth = window.innerWidth;
    if (windowWidth < 768) return 1;
    if (windowWidth < 1024) return 2;
    return 4;
  };

  const visibleProducts = getVisibleProducts();

  const visibleItems = [
    ...products.slice(index, index + visibleProducts),
    ...products.slice(0, Math.max(0, index + visibleProducts - products.length)),
  ];

  return (
    <div className="featured-products">
      <h2>Featured Products</h2>
      <div className="product-carousel">
        <button className="carousel-control prev" onClick={prevSlide}>
          ←
        </button>
        <div className="featured-product-list">
          {visibleItems.map((product, i) => (
            <div key={product.id + "-" + i} className="featured-product-card">
              {product.label && <span className={`label ${product.label.toLowerCase()}`}>{product.label}</span>}
              <img src={product.imgSrc} alt="Product" className="featured-product-image" />
              <h3 className="product-name">{product.title}</h3>
              <p className="product-tag">{product.tag}</p>
              <p className="product-price">{product.price}</p>
              <div className="product-rating">★★★★★</div>
              <div className="buy-icons">
                <p className="cart-text">
                  <img src="/assets/icons/add-cart.png" alt="cart" />
                  Add to cart
                </p>
                <p className="cart-text">
                  <img src="/assets/icons/view-product.png" alt="cart" />
                  View Product
                </p>
              </div>
            </div>
          ))}
        </div>
        <button className="carousel-control next" onClick={nextSlide}>
            →
        </button>
      </div>
      <button className="view-more">View More →</button>
    </div>
  );
};

export default FeaturedProducts;
