import React from 'react';
import Sampletwo from '../../Sampletwo';
import webcontentbg from '../../../images/bookbg.png';
import webcontent1 from '../../../images/book1.png';
import webcontent2 from '../../../images/book2.png';
import Navbar from '../../../components/Navbar/Navbar';
import Footer from '../../../components/Footer/Footer';

const Book = () => {
    return (
        <div>
            <Navbar />
            <Sampletwo
                name="Book Writing"
                namedesc="Increase conversions with engaging books that are nicely created."
                text="Every tale, in our opinion, merits sharing. Your suggestion was meticulously carried out by our book writer for rent. Without effort and commitment, nothing can be achieved. These qualities enable our team to produce an intriguing product. We will require the necessary data in order to mould words into a tale. We refer to our project brief for creating a text as the first step toward your success. Our book writing services properly include the genuine meaning of our words. We promise our customers that we'll never cut corners on quality."
                texthead="Original, flawless, and exquisitely tailored content for books"
                reshead1="Books With Deep Research Behind Them!"
                restext1="The writers at BCS go above and beyond the call of duty and do substantial research to create flawless publications that are well worth the readers' time."
                reshead2="Planning and Outlining to Meet Your Needs"
                restext2="To make the book fascinating from the very first line, the writers design and prepare the framework."
                reshead3="Turn your concepts into captivating books."
                restext3="Collaborate with BCS's awesome network of professional writers to share a remarkable tale with the world."
                bg={webcontentbg}
                img1={webcontent1}
                img2={webcontent2}
            />
            <Footer />
        </div>
    )
}

export default Book;