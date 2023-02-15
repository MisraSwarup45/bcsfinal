import React from 'react';
import Sample from '../../Sample';
import samples from '../../Datasets/Apparel';
import artbg from '../../../images/appbg.png';
import Navbar from '../../../components/Navbar/Navbar';
import Footer from '../../../components/Footer/Footer';

const Apparel = () => {
    return (
        <div>
            <Navbar />
            <Sample
                name="Apparel Design"
                namedesc="From a team of skilled fashion designers, create designs for trendy, cosy, fashionable, and in-demand clothing."
                bgimg={artbg}
                text="Are you seeking for creative design professionals that can produce apparel designs? Not sure if your skill pool is strong enough to manage apparel design services on your own? No issue; simply contract BCS to design your clothing. It's the lone site where you may locate individuals that produce cheery clothes designs in response to your instructions and suggestions. BCS is a firm that offers garment design services and has 18 years of industry expertise. Our talented staff collaborates with customers to fully comprehend their requirements. We see the creation of garment design solutions as an artistic endeavour and try our best to serve customers from various industries."
                texthead="Apparel Design Services"
                textsubhead="BCS offers a wide range of Professional Apparel Design services including -"
                samples={samples}
            />
            <Footer />
        </div>
    )
}

export default Apparel;