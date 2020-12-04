import React from "react";
import "./Product.css";

function Product({ title, image, price, rating }) {
  return (
    <div className="product ">
      <img src={image} alt="product_image"></img>
      <div className="product_info">
        <p>{title}</p>
        <p className="product_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>*</p>
            ))}
        </div>
      </div>
      <button className="product_btn">Add to Cart</button>
    </div>
  );
}

export default Product;
