import React from 'react';
import './Platform.css';
import girlpen from '../../images/girlpen.png';
import Sponsors from '../Sponsors/Sponsors';
import platformteam from '../../images/platformteam.png';
import globe from '../../images/globe1.png';
import shadow from '../../images/shadow.png'
import arrow from '../../images/arrow.png';
import createteam from '../../images/creativityteam.png';
import bag from '../../images/bagteam.png';
import team from '../../images/usersteam.png';
import pay from '../../images/payteam.png';
import girl from '../../images/girl.png';
import platform from '../../images/platform-girl.png';
import MainFooter from '../MainFooter/MainFooter';
import Footer from '../Footer/Footer';
import Featured from '../Featured_blog/Featured';
import Navbar from '../Navbar/Navbar';


const Platform = () => {
    return (
        <div>
            <Navbar />
            <div className='platform'>
                <div className='platfom-head'>
                    <div className='platform-texts'>
                        <div className='platform-heading'>
                            The Creative platform your Business needs
                        </div>
                        <div className='platform-text'>
                            With the help of our innovative ideas, services, and solutions, we help startups and businesses develop more quickly and generate more sales and money.
                        </div>
                        <button className='platform-btn'>
                            Get Started
                        </button>
                    </div>
                    <div className='girlpen'>
                        <img className='platform-girlpen' src={girlpen}></img>
                    </div>
                </div>

                <Sponsors />
                <br></br><br></br><br></br>

                <div className='setting'>
                    <div className='platform-team'>
                        <div className='platform-image-area'>
                            <img className='platform-team-image' src={platformteam} ></img>
                        </div>

                        <div className='platform-text-area'>
                            <div className='platform-about-heading'>ABOUT</div>
                            <div className='platform-about-text'>WE THINK GOOD RELATIONSHIPS ARE THE KEY TO PROJECT SUCCESS.</div>
                        </div>
                    </div>
                    <div className='platform2'>
                        <div className='platform2-heading'>
                            Our Creative Agency is Ready to Revolutionize Your Brand
                        </div>
                        <div className='platform2-heading platform2-text'>
                            With our extensive selection of creative solutions, we have you covered whether you are a startup or an established company. Let BCS assist you in making a strong entrance into the cutthroat, competitive market if you are starting a new business! If your brand needs a facelift, we have some terrific ideas to give it the second, stronger impression it deserves.
                        </div>
                    </div>

                    <div className='platform3'>
                        <div className='platform2'>
                            <div className='platform2-heading'>
                                Global Coverage
                            </div>
                            <div className='platform2-heading platform2-text'>
                                To assist you in finding and assembling a production team that can produce top-notch content anywhere in the globe, we have established a worldwide network of Creators.
                            </div>
                            <div><img className='globe' src={globe}></img></div>
                            <div className="globe-shadow"><img src={shadow} alt="" ></img></div>
                            <div className='globe-text'>Do you need a creative service in the remotest corner in the world? No issues! 160 nations are included in our creative network.</div>

                        </div>
                    </div>
                </div>
                <div className='chaos-text'>Creativity at Scale without the Chaos</div>

                <div className='create-team'>
                    <div className='create-team-desc'>
                        <div className='create-team-desc-div'>
                            <div>
                                <img className='create-team-desc-img' src={arrow}></img>
                            </div>
                            <div>
                                <p className='create-team-desc-text'>Streamlined operation that maintains context</p>
                            </div>
                        </div>
                        <div className='create-team-desc-div'>
                            <div>
                                <img className='create-team-desc-img' src={arrow}></img>
                            </div>
                            <div>
                                <p className='create-team-desc-text'>The creator-grid engine aids in creating your virtual team.</p>
                            </div>
                        </div>
                        <div className='create-team-desc-div'>
                            <div>
                                <img className='create-team-desc-img' src={arrow}></img>
                            </div>
                            <div>
                                <p className='create-team-desc-text'>Observe, manage, and work together with your group and our creators</p>
                            </div>
                        </div>
                        <div className='create-team-desc-div'>
                            <div>
                                <img className='create-team-desc-img' src={arrow}></img>
                            </div>
                            <div>
                                <p className='create-team-desc-text'>Project visibility and tracking in real-time</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img className='create-team-img' src={createteam}></img>
                    </div>
                </div>


                <div className='team-details'>
                    <div className='team-details-one'>
                        <img className='team-details-img' src={bag}></img>
                        <p className='team-details-heading'>Post a Project</p>
                        <p className='team-details-desc'>Posting a projects free and simple. Fill out the title, description, and budget fields.</p>
                    </div>
                    <div className='team-details-one'>
                        <img className='team-details-img' src={team}></img>
                        <p className='team-details-heading'>Choose Creators</p>
                        <p className='team-details-desc'>No task is too small or too large. For projects of any size or budget, we have 1800+ creators available. No task is too difficult. We can complete it!</p>
                    </div>
                    <div className='team-details-one'>
                        <img className='team-details-img' src={pay}></img>
                        <p className='team-details-heading'>Pay Safely</p>
                        <p className='team-details-desc'>Using our milestone payment system, you should only pay for work once it has been finished and you are completely pleased with the quality.</p>
                    </div>
                </div>

                <div className='photo-girl'>
                <div>
                    <img className='girl-image' src={girl}></img>
                </div>
                <div>
                    <div className='girl-para'>
                        Know how our creators are benefiting from the platform
                    </div>
                    <div className='girl--btn'>
                        <button className='girl-btn'>View Creators Profile</button>
                    </div>
                </div>
            </div>
                <MainFooter />
                <Featured />
                <Footer />
            </div>
        </div>


    )
}

export default Platform;