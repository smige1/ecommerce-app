import React from "react";
import { Link, useLocation } from "react-router-dom";
import prodcompare from "../images/prodcompare.svg"
import wish from "../images/wish.svg"
import watch from "../images/watch.jpg"
import watch1 from "../images/watch-1.png"
import addcart from "../images/add-cart.svg"
import view from "../images/view.svg"
import ReactStars from "react-stars";
import {useDispatch} from "react-redux"
import {addToWishlist} from "../features/products/productSlice"

const ProductCard = (props) => {
  const {grid, data} = props;
  // console.log(data)
  let location = useLocation();
const dispatch = useDispatch()
;
  const addToWish = (id) => {
    console.log(id)
  dispatch(addToWishlist(id))
  }
  return (
    <>
    {
      data?.map((item, index) => {
        return(
          <div key={index} 
          className={`${location.pathname === "/store" ? `gr-${grid}` : "col-3"}`}>
          <Link 
          // to={`${
          //   location.pathname ==="/"
          //   ? "/product/:id"
          //   : location.pathname === "/product/:id"
          //   ? "/product/:id"
          //   : ":id"
          // }`} 
          className="product-card position-relative">
            <div className="wishlist-icon position-absolute">
              <button className="border-0 bg-transparent" onClick={(e) => {addToWish(item?._id)}}>
                <img src={wish} alt="wishlist" />
              </button>
            </div>
            <div className="product-image">
              <img src={watch} alt="watch" className="img-fluid mx-auto" width={160} />
              <img src={watch1} alt="productimg" className="img-fluid mx-auto" width={160} />
            </div>
            <div className="product-details">
              <h6 className="brand">{item?.brand}</h6>
              <h5 className="product-title">{item?.title}</h5>
              <ReactStars
                count={5}
                edit={false}
                value={item?.totalrating.toString()}
                size={24}
                color2={"#ffd700"} />
                <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}
                dangerouslySetInnerHTML={{__html: item?.description}}
                >
                  </p>
              <p className="price">₦{item?.price}</p>
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
        
        )
      })
    }
   
      </>
  );
};

export default ProductCard;