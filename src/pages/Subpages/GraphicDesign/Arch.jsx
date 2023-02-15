import React from 'react';
import Sample from '../../Sample';
import samples from '../../Datasets/Architectural';
import artbg from '../../../images/archbg.png';
import Navbar from '../../../components/Navbar/Navbar';
import Footer from '../../../components/Footer/Footer';

const Arch = () => {
    return (
        <div>
            <Navbar />
            <Sample
                name="Architectural Design"
                namedesc="We live, imagine, and idealise architecture before everything else."
                bgimg={artbg}
                text="In order to display their idea plans, architects, realtors, and contractors may benefit from BCS architectural illustration services. Our architectural visualization services can be useful for a variety of planning purposes, including project plans that need to be approved by financiers or other authorities or creative idea visualization for future planning. In addition to working on brand-new projects, the artists at AWA also create beautiful renderings of an existing building's inside and exterior for presentations, online advertising, or commercials. Our graphics strictly adhere to the design elements to bring in the precision, using realistic high-definition representations."
                texthead="Architectural Design Services"
                textsubhead="BCS offers a wide range of Professional Architectural Illustration services including -"
                samples={samples}
            />
            <Footer />
        </div>
    )
}

export default Arch;