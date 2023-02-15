import React from 'react';
import './About.css';
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer';
import img from '../../images/About_arrow.png'


const About = () => {
    return (
        <>
        <Navbar />
        <div className='About'>
            {/* <img className='about-bgimg' src={about} alt='About' /> */}
            <div className='about-text'>
                <div className='about-head'>About</div>
                <div className='about-desc'>We assist you in developing new perspectives on the world, finding possibilities you would not have considered, and achieving outcomes that connect the present with the future.</div>
            </div>
        </div>
        <div className='Text--About'>
                We are a global creative solution company that designs the future with the most ambitious change agents. We work together with our clients to reinvent industries and provide outstanding results that are superior to those of our rivals. We mix our specialised, integrated expertise with a strong ecosystem of digital businesses to generate better, quicker, and longer-lasting outcomes. We are able to assist organisations striving to solve the crucial challenges in education, racial equity, social justice, economic development, and the environment because of our commitment to delivering services.
        </div>

        <div className='Firm'>
            Our Firm
        </div>
        <div className='about--content'>
            <div className='grid--body--content'>
                What we believe
                <div className='about--grid--content'>
                    We think those who push themselves to be great should encourage others to do the same. Furthermore, doing the right thing is never simple, but it is always worthwhile.
                </div>
                <div>
                    <img src={img} alt="arrow" />
                </div>
            </div>
            <div className='grid--body--content'>
                What we do
                <div className='about--grid--content'>
                    Global leaders turn to us to address issues that define their industries. Our distinct method of change management aids in structuring, coordinating, and enabling long-lasting results.
                </div>
                <div>
                    <img src={img} alt="arrow" />
                </div>
            </div>
            <div className='grid--body--content'>
                Media Centre
                <div className='about--grid--content'>
                   For their distinctive insights and subject-matter expertise, our people are frequently sought out by national, regional, and business media. <br /><br />
                </div>
                <div>
                    <img src={img} alt="arrow" />
                </div>
            </div>
        </div>



        <div className='Firm'>
            Our People
        </div>
        <div className='about--content'>
            <div className='grid--body--content'>
                Culture of Collaboration
                <div className='about--grid--content'>
                    Working with us feels different, as we are frequently told. Why? a distinctively collaborative atmosphere populated by ardent individuals who are more concerned with your achievement.
                </div>
                <div>
                    <img src={img} alt="arrow" />
                </div>
            </div>
            <div className='grid--body--content'>
                Diversity & Inclusion
                <div className='about--grid--content'>
                   By embracing diverse viewpoints and beliefs that help us see the world differently, we assist our clients in seeing the world <br /><br />
                </div>
                <div>
                    <img src={img} alt="arrow" />
                </div>
            </div>
            <div className='grid--body--content'>
                Social Impact
                <div className='about--grid--content'>
                   Promising enterprises that require resources and strategic direction to realise their full potential are the focus of our creative work. <br /><br />
                </div>
                <div>
                    <img src={img} alt="arrow" />
                </div>
            </div>
        </div>


        <div className='Firm'>
            Results & Partnership
        </div>
        <div className='about--content'>
            <div className='grid--body--content'>
                Enduring Results
                <div className='about--grid--content'>
                    We collaborate with aspirational leaders that want to shape the future rather than run from it. We do great things as a team. <br /><br />
                </div>
                <div>
                    <img src={img} alt="arrow" />
                </div>
            </div>
            <div className='grid--body--content'>
                BCS Alliance Ecosystem
                <div className='about--grid--content'>
                    For the purpose of enhancing our knowledge and achieving ground-breaking outcomes, we form alliances with top businesses and organisations from across the world.
                </div>
                <div>
                    <img src={img} alt="arrow" />
                </div>
            </div>
            <div className='grid--body--content'>
                Global Affilation
                <div className='about--grid--content'>
                   With companies that share our values, we have enduring relationships and connections, and our leaders are dedicated to achieving long-term success.
                </div>
                <div className='About--image'>
                    <img src={img} alt="arrow" />
                </div>
            </div>
        </div>

        <Footer />
        </>
    )
}

export default About