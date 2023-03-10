import React from 'react';
import './Leadership.css';
import leadership from '../../images/leader.png';
import leaderimg from '../../images/leaderimg.png';
import Nav from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const Leadership = () => {
    const leader = [
        {
            image: leaderimg,
            name: "Person Name",
            title: "Designation/Role"
        },
        {
            image: leaderimg,
            name: "Person Name",
            title: "Designation/Role"
        },
        {
            image: leaderimg,
            name: "Person Name",
            title: "Designation/Role"
        },
        {
            image: leaderimg,
            name: "Person Name",
            title: "Designation/Role"
        },
        {
            image: leaderimg,
            name: "Person Name",
            title: "Designation/Role"
        },
        {
            image: leaderimg,
            name: "Person Name",
            title: "Designation/Role"
        },
        {
            image: leaderimg,
            name: "Person Name",
            title: "Designation/Role"
        },
        {
            image: leaderimg,
            name: "Person Name",
            title: "Designation/Role"
        },
        {
            image: leaderimg,
            name: "Person Name",
            title: "Designation/Role"
        },
        
    ];
    return (
        <div>
            <Nav/>
            <div className='overview'>
                <img className='overview-bg' src={leadership}></img>
                <div className='overview-text'>
                    <div className='overview-head'>Leadership</div>
                    <div className='overview-desc'>Working with us feels different, as we are frequently told. Why? a distinctively collaborative atmosphere populated by ardent individuals who are more concerned with your achievement.</div>
                </div>
            </div>
            <div className='leader-text'>
                Our partners prioritise serving our customers while diligently promoting ambitious concepts that enable them to accomplish the remarkable. You'll find devoted, interdisciplinary individuals who care about you and your success in every office and on every team.
            </div>
            <div className='leader-head'>Our leadership and Peoples</div>
            <div class="grid-leader-container">
                {leader.map(({ image,name, title }) => (
                    <div class="grid-leader-item">
                        <div className='leader-img'><img className='leader-image' src={image}></img></div>
                        <div className='leader-headings'>{name}</div>
                        <div className='leader-title-text'>{title}</div>
                    </div>
                ))}
            </div>
            <Footer/>
        </div>
    )
}

export default Leadership;