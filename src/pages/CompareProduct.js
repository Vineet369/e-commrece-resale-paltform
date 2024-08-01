import React from 'react'
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';

import { IoMdRemoveCircleOutline } from "react-icons/io";
import Color from '../components/Color';


const CompareProduct = () => {
  return (
    <>
        <Meta title={"Compare Products"} />
        <BreadCrumb title="Compare Products" />
        <div className='compare-product-wrapper home-wrapper-2 py-5'>
            <div className='container-xxl'>
                <div className='row'>
                    <div className='col-3'>
                        <div className='compare-product-card position-relative'>
                        <IoMdRemoveCircleOutline size={22} className='position-absolute cross' />
                        <div className='product-card-image'>
                            <img src='images/small-books.jpg' className='img-fluid' />
                        </div>
                        <div className='compare-product-details'>
                            <h5 className='title'>
                                Samsung M31 5g 128/64
                            </h5>
                            <h6 className='price mb-3'>8000/-</h6>
                            <div>
                                <div className='product-details'>
                                    <h5>Brand:</h5>
                                    <p>Orient Electric</p>
                                </div>
                                <div className='product-details'>
                                    <h5>Type:</h5>
                                    <p>Ceiling Fan</p>
                                </div>
                                <div className='product-details'>
                                    <h5>Availability:</h5>
                                    <p>In Stock</p>
                                </div>
                                <div className='product-details'>
                                    <h5>Colour:</h5>
                                    <Color />
                                </div>
                                <div className='product-details'>
                                    <h5>Size:</h5>
                                    <div className='d-flex gap-10'>
                                        <p>S</p>
                                        <p>M</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className='col-3'>
                        <div className='compare-product-card position-relative'>
                        <IoMdRemoveCircleOutline size={22} className='position-absolute cross' />
                        <div className='product-card-image'>
                            <img src='images/small-books.jpg' className='img-fluid' />
                        </div>
                        <div className='compare-product-details'>
                            <h5 className='title'>
                                Samsung M31 5g 128/64
                            </h5>
                            <h6 className='price mb-3'>8000/-</h6>
                            <div>
                                <div className='product-details'>
                                    <h5>Brand:</h5>
                                    <p>Orient Electric</p>
                                </div>
                                <div className='product-details'>
                                    <h5>Type:</h5>
                                    <p>Ceiling Fan</p>
                                </div>
                                <div className='product-details'>
                                    <h5>Availability:</h5>
                                    <p>In Stock</p>
                                </div>
                                <div className='product-details'>
                                    <h5>Colour:</h5>
                                    <Color />
                                </div>
                                <div className='product-details'>
                                    <h5>Size:</h5>
                                    <div className='d-flex gap-10'>
                                        <p>S</p>
                                        <p>M</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
    </>
  )
}

export default CompareProduct
