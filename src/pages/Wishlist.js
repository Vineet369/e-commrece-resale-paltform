import React from 'react'
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';

import { IoMdRemoveCircleOutline } from "react-icons/io";


const Wishlist = () => {
  return (
    <>
      <Meta title={"Wishlist"} />
        <BreadCrumb title="Wishlist" />
        <div className='wishlist-wrapper home-wrapper-2 py-5'>
            <div className='container-xxl'>
                <div className='row'>
                    <div className='col-3'>
                        <div className='wishlist-card position-relative'>
                        <IoMdRemoveCircleOutline size={22} className='position-absolute cross' />
                        <div className='wishlist-card-image'>
                        <img src='images/small-books.jpg' className='img-fluid' />
                        </div>
                        </div>
                        <div className='py-2 px-3'>
                        <h5 className='title'>
                                Samsung M31 5g 128/64
                            </h5>
                            <h6 className='price mb-3'>8000/-</h6>
                        </div>

                    </div>
                    <div className='col-3'>
                        <div className='wishlist-card position-relative'>
                        <IoMdRemoveCircleOutline size={22} className='position-absolute cross' />
                        <div className='wishlist-card-image'>
                        <img src='images/small-books.jpg' className='img-fluid' />
                        </div>
                        </div>
                        <div className='py-2 px-3'>
                        <h5 className='title'>
                                Samsung M31 5g 128/64
                            </h5>
                            <h6 className='price mb-3'>8000/-</h6>
                        </div>

                    </div>
                    <div className='col-3'>
                        <div className='wishlist-card position-relative'>
                        <IoMdRemoveCircleOutline size={22} className='position-absolute cross' />
                        <div className='wishlist-card-image'>
                        <img src='images/small-books.jpg' className='img-fluid' />
                        </div>
                        </div>
                        <div className='py-2 px-3'>
                        <h5 className='title'>
                                Samsung M31 5g 128/64
                            </h5>
                            <h6 className='price mb-3'>8000/-</h6>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Wishlist
