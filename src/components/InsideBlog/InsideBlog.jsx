import React from 'react';
import './InsideBlog.css';
import Navbar from '../Navbar/Navbar';
import featuredImage1 from '../../images/Featured_blog1.svg';
import featuredImage2 from '../../images/Featured_blog2.svg';
import blog from '../../images/blog.png';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import john from '../../images/john.png';
import save from '../../images/bookmark.png';

const InsideBlog = () => {
  return (
    <div>
      <Navbar />
      <div className='inside-blog'>
        <div className='blog-section'>
          <div className='blog-cat'>
            <div className='blog-cat1'>NFT</div>
          </div>
          <div className='blog-name-section'>
            <div>
              <img src={john}></img>
            </div>
            <div className='blog-names'>
              <div className='blog-post-name'>John Doe</div>
              <div className='blog-post-date'>
                <div>March 4 .</div>
                <div> 3 Mins Read.</div>
                <div> Listen</div>
                <div><img src={save}></img></div>
              </div>
            </div>
          </div>
          <div className='blog-heading'>How to secure your crypto wallet?</div>
          <div className='blogs-posts'>
            <div><img className='blog-photo-section' src={blog}></img></div>
          </div>
          <div className='blog-desc'>
            Discover stories, thinking, and expertise from writers on any topic.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ELorem ipsum dolor sit amet, consectetur aaute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.lpa qui officia deserunt mollit anim id est laborum.xcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Discover stories, thinking, and expertise from writers on any topic.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ELorem ipsum dolor sit amet, consectetur aaute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. s nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolores nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.          </div>
          {/* <button className='blog-btn'>Read more</button>
          <div className='blog-writer-name'>From John Doe</div> */}
          <div className='blog-discover'>Discover More of your Interests</div>
          <div className='blog-grids'>
            <div className='blogs-all'>
              <div className='item-blogs'>Programming</div>
              <div className='item-blogs'>Cryptocurrency</div>
              <div className='item-blogs'>Designing</div>
            </div>
            <div className='blogs-all'>
              <div className='item-blogs'>Policy  Shares</div>
            </div>
          </div>
        </div>
        <div className='blog-posts'>
          <div className='featured-blog'>
            <div><img src={john}></img></div>
            <div className='writer-name'>John Doe</div>
            <div className='writter-followers'>407k Followers</div>
            <div className='writter-desc'>I’m a long-time contributor at TIME and other media orgs. I write mostly about health. I grew up in Michigan, but these days I live in southwest Germany.</div>
            <div className='follow-img'>
              <div><button className='follower-btn'>Follow</button></div>
              <div><img src={save}></img></div>
            </div>
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