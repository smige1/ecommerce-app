import React from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import BlogCard from "../components/BlogCard";
import ProductCard from "../components/ProductCard";

const Home = () => {
  return (
    <>
      <section className="home-wrapper-1 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="main-banner  position-relative ">
                <img
                  src="/images/main-banner.jpg"
                  alt="main-banner"
                  className="img-fluid rounded-3 "
                />
                <div className="main-banner-content position-absolute">
                  <h4>Supercharged for pros</h4>
                  <h5>product A</h5>
                  <p>
                    From <br /> #121, 000/mo.
                  </p>
                  <Link className="button">BUY NOW</Link>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
                <div className="small-banner position-relative ">
                  <img
                    src="/images/catbanner-01.jpg"
                    alt="main-banner"
                    className="img-fluid rounded-3 "
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>Supercharged for pros</h4>
                    <h5>product A</h5>
                    <p>
                      From <br /> #121, 000/mo.
                    </p>
                  </div>
                </div>
                <div className="small-banner position-relative ">
                  <img
                    src="/images/catbanner-02.jpg"
                    alt="main-banner"
                    className="img-fluid rounded-3 "
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>Supercharged for pros</h4>
                    <h5>product B</h5>
                    <p>
                      From <br /> #121, 000/mo.
                    </p>
                  </div>
                </div>
                <div className="small-banner position-relative ">
                  <img
                    src="/images/catbanner-03.jpg"
                    alt="main-banner"
                    className="img-fluid rounded-3 "
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>New Arrival</h4>
                    <h5>product c</h5>
                    <p>
                      From <br /> #121, 000/mo.
                    </p>
                  </div>
                </div>
                <div className="small-banner position-relative ">
                  <img
                    src="/images/catbanner-04.jpg"
                    alt="main-banner"
                    className="img-fluid rounded-3 "
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>New Arrival</h4>
                    <h5>product c</h5>
                    <p>
                      From <br /> #121, 000/mo.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="services d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center gap-10">
                  <img src="images/service.png" alt="service" />
                  <div>
                    <h6>Free Shipping</h6>
                    <p className="mb-0">From all order over $5</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-10">
                  <img src="images/service-02.png" alt="service" />
                  <div>
                    <h6>Offer Daily Surprise </h6>
                    <p className="mb-0">Save upto 25% off</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-10">
                  <img src="images/service-03.png" alt="service" />
                  <div>
                    <h6>Affordable Prices</h6>
                    <p className="mb-0">Get Factory Price</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-10">
                  <img src="images/service-04.png" alt="services" />
                  <div>
                    <h6>Secure Payments</h6>
                    <p className="mb-0">100% Protected Payment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="categories d-flex justify-content-between flex-wrap align-items-center">
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Camera</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/camera.jpg" alt="camera" />
                </div>
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Smart TV</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/tv.jpg" alt="camera" />
                </div>
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Music & gaming</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/camera.jpg" alt="camera" />
                </div>
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Smart Watches</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/headphone.jpg" alt="camera" />
                </div>
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Camera</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/camera.jpg" alt="camera" />
                </div>
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Smart TV</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/tv.jpg" alt="camera" />
                </div>
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Music & gaming</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/camera.jpg" alt="camera" />
                </div>
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Smart Watches</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/headphone.jpg" alt="camera" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="marque-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="d-flex">
              <Marquee className="d-flex">
                <div className="mx-4 w-25 ">
                  <img src="images/brand-01.png" alt="brand" />
                </div>
                <div className="mx-4 w-25 ">
                  <img src="images/brand-02.png" alt="brand" />
                </div>
                <div className="mx-4 w-25 ">
                  <img src="images/brand-03.png" alt="brand" />
                </div>
                <div className="mx-4 w-25 ">
                  <img src="images/brand-04.png" alt="brand" />
                </div>
                <div className="mx-4 w-25 ">
                  <img src="images/brand-05.png" alt="brand" />
                </div>
                <div className="mx-4 w-25 ">
                  <img src="images/brand-06.png" alt="brand" />
                </div>
                <div className="mx-4 w-25 ">
                  <img src="images/brand-07.png" alt="brand" />
                </div>
                <div className="mx-4 w-25 ">
                  <img src="images/brand-08.png" alt="brand" />
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </section>
      <section className="blog-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Our Feature Collection</h3>
            </div>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </section>
      <section className="blog-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Our Latest Blogs</h3>
            </div>
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </div>
        </div>
      </section>
       </>
  );
};

export default Home;
