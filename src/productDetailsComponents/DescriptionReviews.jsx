import React, { useState } from "react";
import "../styles/productDetailsComponents/DescriptionReviews.css";
import { useLocation } from "react-router-dom";

const DescriptionReviews = () => {
  const location = useLocation();
  const product = location.state?.product;
  const [activeTab, setActiveTab] = useState("description");

  return (
    <div className="description-reviews">
      <div className="tabs">
        <button
          className={`tab ${activeTab === "description" ? "active" : ""}`}
          onClick={() => setActiveTab("description")}
        >
          Description
        </button>
        <button
          className={`tab ${activeTab === "reviews" ? "active" : ""}`}
          onClick={() => setActiveTab("reviews")}
        >
          Reviews (0)
        </button>
      </div>
      <div className="content">
        {activeTab === "description" && (
          <div>
            <p>
              Auctor eros suspendisse tellus venenatis sodales purus non pellentesque amet, nunc sit eu, enim fringilla
              egestas pulvinar odio feugiat consectetur egestas magna pharetra cursus risus, lectus enim eget eu et
              lobortis faucibus.
            </p>
            <p>
              Eget odio justo ut scelerisque purus non aliquam adipiscing amet condimentum ligula diam erat sodales
              pharetra accumsan pellentesque at sem at eget ac hendrerit odio enim felis sit augue lorem egestas dictum
              vestibulum a etiam nisi, elit augue volutpat porta scelerisque nullam at leo faucibus cursus metus.
            </p>
            <p>
              Viverra nunc iaculis id sed diam nam quam id sapien pellentesque quam sed eu augue id ac tempus aliquam
              facilisis vivamus eget nisi id.
            </p>
          </div>
        )}
        {activeTab === "reviews" && (
          <div className="reviews-section">
            <p>There are no reviews yet.</p>
            <h3>Be the first to review “{product.name}”</h3>
            <p>Your email address will not be published. Required fields are marked *</p>
            <form className="review-form">
              <div className="rating">
                <label>Your rating *</label>
                <div className="stars">
                  {Array(5)
                    .fill(0)
                    .map((_, index) => (
                      <span key={index} className="star">
                        ☆
                      </span>
                    ))}
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="review">Your review *</label>
                <textarea id="review" required></textarea>
              </div>
              <div className="form-group">
                <label htmlFor="name">Name *</label>
                <input type="text" id="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input type="email" id="email" required />
              </div>
              <div className="form-group">
                <div className="save-next">
                <input type="checkbox" id="save-info" />
                <label htmlFor="save-info">
                  Save my name, email, and website in this browser for the next time I comment.
                </label>
                </div>
              </div>
              <button type="submit" className="submit-btn">
                Submit
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default DescriptionReviews;
