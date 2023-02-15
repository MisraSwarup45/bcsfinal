import React from 'react';
import Sample from '../../Sample';
import samples from '../../Datasets/Art';
import artbg from '../../../images/artbg.png';
import Navbar from '../../../components/Navbar/Navbar';
import Footer from '../../../components/Footer/Footer';

const Art = () => {
    return (
        <div>
            <Navbar />
            <Sample
                name="Art & Design"
                namedesc="There is a universe of emotions hidden behind every work of art. Let's begin sharing them."
                bgimg={artbg}
                text="Lorem ipsum dolor sit amet consectetur. Vitae enim ut convallis lectus. Malesuada suspendisse eleifend in proin morbi. Velit eu dolor pharetra scelerisque nulla ultricies elit cras integer. Sed vel arcu cras in fusce sit ipsum metus amet. Augue semper pretium cursus id suspendisse amet lorem in. Maecenas et neque eros ultrices ultricies sagittis ullamcorper proin. At congue ut aenean tellus blandit mattis in aliquam. Lectus fringilla diam laoreet suscipit semper mauris neque sem pretium. Ut ultricies risus mi sed placerat faucibus. Eros nec placerat tellus sit viverra erat orci. Viverra diam viverra ac nunc ornare mi. "
                texthead="Art & Design Services"
                textsubhead="BCS offers a wide range of Professional Art &Doodle design services including -"
                samples={samples}
            />
            <Footer />
        </div>
    )
}

export default Art;