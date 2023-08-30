/* Components */
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import Contact from "./pages/Contact";
import About from "./pages/About";
import OurStore from "./pages/OurStore";
import CompareProduct from "./pages/CompareProduct"

import './App.css'
import Layout from "./components/Layout";
import Blog from "./pages/Blog";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Wishlist from "./pages/Wishlist";
import ResetPassword from "./pages/ResetPassword";
import ForgetPassword from "./pages/ForgetPassword";

function App() {
  return (
      <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home />}/>
          <Route path="contact" element={<Contact />}/>
          <Route path="about" element={<About />}/>
          <Route path="store" element={<OurStore />}/>
          <Route path="blog" element={<Blog />}/>
          <Route path="compare-product" element={<CompareProduct />}/>
          <Route path="login" element={<Login />}/>
          <Route path="signup" element={<Signup />}/>
          <Route path="wishlist" element={<Wishlist />}/>
          <Route path="reset-password" element={<ResetPassword />}/>
          <Route path="forget-password" element={<ForgetPassword />}/>
        </Route>
      </Routes>
    </BrowserRouter>
      </>
  );
}

export default App;