import React from 'react';
import Sample from '../../Sample';
import samples from '../../Datasets/Inst';
import artbg from '../../../images/instbg.png';
import Navbar from '../../../components/Navbar/Navbar';
import Footer from '../../../components/Footer/Footer';

const Instructional = () => {
    return (
        <div>
            <Navbar />
            <Sample
                name="Instructional Videos"
                namedesc="We use the power of digital cinema to set your instructional films apart."
                bgimg={artbg}
                text="Anyone who wants to market their business in the current day should consider making instructional videos since they enable you to convey information to your audience in a way that is clear and approachable. People who watch instructional films can learn new things. You may create an instructional video that demonstrates a task to your audience if you want to market a service, whether you're a corporation or an individual. Another reason why instructional films are ideal for businesses is that you can use them to assist clients who are having issues with your goods or services. Even without any action or adventure, the appropriate video may be both educational and enjoyable."
                texthead="Instructional Video Services"
                textsubhead="BCS offers a wide range of Professional Instructional Video services including -"
                samples={samples}
            />
            <Footer />
        </div>
    )
}

export default Instructional;