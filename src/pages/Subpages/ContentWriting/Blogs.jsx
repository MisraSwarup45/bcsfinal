import React from 'react';
import Sampletwo from '../../Sampletwo';
import webcontentbg from '../../../images/blogbg.png';
import webcontent1 from '../../../images/blog1.png';
import webcontent2 from '../../../images/blog2.png';
import Navbar from '../../../components/Navbar/Navbar';
import Footer from '../../../components/Footer/Footer';



const Blogs = () => {
    return (
        <div>
            <Navbar />
            <Sampletwo
                name="Blogs & Articles"
                namedesc="Get Blog and Article Content That Will Attract Readers and Increase Traffic."
                text="The focal point of your social media marketing approach should be your blog and articles. Your blog's content serves as the gasoline for your social media accounts. Through Twitter, Facebook, LinkedIn, and other social networks, your target audience shares it after catching on to it. More people will see your brand as a consequence, and your website will receive quality traffic. When gaps in your editorial calendar need to be filled, purchase a single blog post, or set up an automated blog schedule to maintain your whole blog from week to week. Getting as much or as little content as you require is simple with us."
                texthead="Reach your traffic goals. Each time."
                reshead1="Handpicked, talented writers"
                restext1="Quit sorting through the never-ending list of freelancers. For your material, we select the most qualified authors."
                reshead2="Using the best SEO practices"
                restext2="Between keyword-rich material and keyword stuffing, there is a distinction. Our writers produce content that ranks because they are aware of this."
                reshead3="We are able to make it function!"
                restext3="We write blogs that are interesting, significant, and thoroughly researched in order to influence your audience."
                bg={webcontentbg}
                img1={webcontent1}
                img2={webcontent2}
            />
            <Footer />
        </div>
    )
}

export default Blogs;