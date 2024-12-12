import React, { useState } from "react";
import "../styles/productDetailsComponents/ProductDetails.css";
import { useLocation } from "react-router-dom";

const ProductDetail = () => {
  const location = useLocation();
  const product = location.state?.product;

  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return <p>Product not found!</p>;
  }

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  const handleAddToCart = () => {
    console.log(`Added ${quantity} item(s) of ${product.name} to the cart.`);
  };

  return (
    <div className="product-detail-container">
      <div className="new-product-image">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="new-product-info">
        <h1 className="new-product-title">{product.name}</h1>
        <p className="new-product-price">
          ${product.price.toFixed(2)}  <span className="free-shipping">Free Shipping </span>
        </p>
        {product.discount && <p className="product-discount">{product.discount}</p>}
        <p className="product-tag">{product.tag}</p>
        <p className="new-product-description">
          Auctor eros suspendisse tellus venenatis sodales purus non
          pellentesque amet, nunc sit eu, enim fringilla egestas pulvinar odio
          feugiat consectetur egestas magna pharetra cursus risus, lectus enim
          eget eu et lobortis faucibus.
        </p>
        <div className="add-to-cart-container">
          <div className="quantity-control">
            <button className="decrement-btn" onClick={handleDecrement}>
              -
            </button>
            <span className="quantity-display">{quantity}</span>
            <button className="increment-btn" onClick={handleIncrement}>
              +
            </button>
          </div>
          <button className="add-to-cart-btn" onClick={handleAddToCart}>
            Add to cart
          </button>
        </div>
        <div className="payment-methods">
          <img src="/assets/icons/visa.png" alt="Visa" />
          <img src="/assets/icons/mastercard.png" alt="Mastercard" />
          <img src="/assets/icons/american-express.png" alt="American Express" />
          <img src="/assets/icons/discover.png" alt="Discover" />
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
