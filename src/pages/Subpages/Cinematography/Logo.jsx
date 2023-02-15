import React from 'react';
import Sample from '../../Sample';
import samples from '../../Datasets/Logo';
import artbg from '../../../images/logobg.png';
import Navbar from '../../../components/Navbar/Navbar';
import Footer from '../../../components/Footer/Footer';

const Logo = () => {
    return (
        <div>
            <Navbar />
            <Sample
                name="Logo Animation"
                namedesc="BCS professionals offer top-notch logo animation services, giving you the ability to present your business in an original and compelling way."
                bgimg={artbg}
                text="We think a brand's logo has to be the greatest possible since it reflects your company. Our logo animation designers make sure to give the target audience with the most spectacular representation of your business and help them remember you amid rivals. Your logo animation is complete once we add a dash of professionalism, tenacity, and trust. We are renowned as the world's leading supplier of Logo Animation services. We provide you with the ideal fusion of graphics and pictures to raise brand awareness and revenue."
                texthead="Logo Animation Service"
                textsubhead="BCS offers a wide range of Professional Instructional Video services including -"
                samples={samples}
            />
            <Footer />
        </div>
    )
}

export default Logo;