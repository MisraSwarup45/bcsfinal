import React from 'react';
import '../../Samplethree.css';
import Sponsors from '../../../components/Sponsors/Sponsors';
import stepone from '../../../images/stepone.png';
import steptwo from '../../../images/steptwo.png';
import stepthree from '../../../images/stepthree.png';
import knowimg from '../../../images/knowimage.png';
import bgfooterpic from '../../../images/probg.png';
import backimg from '../../../images/backimg.png';
import pro1 from '../../../images/pro1.png';
import pro2 from '../../../images/pro2.png';
import pro3 from '../../../images/pro3.png';
import Navbar from '../../../components/Navbar/Navbar';
import Footer from '../../../components/Footer/Footer';


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

        <>
            <Navbar />
            <div id='sample'>
                <img className='sample-img' src={bgfooterpic}></img>
                <div className='photo-head'>
                    <div className='photo-name'>Product Photography</div>
                    <div className='photo-desc'>We make it simple to obtain expert product images fast and at a reasonable price.</div>
                    <div className='photo-btn'>Get Started</div>
                </div>
                <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                <Sponsors />
                <div className='text-desc'>
                    We are experts at photographing products on a white backdrop for use on your website, online store, print media, and more. Simply ship your items to our studio, where our staff will photograph and edit them before returning them to you.
                </div>
                <div className='sample-service'>
                    <div className='sample-service-heading'>
                        Crisp photos packed with features clients love
                    </div>
                </div>

                <div className='team-details'>
                    <div className='team-details-one'>
                        <img className='team-details-img' src={pro1}></img>
                        <p className='team-details-heading'>Post a Project</p>
                        <p className='team-details-desc'>Posting a projects free and simple. Fill out the title, description, and budget fields.</p>
                    </div>
                    <div className='team-details-one'>
                        <img className='team-details-img' src={pro2}></img>
                        <p className='team-details-heading'>Choose Creators</p>
                        <p className='team-details-desc'>No task is too small or too large. For projects of any size or budget, we have 1800+ creators available. No task is too difficult. We can complete it!</p>
                    </div>
                    <div className='team-details-one'>
                        <img className='team-details-img' src={pro3}></img>
                        <p className='team-details-heading'>Pay Safely</p>
                        <p className='team-details-desc'>Using our milestone payment system, you should only pay for work once it has been finished and you are completely pleased with the quality.</p>
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
                        <img className='photo-inside' src={backimg}></img>
                        {/* <div class="grid-container">
                        <div class="grid-item">1</div>
                        <div class="grid-item">2</div>
                        <div class="grid-item">3</div>
                        <div class="grid-item">4</div>
                        <div class="grid-item">5</div>
                        <div class="grid-item">6</div>
                        <div class="grid-item">7</div>
                        <div class="grid-item">8</div>
                        <div class="grid-item">9</div>
                    </div> */}
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
            <Footer />
        </>
    )
}

export default Sample;