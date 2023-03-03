import React from 'react';
import Navbar from '../../../components/Navbar/Navbar';
import Footer from '../../../components/Footer/Footer';
import Sponsors from '../../../components/Sponsors/Sponsors';
import appbg from '../../../images/appbg.png';
import stepone from '../../../images/stepone.png';
import steptwo from '../../../images/steptwo.png';
import stepthree from '../../../images/stepthree.png';
import knowimg from '../../../images/knowimage.png';
import insiderect from '../../../images/insiderect.png';
import pro1 from '../../../images/oneapp.png';
import pro2 from '../../../images/twoapp.png';
import pro3 from '../../../images/threeapp.png';

const AppPromo = () => {
  const cards = [
    {
      haeding: "Step ONE",
      image: stepone,
      text: "Share your vision",
      desc: "Utilize our hassle-free, guided flow to create a brief. In less than a minute, receive a rough estimate of the cost and time of delivery."
    },
    {
      haeding: "Step TWO",
      image: steptwo,
      text: "The best-fit designer gets assigned to the work",
      desc: "Our algorithms make sure that only the most qualified designers are selected, prepared, and assigned to your project."
    },
    {
      haeding: "Step THREE",
      image: stepthree,
      text: "Review and Receive the Design",
      desc: "You'll receive a link to approve and download the design once we're finished creating them. Additionally, you can ask for adjustments within 5 business days."
    },
  ];
  return (
    <>
      <Navbar />
      <div id='sample'>
        <img className='sample-img' src={appbg}></img>
        <div className='sample-head'>
          <div className='sample-name'>Promotional Videos</div>
          <div className='sample-desc'>We work with businesses to produce engaging promotional video that push viewers to take action and leave an impression.</div>
          <div className='sample-btn'>Get Started</div>
        </div>
        <br></br><br></br><br></br><br></br><br></br>
        <Sponsors />
        <div className='text-desc'>
          These days, viewers actively seek out high-quality promotional content from firms, and video has become a standard component of the buyer's journey. genuine audience value and engagement-driven content Promo films are a terrific method to catch your audience's attention and entice them to learn more, whether you're trying to promote a particular marketing push, product, or event. High-quality promotional videos are now an exceptionally effective approach to generate lead generation for businesses, goods, and services due to the popularity of video.
        </div>

        <div className='sample-service'>
                    <div className='sample-service-heading'>
                        Crisp photos packed with features clients love
                    </div>
                </div>

                <div className='team-details'>
                    <div className='team-details-one'>
                        <img className='team-app-img' src={pro1}></img>
                        <p className='team-app-heading'>Promotional Video that cut through</p>
                        <p className='team-details-desc'>Featured promotional video material that attracts your target audience, motivates action, and has an effect can help you stand out from the competition.</p>
                    </div>
                    <div className='team-details-one'>
                        <img className='team-app-img' src={pro2}></img>
                        <p className='team-app-heading'>Reaches more of your target audience</p>
                        <p className='team-details-desc'>At BCS, content production is only the beginning. With social editing, optimization methods, and sponsored marketing, we increase the reach of your promotional video material throughout the buyer's journey.</p>
                    </div>
                    <div className='team-details-one'>
                        <img className='team-app-img' src={pro3}></img>
                        <p className='team-app-heading'>A complete stress-free process</p>
                        <p className='team-details-desc'>With more than 15 years of expertise producing promotional videos for renowned businesses, our procedure is easy, simple, and clear from the start. Not to worry.</p>
                    </div>
                </div>

        <div className='sample-service'>
          <div className='sample-service-heading'>
            How we do it
          </div>
          <div className='sample-service-desc'>
            We use a strategic approach to evaluate the organization's needs, taking into account long-term goals and internal and external influences.
          </div>
        </div>
        <div className='step'>
          {cards.map(({ haeding, image, text, desc }) => (
            <div className='step-cards'>
              <div className='step-head'>{haeding}</div>
              <div className='step-img-div'><img className='step-img' src={image}></img></div>
              <div className='step-text'>{text}</div>
              <div className='step-desc'>{desc}</div>
            </div>
          ))};
        </div>
        <div><img src={knowimg}></img></div>

        <div className='ourwork'>
          <div className='ourwork-head'>
            <div className='ourwork-text1'>
              Our Work
            </div>
            <div className='ourwork-text2'>
              We create marketing from concepts that work. View examples of how we've handled Fortune 500 companies, new businesses, and everyone in between.
            </div>
          </div>
          <div className='ourwork-rect'>
            <img className='ourwork-inside' src={insiderect}></img>
          </div>
          <div className='our-work'>
            <div className='our-company'>
              Company
            </div>
            <div className='our-company-text'>
              <div className='our-company-head'>
                Lorem ipsum dolor sit amet consectetur.
              </div>
              <div className='our-company-desc'>
                Read case study
              </div>
            </div>
          </div>
        </div>

        <div className='footer-up'>
          <div className='footer-up-content'>
            <div className='lorem'>
              <h1>A Project with us?</h1>
            </div>
            <div className='footer-sub'>
              Our door is open
            </div>
            <div className='footer-btn'>
              Let's Talk
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default AppPromo;