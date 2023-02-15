import React from 'react';
import './Featured.css'
import featuredImage1 from '../../images/Featured_blog1.svg';
import featuredImage2 from '../../images/Featured_blog2.svg';
import { Link } from 'react-router-dom';

function Featured() {
    return <div className='Featured'>
        <div className='blog'>
            Featured Blogs
        </div>
        <div className='Featured--content'>
            <div className='featured--block--content'>
                <h3>
                    Welcome to our online collection of blogs, where we write about all the subjects that would be of interest to you and embed clear, concise knowledge in you.
                </h3>
                <h2>Have fun reading!</h2>
                <div className='featured--button'>
                    <Link className='featured--button-LINK' to='/'>Read more</Link>
                </div>
            </div>


            <div className='featured--block--content image1'>
                <img src={featuredImage1} alt="Featured_blog" />
                <div className='container'>
                    <p>Lorem ipsum dolor sit amet consectetur Ipsum.</p>
                    <small>Lorem ipsum dolor sit amet consectetur. Egestas netus ut neque neque senectus sapien eu in. Diam sem consectetur a non tellus.</small>
                    <Link className='image1-link' to='/'>Read more ></Link>
                
                </div>
                <hr />
                <small>February 05,2023</small>
                
            </div>


            <div className='featured--block--content image1'>
                <img src={featuredImage2} alt="Featured_blog" />
                <div className='container'>
                    <p>Lorem ipsum dolor sit amet consectetur Ipsum.</p>
                    <small>Lorem ipsum dolor sit amet consectetur. Egestas netus ut neque neque senectus sapien eu in. Diam sem consectetur a non tellus.</small>
                    <Link className='image1-link' to='/'>Read more ></Link>
                
                </div>
                <hr />
                <small>February 05,2023</small>
            </div>

        </div>
        
    </div>
}

export default Featured;