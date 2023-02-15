import React from 'react';
import Sample from '../../Sample';
import samples from '../../Datasets/Comic';
import artbg from '../../../images/artbg.png';
import Navbar from '../../../components/Navbar/Navbar';
import Footer from '../../../components/Footer/Footer';

const Cosmic = () => {
    return (
        <div>
            <Navbar />
            <Sample
                name="Comic Design"
                namedesc="For all forms of web, television, digital, and advertising media, we provide top-notch professional comics design services."
                bgimg={artbg}
                text="For all forms of web, television, digital, and advertising media, BCS provides top-notch professional comics design services. For the internet, advertising, and publishing sectors, our in-house artists and cartoonists have produced some of the finest cartoons. Unlike many other design firms, we have a cutting-edge traditional and digital studio that enables us to work with all forms of media. Whether they are manga or characters with American roots, every one of our comics is made with the utmost attention and quality control, so you always receive the most distinctive and original comics characters."
                texthead="Comic Design Services"
                textsubhead="BCS offers a wide range of Professional Comic Illustration services including -"
                samples={samples}
            />
            <Footer />
        </div>
    )
}

export default Cosmic;