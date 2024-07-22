import React from 'react';
import { CiLocationArrow1 } from "react-icons/ci";
import { Link } from 'react-router-dom';
import { CiInstagram } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { CiYoutube } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";


const Footer = () => {
  return (
    <>
      <footer className='py-4'>
        <div className='container-xxl'>
          <div className='row align-items-center'>
            <div className='col-5'>
              <div className='footer-top-data d-flex gap-30 align-item-center'>
                <CiLocationArrow1 />
                <h2 className='mb-3 text-white'>Signup for new community updates from SDG</h2>
              </div>
            </div>
            <div className='col-7'>
              <div className="input-group mb-3">
                <input type="text" className="form-control py-1" placeholder="Your email address" aria-label="Your email address" aria-describedby="basic-addon2" />
                <span className="input-group-text  p-2" id="basic-addon2">Subscribe</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className='py-4'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-4'>
              <h4 className='text-white mb-4'>Contact Us</h4>
              <div>
                <address className='text-white fs-6'>@Address</address>
                
              <a href='tel:+121656416' className='mt-4 d-block mb-3 text-white'>
                +1231564654
              </a>
              <a href='mailto:dsdas@gmail.como' className='mt-4 d-block mb-3 text-white'>
                dnkasn@gmail.com
              </a>
              <div className='social_icons d-flex align-item-center gap-30' >
                <a className='text-white' href='#'>
                  <CiInstagram  className='fs-3'/>
                </a>
              
                <a className='text-white' href='#'>
                  <CiLinkedin  className='fs-3'/>

                </a>
              
                <a className='text-white' href='#'>
                  <CiTwitter className='fs-3' />

                </a>
              
                <a className='text-white' href='#'>
                  <CiYoutube  className='fs-3'/>

                </a>
              </div>
              </div>
            
          </div>
          <div className='col-2'>
            <h4 className='text-white mb-4'>Information</h4>
            <div className='footer-links d-flex flex-column'>
              <Link className='text-white py-2 mb-1'>Privacy</Link>
              <Link className='text-white py-2 mb-1'>Refund Policy</Link>
              <Link className='text-white py-2 mb-1'>Shipping Policy</Link>
              <Link className='text-white py-2 mb-1'>Terms and conditions</Link>
              <Link className='text-white py-2 mb-1'>Blogs</Link>
            </div>
          </div>
          <div className='col-2'>
            <h4 className='text-white mb-4'>Account</h4>
            <div className='footer-links d-flex flex-column'>
              <Link className='text-white py-2 mb-1'>About Us</Link>
              <Link className='text-white py-2 mb-1'>FAQ</Link>
              <Link className='text-white py-2 mb-1'>Contact</Link>

            </div>
          </div>
          <div className='col-2'>
            <h4 className='text-white mb-4'>Quick Links</h4>
            <div className='footer-links d-flex flex-column'>
              <Link className='text-white py-2 mb-1'>Laptops</Link>
              <Link className='text-white py-2 mb-1'>Headphones</Link>
              <Link className='text-white py-2 mb-1'>Tables</Link>
              <Link className='text-white py-2 mb-1'>Watch</Link>
            </div>
          </div>

        </div>
      </div>
    </footer >
      <footer className='py-4'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <p className='text-center mb-0 text-white'>&copy; {new Date().getFullYear()}; Powered by SDG </p>
            </div>
          </div>
        </div>
      </footer>
      
    </>
  )
}

export default Footer
