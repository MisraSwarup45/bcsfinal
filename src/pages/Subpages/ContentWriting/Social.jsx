import React from 'react';
import Sampletwo from '../../Sampletwo';
import webcontentbg from '../../../images/socialbg.png';
import webcontent1 from '../../../images/so1.png';
import webcontent2 from '../../../images/so2.png';
import Navbar from '../../../components/Navbar/Navbar';
import Footer from '../../../components/Footer/Footer';


const Social = () => {
    return (
        <div>
            <Navbar />
            <Sampletwo
                name="Social Media Content"
                namedesc="By creating engaging social media content, you may expand the audience for your company."
                text="Shareable, channel-first social content is an efficient approach to send targeted messages, interact with people, and broaden the reach of your business across Facebook, Twitter, Instagram, and LinkedIn. However, producing high-quality social material at scale may be difficult, especially if you lack the necessary production infrastructure. You must produce on-brand content that is specifically designed for each channel and enhanced to have the most impact if you want to express your story consistently. You can accomplish this regularly if you have the correct social content strategy."
                texthead="Make yourself more visible and expand your audience"
                reshead1="On-brand content"
                restext1="Increase your following on social media while maintaining the integrity of your brand voice."
                reshead2="Top social media creators"
                restext2="Let our carefully chosen creative network help you connect with your audience by sharing your goals with us."
                reshead3="Connect with your audience"
                restext3="To help you rule the social media landscape, rely on our creators to create the ideal short-form content pieces and rapid snippets."
                bg={webcontentbg}
                img1={webcontent1}
                img2={webcontent2}
            />
            <Footer />
        </div>
    )
}

export default Social;