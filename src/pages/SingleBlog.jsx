import React from 'react'
import { Link } from 'react-router-dom';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import { HiOutlineArrowLeft } from 'react-icons/hi'
import blog from "../images/blog-1.jpg";
import Container from '../components/Container';

const Singleblog = () => {
    return (
        <>
            <Meta title={"Get All Here"} />
            <BreadCrumb title="Dynamic Blog Name" />
            <Container class1='blog-wrapper home-wrapper-2 py-2'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='single-blog-card'>
                            <Link to='/blogs' className='d-flex align-items-center gap-10'><HiOutlineArrowLeft className='fs-5' />Go back to Blogs</Link>
                            <h3 className='title'>A Beautiful Sunday Morning Renaissance.</h3>
                            <img src={blog} className='img-fluid w-100 my-4' alt='blog' />
                            <p>
                                You're only as good as your last collection, which is an enormous pressure.
                                I think there is something about luxury - it's not something people need,
                                but it's what they want. it really pully at their heart. I have a fantastic
                                relationship with money.Sceleirqus sociosqu ullamcorper urna nisl mollis
                                vestibulum pretium commodo inceptose cum condimentum placerat diam venenatis
                                blandit hac eget dis lacus a parturient a accumsan nisl ante vestibulum.
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Singleblog;