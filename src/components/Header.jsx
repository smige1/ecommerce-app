import React from "react";
import { NavLink, Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";

const Header = () => {
  return (
    <>
      <header className="header-top-strip py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <p className="text-white mb-0">
                Free Shipping over $1 & free Returns
              </p>
            </div>
            <div className="col-6">
              <p className="text-end text-white">
                Hotline:{" "}
                <a className="text-white" href="tel:+2348036581503">
                  +2348036581503
                </a>
              </p>
            </div>
          </div>
        </div>
      </header>

      <header className="header-upper py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-2">
              <h1>
                <Link className="text-white">Gain</Link>
              </h1>
            </div>
            <div className="col-5">
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search product here..."
                  aria-label="Search product here..."
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text" id="basic-addon2">
                  <BsSearch className="fs-6" />
                </span>
              </div>
            </div>
            <div className="col-5">
              <div
                className="header-upper-links d-flex 
              align-items-center justify-content-between"
              >
                <div>
                  <Link
                    to="/compare-product"
                    className="align-items-center text-white gap-10 d-flex"
                  >
                    <img src="/images/compare.svg" alt="compare" />
                    <p className="mb-0">
                      Compare <br /> Product
                    </p>
                  </Link>
                </div>
                <div>
                  <Link
                    to="/wishlist"
                    className="align-items-center text-white gap-10 d-flex"
                  >
                    <img src="/images/wishlist.svg" alt="wishlist" />
                    <p className="mb-0">Favourite</p>
                  </Link>
                </div>
                <div>
                  <Link to="/login" className="align-items-center text-white gap-10 d-flex">
                    <img src="images/user.svg" alt="one" />
                    <p>
                      Log in <br /> My Account
                    </p>
                  </Link>
                </div>
                <div>
                  <Link to="/cart" className="align-items-center text-white gap-10 d-flex">
                    <img src="/images/cart.svg" alt="cart" />
                    <div className="d-flex flex-column gap-10">
                      <span className="badge bg-white text-dark">0</span>
                      <p className="mb-0">$500</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <header className="header-bottom py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="menu-bottom d-flex align-items-center gap-30">
                <div>
                  <div className="dropdown">
                    <button
                      className="btn btn-secondary dropdown-toggle bg-transparent 
                      border-0 d-flex gap-15 align-items-center"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <img src="images/menu.svg" alt="" />
                      <span className="me-5 d-inline-block">
                        Shop Categories
                      </span>
                    </button>
                    <ul
                      className="dropdown-menu text-white"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li>
                        <Link className="dropdown-item text-white" to="">
                          Action
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item text-white" to="">
                          Another action
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item text-white" to="">
                          Something else here
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="menu-links">
                  <div className="d-flex align-items-center gap-15">
                    <NavLink className="text-white" to="/">
                      Home
                    </NavLink>
                    <NavLink className="text-white" to="/store">
                      Our Store
                    </NavLink>
                    <NavLink className="text-white" to="/blog">
                      Blogs
                    </NavLink>
                    <NavLink className="text-white" to="/contact">
                      Contact
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
