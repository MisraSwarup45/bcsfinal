import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
    return <footer className='Footer--bottom'>
        <div className='outer--div container'>
            <div className='inner--div'>
                <div className='footer--heading'>
                    <h1>We produce enjoyable digital experiences for users.</h1>
                </div>
                <div className='nav--links'>
                    <Link to='/' className='nav-link'>Platform</Link>
                    <Link to='/modal' className='nav-link'>Service</Link>
                    <Link to='/login' className='nav-link'>Company</Link>
                    <Link to='/' className='nav-link'>Explore</Link>
                    <Link to='/' className='nav-link'>For Creator</Link>
                </div>
            </div>
            <div className='inner--div'>
                <div className='subs'>
                    <h1>Subscribe</h1>
                    <small>Join our community</small>
                </div>
                <div className='subs email-form'>
                    <input className='Email' type="text" placeholder='Email Address' />
                    <input className='submit' type="submit" value=">" />
                    {/* <hr /> */}
                </div>
            </div>
        </div>
        <hr className='Line' />
        <div className='copyright container'>
            <div className='copy--text'>
                <small >Copyright © 2022. All rights reserved</small>
            </div>
            <div className='copy--Links'>
                    <Link to='/sustain' className='copy-Links'>Sustainability</Link>
                    <Link to='/Access' className='copy-Links'>Accessibility</Link>
                    <Link to='/Privacy' className='copy-Links'>Privacy Policy</Link>
                    <Link to='/tos' className='copy-Links'>Terms of use</Link>
                    <Link to='/' className='copy-Links'>Sitemap</Link>
                    <Link to='/contact' className='copy-Links'>Contact us</Link>
            </div>
        </div>
            
        </footer>
}

export default Footer;