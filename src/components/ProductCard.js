import { Link } from '@mui/material'
import React from 'react'
import ReactStars from 'react-rating-stars-component'
import { IoGitCompare } from "react-icons/io5";
import { GrView } from "react-icons/gr";
import { BiCartAdd } from "react-icons/bi";
import { CiHeart } from "react-icons/ci";


const ProductCard = () => {
  return (
    <div className='col-3'>
      <div className='product-card position-relative'>
        <div className='wishlist position-absolute'>
          <Link>
          <CiHeart />
          </Link>
        </div>
        <div className='product-image'>
          <img src='/images/1.png' className='img-fluid' alt='product image' />
          <img src='/images/small-cycle.jpg' className='img-fluid' alt='product image' />
        </div>
        <div className='product-details'>
          <h6 className='brand'>AVON</h6>
          <h5 className='product-title'>
            Bicycles for all age groups
          </h5>
          <ReactStars
            count={5}
            // onChange={ratingChanged}
            size={24}
            value="4"
            edit={false}
            activeColor="#ffd700"
          />
          <p className='price'>800/-</p>
        </div>
        <div className='action-bar position-absolute'>
          <div className='d-flex flex-column gap-15'>
            <Link>
            <GrView />
            </Link>
            <Link>
            <IoGitCompare />
            </Link> 
            <Link>
            <BiCartAdd />
            </Link>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default ProductCard
