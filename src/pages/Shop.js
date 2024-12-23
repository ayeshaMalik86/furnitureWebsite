import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/pages/ShopSection.css";

const productsData = [
  { id: 1, name: "Abstract Table", tag: "Furniture", price: 70, status: "Out of Stock", image: "/assets/images/abstract-table.jpg", discount: null },
  { id: 2, name: "Coffee Table", tag: "Furniture", price: 70, status: null, image: "/assets/images/coffee-table.jpg", discount: "18% OFF" },
  { id: 3, name: "Daily Chair", tag: "Furniture", price: 140, status: null, image: "/assets/images/daily-chair.jpg", discount: null },
  { id: 4, name: "Modern Chair", tag: "Furniture", price: 80, status: null, image: "/assets/images/modern-chair.jpg", discount: "20% OFF" },
  { id: 5, name: "Modern Sofa", tag: "Furniture", price: 90, status: null, image: "/assets/images/modern-sofa.jpg", discount: "15% OFF" },
  { id: 6, name: "Elegant Chair", tag: "Furniture", price: 40, status: "Out of Stock", image: "/assets/images/elegant-chair.jpg", discount: null },
];

const ShopSection = () => {
  const [products, setProducts] = useState(productsData);
  const [sortOption, setSortOption] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const cards = document.querySelectorAll(".product-card");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const card = entry.target;

            // Remove the animation class (if it exists) to reapply it
            card.classList.remove("fly-in");

            // Trigger a reflow to ensure the animation re-runs
            void card.offsetWidth;
            card.classList.add("fly-in");
          }
        });
      },
      { threshold: 0.1}
    );

    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect(); 
  }, []);

  const handleSort = (e) => {
    const option = e.target.value;
    setSortOption(option);

    let sortedProducts = [...products];
    if (option === "popularity") {
      sortedProducts = sortedProducts.reverse();
    } else if (option === "price-low-high") {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (option === "price-high-low") {
      sortedProducts.sort((a, b) => b.price - a.price);
    }
    setProducts(sortedProducts);
  };

  const handleViewProduct = (product) => {
    navigate(`/product/${product.id}`, { state: { product } });
  };

  return (
    <div className="shop">
      <div className="shop-hero" style={{ backgroundImage: "url('/assets/images/shop-hero.jpg')" }}>
        <h1>SHOP</h1>
        <p>HOME / <span>SHOP</span></p>
      </div>
      <div className="category-banner">
        <p className="product-length">Displaying all {products.length} products</p>
        <div className="sort-menu">
          <select id="sort" value={sortOption} onChange={handleSort}>
            <option value="">Default sorting</option>
            <option value="popularity">Sort by popularity</option>
            <option value="price-low-high">Sort by price: Low to High</option>
            <option value="price-high-low">Sort by price: High to Low</option>
          </select>
        </div>
      </div>
      <div className="products-container">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            {product.status && <div className="status">{product.status}</div>}
            {product.discount && <div className="discount">{product.discount}</div>}
            <img src={product.image} alt={product.name} className="product-image" />
            <div className="product-info">
              <h3>{product.name}</h3>
              <p className="product-tag">{product.tag}</p>
              <p>${product.price.toFixed(2)}</p>
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopSection;
