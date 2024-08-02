import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { BsSearch } from  'react-icons/bs'
import { TfiReload } from "react-icons/tfi";
import { CiHeart } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { TiShoppingCart } from "react-icons/ti";
import { RxDropdownMenu } from "react-icons/rx";



const Header = () => {
  return (
    <div>
      <header className='header-top-strip py-3'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-6'>
              <p className='text-white mb-0'>Free shipping</p>
            </div>
            <div className='col-6'>
              <p className='text-end text-white mb-0'>Contact Customer Support<a className='text-white' href="tel:+1565166648">+15612315615</a></p>
            </div>
          </div>
        </div>
      </header>
      <header className='header-upper py-3'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-2'>
              <h2>
                <Link to='/' className='text-white'>Sustainable Store</Link>
              </h2>
            </div>
            <div className='col-5'>
            <div className="input-group mb-3">
  <input type="text" className="form-control py-2" placeholder="Search Product Here" aria-label="Search Product Here" aria-describedby="basic-addon2" />
  <span className="input-group-text p-3" id="basic-addon2"><BsSearch className='fs-6'/></span>
</div>
            </div>
            <div className='col-5'>
              <div className='header-upper-links d-flex align-item-center justify-content-between'>
                <div>
                  <Link to="/compare-product" className='d-flex align-items-center gap-10 text-white'>
                  <TfiReload size={30}/>
                  <p className='mb-0'>Compare<br />Products</p>
                  </Link>
                </div>
                <div>
                  <Link to='/wishlist' className='d-flex align-items-center gap-10 text-white'>
                  <CiHeart size={40}/>
                  <p className='mb-0'>Favourite <br /> Wishlist</p>
                  </Link>
                </div>
                <div>
                  <Link to="/login" className='d-flex align-items-center gap-10 text-white'>
                  <CiUser size={35}/>
                  <p className='mb-0'>Log in <br /> My Account</p>
                  </Link>
                </div>
                <div>
                  <Link to='/cart' className='d-flex align-items-center gap-10 text-white'>
                  <TiShoppingCart size={40}/>
                  <div className='d-flex flex-column'>
                    <span className='badge bg-white text-dark'>0</span>
                    <p className='mb-0'>Price</p>
                  </div>
                  </Link >
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <header className='header-bottom py-3'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <div className='menu-bottom d-flex align-items-center gap-30'>
                <div>
                <div className="dropdown">
                  <button className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex align-items-center" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <RxDropdownMenu size={25} /><span className='me-5 d-inline-block'>Categories</span>
                  </button>
                  <ul className="dropdown-menu" aria-labelledby='deopdownMenuButtonl' >
                    <li><Link className="dropdown-item text-white" to="#">Daily Needs</Link></li>
                    <li><Link className="dropdown-item text-white" to="#">Travel Essentials</Link></li>
                    <li><Link className="dropdown-item text-white" to="#">Expensive Items</Link></li>
                  </ul>
                </div>  
                </div>  
                <div className='menu-links'>
                  <div className='d-flex align-items-center gap-15'>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/product">Our Store</NavLink>
                    <NavLink to="/blogs">Blogs</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                  </div>

                </div>
              </div>    
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}
 
export default Header
 