import React from 'react'
import { Link } from 'react-router-dom';

const BlogCard = () => {
  return (
      <div className='blog-card'>
        <div className='card-image'>
          <img src='images/small-books.jpg' alt='' className='img-fluid w-100'/>
        </div>
        <div className='blog-content'>
          <p className='date'>1 jan, 2023</p>
          <h5 className='title'>New year</h5>
          <p className='desc'>lorem loremloremlorem loremlorem loremloremlorem</p>
          <Link to='/blog/:id' className='button'>
            Read More
          </Link>
        </div>
      </div>
    
  )
}

export default BlogCard;
