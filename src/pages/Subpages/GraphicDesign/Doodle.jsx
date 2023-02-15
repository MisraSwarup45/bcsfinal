import React from 'react';
import Sample from '../../Sample';
import samples from '../../Datasets/Doodle';
import artbg from '../../../images/doodle.png';
import Navbar from '../../../components/Navbar/Navbar';
import Footer from '../../../components/Footer/Footer';

const Doodle = () => {
    return (
        <div>
        <Navbar />
            <Sample
                name="Doodle Design"
                namedesc="Lorem ipsum dolor sit amet consectetur. Egestas arcu eu a sit mauris tincidunt non pellentesque."
                bgimg={artbg}
                text="Doodling has developed as an art form from the traditional pen-and-paper mode to the contemporary digital form. In recent years, doodles have evolved into effective communication tools. Using creative modes of communication has benefitted businesses. Doodles have become popular among marketers and advertisers for use in developing company plans and strategies. Brands and marketers may communicate tales in a distinctive way through doodling."
                texthead="Doodle Design Services"
                textsubhead="BCS offers a wide range of Professional Doodle design services including -"
                samples={samples}
            />
            <Footer />
        </div>
    )
}

export default Doodle;