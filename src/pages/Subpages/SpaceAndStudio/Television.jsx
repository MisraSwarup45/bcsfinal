import React from 'react';
import Samplethree from '../../Samplethree';
import photobg from '../../../images/tvbg.png';
import samples from '../../Datasets/Tv';
import Navbar from '../../../components/Navbar/Navbar';
import Footer from '../../../components/Footer/Footer';

const Television = () => {
    return (
        <div>
            <Navbar />
            <Samplethree
                name="Television Studio"
                namedesc="With BCS, you can be sure that your project is in the hands of qualified experts."
                bgimg={photobg}
                text="The quickest and most cheap option to rapidly produce amazing shows from live events is using BCS Television Studio! It's ideal for sports broadcasters, concerts, seminars, and even the new generation of online broadcasters who use services like Twitch, Facebook Live, and YouTube Live. Real-time switching between various cameras, gaming systems, and computers is possible, and all transitions, visuals, and effects are of broadcast calibre. So that there is never a hiccup while switching sources, BCS Television Studio uses clean, professional switching. By pressing a button, you may even use it as the front end controller for your AV system to quickly switch between various sources!"
                texthead="Television Services"
                textsubhead="BCS offers a wide range of Professional Television services including -"
                samples={samples}
            />
            <Footer />
        </div>
    )
}

export default Television;