import React from "react"
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar"
import './vision.css'

function Vision() {
    return <div>
    <Navbar />
    <header className="Header">
        <div className="Name vision-heading">
            Vision, Mission & Values
        </div>
        <div className="Stake Stake1">
            Our Mission
        </div>
        <div className="Text space Vision--font">
            Our goal at BCS is to provide businesses innovative visual branding and content writing solutions. Whether it's creating a logo, a site description, or something more difficult like putting together a successful media production. By offering exceptional graphic design and writing services as well as branding components that are distinctive and recognisable to each organization's brand, we assist businesses in becoming leaders in their industry.
        </div>

        <div className="Stake">
            Our Vision
        </div>
        <div className="Text space Vision--font">
            BCS creates remarkable and design-focused brand graphics that are distinctive. We place a high importance on the idea of a powerful presentation, which encompasses branding, content creation, and efficient production methods that will support both your company's image and your industry knowledge. 
        </div>

        <div className="Stake">
            Our Values
        </div>
        <div className="Text space Vision--font">
            Any genuine and fruitful collaboration, in our opinion, must be guided by its shared principles, which must be reaffirmed at every level and in every interaction. Because of this, our ideals are a fundamental component of our platform and guide us in all aspects of business.
        </div>


        <div className="Grid--system">
            <div>
                Integrity
                <p className='Grid--content'>In every aspect of our job, we are dedicated to being sincere, honest, and fair.</p>
            </div>
            <div>
                Innovation
                <p className='Grid--content'>In every aspect of our job, we are dedicated to being sincere, honest, and fair.</p>
            </div>
            <div>
                Community
                <p className='Grid--content'>In every aspect of our job, we are dedicated to being sincere, honest, and fair.</p>
            </div>
            <div>
                Success
                <p className='Grid--content'>In every aspect of our job, we are dedicated to being sincere, honest, and fair.</p>
            </div>
        </div>
    </header>
    <Footer />
    </div>
}

export default Vision;