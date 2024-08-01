import React from 'react'
import { Link } from 'react-router-dom'
import Marquee from 'react-fast-marquee'
import BlogCard from '../components/BlogCard';

import { FaTruckFast } from "react-icons/fa6";
import { TfiGift } from "react-icons/tfi";
import { MdHeadphones } from "react-icons/md";
import { BiSolidOffer } from "react-icons/bi";
import { CiCreditCard1 } from "react-icons/ci";
import ProductCard from '../components/ProductCard';
import SpecialProducts from '../components/SpecialProducts';


const Home = () => {
  return (
    <>
      <section className='home-wrapper-1 py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-6'>
              <div className='main-banner position-relative'>
                <img src="/images/main-1.jpg" 
                className='img-fluid rounded-3'
                alt='main-banner'/>
                <div className='main-banner-content position-absolute'>
                  <h4>Earn for old items</h4>
                  <h5>Sofa set</h5>
                  <p>From 999/- only</p>
                  <Link className='button'>Buy Now</Link>
                </div>
              </div>
            </div>
            <div className='col-6'>
              <div className='d-flex flex-wrap justify-content-between align-items-center'>
              <div className='small-banner position-relative'>
                <img src="/images/small-books.jpg" 
                className='img-fluid rounded-3'
                alt='small-banner'/>
                <div className='small-banner-content position-absolute'>
                  <h4>Earn for old items</h4>
                  <h5>Sofa set</h5>
                  <p>From 999/- only</p>
                </div>
              </div>
              <div className='small-banner position-relative'>
                <img src="/images/small-cycle.jpg" 
                className='img-fluid rounded-3'
                alt='small-banner'/>
                <div className='small-banner-content position-absolute'>
                  <h4>Earn for old items</h4>
                  <h5>Sofa set</h5>
                  <p>From 999/- only</p>
                </div>
              </div>
              <div className='small-banner mt-2 position-relative'>
                <img src="/images/small-chair.jpg" 
                className='img-fluid rounded-3'
                alt='small-banner'/>
                <div className='small-banner-content position-absolute'>
                  <h4>Earn for old items</h4>
                  <h5>Sofa set</h5>
                  <p>From 999/- only</p>
                </div>
              </div>
              <div className='small-banner mt-2 position-relative'>
                <img src="/images/small-cycle.jpg" 
                className='img-fluid rounded-3'
                alt='small-banner'/>
                <div className='small-banner-content position-absolute'>
                  <h4>Earn for old items</h4>
                  <h5>Sofa set</h5>
                  <p>From 999/- only</p>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='home-wrapper-2 py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <div className='services d-flex align-items-center justify-content-between'>
                <div className='d-flex align-items-center gap-15'>
                  <FaTruckFast />
                  <div>
                    <h6>Free Shipping</h6>
                    <p className='mb-0'>From all orders over 500/-</p>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-15'>
                <TfiGift />
                  <div>
                    <h6>Daialy surprise offer</h6>
                    <p className='mb-0'>Save upto 65%</p>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-15'>
                <MdHeadphones />
                  <div>
                    <h6>27/7 customer support</h6>
                    <p className='mb-0'>Shop anytime</p>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-15'>
                <BiSolidOffer />
                  <div>
                    <h6>Affordable price</h6>
                    <p className='mb-0'>Negotiable</p>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-15'>
                <CiCreditCard1 />
                  <div>
                    <h6>Secure Payment</h6>
                    <p className='mb-0'>Fully reliable</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='home-wrapper-3 py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <div className='categories d-flex flex-wrap justify-content-between align-items-center'>
                <div className='d-flex gap-30 align-items-center'>
                  <div>
                    <h6>
                      Cameras
                    </h6>
                    <p>10 items</p>
                  </div>
                  <div>
                    <img src='images/camera.jpg' />
                  </div>
                </div>
                <div className='d-flex gap-30 align-items-center'>
                  <div>
                    <h6>
                      Smart TV
                    </h6>
                    <p>10 items</p>
                  </div>
                  <div>
                    <img src='images/tv.jpg' />
                  </div>
                </div>
                <div className='d-flex gap-30 align-items-center'>
                  <div>
                    <h6>
                      Watches
                    </h6>
                    <p>10 items</p>
                  </div>
                  <div>
                    <img src='images/watch.jpg' />
                  </div>
                </div>
                <div className='d-flex gap-30 align-items-center'>
                  <div>
                    <h6>
                      Music
                    </h6>
                    <p>10 items</p>
                  </div>
                  <div>
                    <img src='images/camera.jpg' />
                  </div>
                </div>
                <div className='d-flex gap-30 align-items-center'>
                  <div>
                    <h6>
                      Cameras
                    </h6>
                    <p>10 items</p>
                  </div>
                  <div>
                    <img src='images/camera.jpg' />
                  </div>
                </div>
                <div className='d-flex gap-30 align-items-center'>
                  <div>
                    <h6>
                      Smart TV
                    </h6>
                    <p>10 items</p>
                  </div>
                  <div>
                    <img src='images/tv.jpg' />
                  </div>
                </div>
                <div className='d-flex gap-30 align-items-center'>
                  <div>
                    <h6>
                      Watches
                    </h6>
                    <p>10 items</p>
                  </div>
                  <div>
                    <img src='images/watch.jpg' />
                  </div>
                </div>
                <div className='d-flex gap-30 align-items-center'>
                  <div>
                    <h6>
                      Music
                    </h6>
                    <p>10 items</p>
                  </div>
                  <div>
                    <img src='images/camera.jpg' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
       </section> 
      <section className='featured-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <h3 className='section-heading'>Featured Collection</h3>
            </div>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            
          </div>
        </div>
      </section>
      <section className='famous-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
          <div className='col-3'>
            <div className='famous-card position-relative'>
              <img className='img-fluid' src='images/small-books.jpg' alt='famous' />
              <div className='famous-content position-absolute'>
                <h5>Big Screen</h5>
                <h6>Smart Watch Series</h6>
                <p>From 599/- </p>
              </div>
            </div>
            <div className='famous-card position-relative'>
              <img className='img-fluid' src='images/small-chair.jpg' alt='famous' />
              <div className='famous-content position-absolute'>
                <h5>Big Screen</h5>
                <h6>Smart Watch Series</h6>
                <p>From 599/- </p>
              </div>
            </div>
            <div className='famous-card position-relative'>
              <img className='img-fluid' src='images/small-cycle.jpg' alt='famous' />
              <div className='famous-content position-absolute'>
                <h5>Big Screen</h5>
                <h6>Smart Watch Series</h6>
                <p>From 599/- </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='special-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <h3 className='section-heading'>Special Products</h3>
          </div>
          </div>
          <div className='row'>
            <SpecialProducts />
            <SpecialProducts />
            <SpecialProducts />
            <SpecialProducts />
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
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
            
        </div>
      </section>
      <section className='marquee-wrapper py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <div className='marquee-inner-wrapper card-wrapper'>
                <Marquee className='d-flex'>
                  <div className='mx-4 w-25'>

                  </div>
                  <div className='mx-4 w-25'>

                  </div>
                  <div className='mx-4 w-25'>

                  </div>
                  <div className='mx-4 w-25'>

                  </div>
                  <div className='mx-4 w-25'>

                  </div>
                  <div className='mx-4 w-25'>

                  </div>
                  <div className='mx-4 w-25'>

                  </div>
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='blog-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <h3 className='section-heading'>Our Latest Blogs</h3>
            </div>
            <div className='row'>
              <div className='col-3'>
              <BlogCard />           
              </div>
              <div className='col-3'>
              <BlogCard />           
              </div>
              <div className='col-3'>
              <BlogCard />           
              </div>
              <div className='col-3'>
              <BlogCard />           
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
 