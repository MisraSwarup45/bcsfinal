import React from 'react';
import Samplethree from '../../Samplethree';
import photobg from '../../../images/masterbg.png';
import samples from '../../Datasets/Mastering';
import Navbar from '../../../components/Navbar/Navbar';
import Footer from '../../../components/Footer/Footer';

const Mastering = () => {
    return (
        <div>
        <Navbar />
            <Samplethree
                name="Mastering Studio"
                namedesc="We concentrate on the harmony of frequencies and the overall effect of a performance."
                bgimg={photobg}
                text="The essential last stage in the recording process is mastering. Your recordings will be ready for publication in any format, whether it is CD duplication or replication, streaming, vinyl lathe cutting, mix tape cassettes, or radio broadcast. Your sound will be as high-quality as it can be thanks to mastering. We treat every project with the same attention and care, regardless of the artists we deal with, who range from punch-you-in-the-face punk to electronica dreamwave to moonshine bluegrass fusion. We do all the necessary measures to make your songs sound clearer and more vibrant, regardless of the type of music you produce (or podcasts, audiobooks, TV episodes, etc.)."
                texthead="Mastering Services"
                textsubhead="BCS offers a wide range of Professional Mastering services including -"
                samples={samples}
            />
            <Footer />
        </div>
    )
}

export default Mastering;