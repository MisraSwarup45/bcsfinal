import React, { useState } from 'react';
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
import bookmark from '../../images/bookmark.png';
import john from '../../images/john.png';
import b2 from '../../images/b2.png';
import b3 from '../../images/b3.png';
import b6 from '../../images/b6.png';

const Blogs = () => {
    const [isListView, setIsListView] = useState(true);
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
                    <button className={isListView ? 'explore-btn-img btn-back' : 'explore-btn-img'} onClick={() => setIsListView(true)}>
                        <img className='explore-grid-img' src={grid} />
                        Grid
                    </button>
                    <button className={!isListView ? 'explore-btn-img btn-back' : 'explore-btn-img'} onClick={() => setIsListView(false)}>
                        <img className='explore-grid-img' src={list} />
                        List
                    </button>
                    <button className='cone-btn'><img src={cone} /></button>
                </div>
            </div>
            <div className={!isListView ? 'list--view' : 'blogs--grid'}>
                {
                    isListView ?
                        ExploreBlogs.map((ele) => {
                            const { id, image, category, time, title, desc } = ele;
                            return (
                                <div className='blogs--list--items'>
                                    <div className='blog-img-div'><img className='blog-img' src={image} /></div>
                                    <div className='blog--desc--section'>
                                        <div className='card--time'>
                                            <div className='card--time--head'>{category}</div>
                                            <div className='card--times'>{time} min read</div>
                                            <div className='card--save'><img className='card--save--img' src={bookmark} /></div>
                                        </div>
                                        <div className='card--heading'>{title}</div>
                                        <div className='card--head--desc'>{desc}</div>
                                        <button className='card--btns'>Read more &rsaquo;</button>
                                    </div>
                                </div>

                            );
                        })
                        :
                        ExploreBlogs.map((ele) => {
                            const { id, image, category, time, title, desc, flag } = ele;
                            if (flag) {
                                return (
                                    <div className='single-list'>
                                        <div className='name-photo'>
                                            <div className='photo-real-name'><img src={john}></img></div>
                                            <div className='real-photo-name'>John Does</div>
                                        </div>
                                        <div className='about-blog'>
                                            <div><img src={image}></img></div>
                                            <div className='blog-about'>
                                                <div className='card--heading list-head'>{title}</div>
                                                <div className='card--head--desc'>{desc}</div>
                                                <div className='card--btns'>Read more &rsaquo;</div>
                                                <div className='card--time'>
                                                    <div className='card--time--head'>NFT</div>
                                                    <div className='card--times'>{time} min read</div>
                                                    <div className='card--save'><img className='card--save--img' src={bookmark} /></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        })

                }

            </div>

            {
                isListView ? (
                    <div className='blog-pages'>
                        <div className='blog-pages-div'>&lsaquo;</div>
                        <div className='blog-pages-div div-back'>1</div>
                        <div className='blog-pages-div'>2</div>
                        <div className='blog-pages-div'>3</div>
                        <div className='blog-pages-div'>4</div>
                        <div className='blog-pages-div'>5</div>
                        <div className='blog-pages-div'>&rsaquo;</div>
                    </div>
                ) :
                    (
                        <div>
                            <hr className='line-blog'></hr>
                            <div className='list-contents'>
                                <div className='content-types'>Programming</div>
                                <div className='content-types'>Cryptocurrency</div>
                                <div className='content-types'>Designing</div>
                                <div className='content-types'>Policy  Shares</div>
                            </div>
                        </div>
                    )

            }
            <Featured />
            <Footer />
        </div>
    )
}

export default Blogs;