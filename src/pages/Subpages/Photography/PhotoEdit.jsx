import React from 'react';
import photobg from '../../../images/photoeditbg.png';
import Samplethree from '../../Samplethree';
import samples from '../../Datasets/PhotoEdit';
import Navbar from '../../../components/Navbar/Navbar';
import Footer from '../../../components/Footer/Footer';


const PhotoEdit = () => {
    return (
        <div>
            <Navbar />
            <Samplethree
                name="Photo Editing"
                namedesc="We make it simple to obtain expert product images fast and at a reasonable price."
                bgimg={photobg}
                text="Exceptional themes, ground-breaking concepts, and imaginative strategies need special responses. Through cutting-edge picture editing, image masking, and photo retouching services, we as a photo editing company are committed to assuring this. We favour making objects appear entire, harmonious, and radiant without sacrificing picture detail. We specialise in providing cutting-edge image editing services to our esteemed clients around the world, particularly in nations like the United States (USA), United Kingdom (UK), Australia, Canada, Dubai, Saudi Arabia, UAE, Germany, Italy, India, Singapore, France, Finland, Ireland, etc. We also offer cutting-edge image editing services on photo masking, portrait retouching, image clipping, digital photo restoration, alpha masking, and colour masking."
                texthead="Photo Editing Services"
                textsubhead="BCS offers a wide range of Professional Photo editing services including -"
                samples={samples}
            />
            <Footer />
        </div>
    )
}

export default PhotoEdit;