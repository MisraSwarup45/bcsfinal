import React from 'react';
import './Sampletwo.css';
import Sponsors from '../components/Sponsors/Sponsors';
import webcontentbg from '../images/webcontentbg.png';
import webcontent1 from '../images/webcontent1.png';
import webcontent2 from '../images/webcontent2.png';
import stepone from '../images/stepone.png';
import steptwo from '../images/steptwo.png';
import stepthree from '../images/stepthree.png';
import knowimg from '../images/knowimage.png';
import bgfooterpic from '../images/bgfooterpic.png';
import insiderect from '../images/insiderect.png';


const Sampletwo = (props) => {
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
        <div id='sampletwo'>
            <img className='sample-img' src={props.bg}></img>
            <div className='sample-head'>
                <div className='sample-name'>{props.name}</div>
                <div className='sample-desc'>{props.namedesc}</div>
                <div className='sample-btn'>Get Started</div>
            </div>
            <br></br><br></br><br></br><br></br><br></br><br></br>
            <Sponsors />
            <div className='text-desc'>
                {props.text}
            </div>
            <div className='sampletwo-head'>
                {props.texthead}
            </div>

            <div className='sample-two'>
                <div className='sample-two-text'>
                    <div className='sampletwo-content'>
                        <div className='sampletwo-content-head'>{props.reshead1}</div>
                        <div className='sampletwo-content-desc'>{props.restext1}</div>
                    </div>
                    <div className='sampletwo-content'>
                        <div className='sampletwo-content-head'>{props.reshead2}</div>
                        <div className='sampletwo-content-desc'>{props.restext2}</div>
                    </div>
                    <div className='sampletwo-content'>
                        <div className='sampletwo-content-head'>{props.reshead3}</div>
                        <div className='sampletwo-content-desc'>{props.restext3}</div>
                    </div>
                </div>
                <div className='sample-two-img'>
                    <div className=''><img className='sample-img1' src={props.img1}></img></div>
                    <div className='sample-img3'><img className='sample-img2' src={props.img2}></img></div>
                </div>
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
            <div className='feature-div' >
                <div className='feature'>Our Features</div>
                {/* <div className='feature-div1'> */}
                <div className='features-container'>
                    <div className='features-box'>
                        <div className='box-heading'>Extensively Researched</div>
                        <div className='box-desc'>We are aware that thorough investigation and careful planning are necessary to produce intriguing and high-quality material. We do a thorough examination of every factor pertaining to the needs of the specific business before we begin writing.</div>
                    </div>
                    <div className='features-box'>
                        <div className='box-heading'>Delivered on Time</div>
                        <div className='box-desc'>We won't ever provide you weak justifications. Client time and money are valued by BCS. We guarantee prompt project delivery and rigorous adherence to deadlines. Everything is delivered to our clients on time.</div>
                    </div>
                    <div className='features-box'>
                        <div className='box-heading'>Unique Content</div>
                        <div className='box-desc'>We base our content on the most recent data, figures, facts, trends, and technological advancements. The addition of even a single sentence that can be considered "outdated," "irrelevant," or "illogical" is strictly forbidden by our authors.</div>
                    </div>
                    <div className='features-box'>
                        <div className='box-heading'>Result Oriented</div>
                        <div className='box-desc'>We are a content writing company that focuses on results. We recognise that in the end, the services we provide for our clients should increase traffic, subscriptions, and revenue, and we excel at doing so. We deliver quantifiable outcomes for your company.</div>
                    </div>
                </div>
                {/* </div> */}
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

export default Sampletwo;