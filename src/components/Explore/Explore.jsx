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

    const hideIcon = (self) => {
        // self.style.backgroundImage = 'none';
    }
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
                    <div><input className='explore-input' onchange={hideIcon(this)} type='text' placeholder="Search Creators"></input></div>
                    <div className='explore-btns'>
                        <button className='explore-btn-img btn-back'><img className='explore-grid-img' src={grid}></img> Grid</button>
                        <button className='explore-btn-img'><img className='explore-grid-img' src={list}></img> List</button>
                        <button className='cone-btn'><img src={cone}></img></button>
                    </div>
                </div>
                <div className='explore-cards'>
                    <div className='explore-card'>
                        <div className='image-expo'><img className='exploremen' src={exploremen}></img></div>
                        <div className='review-img'><div className='reviews'><img className='star' src={star}></img>  4.7 (51 reviews)</div></div>
                        <div className='explore-desc'>
                            <div className='explore-card-head'>Creator Name</div>
                            <div className='explore-card-subhead'>Doodle Design + Logo Animation</div>
                            <div className='explore-card-location'><img src={location}></img>   Mahalakshmi Nagar, Bangalore</div>
                            <div className='explore-card-prices'>
                                <div className='price'>₹ 1,000 /Day</div>
                                <div className='number'><img src={phone}></img>  View Contact</div>
                            </div>
                            <div className='hire-explore'><button className='explore-hire-btn'>Hire Now</button></div>
                        </div>
                    </div>
                    <div className='explore-card'>
                        <div className='image-expo'><img className='exploremen' src={exploremen}></img></div>
                        <div className='review-img'><div className='reviews'><img className='star' src={star}></img>  4.7 (51 reviews)</div></div>
                        <div className='explore-desc'>
                            <div className='explore-card-head'>Creator Name</div>
                            <div className='explore-card-subhead'>Doodle Design + Logo Animation</div>
                            <div className='explore-card-location'><img src={location}></img>   Mahalakshmi Nagar, Bangalore</div>
                            <div className='explore-card-prices'>
                                <div className='price'>₹ 1,000 /Day</div>
                                <div className='number'><img src={phone}></img>  View Contact</div>
                            </div>
                            <div className='hire-explore'><button className='explore-hire-btn'>Hire Now</button></div>
                        </div>
                    </div>
                    <div className='explore-card'>
                        <div className='image-expo'><img className='exploremen' src={exploremen}></img></div>
                        <div className='review-img'><div className='reviews'><img className='star' src={star}></img>  4.7 (51 reviews)</div></div>
                        <div className='explore-desc'>
                            <div className='explore-card-head'>Creator Name</div>
                            <div className='explore-card-subhead'>Doodle Design + Logo Animation</div>
                            <div className='explore-card-location'><img src={location}></img>   Mahalakshmi Nagar, Bangalore</div>
                            <div className='explore-card-prices'>
                                <div className='price'>₹ 1,000 /Day</div>
                                <div className='number'><img src={phone}></img>  View Contact</div>
                            </div>
                            <div className='hire-explore'><button className='explore-hire-btn'>Hire Now</button></div>
                        </div>
                    </div>
                    <img className='rightarrow' src={rightarrow}></img>
                </div>
            </div>
            <MainFooter />
            <Featured />
            <Footer />
        </div>
    )
}

export default Explore;