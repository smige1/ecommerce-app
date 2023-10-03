import React from "react";
import { Link } from "react-router-dom";
import ReactStars from "react-stars";

const SpecialProduct = (props) => {
  const {title, brand, totalrating, price, sold, quantity} = props
  return (
    <div className="col-4">
      <div className="special-product-card">
        <div className="d-flex">
          <div>
            <img src="images/watch.jpg" className="img-fluid" alt="watch" />
          </div>
          <div className="special-product-content">
            <h6 className="brand">{brand}</h6>
            <h5 className="product-title">{title}</h5>
            <ReactStars
              count={5}
              edit={false}
              value={totalrating}
              size={24}
              color2={"#ffd700"}
            />
            <p className="price">
              <span className="red-p">${price}</span> &nbsp;{" "} <strike>$200</strike>
            </p>
            <div className="discount-till d-flex align-items-center gap-10">
              <p className="mb-0">
                <b>5</b>days
              </p>
              <div className="d-flex gap-10 align-items-center">
                <span className="badge rounded-circle p-3 bg-danger">0</span>
                <span className="badge rounded-circle p-3 bg-danger">0</span>
                <span className="badge rounded-circle p-3 bg-danger">0</span>
              </div>
            </div>
            <div className="prod-count">
              <p>Products:{quantity}</p>
              <div>
                <div className="progress mb-3">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{width: quantity / quantity + sold * 100 + "%"}}
                    aria-valuenow={quantity / quantity + sold * 100}
                    aria-valuemin={quantity}
                    aria-valuemax={sold + quantity}
                  ></div>
                </div>
                <Link className="button">Add to Cart</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialProduct;
