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
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZgsKg71US7HSjUBrL1F0TmNuFBZPZaKy0Dw&s"};

    const [orderedProduct,setOrderedProduct] = useState(true)
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
                        <div className='other-product-images d-flex flex-wrap gap-15'>
                            <div><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZgsKg71US7HSjUBrL1F0TmNuFBZPZaKy0Dw&s' className='img-fluid' /></div>
                            <div><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZgsKg71US7HSjUBrL1F0TmNuFBZPZaKy0Dw&s' className='img-fluid' /></div>
                            <div><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZgsKg71US7HSjUBrL1F0TmNuFBZPZaKy0Dw&s' className='img-fluid' /></div>
                            <div><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZgsKg71US7HSjUBrL1F0TmNuFBZPZaKy0Dw&s' className='img-fluid' /></div>
                        </div>
                    </div>
                    <div className='col-6'>
                        <div className='main-product-details'>
                            <div className='border-bottom'>
                                <h3 className='title'>
                                    Stereo headphones
                                </h3>
                            </div>
                            <div className='border-bottom'>
                                <p className='price'>400/-</p>
                            </div>
                        </div>
                            <div className='d-flex align-items-ceenter gap-10'>
                            <ReactStars
                                count={5}
                                // onChange={ratingChanged}
                                size={24}
                                value="4"
                                edit={false}
                                activeColor="#ffd700"
                            />
                            <p className='mb-0'>(2 reviews)</p>
                            </div>
                            <a href='#review'>Write a review</a>
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
                                 {/* {orderedProduct && (
                                    <div>
                                        <a className='text-dark text-decoration-underline justify-content-end' href="">
                                            Write a review
                                        </a>
                                    </div>
                                 )} */}
                            </div>
                            <h4>Write a review</h4>
                            <div id='review' className='review-form py-4'>
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
