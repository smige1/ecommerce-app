import React from 'react';
import { Link } from 'react-router-dom';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import Headphone from '../images/headphone.jpg';
import { AiFillDelete } from 'react-icons/ai';
import Container from '../components/Container';

const Cart = () => {
    return (
        <>
            <Meta title={"Get All Here"} />
            <BreadCrumb title="Your Cart is ready with your Favourite Product" />
            <Container class1='cart-wrapper home-wrapper-2 py-5'>
                <div className='row'>
                    <div className='cart-header d-flex justify-content-between align-items-center py-3'>
                        <h4 className='cart-col-1'>Product</h4>
                        <h4 className='cart-col-2'>Price</h4>
                        <h4 className='cart-col-3'>Quantity</h4>
                        <h4 className='cart-col-4'>Total</h4>
                    </div>
                    <div className='cart-data d-flex justify-content-between align-items-center mb-2 py-3'>
                        <div className='cart-col-1 d-flex align-items-center gap-15'>
                            <div className='w-25'><img src={Headphone} className='img-fluid' alt='headphone' /></div>
                            <div className='w-75'>
                                <p>hkgdgdjhgkjbdfhgjkdfhgkj dfhgkjhdfbvnbvv</p>
                                <p>Size: fmfs</p>
                                <p>Color: gft</p>
                            </div>
                        </div>
                        <div className='cart-col-2'><h5 className='price'>₹9639.00</h5></div>
                        <div className='cart-col-3 d-flex align-items-center gap-15'>
                            <div>
                                <input className='form-control' type='number' min={1} max={10} name='' />
                            </div>
                            <div><AiFillDelete className='text-danger fs-5' /></div>
                        </div>
                        <div className='cart-col-4'><h5 className='price'>₹9639.00</h5></div>
                    </div>
                    <div className='cart-data d-flex justify-content-between align-items-center mb-2 py-3'>
                        <div className='cart-col-1 d-flex align-items-center gap-15'>
                            <div className='w-25'><img src={Headphone} className='img-fluid' alt='headphone' /></div>
                            <div className='w-75'>
                                <p>hkgdgdjhgkjbdfhgjkdfhgkj dfhgkjhdfbvnbvv</p>
                                <p>Size: fmfs</p>
                                <p>Color: gft</p>
                            </div>
                        </div>
                        <div className='cart-col-2'><h5 className='price'>₹9639.00</h5></div>
                        <div className='cart-col-3 d-flex align-items-center gap-15'>
                            <div>
                                <input className='form-control' type='number' min={1} max={10} name='' />
                            </div>
                            <div><AiFillDelete className='text-danger fs-5' /></div>
                        </div>
                        <div className='cart-col-4'><h5 className='price'>₹9639.00</h5></div>
                    </div>
                    <div className='col-12 py-5 mt-4'>
                        <div className='d-flex justify-content-between align-items-baseline'>
                            <Link to='/' className='button'>Continue To Shopping</Link>
                            <div className='d-flex flex-column align-items-end '>
                                <h4>SubTotal:₹19278.00</h4>
                                <p>Taxes and shopping calculated at checkout</p>
                                <Link to='/checkout' className='button'>Checkout</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Container >
        </>
    )
}

export default Cart;