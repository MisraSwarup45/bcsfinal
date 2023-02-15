import React from 'react';
import Samplethree from '../../Samplethree';
import photobg from '../../../images/photobg.png';
import samples from '../../Datasets/Photo';
import Navbar from '../../../components/Navbar/Navbar';
import Footer from '../../../components/Footer/Footer';

const Portrait = () => {
    return (
        <div>
            <Navbar />
            <Samplethree
                name="Portrait Photography"
                namedesc="We make it simple to obtain expert product images fast and at a reasonable price."
                bgimg={photobg}
                text="Using backdrops, lighting, and posture, portrait photography aims to capture a person's essence, personality, identity, and attitude. We make Stunning Portraits to suit your demands, whether they are for corporate headshots, artists building their personal portfolios, high-key photos for print or the web, family or matrimonial portraits, etc. We attempt to incorporate creative aspects in our photography that showcase your career, values, and ethics while allowing the audience to immediately establish a connection with you through our images as part of our creative process, which entails getting to know you and your line of work."
                texthead="Portrait Photography Services"
                textsubhead="BCS offers a wide range of Professional Architectural Illustration services including -"
                samples={samples}
            />
            <Footer />
        </div>
    )
}

export default Portrait;