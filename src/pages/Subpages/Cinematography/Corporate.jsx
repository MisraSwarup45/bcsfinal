import React from 'react';
import Sample from '../../Sample';
import samples from '../../Datasets/Cor';
import artbg from '../../../images/corbg.png';
import Navbar from '../../../components/Navbar/Navbar';
import Footer from '../../../components/Footer/Footer';

const Corporate = () => {
    return (
        <div>
            <Navbar />
            <Sample
                name="Corporate Film"
                namedesc="We produce corporate videos that successfully communicate your value proposition and aid in the understanding of your company."
                bgimg={artbg}
                text="You may make business films for each level of your sales funnel and for internal communications with the aid of our corporate video creation service agency. More companies are using video to generate engaging content that increases traffic and accelerates company growth. Finding the right video production firm for your project might be difficult since everyone makes fantastic promises. We produce top-notch corporate movies at Creamy Animation for companies all around the world. We have collaborated with owners of small, midsize, and international enterprises."
                texthead="Corporate film Services"
                textsubhead="BCS offers a wide range of Professional Instructional Video services including -"
                samples={samples}
            />
            <Footer />
        </div>
    )
}

export default Corporate;