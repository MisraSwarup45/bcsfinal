import React from 'react';
import './Overview.css';
import overbg from '../../images/overbg.png';
import cap1 from '../../images/cap1.png';
import cap2 from '../../images/cap2.png';
import cap3 from '../../images/cap3.png';
import cap4 from '../../images/cap4.png';
import cap5 from '../../images/cap5.png';
import cap6 from '../../images/cap6.png';
import cap7 from '../../images/cap7.png';
import cap8 from '../../images/cap8.png';
import oracle from '../../images/oracle.svg';
import microsoft from '../../images/microsoft.svg';
import google from '../../images/google.svg';
import jp from '../../images/jp.svg';
import amazon from '../../images/ama.png';
import fb from '../../images/facebook.svg';
import adobe from '../../images/adobe.svg';
import linkedin from '../../images/linkedin.svg';
import Sponsors from '../Sponsors/Sponsors';
import arr from '../../images/arr.png';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar'

const Overview = () => {
    const caps = [
        {
            image: cap1,
            title: "Doodle Design"
        },
        {
            image: cap2,
            title: "Website Description"
        },
        {
            image: cap3,
            title: "Radio Studio"
        },
        {
            image: cap4,
            title: "Blogs & Articles"
        },
        {
            image: cap5,
            title: "2D/3D Animation"
        },
        {
            image: cap6,
            title: "Architectural Design"
        },
        {
            image: cap5,
            title: "Recording Studio"
        },
        {
            image: cap7,
            title: "Event Photography"
        },
        {
            image: cap8,
            title: "Ads & Commercials"
        },
    ];
    return (
        <div>
            <Navbar />
            <div className='overview'>
                <img className='overview-bg' src={overbg}></img>
                <div className='overview-text'>
                    <div className='overview-head'>Overview</div>
                    <div className='overview-desc'>We assist you in developing new perspectives on the world, finding possibilities you would not have considered, and achieving outcomes that connect the present with the future.</div>
                </div>
            </div>

            <div className='overview-desc-line'>
                <div className='overview-desc-head'>BCS is an independent production company and creative firm.</div>
                <div className='overview-desc-text'>We work as a team of writers, producers, strategists, directors, designers, editors, and animators to create effective campaigns by fusing imagination with production know-how.</div>
                <br></br>
                <div className='overview-desc-text'>We as an agency are proud of our diligent work habits. Because we're focused, you'll work directly with us, the founders, rather than being passed off to a less experienced creative staff. We are motivated and creative, and because the work we do for you will be added to our portfolio, we meticulously review and double-check each output.</div>
            </div>
            <div className='overview-headings'>Our Capabilities</div>
            <div class="overview-grid-container">
                {caps.map(({ image, title }) => (
                    <div class="overview-grid-item">
                        <div className='overview-grid-img'><img src={image}></img></div>
                        <div className='grid-item-text'>{title}</div>
                    </div>
                ))}
            </div>
            <div className='overview-btn'>
                Download Corporate Profile
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
            <div className='over-back'>
                <div className='over-back-head'>
                    Contributing to Innovation
                </div>
                <div className='over-table'>
                    <div className='over-table'>
                        <img className='over-image' src={arr}></img><div className='over-text-file'>Lorem ipsum dolor sit amet consectetur. Cursus aliquet diam neque lacus quam mauris risus.</div>
                    </div>

                    <div className='over-table'>
                        <img className='over-image' src={arr}></img><div className='over-text-file'>Lorem ipsum dolor sit amet consectetur. Cursus aliquet diam neque lacus quam mauris risus.</div>
                    </div>
                </div>
                <div className='over-table'>
                    <div className='over-table'>
                        <img className='over-image' src={arr}></img><div className='over-text-file'>Lorem ipsum dolor sit amet consectetur. Cursus aliquet diam neque lacus quam mauris risus.</div>
                    </div>

                    <div className='over-table'>
                        <img className='over-image' src={arr}></img><div className='over-text-file'>Lorem ipsum dolor sit amet consectetur. Cursus aliquet diam neque lacus quam mauris risus.</div>
                    </div>
                </div>
                <div className='over-table'>
                    <div className='over-table'>
                        <img className='over-image' src={arr}></img><div className='over-text-file'>Lorem ipsum dolor sit amet consectetur. Cursus aliquet diam neque lacus quam mauris risus.</div>
                    </div>

                    <div className='over-table'>
                        <img className='over-image' src={arr}></img><div className='over-text-file'>Lorem ipsum dolor sit amet consectetur. Cursus aliquet diam neque lacus quam mauris risus.</div>
                    </div>
                </div>
                <div className='over-table'>
                    <div className='over-table'>
                        <img className='over-image' src={arr}></img><div className='over-text-file'>Lorem ipsum dolor sit amet consectetur. Cursus aliquet diam neque lacus quam mauris risus.</div>
                    </div>

                    <div className='over-table'>
                        <img className='over-image' src={arr}></img><div className='over-text-file'>Lorem ipsum dolor sit amet consectetur. Cursus aliquet diam neque lacus quam mauris risus.</div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Overview;