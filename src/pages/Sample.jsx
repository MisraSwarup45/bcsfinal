import React from 'react';
import './Sample.css';
import Sponsors from '../components/Sponsors/Sponsors';
import stepone from '../images/stepone.png';
import steptwo from '../images/steptwo.png';
import stepthree from '../images/stepthree.png';
import knowimg from '../images/knowimage.png';
import bgfooterpic from '../images/photobg.png';
import insiderect from '../images/insiderect.png';


const Sample = (props) => {
    const cards = [
        {
            haeding: "Step ONE",
            image: stepone,
            text: "Share your vision",
            desc: "Utilize our hassle-free, guided flow to create a brief. In less than a minute, receive a rough estimate of the cost and time of delivery."
        },
        {
            haeding: "Step TWO",
            image: steptwo,
            text: "The best-fit designer gets assigned to the work",
            desc: "Our algorithms make sure that only the most qualified designers are selected, prepared, and assigned to your project."
        },
        {
            haeding: "Step THREE",
            image: stepthree,
            text: "Review and Receive the Design",
            desc: "You'll receive a link to approve and download the design once we're finished creating them. Additionally, you can ask for adjustments within 5 business days."
        },
    ];
    return (
        <div id='sample'>
            <img className='sample-img' src={props.bgimg}></img>
            <div className='sample-head'>
                <div className='sample-name'>{props.name}</div>
                <div className='sample-desc'>{props.namedesc}</div>
                <div className='sample-btn'>Get Started</div>
            </div>
            <br></br><br></br><br></br>
            <Sponsors />
            <div className='text-desc'>
                {props.text}
            </div>
            <div className='sample-service'>
                <div className='sample-service-heading'>
                    {props.texthead}
                </div>
                <div className='sample-service-desc'>
                    {props.textsubhead}
                </div>
            </div>
            <div className='samples-imgs'>
                {props.samples.map(({ id, image, title, desc }) => (
                    <div>
                        {id % 2 ? (
                            <div className='sample-one'>
                                <div className='sample-one-img'><img className='sample-image' src={image}></img></div>
                                <div className='sample-one-text'>
                                    <div className='sample-one-head'>{title}</div>
                                    <div className='sample-one-desc'>{desc}</div>
                                </div>
                            </div>
                        ) : (
                            <div className='sample-one'>
                                <div className='sample-one-text'>
                                    <div className='sample-one-head'>{title}</div>
                                    <div className='sample-one-desc'>{desc}</div>
                                </div>
                                <div className='sample-one-img'><img className='sample-image' src={image}></img></div>
                            </div>
                        )}
                    </div>
                ))}

            </div>
            <div className='sample-service'>
                <div className='sample-service-heading'>
                    How we do it
                </div>
                <div className='sample-service-desc'>
                    We use a strategic approach to evaluate the organization's needs, taking into account long-term goals and internal and external influences.
                </div>
            </div>
            <div className='step'>
                {cards.map(({ haeding, image, text, desc }) => (
                    <div className='step-cards'>
                        <div className='step-head'>{haeding}</div>
                        <div className='step-img-div'><img className='step-img' src={image}></img></div>
                        <div className='step-text'>{text}</div>
                        <div className='step-desc'>{desc}</div>
                    </div>
                ))};
            </div>
            <div><img src={knowimg}></img></div>

            <div className='ourwork'>
                <div className='ourwork-head'>
                    <div className='ourwork-text1'>
                        Our Work
                    </div>
                    <div className='ourwork-text2'>
                        We create marketing from concepts that work. View examples of how we've handled Fortune 500 companies, new businesses, and everyone in between.
                    </div>
                </div>
                <div className='ourwork-rect'>
                    <img className='ourwork-inside' src={insiderect}></img>
                </div>
                <div className='our-work'>
                    <div className='our-company'>
                        Company
                    </div>
                    <div className='our-company-text'>
                        <div className='our-company-head'>
                            Lorem ipsum dolor sit amet consectetur.
                        </div>
                        <div className='our-company-desc'>
                            Read case study
                        </div>
                    </div>
                </div>
            </div>

            <div className='footer-up'>
                <div className='footer-up-content'>
                    <div className='lorem'>
                        <h1>A Project with us?</h1>
                    </div>
                    <div className='footer-sub'>
                        Our door is open
                    </div>
                    <div className='footer-btn'>
                        Let's Talk
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sample;