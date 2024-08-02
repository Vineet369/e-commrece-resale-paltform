import React from 'react'
import { Link } from 'react-router-dom';

const BlogCard = () => {
  return (
      <div className='blog-card'>
        <div className='card-image'>
          <img src='images/sdg.png' alt='' className='img-fluid w-100'/>
        </div>
        <div className='blog-content'>
          <p className='date'>1 jan, 2023</p>
          <h5 className='title'>Global Health Benifits becacuse of sustainable marketing
          </h5>
          <p className='desc'>The 2030 Agenda for Sustainable Development, adopted by all United Nations members in 2015, created 17 world Sustainable Development Goals. </p>
          <Link to='/blog/:id' className='button'>
            Read More
          </Link>
        </div>
      </div>
    
  )
}

export default BlogCard;
