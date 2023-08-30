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
          <Route path="compareproduct" element={<CompareProduct />}/>
        </Route>
      </Routes>
    </BrowserRouter>
      </>
  );
}

export default App;