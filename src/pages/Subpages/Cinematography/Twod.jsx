import React from 'react';
import Sample from '../../Sample';
import samples from '../../Datasets/Twod';
import artbg from '../../../images/twodbg.png';
import Navbar from '../../../components/Navbar/Navbar';
import Footer from '../../../components/Footer/Footer';

const Twod = () => {
    return (
        <div>
            <Navbar />
            <Sample
                name="2D/3D Animation"
                namedesc="Animations increase the interactivity and engagement of your brand."
                bgimg={artbg}
                text="BCS is a top supplier of creative design services, including 2D and 3D animation services. With the aid of cutting-edge animation technologies, our very gifted animators produce best-in-class 2D/3D animation results. They are well-positioned to give end-to-end animation support that begins with idea generation and concludes with the construction of the final product, which may take the shape of short films because they have extensive domain knowledge. We assist businesses in effectively reaching their target audience with their communications. Based on the requirements of our clients, our dependable animation studio is committed to producing top-notch computer graphics."
                texthead="2D/3D Animation Services"
                textsubhead="BCS offers a wide range of Professional 2D/3D Animation services including -"
                samples={samples}
            />
            <Footer />
        </div>
    )
}

export default Twod;