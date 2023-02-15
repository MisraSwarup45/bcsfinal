import React from 'react';
import Samplethree from '../../Samplethree';
import photobg from '../../../images/eventbg.png';
import samples from '../../Datasets/Event';
import Navbar from '../../../components/Navbar/Navbar';
import Footer from '../../../components/Footer/Footer';

const Events = () => {
    return (
        <div>
            <Navbar />
            <Samplethree
                name="Event Photography"
                namedesc="Let us document each and every second of your event."
                bgimg={photobg}
                text="In order to acquire the finest event images, an event photographer may either be a fly on the wall and capture the vibe of your event or they can provide interesting direction. Despite being a tried-and-true hit at events, a photo booth doesn't always succeed in capturing the spontaneity of the event as professional event photographer does. They wander around, observing all the wonderful and frequently hilarious exchanges between the visitors. A professional event photographer is skilled in more than simply shooting pictures. They have a very skilled eye for capturing photographs that stir our emotions and transport us back to the specific time we are remembering."
                texthead="Event Photography Services"
                textsubhead="BCS offers a wide range of Professional Architectural Illustration services including -"
                samples={samples}
            />
            <Footer />
        </div>
    )
}

export default Events;