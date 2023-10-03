import React, { useEffect, useState } from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import BlogCard from "../components/BlogCard";
import { useDispatch, useSelector } from "react-redux";
import { getAllBlogs } from "../features/blog/blogSlice";
import Container from "../components/Container";
import moment from "moment";

const Blog = () => {
  const blogState = useSelector((state) => state?.blog?.blog);
  // console.log(blogState);
  const dispatch = useDispatch();
  useEffect(() => {
    getBlogs();
  }, []);
  const getBlogs = () => {
    dispatch(getAllBlogs());
  };
  return (
    <>
      <Meta title={"Blogs"} />
      <BreadCrumb title="Blogs" />
      <Container className="blog-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-3">
            <div className="filter-card mb-3">
              <h3 className="filter-title">Shop By Categories</h3>
              <div>
                <ul className="ps-0">
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="./store">Our Store</a>
                  </li>
                  <li>
                    <a href="./blog">Blogs</a>
                  </li>
                  <li>
                    <a href="./contact">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-9">
            <div className="row">
              {!blogState && <div className="text-center mb-4">No Data</div>}
              {blogState && blogState?.map((item, index) => {
                return (
                  <div className="col-6 mb-3" key={index}>
                    <BlogCard
                      id={item?._id}
                      title={item?.title}
                      description={item?.description}
                      images={item?.images[0]?.url}
                      date={moment(item?.createdAt).format(
                        "MMMM Do YYYY, h:m a"
                      )}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Blog;
