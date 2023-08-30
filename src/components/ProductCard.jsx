import React from "react";
import { Link, useLocation } from "react-router-dom";
import ReactStars from "react-stars";

const ProductCard = (props) => {
  const {grid} = props;
  let location = useLocation();
  return (
    <>
    <div className={`${location.pathname === "/store" ? `gr-${grid}` : "col-3"}`}>
      <Link className="product-card position-relative">
        <div className="wishlist-icon position-absolute">
          <Link>
            <img src="images/wish.svg" alt="wishlist" />
          </Link>
        </div>
        <div className="product-image">
          <img src="images/watch.jpg" alt="watch" className="img-fluid" />
          <img src="images/watch-1.avif" alt="productimg" className="img-fluid" />
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
      </Link>
    </div><div className={`${location.pathname === "/store" ? `gr-${grid}` : "col-3"}`}>
        <Link className="product-card position-relative">
          <div className="wishlist-icon position-absolute">
            <Link>
              <img src="images/wish.svg" alt="wishlist" />
            </Link>
          </div>
          <div className="product-image">
            <img src="images/watch.jpg" alt="watch" className="img-fluid" />
            <img src="images/watch-1.avif" alt="productimg" className="img-fluid" />
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
        </Link>
      </div>
      </>
  );
};

export default ProductCard;