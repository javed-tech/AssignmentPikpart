import React, { useState, useEffect } from "react";
import "./ProductCard.css";
import Rate from "./assets/rate.png";
import Spark from "./assets/spark.png";
import Rupee from "./assets/rupee.png";
import Heart from "./assets/heart.png";
import Share from "./assets/share.png";
import Red from "./assets/red.png";
import Product from "./assets/product.png";
import Drop from "./assets/drop.png";

const ProductCard = ({ style, product }) => {
  const [fav, setFav] = useState(false);
  const [cart, setCart] = useState(false);

  function handleFav() {
    setFav(false);
  }
  function handleNonFav() {
    setFav(true);
  }
  function handleCart() {
    setCart(false);
  }
  function handleNonCart() {
    setCart(true);
  }
  return (
    <div className="product-card" style={style}>
      {/* Top Icons */}
      <div className="icon-container">
        {fav == true ? (
          <div onClick={handleFav}>
            <img src={Red} alt="heart" className="heart-red" />
          </div>
        ) : (
          <div onClick={handleNonFav}>
            <img src={Heart} alt="heart" className="heart-icon" />
          </div>
        )}

        <img src={Share} alt="share" className="share-icon" />
      </div>

      {/* Product Image */}
      <div className="product-image-container">
        <img src={Product} alt={product.name} className="product-image" />
      </div>

      {/* Rating */}
      <div className="rating-container">
        <div className="rating-box">
          <img src={Rate} alt="star" className="star-icon" />
          {/* <span className="rating-text">4.0</span> */}
        </div>
      </div>

      {/* Product Title */}
      <div className="product-info">
        <div className="title-container">
          <h3 className="product-title">{product?.name}</h3>
          <img src={Spark} alt="frame" className="frame-icon" />
        </div>

        {/* Product Details */}
        <div className="details-container">
          <span className="product-detail">Splender Plus</span>
          <div className="compatibility">
            <select className="compatibility-dropdown" >
              <option value="option1" >Compatibility</option>
              <option value="option2" disabled>HF Delux</option>
              <option value="option3" disabled>Passion Pro</option>
            </select>
            <img src={Drop} alt="compatibility" className="compatibility-icon" />
          </div>
        </div>

        {/* Price */}
        <div className="price-container">
          <img src={Rupee} alt="rupee" className="rupee-icon" />
          <span className="price">390/-</span>
        </div>

        {/* Action Buttons */}
        <div className="button-container">
          <button className="bulk-button">Bulk</button>
          {cart == true ? (
            <div onClick={handleCart}>
              <button className="add-cart-button">Remove</button>
            </div>
          ) : (
            <div onClick={handleNonCart}>
              <button className="add-cart-button">Add to Cart</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

ProductCard.defaultProps = {
  style: {
    width: "320px",
    minHeight: "416px",
    margin: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.2s",
  },
};

export default ProductCard;
