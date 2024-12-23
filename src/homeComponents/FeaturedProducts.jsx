import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/homeComponents/FeaturedProducts.css";

const FeaturedProducts = () => {
  const [isInView, setIsInView] = useState(false);
  const featuredRef = useRef(null);
  const carouselRef = useRef(null);
  const navigate = useNavigate();

  const products = [
    { id: 1, status: "", image: "/assets/images/black-image.jpg", price: 45, tag: "Furniture", name: "Black Chair" },
    { id: 2, status: "New", image: "/assets/images/monitor-stand.jpg", price: 56.2, tag: "Furniture", name: "Monitor Stand" },
    { id: 3, status: "New", image: "/assets/images/office-chair.jpg", price: 89.7, tag: "Furniture", name: "Office Chair" },
    { id: 4, status: "Sale", image: "/assets/images/wooden-desk.jpg", price: 40.5, tag: "Furniture", name: "Wooden Desk" },
  ];

  // Observe the visibility of the section
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        } else {
          setIsInView(false);
        }
      },
      { threshold: 0.1 }
    );

    if (featuredRef.current) {
      observer.observe(featuredRef.current);
    }

    return () => {
      if (featuredRef.current) {
        observer.unobserve(featuredRef.current);
      }
    };
  }, []);

  // Continuous scrolling effect
  useEffect(() => {
    const carousel = carouselRef.current;
    let animationId;

    const startScrolling = () => {
      const scrollSpeed = 1; // Adjust for desired speed
      const step = () => {
        carousel.scrollLeft += scrollSpeed;
        if (carousel.scrollLeft >= carousel.scrollWidth / 2) {
          carousel.scrollLeft = 0;
        }
        animationId = requestAnimationFrame(step);
      };
      animationId = requestAnimationFrame(step);
    };

    startScrolling();

    return () => cancelAnimationFrame(animationId);
  }, []);

  const handleViewProduct = (product) => {
    navigate(`/product/${product.id}`, { state: { product } });
  };

  const handleViewMoreClick = () => {
    navigate("/shop");
  };

  return (
    <div ref={featuredRef} className="featured-products">
      <h2 className={`featured-title ${isInView ? "animate-squiggly" : ""}`}>Featured Products</h2>
      <div ref={carouselRef} className="product-carousel">
        <div className="featured-product-list">
          {[...products, ...products].map((product, i) => (
            <div key={product.id + "-" + i} className="featured-product-card">
              {product.status && (
                <span className={`status ${product.status.toLowerCase()}`}>{product.status}</span>
              )}
              <img src={product.image} alt="Product" className="featured-product-image" />
              <h3 className="product-name">{product.name}</h3>
              <p className="product-tag">{product.tag}</p>
              <p className="product-price">${product.price}</p>
              <div className="product-rating">★★★★★</div>
              <div className="buy-icons">
                <p className="cart-text">
                  <img src="/assets/icons/add-cart.png" alt="cart" />
                  Add to cart
                </p>
                <p className="cart-text" onClick={() => handleViewProduct(product)}>
                  <img src="/assets/icons/view-product.png" alt="view" />
                  View Product
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button className="view-more" onClick={handleViewMoreClick}>
        View More →
      </button>
    </div>
  );
};

export default FeaturedProducts;
