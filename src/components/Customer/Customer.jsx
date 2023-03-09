import React from 'react';
import './Customer.css';
import customers from '../../images/customer.png';
import oracle from '../../images/oracle.svg';
import microsoft from '../../images/microsoft.svg';
import google from '../../images/google.svg';
import jp from '../../images/jp.svg';
import amazon from '../../images/ama.png';
import fb from '../../images/facebook.svg';
import adobe from '../../images/adobe.svg';
import linkedin from '../../images/linkedin.svg';
import bg1 from '../../images/bg1.png';
import bg2 from '../../images/bg2.png';
import bg3 from '../../images/bg3.png';
import bg4 from '../../images/bg4.png';
import phonebg from '../../images/phonebg.png';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import MainFooter from '../MainFooter/MainFooter';
import Featured from '../Featured_blog/Featured';

const Customer = () => {
    const customer = [
        {
            bg: bg1,
            image: phonebg,
            heading: "Company Name",
            desc: "Lorem ipsum dolor sit amet consectetur. Quis enim sagittis massa mi eget. Quisque aliquet volutpat magna est ut viverra elementum.",
            link: ""
        },
        {
            bg: bg2,
            image: phonebg,
            heading: "Company Name",
            desc: "Lorem ipsum dolor sit amet consectetur. Quis enim sagittis massa mi eget. Quisque aliquet volutpat magna est ut viverra elementum.",
            link: ""
        },
        {
            bg: bg3,
            image: phonebg,
            heading: "Company Name",
            desc: "Lorem ipsum dolor sit amet consectetur. Quis enim sagittis massa mi eget. Quisque aliquet volutpat magna est ut viverra elementum.",
            link: ""
        },
        {
            bg: bg4,
            image: phonebg,
            heading: "Company Name",
            desc: "Lorem ipsum dolor sit amet consectetur. Quis enim sagittis massa mi eget. Quisque aliquet volutpat magna est ut viverra elementum.",
            link: ""
        },
    ];
    return (
        <div>
        <Navbar />
            <div id="customers" className='customers-style'>
                <div className='customers-cointainer container'>
                    <div className='customers-heading'>
                        We love clients with who we work
                    </div>
                    <div className='customers-subheading'>
                        BigBros Creative Studio is used by the world's most cutting-edge businesses.
                    </div>
                    <div className='customers-input'>
                        <div><input className='main-input' type={'email'} placeholder='Enter your email'></input></div>
                        <button className='main-input-btn'>Get Started</button>
                    </div>
                </div>
                <div className='customers-image-div'>
                    <img className='customers-image' src={customers}></img>
                </div>
            </div>
            <div className='customer-spon'>
                <div className='spon-grp'>
                    <img className='companytags' src={oracle} />
                    <img className='companytags' src={microsoft} />
                    <img className='companytags' src={google} />
                    <img className='companytags' src={jp} />
                </div>
                <div className='spon-grp'>
                    <img className='companytags' src={amazon} />
                    <img className='companytags' src={fb} />
                    <img className='companytags' src={adobe} />
                    <img className='companytags' src={linkedin} />
                </div>
            </div>
            <div className='story'>
                <div className='story-head'>
                    Customer stories that motivate our work
                </div>
                <div className='story-desc'>
                    See why more than 1,000 organizations use BCS to increase conversion, LTV, and retention by reading our customer success stories.
                </div>
            </div>
            <div className='color-bg'>
                {customer.map(({ bg, image, heading, desc }) => (
                    <div className='color-bg-div'>
                        <img className='color-bg1' src={bg}></img>
                        <div className='bg-div' >
                            <div><img className='phonebg' src={image}></img></div>
                            <div className='color-head-div'>
                                {/* <div className='color-gap'></div> */}
                                <div className='color-text'>
                                    <div className='color-head'>{heading}</div>
                                    <div className='color-desc'>{desc}</div>
                                    <button className='color-btn'>Read full case study</button>
                                </div>
                            </div>
                        </div>

                    </div>
                ))}
            </div>
            <MainFooter />
            <Featured />
            <Footer />
        </div>
    )
}

export default Customer;