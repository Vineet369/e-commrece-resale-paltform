import React from 'react'
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';

const SpecialProducts = () => {
  return (
    <div className='col-6 mb-3'>
      <div className='special-product-card'>
        <div className='d-flex justify-content-between'>
            <div>
                <img src='images/small-chair.jpg' className='img-fluid' alt='chair' />
            </div>
            <div className='special-product-content'>
                <h5 className='brand'>LG</h5>
                <h6 className='title'>
                    Trusted LG TVs for resale 
                </h6>
                <ReactStars
                    count={5}
                    // onChange={ratingChanged}
                    size={24}
                    value = "4"
                    edit={false}
                    activeColor="#ffd700"
                />
                <p className='price'><span className='red-p'>2500/- </span>&nbsp;<strike>5000/-</strike></p>
                <div className='discount-till d-flex align-items-center gap-10'>
                  <p className='mb-0'>
                    <b>5 </b>Days
                  </p>
                  <div className='d-flex gap-10'>
                    <span className='badge rounded-circle p-3 bg-danger'>1</span>:
                    <span className='badge rounded-circle p-3 bg-danger'>1</span>:
                    <span className='badge rounded-circle p-3 bg-danger'>1</span>
                  </div>
                  
                  </div>
                  <div className="prod-count mt-3">
                    <p>Products: 6</p>
                  <div className="progress">
                    <div className="progress-bar" 
                    role="progressbar" 
                    style={{width: "25%"}} 
                    aria-valuenow="25" 
                    aria-valuemin="0" 
                    aria-valuemax="100">

                    </div>
                  </div>
                </div>
                <Link className='button my-3'>Add to cart</Link>
            </div>
        </div>
      </div>
    </div>
  )
}

export default SpecialProducts;
