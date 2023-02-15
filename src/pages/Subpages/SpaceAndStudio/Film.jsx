import React from 'react';
import Samplethree from '../../Samplethree';
import photobg from '../../../images/filmbg.png';
import samples from '../../Datasets/Film';
import Navbar from '../../../components/Navbar/Navbar';
import Footer from '../../../components/Footer/Footer';

const Film = () => {
    return (
        <div>
            <Navbar />
            <Samplethree
                name="Film Production Studio"
                namedesc="With BCS, you can be sure that your project is in the hands of qualified experts."
                bgimg={photobg}
                text="At BCS, we approach commercial productions with empathy. We perceive human viewpoints where a conventional commercial cameraman may see cool angles. This is due to the fact that each and every frame must be both creatively and emotionally risky. Because of this, your commercial video will have a bigger impact if viewers connect with it more strongly. However, to establish this connection, you must look beyond simple framing in order to comprehend the emotions you're attempting to arouse. Only then can you create shots and edit a commercial film that does this through narrative."
                texthead="Our Services"
                textsubhead="BCS offers a wide range of Professional Film production services including -"
                samples={samples}
            />
            <Footer />
        </div>
    )
}

export default Film;