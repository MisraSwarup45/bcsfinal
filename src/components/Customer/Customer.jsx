import React from 'react';
import './Customer.css';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import Slider from '../Slider/Slider';

const Customer = () => {
    return (
        <div>
            <Navbar />
            <div className='customer-heading'>Lets Get Started</div>
            <div className='customer-forms'>
                <div className='form-data'>
                    <form>
                        <div>
                            <input className='form-input input1' type="text" placeholder='Name' ></input>
                            <input className='form-input input1' type="email" placeholder='Email' ></input>
                        </div>
                        <input className='form-input input3' type="email" placeholder='Project Description' ></input>
                        <input className='form-input input3' type="email" placeholder='Company Name' ></input>
                        <input className='form-input input3' type="email" placeholder='Phone Number' ></input>
                        <button type='submit' className='form-btn'>Submit</button>
                    </form>
                </div>
                <div className='slider-div'>
                    <Slider />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Customer;