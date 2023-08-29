/* Components */
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import Contact from "./pages/Contact";
import About from "./pages/About";
import OurStore from "./pages/OurStore";

import './App.css'
import Layout from "./components/Layout";

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
        </Route>
      </Routes>
    </BrowserRouter>
      </>
  );
}

export default App;