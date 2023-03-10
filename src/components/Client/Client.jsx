import React from 'react';
import './Client.css';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import MainFooter from '../MainFooter/MainFooter';
import Featured from '../Featured_blog/Featured';
import customers from '../../images/customer.png';
import oracle from '../../images/oracle.svg';
import microsoft from '../../images/microsoft.svg';
import google from '../../images/google.svg';
import jp from '../../images/jp.svg';
import amazon from '../../images/ama.png';
import fb from '../../images/facebook.svg';
import adobe from '../../images/adobe.svg';
import linkedin from '../../images/linkedin.svg';
import Slider from '../Slider/Slider';
import triangle2 from '../../images/triangle2.png';
import fcphoto from '../../images/fcphoto.png';
import rect1 from '../../images/rect1.png';
import rect2 from '../../images/rect2.png';
import ellipse from '../../images/ellipse.png';
import export1 from '../../images/export.png';
import vectorgrp from '../../images/vectorgrp.png';
import pc from '../../images/pc.png';
import rum from '../../images/rum1.png';
import mengrp from '../../images/mengrp.png';

const Client = () => {
  return (
    <div>
      <Navbar />
      <div id="customers" className='customers-style'>
        <div className='customers-cointainer container'>
          <div className='customers-heading'>
            We love clients with who we work
          </div>
          <div className='customers-subheading'>
            BigBros Creative Studio is used by the world's most cutting-edge businesses.
          </div>
          <div className='customers-input'>
            <div><input className='main-input' type={'email'} placeholder='Enter your email'></input></div>
            <button className='main-input-btn'>Get Started</button>
          </div>
        </div>
        <div className='customers-image-div'>
          <img className='customers-image' src={customers}></img>
        </div>
      </div>
      <div className='customer-spon'>
        <div className='spon-grp'>
          <img className='companytags' src={oracle} />
          <img className='companytags' src={microsoft} />
          <img className='companytags' src={google} />
          <img className='companytags' src={jp} />
        </div>
        <div className='spon-grp'>
          <img className='companytags' src={amazon} />
          <img className='companytags' src={fb} />
          <img className='companytags' src={adobe} />
          <img className='companytags' src={linkedin} />
        </div>
      </div>
      <div className='story'>
        <div className='story-head'>
          Customer stories that motivate our work
        </div>
        <div className='story-desc'>
          See why more than 1,000 organizations use BCS to increase conversion, LTV, and retention by reading our customer success stories.
        </div>
      </div>
      <div className='client-tesi'>Our valuable client testimonials</div>
      <div className='testimonials'>
        <div className='testimonials-cointainer'>
          <div className='testipara'>We are Very Glad to Know Our Client Reviews</div>
        </div>
        <div className='sliderstyle'>
          <Slider />
        </div>
      </div>
      <div>
        <div className='for-head clients-head'>
          <div className='for-texts'>
            <div className='for-heading clients-head'>
              Build your profile with us!
            </div>
            <div className='for-text clients-text'>
              The possibilities are endless. We have expert freelancers who work in every field imaginable. Get started with us. Build up your profile with us just like thousands of other’s trusted in us for the best results. Lets get started!
            </div>
            <div className='for-btn clients-btn'>
              Lets Go
            </div>
          </div>
          <div className='girlpen'>
            <img className='for-girlpen' src={fcphoto}></img>
          </div>
        </div>
        <div>
          <img className='creators-bg-right' src={triangle2}></img>
        </div>
      </div>
      <div className='client-card'>
        <h1 className='heading'>How we do it</h1>
        <div className="rectangles">
          <img className='rectangle1' src={rect1}></img>
          <br />
          <img className='rectangle2' src={rect2}></img>
        </div>
        <div className='work'>
          <div className='mywork'>
            <img className='ellipse' src={ellipse}></img>
            <img className='externals' src={export1}></img>
            <p className='sub_head'>Share brief with our hassle free guided flow</p>
          </div>
          <div className='row'></div>
          <div className='mywork'>
            <img className='ellipse' src={ellipse}></img>
            <img className='externals' src={vectorgrp}></img>
            <p className='sub_head'>BCS assembles your team of creators automatically</p>
          </div>
          <div className='row'></div>
          <div className='mywork'>
            <img className='ellipse' src={ellipse}></img>
            <img className='externals' src={pc}></img>
            <p className='sub_head'>Track progress seamlessly on a single dashboard</p>
          </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <img className='downimg' src={rect1}></img>
        <br></br>
        <br></br>
        <br></br>
        <img className='downimg' src={rect2}></img>
        <br></br>
        <br></br>
        <br></br>
      </div>
      <div className='point'>
        <div className='pointimgs'>
          <img src={rum}></img>
          <img className='mengrp' src={mengrp}></img>
        </div>
        <div className='cirpoints'>
          <div className='cir-point'>
            <div className='circle red'>
              40%
            </div>
            <div className='cirtext'>Increase in output</div>
          </div>
          <div className='cir-point'>
            <div className='circle red'>
              20%
            </div>
            <div className='cirtext'>Faster Turnaround Time</div>
          </div>
        </div>
        <div id='horizontal'></div>

        <div className='teamtext'>
          <div className="box">
            <p className='subhead'>800+</p>
            <p className='subtext'>Happy Clients</p>
          </div>
          <div className="box">
            <p className='subhead'>400+</p>
            <p className='subtext'>Projects Done</p>
          </div>
          <div className="box">
            <p className='subhead'>100+</p>
            <p className='subtext'>Skilled Expert</p>
          </div>
          <div className="box">
            <p className='subhead'>7+</p>
            <p className='subtext'>Years of Experience</p>
          </div>
        </div>
      </div>
      <MainFooter />
      <Featured />
      <Footer />
    </div>
  )
}

export default Client;