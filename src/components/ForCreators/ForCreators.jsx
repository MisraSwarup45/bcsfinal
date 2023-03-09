import React from 'react';
import './ForCreators.css';
import '../Platform/Platform.css';
import fcphoto from '../../images/fcphoto.png';
import triangle from '../../images/tringle.png';
import triangle2 from '../../images/triangle2.png';
import frame1 from '../../images/frame1.png';
import frame2 from '../../images/paintframe.png';
import frame3 from '../../images/frame2.png';
import pen from '../../images/penpraphic1.png';
import pen1 from '../../images/pengraphic2.png';
import menrect from '../../images/menrect.png';
import womenrect from '../../images/womenrect.png';
import keyrect from '../../images/keyrect.png';
import winrect from '../../images/winrect.png';
import grilpen from '../../images/videophone.png';
import one from '../../images/01.png';
import two from '../../images/02.png';
import three from '../../images/03.png';
import four from '../../images/04.png';
import five from '../../images/05.png';
import girlrect from '../../images/girlrect.png';
import leftline from '../../images/leftline.png';
import rightline from '../../images/rightline.png';
import faq from '../../images/faq.png';
import Collapsible from "react-collapsible";
import dropdown from '../../images/drop.png';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

const ForCreators = () => {
    const faqs = [
        {
            question: "What do I get out of it?",
            answer: "You will be developing design and content for some of the top companies in the nation and will be paid on a regular basis by BCS. Additionally, you'll get the chance to hear from some of India's top creative industry figures on their deepest views."
        },
        {
            question: "What is the work's frequency?",
            answer: "Work does not occur on a set schedule. As the relationship develops and trust deepens, the frequency would rise. You would have to consistently produce high-quality work and conduct yourself professionally to do this."
        },
        {
            question: "Is this a full-time or freelance opportunity? Is there a minimum age requirement?",
            answer: "You have the opportunity to work with BCS as a freelance, whether you want to write, design, or edit. It's not a full-time job, either! Minors under the age of 18 are not permitted to use the Services. If you are a minor and would want to use our services, your legal guardian or parents, who have accepted these Terms, must provide you permission to do so. When a minor makes use of the Website or Services, it is presumed that he or she has secured the legal guardian's or parents' permission and that they have made the usage possible. When a person, including a minor, registers for the Services/products offered, BCS will not be held liable for any consequences that may follow from that person's usage of that Website or our Services."
        },
        {
            question: "How do I get assignments?",
            answer: "You will get assignments on your own dashboard, where each one will be displayed as an opportunity that you can accept or reject as you see fit."
        },
        {
            question: "What is BCS cloud?",
            answer: "BCS Cloud is a carefully selected network of creators that supports BCS and its customers in all of their creativity endeavours. You will frequently receive tasks from BCS after you join the BCS Cloud."
        },
    ];

    const projects = [
        {
            heading: "Doodle Design",
            image: pen,
            title: "Company Name",
            text: "Lorem ipsum dolor sit amet consectetur Egestas arcu eu a sit mauris.",
            link: "",
        },
        {
            heading: "Product Description",
            image: pen1,
            title: "Company Name",
            text: "Lorem ipsum dolor sit amet consectetur Egestas arcu eu a sit mauris.",
            link: "",
        },
        {
            heading: "Comic Design",
            image: pen,
            title: "Company Name",
            text: "Lorem ipsum dolor sit amet consectetur Egestas arcu eu a sit mauris.",
            link: "",
        },
        {
            heading: "Book Writing",
            image: pen1,
            title: "Company Name",
            text: "Lorem ipsum dolor sit amet consectetur Egestas arcu eu a sit mauris.",
            link: "",
        },
    ];

    return (
        <>
            <Navbar />
            <div id='forcreators'>
                <div className='for-head'>
                    <div className='for-texts'>
                        <div className='for-heading'>
                        We enable you to accomplish more of what you like.
                        </div>
                        <div className='for-text'>
                        We provide creators the opportunity to collaborate with some of the top international companies and expand their portfolios.
                        </div>
                        <button className='for-btn'>
                            Join as Creator
                        </button>
                    </div>
                    <div className='girlpen'>
                        <img className='for-girlpen' src={fcphoto}></img>
                    </div>
                </div>
                <div className='how-it-works'>
                    <div className='how-it-works-heading'>
                        How it Works
                    </div>
                    <div className='how-it-works-subheading'>
                        We are not a marketplace where bids are placed. We strive to increase the likelihood that you will receive work that is appropriate for your skills since we believe in a meritocratic system where each creator is recognised.
                    </div>
                </div>
                <div >
                    <img className='creators-bg' src={triangle}></img>
                </div>
                <div className='creator-content'>
                    <div className='creator-content-text'>
                        <div className='creator-content-heading'>
                            You create. We’ll handle the rest.
                        </div>
                        <div className='creator-content-subheading'>
                            Get paid to do what you love on BCS. Join our worldwide network of gifted artists and find fantastic clients.
                        </div>
                    </div>
                    <div className='creator-content-image'>
                        <img src={frame1}></img>
                    </div>
                </div>
                <div >
                    <img className='creators-bg-right' src={triangle2}></img>
                </div>
                <div className='creator-content'>
                    <div className='creator-content-image'>
                        <img src={frame2}></img>
                    </div>
                    <div className='creator-content-text'>
                        <div className='creator-content-heading'>
                            Content Operations
                            Made Easy!
                        </div>
                        <div className='creator-content-subheading'>
                            Manage all of your tasks, invoices, and work history from a single dashboard.
                        </div>
                    </div>
                </div>
                <div >
                    <img className='creators-bg2' src={triangle}></img>
                </div>
                <div className='creator-content'>
                    <div className='creator-content-text'>
                        <div className='creator-content-heading' id='third-creator-heading'>
                            Get Creative Projects
                            Delivered to Your Dashboard
                        </div>
                        <div className='creator-content-subheading'>
                            You are no longer concerned about competing with other artists on price! You can get the tasks that are most suited to your abilities thanks to the technologies on our platform.
                        </div>
                    </div>
                    <div className='creator-content-image'>
                        <img src={frame3}></img>
                    </div>
                </div>
                <div className='how-it-works tesingimage'>
                    <div className='how-it-works-heading'>
                        Open Projects
                    </div>
                    <div className='how-it-works-subheading'>
                        Choose a project with a need that fits your expertise to get started as a creator with BCS.
                    </div>
                </div>
                <div className='projects-rect'>
                    <div className="projects-card-div">
                    {projects.map(({ heading, image, title, text, link }) => (

                        <div className='projects-card'>
                            <div className='project-heading'>{heading}</div>
                            <div className='project-heading-card'>
                                <div className='project-heading-image'>
                                    <img src={image}></img>
                                </div>
                                <div className='project-heading-title'>
                                    {title}
                                </div>
                                <div className='project-heading-text'>
                                    {text}
                                </div>
                            </div>
                         

                            <button className='view-btn'>View</button>
                            
                        </div>
                    ))}
                    </div>
                    <div className='view-projects-btn-container'>

                    <button className="yellow-btn view-projects-btn">View all Projects</button>
                    </div>
                </div>
                <div className='how-it-works'>
                    <div className='how-it-works-heading'>
                        How BCS adds value to you
                    </div>
                    <div className='how-it-works-subheading'>
                        Develop a successful career with BCS while working remotely on projects at your own speed and rates.
                    </div>
                </div>
                <div className='project'>
                    <div className='project-img'>
                        <img className='img1' src={menrect}></img>
                        <img className='img2' src={womenrect}></img>
                        <img className='img3' src={keyrect}></img>
                        <img className='img4' src={winrect}></img>
                    </div>
                    <div className='project-grid'>
                        <div className="project-box">
                            <div className='project-subhead'>1.</div>
                            <div className='project-subtext'>Punctual Payments</div>
                            <div className='project-desc'>Trust us; we are aware of the difficulties with payments and follow-ups that freelancers encounter. Our objective is to relieve you from financial anxiety so that you can generate content.</div>
                        </div>
                        <div className="project-box">
                            <div className='project-subhead'>2.</div>
                            <div className='project-subtext'>Manage all your projects in one place</div>
                            <div className='project-desc'>Work in a structured atmosphere where your contributions are archived in the cloud so you can access them indefinitely, and our algorithms make sure you're matched with the projects that best suit you.</div>
                        </div>
                        <div className="project-box">
                            <div className='project-subhead'>3.</div>
                            <div className='project-subtext'>Collaborate with experts</div>
                            <div className='project-desc'>As a team, work on various projects and absorb knowledge from the experts. Get helpful instruction to advance your abilities and thorough, helpful feedback on your efforts.</div>
                        </div>
                        <div className="project-box">
                            <div className='project-subhead'>4.</div>
                            <div className='project-subtext'>Work Felxibility</div>
                            <div className='project-desc'>Work flexibly on various projects from anywhere in the world. Your talents and abilities will be matched with projects. Bring your inventive spirit to the table and succeed!</div>
                        </div>
                    </div>
                </div>
                <div className='how'>How do you get onboard with us?</div>
                <div className='phone'>
                    <div className='numeric'>
                        <div className='numeric-column'>
                            <div><img className='numeric-img' src={one}></img></div>
                            <div className='hori'>
                                <div className='numeric-text'>Sign up to the creators platform</div>
                                <div className='horizontal'>|</div>
                            </div>
                        </div>
                        <div className='numeric-column'><img className='numeric-img' src={two}></img><div className='numeric-text'>Set up your creators profile</div><div className='horizontal'>|</div></div>
                        <div className='numeric-column'><img className='numeric-img' src={three}></img><div className='numeric-text'>Get match for relevant requirement</div><div className='horizontal'>|</div></div>
                        <div className='numeric-column'><img className='numeric-img' src={four}></img><div className='numeric-text'>Content QC in progress</div><div className='horizontal'>|</div></div>
                        <div className='numeric-column'><img className='numeric-img' src={five}></img><div className='numeric-text'>Receive timely payment</div></div>
                    </div>
                    <div >
                        <img className='girlpen-img' src={grilpen}></img>
                    </div>
                </div>
                <div className='know'>
                    <div className='know-heading'>
                        Know how our creators are benefiting from the platform
                    </div>
                    <div className='know-rect'>
                        <div className='know-rect-div'><img className='know-rect-img' src={girlrect}></img></div>
                        <div className='know-text'>
                            <div className='know-rect-text'>
                                Lorem ipsum dolor sit amet consectetur. Ac enim elementum eget sit. Euismod egestas dui pellentesque dictum. Sed erat ac quis arcu nisi bibendum turpis curabitur. Semper id suscipit sagittis luctus amet malesuada arcu cursus semper. Feugiat massa purus viverra pellentesque. Felis varius urna phasellus maecenas pulvinar vitae.
                            </div>
                            <div className='know-name'>
                                <idv className='know-width'></idv>
                                <div>
                                    <div className='know-head'>
                                        Jane Cooper
                                    </div>
                                    <div className='know-name-pos'>
                                        Content Writer
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='know-line'>
                    <div><img className='know-line-img' src={leftline}></img></div>
                    <div><img src={rightline}></img></div>
                </div>
                <div className='ask-head'>
                    Frequently Asked Questions
                </div>

                <div className='faq'>
                    <div className='qna'>
                        {faqs.map(({ question, answer }) => (
                            <Collapsible className="Dropdown" trigger={<div className='label'>
                                <div>{question}</div>
                                <div><img className='arrow' src={dropdown}></img></div>
                            </div>}>
                                <div className='ans'>
                                    {answer}
                                </div>
                            </Collapsible>
                        ))}
                    </div>
                    <div>
                        <img src={faq}></img>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default ForCreators;