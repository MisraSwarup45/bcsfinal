import React from 'react';
import Samplethree from '../../Samplethree';
import photobg from '../../../images/radiobg.png';
import samples from '../../Datasets/Radio';
import Navbar from '../../../components/Navbar/Navbar';
import Footer from '../../../components/Footer/Footer';

const Radio = () => {
    return (
        <div>
            <Navbar />
            <Samplethree
                name="Radio Studio"
                namedesc="We provide a selection of full studio kits that are intended to help you establish your radio station."
                bgimg={photobg}
                text="The whole spectrum of services required to take your radio station from the original idea stage all the way through to going live are all provided by BCS. We construct a variety of studios, from modest training facilities to on-air facilities for local and international broadcasters. Studio-to-transmitter links, inter-studio connectivity over leased lines and the internet, programme contribution over ISDN, POTS, GSM, and the internet, analogue and digital studio desks and outboard equipment, and hard disc playout systems made by the major suppliers are all areas in which we have expertise when it comes to facility planning."
                texthead="Radio Studio Services"
                textsubhead="BCS offers a wide range of Professional Radio Studio services including -"
                samples={samples}
            />
            <Footer />
        </div>
    )
}

export default Radio;