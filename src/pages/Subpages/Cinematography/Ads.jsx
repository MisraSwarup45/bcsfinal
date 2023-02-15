import React from 'react';
import Sample from '../../Sample';
import samples from '../../Datasets/Ads';
import artbg from '../../../images/adsbg.png';
import Navbar from '../../../components/Navbar/Navbar';
import Footer from '../../../components/Footer/Footer';

const Ads = () => {
    return (
        <div>
            <Navbar />
            <Sample
                name="Ads & Commercials"
                namedesc="Let's make video commercials that both engage your audience and explain your offer."
                bgimg={artbg}
                text="At BCS, we approach commercial productions with empathy. We perceive human viewpoints where a conventional commercial cameraman may see cool angles. This is due to the fact that each and every frame must be both creatively and emotionally risky. Because of this, your commercial video will have a bigger impact if viewers connect with it more strongly. However, to establish this connection, you must look beyond simple framing in order to comprehend the emotions you're attempting to arouse. Only then can you create shots and edit a commercial film that does this through narrative."
                texthead="Ads & Commercials Video Services"
                textsubhead="BCS offers a wide range of Professional Ads & Commercials Video services including -"
                samples={samples}
            />
            <Footer />
        </div>
    )
}

export default Ads;