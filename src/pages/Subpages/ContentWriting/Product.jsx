import React from 'react';
import Sampletwo from '../../Sampletwo';
import webcontentbg from '../../../images/productbg.png';
import webcontent1 from '../../../images/pro1.png';
import webcontent2 from '../../../images/pro2.png';
import Navbar from '../../../components/Navbar/Navbar';
import Footer from '../../../components/Footer/Footer';

const Product = () => {
    return (
        <div>
            <Navbar />
            <Sampletwo
                name="Product Description"
                namedesc="Utilize our on-demand service for writing product descriptions that reputable eCommerce businesses rely on."
                text="The fact that Google will penalize your website if you use the identical product descriptions as the manufacturer is now widely recognized. In other words, if you have this duplicate material, Google won't list your website on the first page of the search results. Utilize our team of writers to quickly transform hundreds of product descriptions from manufacturers into high-quality, distinctive descriptions that Google will take note of. Increased search traffic will have an immediate positive impact on your website. Possibly better, this increase in traffic will continue for several months or even several years."
                texthead="Aiming to sell using product descriptions"
                reshead1="Convince and engage"
                restext1="BCS offers inventive product description writing that stands out, engages readers, and generates sales."
                reshead2="Create a unique product."
                restext2="To produce the greatest product description papers, the writers in our network achieve the ideal mix between storytelling, facts, and customized material."
                reshead3="Get SEO-driven content"
                restext3="Your visibility to customers is ensured by the experts. Your ranking and likelihood of increasing your sales increase with your visibility."
                bg={webcontentbg}
                img1={webcontent1}
                img2={webcontent2}
            />
            <Footer />
        </div>
    )
}

export default Product;