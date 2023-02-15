import React from 'react';
import Samplethree from '../../Samplethree';
import photobg from '../../../images/stylebg.png';
import samples from '../../Datasets/Styling';
import Navbar from '../../../components/Navbar/Navbar';
import Footer from '../../../components/Footer/Footer';

const Styling = () => {
    return (
        <div>
        <Navbar />
            <Samplethree
                name="Styling Studio - Salon"
                namedesc="Lorem ipsum dolor sit amet consectetur. Egestas arcu eu a sit mauris tincidunt non pellentesque."
                bgimg={photobg}
                text="The BCS Styling Studio provides a welcoming environment, and our helpful team will go above and beyond to make sure that your visit is enjoyable. We specialise in men's, women's, and kids' haircuts as well as custom, corrective, highlights, lowlights, permanent, and demi-permanent colour. At our salon, every appointment starts with a thorough consultation to learn more about your hair's type, condition, and desired style. Our skilled stylists are prepared to cut, colour, and style your hair no matter what it requires."
                texthead="Styling Studio Services"
                textsubhead="BCS offers a wide range of Professional Styling services including -"
                samples={samples}
            />
            <Footer />
        </div>
    )
}

export default Styling;