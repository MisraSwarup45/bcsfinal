import React from 'react';
import Sponsors from '../Sponsors/Sponsors';
import Team from '../Team/Team';
import MainFooter from '../MainFooter/MainFooter';
import './Home.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Featured from '../Featured_blog/Featured'
import fbbg from '../../images/fbbg.png';
import twitbg from '../../images/twitbg.png';
import glbg from '../../images/glbg.png';
import printbg from '../../images/printbg.png';

const Home = () => {
    return (
        <>
            <Navbar />
            <div className='rotate'>
                <div className='writing'>FOLLOW</div>
                <div className='icons'><img src={fbbg}></img></div>
                <div className='icons'><img src={twitbg}></img></div>
                <div className='icons'><img src={glbg}></img></div>
                <div className='icons'><img src={printbg}></img></div>
            </div>
            <div id="main">
                <div className='home-bg'>
                    <div className='title'>
                        We produce enjoyable digital experiences for users.
                    </div>
                    <div className='homedesc'>
                        We provide creative services that are unique, interesting, and focused on achieving specific goals for your business.
                    </div>
                    <button className='getstarted'>Get Started</button>
                </div>
                <div className='services'>Our Services</div>
            </div>
            <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />

            <Team />
            <MainFooter />
            <Featured />
            <Footer /> 
        </>
    )
}

export default Home