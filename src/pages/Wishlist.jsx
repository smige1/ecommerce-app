import React, { useEffect } from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import Container from "../components/Container";
import { useDispatch, useSelector } from "react-redux";
import {getUserWishlist} from "../features/user/userSlice";
import { addToWishlist } from "../features/products/productSlice";

const Wishlist = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getWishlistFromDb() 
   }, []);
  const getWishlistFromDb = () => {
      dispatch(getUserWishlist());
    }
    const wishlistState = useSelector(state => state.auth?.wishlist?.wishlist)
    const removeFromWishlist = (id) => {
        dispatch(addToWishlist(id));
        setTimeout(() => {
            dispatch(getUserWishlist());
        }, 1000)
    }
  return (
    <>
      <Meta title={"Wishlist"} />
      <BreadCrumb title="Favourite" />
      <Container className="wishlist-wrapper home-wrapper-2 py-5">
          <div className="row">
            {!wishlistState && <div className="text-center mb-4 fs-3">No Data</div>}
            {wishlistState && wishlistState?.map((item,index) => {
              return (
              <div className="col-3" key={index}>
              <div className="wishlist-card position-relative" onClick={() => {
                removeFromWishlist(item?._id)
              }}>
                <img
                  src="images/cross.svg"
                  alt="cross"
                  className="position-absolute cross img-fluid"
                />
                <div className="wishlist-card-image bg-white">
                  <img src={item?.images[0].url ? item?.images[0].url : "images/watch.jpg"} alt="watch" className="img-fluid d-block mx-auto" width={160} />
                </div>
                <div className="py-3 px-3">
                  <h5 className="title">{item?.title}</h5>
                  <h6 className="price">₦{item?.price}</h6>
                  
                      </div>
                    </div>
                  </div>
              )
            })}
            
                </div>
    
            </Container>
    </>
  );
};

export default Wishlist;
