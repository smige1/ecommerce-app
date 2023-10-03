import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { HiOutlineArrowLeft } from "react-icons/hi";
import blog from "../images/blog-1.jpg";
import Container from "../components/Container";
import { useDispatch, useSelector } from "react-redux";
import { getABlog } from "../features/blog/blogSlice";

const Singleblog = () => {
  const blogState = useSelector((state) => state?.blog?.blog);
  const location = useLocation();
  const getABlogId = location.pathname.split("/")[2];
  console.log(blogState);
  const dispatch = useDispatch();
  useEffect(() => {
    getBlog();
  }, []);
  const getBlog = () => {
    dispatch(getABlog(getABlogId));
  };
  return (
    <>
      <Meta title={blogState?.title} />
      <BreadCrumb title={blogState?.title} />
      <Container class1="blog-wrapper home-wrapper-2 py-2">
        <div className="row">
          <div className="col-12">
            <div className="single-blog-card">
              <Link to="/blog" className="d-flex align-items-center gap-10">
                <HiOutlineArrowLeft className="fs-5" />
                Go back to Blogs
              </Link>
              <h3 className="title">{blogState?.title}</h3>
              <img
                src={blogState?.images[0]?.url ? blogState?.image[0]?.url : blog}
                className="img-fluid w-100 my-4"
                alt="blog"
              />
              <p
                dangerouslySetInnerHTML={{ __html: blogState?.description }}
              ></p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Singleblog;
