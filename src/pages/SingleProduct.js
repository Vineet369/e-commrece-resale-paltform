import React, { useState } from 'react'
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import ProductCard from '../components/ProductCard';
import ReactStars from 'react-rating-stars-component';
import ReactImageZoom from 'react-image-zoom';


const SingleProduct = () => {
    const props = {
        width: 400, 
        height: 500, 
        zoomWidth: 500, 
        img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Fphotos%2Fheadphone&psig=AOvVaw2Y6ciu5Vm8FEV5f61F4mHz&ust=1722623985709000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIC-7cm41IcDFQAAAAAdAAAAABAK"};

    const [orderedProduct,setOrderedProduct] = useState(false)
  return (
    <div>
      <Meta title={"Product Name"} />
      <BreadCrumb title="Product Name" />

      <div className='main-product-wrapper home-wrapper-2 py-5'>
            <div className='container-xxl'>
                <div className='row'>
                    <div className='col-6'>
                        <div className='main-product-image'>
                            <div>
                                <ReactImageZoom {...props} />
                            </div>
                        </div>
                        <div className='other-product-images d-flex flex-wrapgap-15'>
                            <div></div>
                        </div>
                    </div>
                    <div className='col-6'>


                    </div>
                </div>
            </div>
            <div className='description-wrapper py-5 home-wrapper-2'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12'>
                            <h4>Description</h4>
                            <div className='bg-white p-3'>
                            <p>fsdf lorem</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className='reviews-wrapper py-5 home-wrapper-2'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12'>
                            <h3>Reviews</h3>
                            <div className='review-inner-wrapper'>
                            <div className='review-head d-flex justify-content align-items-end'>
                                <div>
                                    <h3>Customer Reviews</h3>
                                    <div className='d-flex align-items-center gap-10'>
                                    <ReactStars
                                        count={5}
                                        // onChange={ratingChanged}
                                        size={24}
                                        value="4"
                                        edit={false}
                                        activeColor="#ffd700"
                                    />   
                                    <p className='mb-0'>Based on 4 reviews</p>
                                 </div>
                                 </div>
                                 {orderedProduct && (
                                    <div>
                                        <a className='text-dark text-decoration-underline' href="">
                                            Write a review
                                        </a>
                                    </div>
                                 )}
                            </div>
                            <h4>Write a review</h4>
                            <div className='review-form py-4'>
                            <form action='' className='d-flex flex-column gap-15'>
                               <div>
                               <ReactStars
                                    count={5}
                                    // onChange={ratingChanged}
                                    size={24}
                                    value="4"
                                    edit={true}
                                    activeColor="#ffd700"
                                />
                               </div>
                                <div>
                                <textarea name='' id='' className='w-100 form-control' cols="30" rows="4" placeholder='comments'></textarea>
                                </div>
                                <div className='d-flex justify-content-end'>
                                <button className='button border-0'>Submit Review</button>  
                                </div> 
                            </form>
                            </div>
                            <div className='reviews'>
                                <div className='review'>
                                    <div className='d-flex gap-10 align-items-center'>
                                        <h6 className='mb-0'>Sarvagya</h6>
                                <ReactStars
                                    count={5}
                                    // onChange={ratingChanged}
                                    size={24}
                                    value="4"
                                    edit={false}
                                    activeColor="#ffd700"
                                />
                                    </div>
                                </div>
                                <p className='mt-3'>sdf sfds fdf sf sdfdsff d</p>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='popular-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <h3 className='section-heading'>Our popular products</h3>
            </div>
          </div>
          <div className='row'>
            <div className='col-2'>
              <div className='card'></div>
            </div>
            <div className='col-2'>
              <div className='card'></div>
            </div>
           
            <ProductCard />
          
          </div>
            
        </div>
      </section>
            </div>
    </div>
  )
}

export default SingleProduct
