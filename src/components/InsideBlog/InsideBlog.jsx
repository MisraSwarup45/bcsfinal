import React from 'react';
import './InsideBlog.css';
import Navbar from '../Navbar/Navbar';
import featuredImage1 from '../../images/Featured_blog1.svg';
import featuredImage2 from '../../images/Featured_blog2.svg';
import blog from '../../images/blog.png';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';

const InsideBlog = () => {
  return (
    <div>
      <Navbar />
      <div className='inside-blog'>
        <div className='blog-section'>
          <div className='blog-name-section'>
            <div className='blog-photo'></div>
            <div className='blog-names'>
              <div className='blog-post-name'>John Doe</div>
              <div className='blog-post-date'>March 4 . 3 Mins Read. Listen</div>
            </div>
          </div>
          <div className='blog-heading'>How to secure your crypto wallet?</div>
          <div className='blogs-posts'>
            <div><img className='blog-photo-section' src={blog}></img></div>
            <div className='blog-main-desc'>Discover stories, thinking, and expertise from writers on any topic.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </div>
          </div>
          <div className='blog-desc'>
            Discover stories, thinking, and expertise from writers on any topic.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ELorem ipsum dolor sit amet, consectetur aaute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.lpa qui officia deserunt mollit anim id est laborum.xcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </div>
          <button className='blog-btn'>Read more</button>
          <div className='blog-writer-name'>From John Doe</div>
        </div>
        <div className='blog-posts'>
          <div className='featured-blog'>Featured Blogs</div>
          <div className='featured--block--content image1 blogs'>
            <img src={featuredImage1} alt="Featured_blog" />
            <div className='container'>
              <p>From a Small scale to a Big Firm</p>
              <small>We harness the power of design, combine it with technology and build digital experiences that...</small>
              <Link className='image1-link' to='/'>Read more &rsaquo;</Link>
            </div>
            <hr />
            <small>November 28,2022</small>
          </div>
          <div className='featured--block--content image1 blogs'>
            <img src={featuredImage2} alt="Featured_blog" />
            <div className='container'>
              <p>From a Small scale to a Big Firm</p>
              <small>We harness the power of design, combine it with technology and build digital experiences that...</small>
              <Link className='image1-link' to='/'>Read more &rsaquo;</Link>
            </div>
            <hr />
            <small>November 28,2022</small>
          </div>
          <div className='featured--block--content image1 blogs'>
            <img src={featuredImage1} alt="Featured_blog" />
            <div className='container'>
              <p>From a Small scale to a Big Firm</p>
              <small>We harness the power of design, combine it with technology and build digital experiences that...</small>
              <Link className='image1-link' to='/'>Read more &rsaquo;</Link>
            </div>
            <hr />
            <small>November 28,2022</small>
          </div>
          <div className='featured--block--content image1 blogs'>
            <img src={featuredImage2} alt="Featured_blog" />
            <div className='container'>
              <p>From a Small scale to a Big Firm</p>
              <small>We harness the power of design, combine it with technology and build digital experiences that...</small>
              <Link className='image1-link' to='/'>Read more &rsaquo;</Link>
            </div>
            <hr />
            <small>November 28,2022</small>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default InsideBlog;