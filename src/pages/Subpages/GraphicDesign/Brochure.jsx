import React from 'react';
import Sample from '../../Sample';
import samples from '../../Datasets/Brochure';
import artbg from '../../../images/bbg.png';
import Navbar from '../../../components/Navbar/Navbar';
import Footer from '../../../components/Footer/Footer';

const Brochure = () => {
    return (
        <div>
            <Navbar />
            <Sample
                name="Brochure Design"
                namedesc="We harness the strength of brand principles and translate them into images that inspire people to love, cherish, and take action."
                bgimg={artbg}
                text="With the help of BCS's brochure design services, companies, corporations, hotels, merchants, healthcare facilities, educational institutions, and more may advertise specific goods and services and enhance the perception of their brands. The importance of brochure design for marketing, advertising, public relations, and information dissemination is recognised by our talented team of artists. The brochure designs from BCS will leave a lasting impact on readers, enthral prospective buyers, and inform them about your company."
                texthead="Brochure Design Services"
                textsubhead="BCS offers a wide range of Professional Brochure Design services including -"
                samples={samples}
            />
            <Footer />
        </div>
    )
}

export default Brochure;