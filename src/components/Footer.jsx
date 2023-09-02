import React from 'react'
import { BsFacebook, BsGithub, BsLinkedin, BsX, BsYoutube } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import newsletter from "../images/newsletter.png"

const Footer = () => {
  return (
    <>
    <footer className="py-4">
    <div className="container-xxl">
        <div className="row align-item-center">
          <div className="col-5">
            <div className="footer-top-date d-flex gap-30 align-item-center">
              <img src={newsletter} alt='newsletter'/>
              <h2 className='mb-0 text-white'>Sign Up For Newsletter</h2>
            </div>
            </div>
            <div className='col-7'>
            <div className="input-group">
       <input
         type="text"
         className="py-2 form-control py-1"
         placeholder="Your Email Address"
         aria-label="Your Email Address"
         aria-describedby="basic-addon2"
       />
         <span className="input-group-text p-2" id="basic-addon2">
           Subscribe
         </span>
      </div>
            </div>
            </div>
            </div>
    </footer>
    <footer className="py-4">
    <div className="container-xxl">
      <div className="row">
        <div className="col-4">
          <h4 className='text-white'>Contact Us</h4>
          <div>
            <address className='text-white fs-6'>
              10, Fiwasaye Area Osogbo, Osun State
              </address>
              <a className="text-white mt-4 d-block mb-1" href="tel:+2348036581503">
                  +2348036581503
                </a>
                <a className="text-white mt-4 d-block mb-" href="mailto:egimsikana@gmail.com">
                 egimsikana@gmail.com
                </a>
                <div className='social-icons d-flex align-items-center mt-4 gap-30'>
                  <a href='https://www.linkedin.com/in/egims-ikana-171466112/' className='text-white'>
                    <BsLinkedin className='fs-4'/>
                  </a>
                  <a href='https://facebook.com/Ikanauno' className='text-white'>
                    <BsFacebook className='fs-4'/>
                  </a>
                  <a href='https://twitter.com/IkanaEgims' className='text-white'>
                    <BsX className='fs-4'/>
                  </a>
                  <a href='https://github.com/smige1' className='text-white'>
                    <BsGithub className='fs-4'/>
                  </a>
                  <a href='https://www.linkedin.com/in/egims-ikana-171466112/' className='text-white'>
                    <BsYoutube className='fs-4'/>
                  </a>
                </div>
          </div>
        </div>
        <div className="col-3">
          <h4 className='text-white mb-4'>Information</h4>
          <div className='footer-links d-flex flex-column'>
            <Link to='/privacy-policy' className='text-white py-2 mb-1'>Privacy Policy</Link>
            <Link to='/refund-policy' className='text-white py-2 mb-1'>Refund Policy</Link>
            <Link to='/shipping-policy' className='text-white py-2 mb-1'>Shipping Policy</Link>
            <Link to='/term-conditions' className='text-white py-2 mb-1'>Terms & Conditions</Link>
            <Link to='/blog' className='text-white py-2 mb-1'>Blogs</Link>
          </div>
        </div>
        <div className="col-3">
          <h4 className='text-white mb-4'>Account</h4>
          <div className='footer-links d-flex flex-column'>
            <Link className='text-white py-2 mb-1'>About Us</Link>
            <Link className='text-white py-2 mb-1'>FAQ</Link>
            <Link className='text-white py-2 mb-1'>Contact</Link>
            <Link className='text-white py-2 mb-1'></Link>
          </div>
        </div>
        <div className="col-2">
          <h4 className='text-white mb-4'>Quick Links</h4>
          <div className='footer-links d-flex flex-column'>
            <Link className='text-white py-2 mb-1'>Laptops</Link>
            <Link className='text-white py-2 mb-1'>Headphones</Link>
            <Link className='text-white py-2 mb-1'>Tablets</Link>
            <Link className='text-white py-2 mb-1'>Watch</Link>
          </div>
        </div>
      </div>
    </div>
    </footer>
    <footer className="py-3">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <p className="text-center mb-0 text-white">
              &copy; {new Date().getFullYear()}: Powered by Smige
            </p>
          </div>
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer