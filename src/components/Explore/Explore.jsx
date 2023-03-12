import React from 'react';
import './Explore.css';
import Navbar from '../Navbar/Navbar';
import fcphoto from '../../images/fcphoto.png';
import searchbtn from '../../images/search.png';
import exploreimg from '../../images/exploreimg.png';
import grid from '../../images/grid.png';
import list from '../../images/list.png';
import cone from '../../images/cone.png';
import g1 from '../../images/g1.png';
import g2 from '../../images/g2.png';
import g3 from '../../images/g3.png';
import g4 from '../../images/g4.png';
import g5 from '../../images/g5.png';
import g6 from '../../images/g6.png';
import exploremen from '../../images/exploremen.png';
import location from '../../images/location.png';
import phone from '../../images/phone.png';
import star from '../../images/star.png';
import MainFooter from '../MainFooter/MainFooter';
import Featured from '../Featured_blog/Featured';
import Footer from '../Footer/Footer';
import rightarrow from '../../images/rightarrow.png';
import leftarrow from '../../images/leftarrow.png';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import 'swiper/swiper-bundle.css';
import SwiperCore, { FreeMode, Pagination, Navigation } from 'swiper/core';
SwiperCore.use([FreeMode, Pagination, Navigation]);

const Explore = () => {
    const items = [
        {
            id: 1,
            image: g1,
            category: "graphic",
            decs: "Art & Design"
        },
        {
            id: 2,
            image: g2,
            category: "graphic",
            decs: "Comic Design"
        },
        {
            id: 3,
            image: g3,
            category: "graphic",
            decs: "Doodle Design"
        },
        {
            id: 4,
            image: g4,
            category: "graphic",
            decs: "Brochure Design"
        },
        {
            id: 5,
            image: g5,
            category: "graphic",
            decs: "Architectural Design"
        },
        {
            id: 6,
            image: g6,
            category: "graphic",
            decs: "Apparel Design"
        },
    ];

    const creator = [
        {
            id: 1,
            image: exploremen,
            rating: "4.7 (51 reviews)",
            name: "Creator Name",
            desc: "Doodle Design + Logo Animation",
            locations: "Mahalakshmi Nagar, Bangalore",
            price: "1,000 "
        },
        {
            id: 2,
            image: exploremen,
            rating: "4.7 (51 reviews)",
            name: "Creator Name",
            desc: "Doodle Design + Logo Animation",
            locations: "Mahalakshmi Nagar, Bangalore",
            price: "1,000 "
        },
        {
            id: 3,
            image: exploremen,
            rating: "4.7 (51 reviews)",
            name: "Creator Name",
            desc: "Doodle Design + Logo Animation",
            locations: "Mahalakshmi Nagar, Bangalore",
            price: "1,000 "
        },
        {
            id: 3,
            image: exploremen,
            rating: "4.7 (51 reviews)",
            name: "Creator Name",
            desc: "Doodle Design + Logo Animation",
            locations: "Mahalakshmi Nagar, Bangalore",
            price: "1,000 "
        },
        {
            id: 3,
            image: exploremen,
            rating: "4.7 (51 reviews)",
            name: "Creator Name",
            desc: "Doodle Design + Logo Animation",
            locations: "Mahalakshmi Nagar, Bangalore",
            price: "1,000 "
        },
        {
            id: 3,
            image: exploremen,
            rating: "4.7 (51 reviews)",
            name: "Creator Name",
            desc: "Doodle Design + Logo Animation",
            locations: "Mahalakshmi Nagar, Bangalore",
            price: "1,000 "
        },
    ];

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
            <div className='explore-text'>Categories to drive your goals</div>
            <div className='explore-text-btn'>
                <img className='exploreimg' src={exploreimg}></img>
            </div>
            <div className='explore-text'>Our Top Skills</div>
            <div className='item-grid'>
                {items.map((ele) => {
                    const { id, image, category, decs } = ele;
                    return (
                        <div className='item-grid-box'>
                            <div className='grid-item-img'>
                                <img className='img-grid' src={image}></img>
                                <div className='img-grid-desc'>{decs}</div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className='explore-text'>Explore our community</div>
            <div className='Community'>
                <div className='explore-types'>
                    <div><input className='explore-input' type='text' placeholder="Search Creators"></input></div>
                    <div className='explore-btns'>
                        <button className='explore-btn-img btn-back'><img className='explore-grid-img' src={grid}></img> Grid</button>
                        <button className='explore-btn-img'><img className='explore-grid-img' src={list}></img> List</button>
                        <button className='cone-btn'><img src={cone}></img></button>
                    </div>
                </div>
                <div className='explore-cards'>
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={40}
                        freeMode={true}
                        modules={[FreeMode, Navigation]}
                        className="mySwiper"
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        }}
                    >
                        {
                            creator.map((ele) => {
                                const { id, image, rating, name, desc, locations, price } = ele;
                                return (
                                    <SwiperSlide>
                                        <div className='explore-card'>
                                            <div className='image-expo'><img className='exploremen' src={image}></img></div>
                                            <div className='review-img'><div className='reviews'><img className='star' src={star}></img>  {rating}</div></div>
                                            <div className='explore-desc'>
                                                <div className='explore-card-head'>{name}</div>
                                                <div className='explore-card-subhead'>{desc}</div>
                                                <div className='explore-card-location'><img src={location}></img>   {locations}</div>
                                                <div className='explore-card-prices'>
                                                    <div className='price'>₹ {price} /Day</div>
                                                    <div className='number'><img src={phone}></img>  View Contact</div>
                                                </div>
                                                <div className='hire-explore'><button className='explore-hire-btn'>Hire Now</button></div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                )
                            })
                        }
                        <div className="swiper-button-next">
                            {/* <img src={rightarrow} alt="Next" /> */}
                        </div>
                        <div className="swiper-button-prev">
                            {/* <img src={leftarrow} alt="Previous" /> */}
                        </div>
                    </Swiper>
                </div>
            </div>

            <MainFooter />
            <Featured />
            <Footer />
        </div>
    )
}

export default Explore;