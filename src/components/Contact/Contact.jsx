import React from 'react';
import Navbar from '../Navbar/Navbar';
import './Contact.css';
import img from '../../images/contactus.png'
import Footer from '../Footer/Footer';
import { FaFacebookSquare } from "react-icons/fa"
import { AiFillInstagram } from "react-icons/ai"
import { BsLinkedin } from "react-icons/bs"
import { FaTwitterSquare } from "react-icons/fa"

const Contact = () => {
    return <>
        <Navbar />
        <div className='Contact--us'>
            <div className='Contact--Heading'>
                <div className='Contact--Text'>
                    Contact us
                </div>
                <div className='Contact--Img'>
                    <img src={img} alt="IMG" />
                </div>
            </div>
            <div className='Contact-text'>
                Looking for a neighbourhood office? We have 63 in total.
                 Would you like to work here? View examples of careers at BCS or keep up with us on social media.
                  Do you want to collaborate with us? Discover our consulting offerings and domain knowledge.
                 Need another thing? To contact us in additional ways, see the list below.
            </div>
            <div className='contact--body'>
                <div className='grid--content'>
                    <div className='grid--heading' >
                        Headquaters
                    </div>

                    <div className='grid--body'>
                        BigBros Creative Service 
                        123 ABC Street 
                        City, State 123456 
                        India
                    </div>
                    <div className='contact--details'>
                        Phone: +91-1234567890
                        <br />
                        Fax: +91-1234567890
                    </div>
                </div>
                <div className='grid--content'>
                    <div className='grid--heading'>
                    New Business
                    </div>
                    <div className='grid--body'>
                        Do you want to hire us? In order to handle our customers' most challenging, all-encompassing management concerns, our devoted case teams often work closely with them over a lengthy period of time.
                    </div>
                    <div className='third'>
                        Tell us your interest
                    </div>
                </div>
                <div className='grid--content'>
                    <div className='grid--heading'>
                    Social Media
                    </div>
                    <div className='grid--body'>
                        Join us on social media to explore how our distinctive strategy enables customers to accomplish the extraordinary, hear about our most recent insights, and gain a glimpse of our culture.
                    </div>
                    <div className='social-icons'>
                        <FaFacebookSquare color='#C6C6C6' fontSize="2.5em"/>
                        <AiFillInstagram color='#C6C6C6' fontSize="2.8em"/>
                        <BsLinkedin color='#C6C6C6' fontSize="2.2em"/>
                        <FaTwitterSquare color='#C6C6C6' fontSize="2.5em"/>
                    </div>
                </div>

                <div className='grid--content'>
                    <div className='grid--heading' >
                        International Presence
                    </div>
                    <div className='grid--body'>
                        <b>Country</b>
                        <br />
                        123 ABC Street
                        <br />
                        City, State 123456
                        <br />
                        Phone: +91-1234567890
                        <br />
                        Fax: +91-1234567890
                        <br /><br />
                        <b>Country</b>
                        <br />
                        123 ABC Street
                        <br />
                        City, State 123456
                        <br />
                        Phone: +91-1234567890
                        <br />
                        Fax: +91-1234567890
                    </div>
                </div>
                <div className='grid--content'>
                    <div className='grid--heading'>
                        Global Careers
                    </div>
                    <div className='grid--body'>
                        Make a decisive move forward.
                        <br /><br />
                        <u>recruiting@bcs.com</u>
                        <br /><br />
                    </div>
                    <div className='third'>
                        Visit our career site
                    </div>
                </div>
                <div className='grid--content'>
                    <div className='grid--heading'>
                        Alumni Relations
                    </div>
                    <div className='grid--body'>
                        Reach us or check out the resources we provide.
                        <br /><br />
                        <u>recruiting@bcs.com</u>
                    </div>
                    <div className='third'>
                        Visit our alumi site
                    </div>
                </div>

                <div className='grid--content'>
                    <div className='grid--heading' >
                        Job Postings
                    </div>
                    <div className='grid--body'>
                        For executive recruiters or hiring companies:
                        <br /><br />
                    </div>
                    <div className='third'>
                        Post a job for BCS alumni
                    </div>
                </div>
                <div className='grid--content'>
                    <div className='grid--heading'>
                    Website
                    </div>
                    <div className='grid--body'>
                        Concerns or remarks regarding the website bcs.com?
                    </div>
                    <div className='third'>
                        Email us
                    </div>
                </div>
                <div className='grid--content'>
                    <div className='grid--heading'>
                    Vendor Inquiries
                    </div>
                    <div className='grid--body'>
                        Contact the BCS office in your area if you want to sell BCS a good or service.
                    </div>
                    <div className='third'>
                        Our offices
                    </div>
                </div>
            </div>
        <Footer />
        </div>
    </>
}

export default Contact;