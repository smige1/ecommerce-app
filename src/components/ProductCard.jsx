import React from "react";
import { Link } from "react-router-dom";
import ReactStars from "react-stars";

const ProductCard = () => {
  return (
    <div className="col-3">
      <div className="product-card position-relative">
        <div className="wishlist-icon position-absolute">
          <Link>
            <img src="images/wish.svg" alt="" />
          </Link>
        </div>
        <div className="product-image">
          <img src="images/watch.jpg" alt="watch" />
        </div>
        <div className="product-details">
          <h6 className="brand">Havels</h6>
          <h5 className="product-title">Lorem ipsum dolor sit.</h5>
          <ReactStars
            count={5}
            edit={false}
            value={3}
            size={24}
            color2={"#ffd700"}
          />
          <p className="price">#113,000</p>
        </div>
        <div className="action-bar position-absolute">
          <div className="d-flex flex-column">
            <Link to="/">
              <img src="images/prodcompare.svg" alt="" />
            </Link>
            <Link to="/">
              <img src="images/view.svg" alt="" />
            </Link>
            <Link to="/">
              <img src="images/add-cart.svg" alt="" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;