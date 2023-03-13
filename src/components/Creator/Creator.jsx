import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import './Creator.css'
import dp from '../../images/display-picture.png'
import heart from '../../images/heart.png'
import star from '../../images/star.png'
import bereal from '../../images/bereal.png'
import basketball from '../../images/basketball.png'
import fb from '../../images/fb-round.png'
import linkedin from '../../images/linkedin.png'
import location from '../../images/location.png'
import mail from '../../images/mail.png'
import phone from '../../images/phone-black.png'
import Reviews from '../../pages/Datasets/Reviews'



const Creator = () => {
    const [item, setItem] = useState('reviews');
    const menuChange = (menuItem) => {
        setItem(menuItem)
    }
    return (
        <div>
            <Navbar />
            <div className="creator-container">
                <div className="creator-details">
                    <div className="creator-dp-container">
                        <img className='creator-dp' src={dp} alt="" />
                        <button className='like-btn'><img src={heart} alt="" /></button>
                    </div>
                    <div className="creator-name">Jane Cooper</div>
                    <div className="creator-ratings">
                        <img className='creator-star' src={star} alt="" />
                        <img className='creator-star' src={star} alt="" />
                        <img className='creator-star' src={star} alt="" />
                        <img className='creator-star' src={star} alt="" />
                        <img className='creator-star' src={star} alt="" />
                        <p className='creator-rating'>5.0</p>
                    </div>
                    <p className="creator-reviews">(223 review)</p>
                    <a className='creator-website' href='/'>www.janecooper.com</a>
                    <div className="creator-socials">
                        <img className='creator-social-icons' src={bereal} alt="" />
                        <img className='creator-social-icons' src={basketball} alt="" />
                        <img className='creator-social-icons' src={fb} alt="" />
                        <img className='creator-social-icons' src={linkedin} alt="" />
                    </div>
                    <button className="creator-message-btn yellow-btn">Message</button>
                    <hr className='details-bar' />
                    <div className="creator-grid">
                        <p className="row-1">No. of Projects</p>
                        <p className="row-2">21</p>
                        <p className="row-1">Experience</p>
                        <p className="row-2">5+ Years</p>
                        <p className="row-1">Status</p>
                        <p className="row-2 creator-red">Not Available</p>
                    </div>

                </div>
                <div className="creator-menu">
                    <div className="creator-menu-btns-container">
                        <button onClick={() => menuChange('about')} className={item === 'about' ? "creator-menu-btn creator-btn-active" : "creator-menu-btn"} >About</button>
                        <button onClick={() => menuChange('portfolio')} className={item === 'portfolio' ? "creator-menu-btn creator-btn-active" : "creator-menu-btn"} >Portfolio</button>
                        <button onClick={() => menuChange('reviews')} className={item === 'reviews' ? "creator-menu-btn creator-btn-active" : "creator-menu-btn"}>Reviews</button>
                    </div>
                    <div className="creator-menu-item-container">

                        {item === 'about' && (
                            <div className="creator-about-container">
                                <div className="creator-about-text">
                                    <div className="creator-about-heading">
                                        <h2>About - Jane Cooper</h2>
                                        <div />
                                    </div>
                                    <div className="creator-about-description">
                                        <p>Lorem ipsum dolor sit amet consectetur. Viverra egestas scelerisque viverra consectetur id bibendum eu. Cum at lorem pulvinar purus quam etiam non varius cursus. Purus id proin tristique venenatis. Condimentum lectus lectus ut vivamus. Gravida enim et augue sed.</p>
                                    </div>
                                    <div className="creator-about-heading">
                                        <h2>Services offered</h2>
                                        <div />
                                    </div>
                                    <div className="creator-about-description">
                                        <p>Lorem ipsum dolor sit amet consectetur. Viverra egestas scelerisque viverra consectetur id bibendum eu. Cum at lorem pulvinar purus quam etiam non varius cursus. Purus id proin tristique venenatis. Condimentum lectus lectus ut vivamus. Gravida enim et augue sed.</p>

                                        <li>Doodle Design</li>
                                        <li>Brochure Design</li>
                                        <li>Photo Editing</li>
                                        <li>Costume Design</li>

                                    </div>
                                    <div className="creator-about-heading">
                                        <h2>Working Style</h2>
                                        <div />
                                    </div>
                                    <div className="creator-about-description">
                                        <p>Lorem ipsum dolor sit amet consectetur. Viverra egestas scelerisque viverra consectetur id bibendum eu. Cum at lorem pulvinar purus quam etiam non varius cursus. Purus id proin tristique venenatis. Condimentum lectus lectus ut vivamus. Gravida enim et augue sed.</p>
                                    </div>
                                </div>
                                <div className="creator-about-cards-container">
                                    <div className="creator-card">
                                        <h3 className='creator-card-heading'>Pricing</h3>
                                        <div className="creator-service-grid">

                                            <p className="creator-service-name">Service Name</p>
                                            <p className="creator-price">₹ 1,000 /Day</p>
                                            <p className="creator-service-name">Service Name</p>
                                            <p className="creator-price">₹ 1,000 /Day</p>
                                            <p className="creator-service-name">Service Name</p>
                                            <p className="creator-price">₹ 1,000 /Day</p>
                                        </div>
                                    </div>
                                    <div className="creator-card">
                                        <h3 className='creator-card-heading'>Contact info</h3>
                                        <div className="creator-address">
                                            <img src={location} alt="" />
                                            <div>Mahalakshmi Nagar, Bangalore Karnataka</div>
                                        </div>
                                        <div className="creator-contact-btn-container">
                                            <button className='yellow-btn creator-contact-btn'><img src={mail} alt="" />View Email</button>
                                            <button className='yellow-btn creator-contact-btn'><img src={phone} alt="" />View Contact</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                        {item === 'portfolio' && (
                            <div className="creator-portfolio-container">
                                <div className="creator-portfolio-card"></div>
                                <div className="creator-portfolio-card"></div>
                                <div className="creator-portfolio-card"></div>
                                <div className="creator-portfolio-card"></div>
                                <div className="creator-portfolio-card"></div>
                                <div className="creator-portfolio-card"></div>
                                <div className="creator-portfolio-card"></div>
                                <div className="creator-portfolio-card"></div>
                                <div className="creator-portfolio-card"></div>
                            </div>
                        )}
                        {item === 'reviews' && (
                            <div className="creator-reviews-container">
                                <div className="creator-reviews-main">
                                    <div className="creator-reviews-left">
                                        {Reviews.map((element=>{
                                            const {id, name, time, platform,dp, subtext}=element
                                            return(
                                                <div className="creator-review-card">
                                                    <div className="creator-review-card-header">
                                                        <img className='creator-review-dp' src={dp} alt="" />
                                                        <div className="creator-review-card-name-time">
                                                            <h3>{name}</h3>
                                                            <p>{time}</p>
                                                        </div>
                                                        <img className='creator-review-platform' src={platform} alt="" />
                                                    </div>
                                                    <div className="creator-review-card-subtext">
                                                        {subtext}
                                                    </div>

                                                </div>
                                            )
                                        }))}
                                    </div>
                                    <div className="creator-reviews-right">
                                            <div className="creator-card">
                                                <h3 className="creator-card-heading">Rating distribution</h3>
                                                <div className="rating-distribution">
                                                    <p className='rating-no'>5.0</p>
                                                    <img src={star} alt="" />
                                                    <div className="rating-bar">
                                                        <div className="rating-bar-filled r5"></div>
                                                    </div>
                                                    <p className='no-of-rating'>52 reviews</p>
                                                </div>
                                                <div className="rating-distribution">
                                                    <p className='rating-no'>4.0</p>
                                                    <img src={star} alt="" />
                                                    <div className="rating-bar">
                                                        <div className="rating-bar-filled r4"></div>
                                                    </div>
                                                    <p className='no-of-rating'>52 reviews</p>
                                                </div>
                                                <div className="rating-distribution">
                                                    <p className='rating-no'>3.0</p>
                                                    <img src={star} alt="" />
                                                    <div className="rating-bar">
                                                        <div className="rating-bar-filled r3"></div>
                                                    </div>
                                                    <p className='no-of-rating'>52 reviews</p>
                                                </div>
                                                <div className="rating-distribution">
                                                    <p className='rating-no'>2.0</p>
                                                    <img src={star} alt="" />
                                                    <div className="rating-bar">
                                                        <div className="rating-bar-filled r2"></div>
                                                    </div>
                                                    <p className='no-of-rating'>52 reviews</p>
                                                </div>
                                                <div className="rating-distribution">
                                                    <p className='rating-no'>1.0</p>
                                                    <img src={star} alt="" />
                                                    <div className="rating-bar">
                                                        <div className="rating-bar-filled r1"></div>
                                                    </div>
                                                    <p className='no-of-rating'>52 reviews</p>
                                                </div>
                                            </div>
                                            <div className="creator-card">
                                                <h3 className="creator-card-heading">Write your review</h3>
                                            </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Creator
