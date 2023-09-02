import React from "react";
import { Link, useLocation } from "react-router-dom";
import prodcompare from "../images/prodcompare.svg"
import wish from "../images/wish.svg"
import watch from "../images/watch.jpg"
import watch1 from "../images/watch-1.png"
import addcart from "../images/add-cart.svg"
import view from "../images/view.svg"
import ReactStars from "react-stars";


const ProductCard = (props) => {
  const {grid} = props;
  let location = useLocation();
  return (
    <>
    <div className={`${location.pathname === "/store" ? `gr-${grid}` : "col-3"}`}>
      <Link to="/product/:id" className="product-card position-relative">
        <div className="wishlist-icon position-absolute">
          <button className="border-0 bg-transparent">
            <img src={wish} alt="wishlist" />
          </button>
        </div>
        <div className="product-image">
          <img src={watch} alt="watch" className="img-fluid" />
          <img src={watch1} alt="productimg" className="img-fluid" />
        </div>
        <div className="product-details">
          <h6 className="brand">Havels</h6>
          <h5 className="product-title">Lorem ipsum dolor sit.</h5>
          <ReactStars
            count={5}
            edit={false}
            value={3}
            size={24}
            color2={"#ffd700"} />
            <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum repudiandae quae maxime maiores laudantium atque doloribus nisi ea illum! Molestiae non unde dicta voluptatibus quibusdam.
              </p>
          <p className="price">#113,000</p>
        </div>
        <div className="action-bar position-absolute">
          <div className="d-flex flex-column">
            <button className="border-0 bg-transparent"><img src={prodcompare} alt="" /></button>
            <button className="border-0 bg-transparent"><img src={view} alt="" /></button>
            <button className="border-0 bg-transparent"><img src={addcart} alt="" /></button>
          </div>
        </div>
      </Link>
    </div><div className={`${location.pathname === "/store" ? `gr-${grid}` : "col-3"}`}>
        <Link className="product-card position-relative">
          <div className="wishlist-icon position-absolute">
          <button className="border-0 bg-transparent">
              <img src={wish} alt="wishlist" />
            </button>
          </div>
          <div className="product-image">
            <img src={watch} alt="watch" className="img-fluid" />
            <img src={watch1} alt="productimg" className="img-fluid" />
          </div>
          <div className="product-details">
            <h6 className="brand">Havels</h6>
            <h5 className="product-title">Lorem ipsum dolor sit.</h5>
            <ReactStars
              count={5}
              edit={false}
              value={3}
              size={24}
              color2={"#ffd700"} />
              <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum repudiandae quae maxime maiores laudantium atque doloribus nisi ea illum! Molestiae non unde dicta voluptatibus quibusdam.
              </p>
            <p className="price">#113,000</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column">
            <button className="border-0 bg-transparent"><img src={prodcompare} alt="" /></button>
            <button className="border-0 bg-transparent"><img src={view} alt="" /></button>
            <button className="border-0 bg-transparent"><img src={addcart} alt="" /></button>
            </div>
          </div>
        </Link>
      </div>
      </>
  );
};

export default ProductCard;