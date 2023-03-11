import React from 'react';
import Navbar from '../Navbar/Navbar';
import fcphoto from '../../images/fcphoto.png';
import searchbtn from '../../images/search.png';
import grid from '../../images/grid.png';
import list from '../../images/list.png';
import cone from '../../images/cone.png';
import './Blogs.css';
import ExploreBlogs from '../../pages/Datasets/ExploreBlogs';
import Footer from '../Footer/Footer';
import Featured from '../Featured_blog/Featured';

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
                {ExploreBlogs.map((ele) => {
                    const { id, image, category, time, title, desc } = ele;
                    return (
                        <div className='blogs--grid--items'>
                            <div className='blog--cards'>
                                <div className='blog-img-div'><img className='blog-img' src={image}></img></div>
                                <div className='blog--desc--section'>
                                    <div className='card--time'>
                                        <div className='card--time--head'>{category}</div>
                                        <div className='card--times'>{time} min read</div>
                                    </div>
                                    <div className='card--heading'>{title}</div>
                                    <div className='card--head--desc'>{desc}</div>
                                    <button className='card--btns'>Read more &rsaquo;</button>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className='blog-pages'>
                <div className='blog-pages-div'>&lsaquo;</div>
                <div className='blog-pages-div div-back'>1</div>
                <div className='blog-pages-div'>2</div>
                <div className='blog-pages-div'>3</div>
                <div className='blog-pages-div'>4</div>
                <div className='blog-pages-div'>5</div>
                <div className='blog-pages-div'>&rsaquo;</div>
            </div>
            <Featured />
            <Footer />
        </div>
    )
}

export default Blogs;