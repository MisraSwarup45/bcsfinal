import React from 'react';
import './MainFooter.css';
import girlpc from '../../images/girlpc.png';

const MainFooter = () => {
    return (
        <div className='main-hire'>
            <div>
                <div className='hire'>Hire Us</div>
                <div className='hire-title'>A Project with us?</div>
                <img className='hire-photo' src={girlpc}></img>
            </div>
            <div>
                <div className='service-heading'>
                    Service
                </div>
                <div className='btn-row'>
                    <div className='btnrow-one'>
                        <div className='service-btn btn1'>
                            Doodle Design
                        </div>
                        <div className='service-btn btn2'>
                            Comic Design
                        </div>
                        <div className='service-btn btn3'>
                            Blogs & Articles
                        </div>
                    </div>
                    <div className='btnrow-one'>
                        <div className='service-btn btn4'>
                            Ads & Commercials
                        </div>
                        <div className='service-btn btn5'>
                            Recording Studio
                        </div>
                        <div className='service-btn btn6'>
                            Other
                        </div>
                    </div>
                    <div>
                        <form>
                            <div>
                                <input className='form-input input1' type="text" placeholder='Name' ></input>
                                <input className='form-input input1' type="email" placeholder='Email' ></input>
                            </div>
                            <input className='form-input input3' type="email" placeholder='Project Description' ></input>
                            <button type='submit' className='form-btn'>Submit</button>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default MainFooter;