import React from 'react'
import Navbar from '../Navbar/Navbar'
import './Creator.css'
import dp from '../../images/display-picture.png'
import heart from '../../images/heart.png'
import star from '../../images/star.png'
import bereal from '../../images/bereal.png'
import basketball from '../../images/basketball.png'
import fb from '../../images/fb-round.png'
import linkedin from '../../images/linkedin.png'
const Creator = () => {
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
                    <a className='creator-website' href='/'>www.janecooper.com</a>
                    <div className="creator-socials">
                        <img src={bereal} alt="" />
                        <img src={basketball} alt="" />
                        <img src={fb} alt="" />
                        <img src={linkedin} alt="" />
                    </div>
                    <button className="creator-message-btn yellow-btn">Message</button>
                    <hr className='details-bar' />
                    <div className="creator-grid">
                        <p row-1>No. of Projects</p>
                        <p row-2>21</p>
                        <p row-1>Experience</p>
                        <p row-2>5+ Years</p>
                        <p row-1>Status</p>
                        <p row-2>Not Available</p>
                    </div>

                </div>
                <div className="creator-menu">

                </div>
            </div>
        </div>
    )
}

export default Creator
