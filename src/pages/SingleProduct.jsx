import React, { useState } from 'react';
import Colors from "../components/Colors";
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import ProductCard from '../components/ProductCard';
import ReactImageZoom from 'react-image-zoom';
import { Rating } from 'react-simple-star-rating';
import { TbGitCompare } from 'react-icons/tb';
import { AiOutlineHeart, AiOutlineCheck } from 'react-icons/ai';
import { FaShippingFast } from 'react-icons/fa';
import { AiOutlineQq } from 'react-icons/ai';
import { GrCopy } from 'react-icons/gr';
import { Link } from 'react-router-dom';

const SingleProduct = () => {
    const props = { width: 600, height: 600, zoomWidth: 600, img: "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg" };
    const [orderedProduct, setorderedProduct] = useState(true);
    const copyToClipboard = (text, e) => {
        e.preventDefault()
        console.log('text', text)
        var textField = document.createElement('textarea')
        textField.innerText = text
        document.body.appendChild(textField)
        textField.select()
        document.execCommand('copy')
        textField.remove()
    };
    return (
        <>
            <Meta title={"Product Name"} />
            <BreadCrumb title="Product Name" />
            <div className='main-product-wrapper home-wrapper-2 py-5'>
                <div className='container-xxl p-3 bg-white'>
                    <div className='row'>
                        <div className='col-6'>
                            <div className='main-product-image'>
                                <div><ReactImageZoom {...props} /></div>
                            </div>
                            <div className='other-product-images d-flex flex-wrap gap-15'>
                                <div>
                                    <img src='https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg' className='img-fluid' alt='watch' />
                                </div>
                                <div>
                                    <img src='https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg' className='img-fluid' alt='watch' />
                                </div>
                                <div>
                                    <img src='https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg' className='img-fluid' alt='watch' />
                                </div>
                                <div>
                                    <img src='https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg' className='img-fluid' alt='watch' />
                                </div>
                            </div>
                        </div>
                        <div className='col-6'>
                            <div className='main-product-details'>
                                <div className='border-bottom'>
                                    <h3 className='title'>A Wonderful Titan Watch</h3>
                                </div>
                                <div className='border-bottom py-3'>
                                    <p className='price'>₹14,990</p>
                                    <div className='d-flex align-items-center mb-2 gap-10'>
                                        <Rating
                                            initialValue={4.5}
                                            allowFraction={true}
                                            allowHover={true}
                                            size={18}
                                        />
                                        <p className='mb-0 t-review'>(2 Reviews)</p>
                                    </div>
                                    <a className='review-btn' href='#review'>Write a Reviews</a>
                                </div>
                                <div className='border-bottom py-3'>
                                    <div className='d-flex gap-10 align-items-center my-2'>
                                        <h3 className='product-heading'>Type: </h3><p className='product-data'>Watch</p>
                                    </div>
                                    <div className='d-flex gap-10 align-items-center my-2'>
                                        <h3 className='product-heading'>Brand: </h3><p className='product-data'>Titan</p>
                                    </div>
                                    <div className='d-flex gap-10 align-items-center my-2'>
                                        <h3 className='product-heading'>Category: </h3><p className='product-data'>Watch</p>
                                    </div>
                                    <div className='d-flex gap-10 align-items-center my-2'>
                                        <h3 className='product-heading'>Tags: </h3><p className='product-data'>Watch</p>
                                    </div>
                                    <div className='d-flex gap-10 align-items-center my-2'>
                                        <h3 className='product-heading'>Availblite: </h3><p className='product-data'>In Stock</p>
                                    </div>
                                    <div className='d-flex flex-column mt-2 mb-3 gap-10'>
                                        <h3 className='product-heading'>Size: </h3>
                                        <div className='d-flex flex-wrap gap-15'>
                                            <span className='badge border border-1 bg-white text-dark border-secondary'>S</span>
                                            <span className='badge border border-1 bg-white text-dark border-secondary'>M</span>
                                            <span className='badge border border-1 bg-white text-dark border-secondary'>L</span>
                                            <span className='badge border border-1 bg-white text-dark border-secondary'>XX</span>
                                            <span className='badge border border-1 bg-white text-dark border-secondary'>XXL</span>
                                        </div>
                                    </div>
                                    <div className='d-flex flex-column my-2 gap-10'>
                                        <h3 className='product-heading'>Color: </h3>
                                        <Colors />
                                    </div>
                                    <div className='d-flex align-items-center flex-row my-2 gap-15'>
                                        <h3 className='product-heading'>Quantity: </h3>
                                        <div className=''>
                                            <input className='form-control' type="number" min={1} max={10} style={{ width: "70px" }} name="" id="" />
                                        </div>
                                        <div className='d-flex align-items-center ms-5 gap-30'>
                                            <button className='button border-0' type='submit'>Add To Card</button>
                                            <button className='button signup' type=''>Buy It Now</button>
                                        </div>
                                    </div>
                                    <div className='d-flex align-items-center gap-15'>
                                        <div className=''>
                                            <a href=''> <TbGitCompare className='fs-5 me-2' /> Add To Compare</a>
                                        </div>
                                        <div className=''>
                                            <a href=''><AiOutlineHeart className='fs-5 me-2' /> Add To Wishlist</a>
                                        </div>
                                    </div>
                                    <div className='d-flex gap-10 align-items-center my-2'>
                                        <h3 className='product-heading'></h3>
                                    </div>
                                    <div className="accordion accordion-flush" id="accordionFlushExample">
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="flush-headingOne">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                                    <FaShippingFast className='fs-5 me-1' />Shipping & Returns</button>
                                            </h2>
                                            <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                                <div className="accordion-body"><p className='product-data'>free Shipping and return availblite on all order!<br />
                                                    We ship all India domestic order within<b>5-7 business day!</b>
                                                </p></div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="flush-headingTwo">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                                    <AiOutlineQq className='fs-5 me-1' />Materials
                                                </button>
                                            </h2>
                                            <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                                <div className="accordion-body"><p>Running Shoes cushions your stide with soft foam to keep you running in comfort.Lightweight knit material wraps your foot in breathable support.while a minimalist design fits in just about anywhere your day tasks you.</p></div>
                                            </div>
                                        </div>
                                        <div className='accordion-item'>
                                            <h2 className="accordion-header" id="flush-headingthree">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapsethree">
                                                    <GrCopy className='fs-5 me-1' />Product Link:
                                                </button>
                                            </h2>
                                            <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                                <div className="accordion-body">
                                                    <Link href='#' onClick={() => { copyToClipboard('https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg'); }}>Click for copy <AiOutlineCheck className='check fs-5 ms-1' /></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='description-wrapper home-wrapper-2 py-5'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12'>
                            <h4>Description</h4>
                            <div className='bg-white p-4'>
                                <p>
                                    Lorem sdfsdfkjsdfghsfbsdmcbsdfjhgsbjsdfbsd
                                    4fsdbsjdfbsjdfbsjdfhsdfhjsdbfhbsd
                                    adbhjbhsbfsfbsdhfbsdhbfdsbhfbdsbfhjdsf
                                    sfsbfhjsbhjsbdfhjbhjb
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section id='review' className='reviews-wrapper home-wrapper-2'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12'>
                            <h3>Reviews</h3>
                            <div className='review-inner-wrapper'>
                                <div className='review-head d-flex justify-content-between align-items-end'>
                                    <div>
                                        <h4 className='mb-2'>Customer reviews</h4>
                                        <div className='d-flex align-items-center gap-10'>
                                            <Rating
                                                initialValue={3}
                                                allowFraction={false}
                                                allowHover={true}
                                                size={20}
                                            />
                                            <p className='mb-0'>Based on 2 Reviews</p>
                                        </div>
                                    </div>
                                    {
                                        orderedProduct && (
                                            <div>
                                                <a className='text-dark text-decoration-underline' href=''>Write a Review</a>
                                            </div>
                                        )
                                    }
                                </div>
                                <div className='review-form py-4'>
                                    <form action='' className='d-flex flex-column gap-15'>
                                        <h4>Write a Review</h4>
                                        <Rating
                                            initialValue={4}
                                            allowFraction={false}
                                            allowHover={true}
                                            size={15}
                                        />
                                        <div>
                                            <input type="text" className='form-control' placeholder='Name*' />
                                        </div>
                                        <div>
                                            <input type="email" className='form-control' placeholder='Email*' />
                                        </div>
                                        <div>
                                            <textarea type="text" cols="30" rows="4" className='form-control w-100' placeholder='Comments*'></textarea>
                                        </div>
                                        <div className='d-flex justify-content-end'>
                                            <button className='button border-0'>Submit Review</button>
                                        </div>
                                    </form>
                                </div>
                                <div className='reviews'>
                                    <div className='review'>
                                        <div className='d-flex align-items-center gap-10'>
                                            <h6 className='mb-0'>User Name</h6>
                                            <Rating
                                                initialValue={3}
                                                allowFraction={false}
                                                allowHover={true}
                                                size={20}
                                            />
                                        </div>
                                        <p className='mt-3'>
                                            dsmfsfmhjegjhfbn oirrhj eiuoretrh ertuehrkj
                                            hehrejhththtbbhuhjqeoiemfi iriijjtj iuouroi
                                            rkoirjn jjkjrewoiuen kokrejrjrejb reijrjer
                                            dsmfsfmhjegjhfbn oirrhj eiuoretrh ertuehrkj
                                            hehrejhththtbbhuhjqeoiemfi iriijjtj iuouroi
                                            rkoirjn jjkjrewoiuen kokrejrjrejb reijrjer
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='popular-wrapper home-wrapper-2 py-5'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12'>
                            <h3 className='section-heading'>Our Popular Products</h3>
                        </div>
                        <div className='row'>
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SingleProduct;