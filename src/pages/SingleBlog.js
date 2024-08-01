import React from 'react'
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import { Link } from 'react-router-dom';

import { FaArrowLeftLong } from "react-icons/fa6";


const SingleBlog = () => {
  return (
    <>
      <Meta title={"Dynamic Blog Name"} />
      <BreadCrumb title="Dynamic Blog Name" />

      <div className='blog-wrapper home-wrapper-2 py-5'>
            <div className='container-xxl'>
                <div className='row'>
                    <div className='col-12'>
                      <div className='single-blog-card'>
                      <Link className='d-flex align-items-center gap-10' to="/blogs">
                      <FaArrowLeftLong className='fs-5' />
                      Go back</Link>
                        <h3 className='title'>
                          Global Health Benifits becacuse of sustainable marketing
                        </h3>
                        <img className='img-fluid w-100 my-4' src='images/small-chair.jpg' alt='blog' />
                        <p>lorem lore mlorem</p>
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default SingleBlog
