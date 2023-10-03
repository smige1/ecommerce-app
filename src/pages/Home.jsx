import React, { useEffect } from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import BlogCard from "../components/BlogCard";
import ProductCard from "../components/ProductCard";
import SpecialProduct from "../components/SpecialProduct";
import Container from "../components/Container";
import { services } from "../utils/data";
import { useDispatch, useSelector } from "react-redux";
import { getAllBlogs } from "../features/blog/blogSlice";
import moment from "moment";
import {getAllProducts} from "../features/products/productSlice"

const Home = () => {
  const blogState = useSelector((state) => state?.blog?.blog);
  const productState = useSelector((state) => state?.product?.product);
  console.log(productState);
  const dispatch = useDispatch();
  useEffect(() => {
    getBlogs();
    getallProducts();
  }, []);
  const getBlogs = () => {
    dispatch(getAllBlogs());
  };
  const getallProducts = () => {
    dispatch(getAllProducts());
  };
  return (
    <>
      <Container class1="home-wrapper-1 py-5">
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
      </Container>

      <Container class1="home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="services d-flex align-items-center justify-content-between">
              {services?.map((i, j) => {
                return (
                  <>
                    <div className="d-flex align-items-center gap-15" key={j}>
                      <img src={i.image} alt="services" />
                      <div>
                        <h6>{i.title}</h6>
                        <p className="mb-0">{i.tagline}</p>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
      <Container className="home-wrapper-2 py-5">
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
      </Container>
      <Container className="featured-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our Feature Collection</h3>
          </div>
          </div>
          <div className="row gap">
            {productState &&
              productState?.map((item, index) => {
                if (item.tags === "featured"){
                return (
                  <SpecialProduct
                    key={index}
                    brand={item?.brand}
                    title={item?.title}
                    totalrating={item.totalrating.toString()}
                    price={item?.price}
                    sold={item?.sold}
                    quantity={item?.quantity}
                  />
                );
                }
              })}
          </div>
      </Container>

      <section className="famous-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="famous-card position-relative">
                <img src="images/watch.jpg" alt="famous" />
                <div className="famous-content position-absolute">
                  <h5 className="text-dark">Big Screen</h5>
                  <h6 className="text-dark">Smart Watch series 7</h6>
                  <p className="text-dark">
                    From $399 or $16.62/mo. for 24 mo.*
                  </p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="famous-card position-relative">
                <img src="images/watch.jpg" alt="famous" />
                <div className="famous-content position-absolute">
                  <h5 className="text-dark">Big Screen</h5>
                  <h6 className="text-dark">Smart Watch series 7</h6>
                  <p className="text-dark">
                    From $399 or $16.62/mo. for 24 mo.*
                  </p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="famous-card position-relative">
                <img src="images/watch.jpg" alt="famous" />
                <div className="famous-content position-absolute">
                  <h5 className="text-dark">Big Screen</h5>
                  <h6 className="text-dark">Smart Watch series 7</h6>
                  <p className="text-dark">
                    From $399 or $16.62/mo. for 24 mo.*
                  </p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="famous-card position-relative">
                <img src="images/watch.jpg" alt="famous" />
                <div className="famous-content position-absolute">
                  <h5 className="text-dark">Big Screen</h5>
                  <h6 className="text-dark">Smart Watch series 7</h6>
                  <p className="text-dark">
                    From $399 or $16.62/mo. for 24 mo.*
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Container className="special-wrapper py-5 home-wrapper-2">
        
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Special Products</h3>
            </div>
          </div>
          <div className="row gap">
            {productState &&
              productState?.map((item, index) => {
                if (item.tags === "special"){
                return (
                  <SpecialProduct
                    key={index}
                    brand={item?.brand}
                    title={item?.title}
                    totalrating={item.totalrating.toString()}
                    price={item?.price}
                    sold={item?.sold}
                    quantity={item?.quantity}
                  />
                );
                }
              })}
          </div>
      </Container>
      <Container className="popular-wrapper py-5 home-wrapper-2">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Our Popular Product</h3>
            </div>
            </div>
            <div className="row">
            {productState &&
              productState?.map((item, index) => {
                if (item.tags === "popular"){
                return (
                  <ProductCard
                    key={index}
                    data={productState}
                  />
                );
                }
              })}
          </div>
       
      </Container>
      <section className="marque-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="marquee-inner-wrapper card-wrapper">
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
        </div>
      </section>

      <Container className="blog-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our Latest Blogs</h3>
          </div>
        </div>
        <div className="row">
          {!blogState && <div className="text-center mb-4">No Data</div>}
          {blogState &&
            blogState?.map((item, index) => {
              return (
                <div className="col-6 mb-3" key={index}>
                  <BlogCard
                    id={item?._id}
                    title={item?.title}
                    description={item?.description}
                    images={item?.images[0]?.url}
                    date={moment(item?.createdAt).format(
                      "MMMM Do YYYY, h:m:ss a"
                    )}
                  />
                </div>
              );
            })}
        </div>
      </Container>
    </>
  );
};

export default Home;
