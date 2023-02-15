import React from 'react';
import Sampletwo from '../../Sampletwo';
import webcontentbg from '../../../images/webcontentbg.png';
import webcontent1 from '../../../images/webcontent1.png';
import webcontent2 from '../../../images/webcontent2.png';
import Navbar from '../../../components/Navbar/Navbar';
import Footer from '../../../components/Footer/Footer';


const Website = () => {
    return (
        <div>
            <Navbar />
            <Sampletwo
                name="Website Content"
                namedesc="We produce engaging website content that boosts search engine rankings, dazzles visitors, and gains their confidence."
                text="Effective website content writing services emphasise the use of SEO to attract clients, the provision of engaging and educational writing to keep their interest and encourage conversion, and the creation of a positive company image overall. The wording utilised must be direct, clear, and consistent with the website's tone in order to pique the interest of potential buyers who spend little time reading information on websites before moving on to the next one. Everyone has the skill to write, but the ability to do so in a way that is entertaining and elegantly delivers the idea is entirely another."
                texthead="Result-oriented website content"
                reshead1="Top website content writers"
                restext1="Making your brand stand out is the main goal of our expertly written website content copy."
                reshead2="Connect with your audience"
                restext2="Before developing online content, our writers research the interests and problems of your target audience."
                reshead3="Rank higher on Google"
                restext3="High-quality material and tried-and-true SEO tactics from experienced content writers guarantee consistent traffic to your website."
                bg={webcontentbg}
                img1={webcontent1}
                img2={webcontent2}
            />
            <Footer />
        </div>
    )
}

export default Website;