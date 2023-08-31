import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import About from './pages/About';
import Blog from './pages/Blog';
import CompareProduct from './pages/CompareProduct';
import Contact from './pages/Contact';
import Home from './pages/Home';
import OurStore from './pages/OurStore';
import Wishlist from './pages/Wishlist';
import Login from './pages/Login';
import SignUp from './pages/Signup';
import ForgetPassword from './pages/ForgetPassword';
import ResetPassword from './pages/ResetPassword';
import SingleBlog from './pages/SingleBlog';
import PrivacyPolicy from './pages/PrivacyPolicy';
import RefundPolicy from './pages/RefundPolicy';
import ShippingPolicy from './pages/ShippingPolicy';
import TermAndCondition from './pages/TermAndCondition';
import SingleProduct from './pages/SingleProduct';
import Cart from './pages/Cart';
import CheckOut from './pages/CheckOut';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/store' element={<OurStore />} />
            <Route path='/checkout' element={<CheckOut />} />
            <Route path='/product/:id' element={<SingleProduct />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/blog/:id' element={<SingleBlog />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/compare-product' element={<CompareProduct />} />
            <Route path='/wishlist' element={<Wishlist />} />
            <Route path='/login' element={<Login />} />
            <Route path='/forget-password' element={<ForgetPassword />} />
            <Route path='/reset-password' element={<ResetPassword />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/privacy-Policy' element={<PrivacyPolicy />} />
            <Route path='/refund-Policy' element={<RefundPolicy />} />
            <Route path='/shipping-Policy' element={<ShippingPolicy />} />
            <Route path='/term-conditions' element={<TermAndCondition />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;