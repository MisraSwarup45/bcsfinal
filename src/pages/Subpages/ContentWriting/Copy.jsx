import React from 'react';
import Sampletwo from '../../Sampletwo';
import webcontentbg from '../../../images/copybg.png';
import webcontent1 from '../../../images/copy1.png';
import webcontent2 from '../../../images/copy2.png';
import Navbar from '../../../components/Navbar/Navbar';
import Footer from '../../../components/Footer/Footer';

const Copy = () => {
    return (
        <div>
            <Navbar />
            <Sampletwo
                name="Copywriting"
                namedesc="Engage audiences through copywriting that is appealing and effective at spreading your message."
                text="You must convey your brand's narrative in an authentic and consistent manner if you want to enthral your audience, hold their interest, and develop a relationship. Every word you write is an opportunity to share who you are, what you do, and why people should want to work with—or even for—you. This is true whether it's the content for your product packaging, social media advertisements, or ebooks. You can build stronger bonds, inspire people to take action, and foster partnerships that position your brand for long-term success through effective copywriting."
                texthead="Content that Connects with Your Audience"
                reshead1="Achieve the desired results with effective copy"
                restext1="The top copywriters in the industry collaborate on our network, producing materials that are memorable."
                reshead2="Pitch-Perfect Content Copies"
                restext2="Your target audience may be reached and your brand's narrative can be communicated with the aid of SEO-driven and flawless writing."
                reshead3="Authentic copywriting on all projects."
                restext3="Our network of writers is dedicated to producing 100% original material with no plagiarism."
                bg={webcontentbg}
                img1={webcontent1}
                img2={webcontent2}
            />
            <Footer />
        </div>
    )
}

export default Copy;