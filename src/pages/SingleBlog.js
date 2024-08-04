import React from 'react'
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import { Link } from 'react-router-dom';

// import { FaArrowLeftLong } from "react-icons/fa6";


const SingleBlog = () => {
  return (
    <>
      <Meta title={"Dynamic Blog Name"} />
      <BreadCrumb title="Dynamic Blog Name" />

      <div className='blog-wrapper home-wrapper-2 py-5'>
            <div className='container-xxl'>
                <div className='row'>
                    <div className='col-12'>
                      <div className='single-blog-card'>
                      <Link className='d-flex align-items-center gap-10' to="/blogs">
                      <FaArrowLeftLong className='fs-5' />
                      Go back</Link>
                        <h3 className='title'>
                          Global Health Benifits becacuse of sustainable marketing
                        </h3>
                        <img className='img-fluid w-100 my-4' src='/images/sdg.png' alt='blog' />
                        <p>The 2030 Agenda for Sustainable Development, adopted by all United Nations members in 2015, created 17 world Sustainable Development Goals. They were created with the aim of "peace and prosperity for people and the planet..." – while tackling climate change and working to preserve oceans and forests
                        The short titles of the 17 SDGs are: No poverty (SDG 1), Zero hunger (SDG 2), Good health and well-being (SDG 3), Quality education (SDG 4), Gender equality (SDG 5), Clean water and sanitation (SDG 6), Affordable and clean energy (SDG 7), Decent work and economic growth (SDG 8), Industry, innovation and infrastructure (SDG 9), Reduced inequalities (SDG 10), Sustainable cities and communities (SDG 11), Responsible consumption and production (SDG 12), Climate action (SDG 13), Life below water (SDG 14), Life on land (SDG 15), Peace, justice, and strong institutions (SDG 16), and Partnerships for the goals (SDG 17).
                        </p>
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default SingleBlog
