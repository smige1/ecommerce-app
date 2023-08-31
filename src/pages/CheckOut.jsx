import React from 'react'
import { Link } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi'
import Headphone from '../images/headphone.jpg';
import Container from '../components/Container';

const CheckOut = () => {
    return (
        <>
            <Container class1='checkout-wrapper home-wrapper-2 py-5'>
                <div className='row'>
                    <div className='col-7 bg-white py-3'>
                        <h3 className='website-name'>Get All Here</h3>
                        <nav style={{ "--bs-breadcrumb-Divider": '>' }} aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link className='text-dark total-price' to="/cart">Cart</Link></li>
                                <li className="breadcrumb-item active total-price" aria-current="page">Information</li>
                                <li className="breadcrumb-item active total-price" aria-current="page">Shipping</li>
                                <li className="breadcrumb-item active total-price" aria-current="page">Payment</li>
                            </ol>
                        </nav>
                        <h4 className='title total'>Contant Information</h4>
                        <p className='user-details total'>Lalit Saini (lalitdaiya54@gmail.com)</p>
                        <h4 className='mb-3'>Shipping address</h4>
                        <form action='' className='d-flex flex-wrap justify-content-between gap-15'>
                            <div className='w-100'>
                                <select name='' className='form-control form-select' id=''>
                                    <option defaultValue={'DEFAULT'} >Select Your Reaction</option>
                                    <option>India</option>
                                    <option>US</option>
                                    <option>Russia</option>
                                    <option>Chian</option>
                                </select>
                            </div>
                            <div className='flex-grow-1'>
                                <input type='text' className='form-control' placeholder='First Name(optinal)' />
                            </div>
                            <div className='flex-grow-1'>
                                <input type='text' className='form-control' placeholder='Last Name*' />
                            </div>
                            <div className='w-100'>
                                <input type='text' className='form-control' placeholder='Address*' />
                            </div>
                            <div className='w-100'>
                                <input type='text' className='form-control' placeholder='Apatment,suite,etc*' />
                            </div>
                            <div className='flex-grow-1'>
                                <input type='text' className='form-control' placeholder='Your City*' />
                            </div>
                            <div className='flex-grow-1'>
                                <select name='' className='form-control form-select' id=''>
                                    <option defaultValue={'DEFAULT'} >Select Your state*</option>
                                    <option>Goa</option>
                                    <option>J&K</option>
                                    <option>RJ</option>
                                    <option>HR</option>
                                    <option>MP</option>
                                    <option>UP</option>
                                </select>
                            </div>
                            <div className='flex-grow-1'>
                                <input type='text' className='form-control' placeholder='Pin Code*' />
                            </div>
                            <div className='w-100'>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <Link to="/cart" className='text-dark'><BiArrowBack className='fs-5 me-1' />Return to Cart</Link>
                                    <Link to="#" className='button-1'>Continue to Shipping</Link>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className='col-5'>
                        <div className='border-bottom py-4'>
                            <div className='d-flex gap-10 align-align-items-center mb-2'>
                                <div className='w-75 d-flex gap-10'>
                                    <div className='w-25 position-relative'>
                                        <span style={{ top: "-9px", right: "-2px" }} className='badge bg-secondary text-white rounded-circle p-2 position-absolute'>1</span>
                                        <img className='img-fluid' src={Headphone} alt='product-images' />
                                    </div>
                                    <div>
                                        <h5 className='total-price'>sdcsknfsnv</h5>
                                        <p className='total-price'>s/ adcsacs</p>
                                    </div>
                                </div>
                                <div className='flex-grow-1'>
                                    <h5 className='total'>9639.00</h5>
                                </div>
                            </div>
                        </div>
                        <div className='border-bottom py-4'>
                            <div className='d-flex justify-content-between align-items-center'>
                                <p className='total'>Subtotal</p>
                                <p className='total-price'>₹19278.00</p>
                            </div>
                            <div className='d-flex justify-content-between align-items-center'>
                                <p className='mb-0 total'>Shipping</p>
                                <p className='mb-0 total-price'>₹50.00</p>
                            </div>
                        </div>
                        <div className='d-flex justify-content-between align-items-center border-bottom py-4'>
                            <h4 className='total'>Total</h4>
                            <h5 className='total-price'>₹19328.00</h5>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default CheckOut;