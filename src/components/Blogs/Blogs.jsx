import React from 'react';
import Navbar from '../Navbar/Navbar';
import fcphoto from '../../images/fcphoto.png';
import searchbtn from '../../images/search.png';
import grid from '../../images/grid.png';
import list from '../../images/list.png';
import cone from '../../images/cone.png';
import './Blogs.css';
import b1 from '../../images/b1.png';

const Blogs = () => {
    return (
        <div>
            <Navbar />
            <div className='explore'>
                <div className='for-head explore-head'>
                    <div className='for-texts'>
                        <div className='explore-heading'>
                            Explore from our creatives all around the world
                        </div>
                        <div className='for-text'>
                            Find the best solutions for your project with thousands of trusted reviews</div>
                        <div className='explore-btn'>
                            <div><input className='input-explore' type="text" placeholder='Explore'></input></div>
                            <button className='input-search-btn'><img className='input-search' src={searchbtn}></img></button>
                        </div>
                    </div>
                    <div className='girlpen'>
                        <img className='for-girlpen' src={fcphoto}></img>
                    </div>
                </div>
            </div>
            <div className='explore-types blogs-btns'>
                <div className='explore-btns'>
                    <button className='explore-btn-img btn-back'><img className='explore-grid-img' src={grid}></img> Grid</button>
                    <button className='explore-btn-img'><img className='explore-grid-img' src={list}></img> List</button>
                    <button className='cone-btn'><img src={cone}></img></button>
                </div>
            </div>
            <div className='blogs--grid'>
                <div className='blogs--grid--items'>
                    <div className='blog--cards'>
                        <img src={b1}></img>
                        <div className='blog--desc--section'>
                            <div className='card--time'>
                                <div className='card--time--head'>Blockchain</div>
                                <div className='card--times'>5 min read</div>
                            </div>
                            <div className='card--heading'>A beginner’s guide to blackchain for engineers</div>
                            <div className='card--head--desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</div>
                            <button className='card--btns'>Read more </button>
                        </div>
                    </div>
                </div>
                 <div className='blogs--grid--items'>
                    <div className='blog-cards'>
                        <div><img src={b1}></img></div>
                        <div className='blog-desc-section'>
                            <div className='card-time'>
                                <div className='card-time-head'>Blockchain</div>
                                <div className='card-times'>5 min read</div>
                            </div>
                            <div className='card-heading'>A beginner’s guide to blackchain for engineers</div>
                            <div className='card-head-desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</div>
                            <button className='card-btns'>Read more </button>
                        </div>
                    </div>
                </div>
                <div className='blogs--grid--items'>
                    <div className='blog-cards'>
                        <div><img src={b1}></img></div>
                        <div className='blog-desc-section'>
                            <div className='card-time'>
                                <div className='card-time-head'>Blockchain</div>
                                <div className='card-times'>5 min read</div>
                            </div>
                            <div className='card-heading'>A beginner’s guide to blackchain for engineers</div>
                            <div className='card-head-desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</div>
                            <button className='card-btns'>Read more </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blogs;