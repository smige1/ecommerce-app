import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";

const Wishlist = () => {
  return (
    <>
      <Meta title={"Wishlist"} />
      <BreadCrumb title="Favourite" />
      <div className="wishlist-wrapper home-wrapper-2 py-5"></div>
    </>
  );
};

export default Wishlist;
