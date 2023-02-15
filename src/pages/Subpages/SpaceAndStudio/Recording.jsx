import React from 'react';
import Samplethree from '../../Samplethree';
import photobg from '../../../images/recordbg.png';
import samples from '../../Datasets/Recording';
import Navbar from '../../../components/Navbar/Navbar';
import Footer from '../../../components/Footer/Footer';

const Recording = () => {
    return (
        <div>
        <Navbar />
            <Samplethree
                name="Recording Studio"
                namedesc="We'll handle everything, from planning to advertising. Begin turning listeners into customers."
                bgimg={photobg}
                text="We are a reputable supplier of recording studio services. Our prices are competitive. International quality standards are integrated into our recording studio services. We have ties to the industry dating back a while. Therefore, your budget and timelines will be met by our document recording services. We are the owners and managers of several recording studios in India. Modern recording technology is present in every recording studio. Our employees' workstations in the recording studios are outfitted with the most recent versions of premium software that are authentic. We made significant investments to make sure that our recording facilities have the greatest pop filters, soundproofing materials, etc. in the industry. We made these efforts in order to live up to the expectations set out by our clientele for a reputable recording studio supplier."
                texthead="Recording Services"
                textsubhead="BCS offers a wide range of Professional Recording services including -"
                samples={samples}
            />
            <Footer />
        </div>
    )
}

export default Recording;