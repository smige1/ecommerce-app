import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import BlogCard from "../components/BlogCard"

const Blog = () => {
  return (
    <>
      <Meta title={"Blogs"} />
      <BreadCrumb title="Blogs" />
      <div className="blog-wrapper">
        <div className="container-xxl">
            <div className="row">
                <div className="col-3">
                <div className="filter-card mb-3">
                <h3 className="filter-title">Shop By Categories</h3>
                <div>
                  <ul className="ps-0">
                    <li><a href="/">Home</a></li>
                    <li>
                    <a href="./store">Our Store</a>
                      
                      </li>
                    <li><a href="./blog">Blogs</a></li>
                    <li><a href="./contact">Contact</a></li>
                  </ul>
                </div>
              </div>
                </div>
                <div className="col-9">
                    <div className="row">
                       <div className="col-6 mb-3">
                       <BlogCard />
                       </div>
                       <div className="col-6 mb-3">
                       <BlogCard />
                       </div>
                       <div className="col-6 mb-3">
                       <BlogCard />
                       </div>
                       <div className="col-6 mb-3">
                       <BlogCard />
                       </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
