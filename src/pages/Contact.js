import React from 'react'
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import { IoMdHome } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { IoIosInformationCircleOutline } from "react-icons/io";



const Contact = () => {
  return (
    <div>
      <Meta title={"Contact Us"} />
      <BreadCrumb title="Contact Us" />  
      <div className='contact wrapper home-wrapper-2 py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <iframe
                src='https://maps.app.goo.gl/6BHauKKVUtPGuSgg7'
                width='600'
                height='450'
                className='border-0 w-100'
                allowFullScreen=""
                loading='lazy'
                referrerPolicy='no-referrer-when-downgrade'>
                </iframe>
            </div>
            <div className='col-12 mt-5'>
              <div className='contact-inner-wrapper d-flex justify-content-between'>
                <div>
                  <h3 className='contact-title mb-4'>Contact</h3>
                  <form action='' className='d-flex flex-column gap-15'>
                    <div>
                      <input type='text' className='form-control' placeholder='Name' />
                    </div>
                    <div>
                      <input type='email' className='form-control' placeholder='Email' />
                    </div>
                    <div>
                      <input type='tel' className='form-control' placeholder='Mobile Number' />
                    </div>
                    <div>
                      <textarea name='' id='' className='w-100 form-control' cols="30" rows="4" placeholder='comments'></textarea>
                    </div>
                    <div>
                      <button className='button border-0'>Submit</button>  
                    </div> 
                  </form>
                </div>
                <div>
                  <h3 className='contact-title mb-4'>Get in touch with us</h3>
                  <div>
                    <ul className='ps-0 '>
                      <li className='mb-3 d-flex gap-15 align-items-center'>
                      <IoMdHome className='fs-5'/>
                      <address className='mb-0'>Mumbai</address>
                      </li>
                      <li className='mb-3 d-flex gap-15 align-items-center'>
                        <FaPhoneAlt className='fs-5'/>
                        <a href="tel:+9165658686">+91 6496425648</a>
                      </li>
                      <li className='mb-3 d-flex gap-15 align-items-center'>
                        <CiMail className='fs-5'/>
                        <a href='mailto:dsfefeafcasfd@gmail.com'>
                          sustainablestore_SDG@gmail.com
                        </a>
                      </li>
                      <li className='mb-3 d-flex gap-15 align-items-center'>
                        <IoIosInformationCircleOutline className='fs-5'/>
                        <p className='mb-0'>Monday - Friday 10 AM - 8 PM</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>  
      </div>    
    </div>
  )
}

export default Contact
