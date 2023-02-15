import React, { useState } from 'react';
import './Team.css';
import Slider from '../Slider/Slider';
import dot from '../../images/dot.png';
import rect1 from '../../images/rect1.png';
import rect2 from '../../images/rect2.png';
import ellipse from '../../images/ellipse.png';
import export1 from '../../images/export.png';
import vectorgrp from '../../images/vectorgrp.png';
import pc from '../../images/pc.png';
import rum from '../../images/rum1.png';
import mengrp from '../../images/mengrp.png';
import rect from '../../images/rect6.png';
import menwin from '../../images/menwin.png';
import girl from '../../images/girl.png';
import recto from '../../images/recto.png';
import teamrect from '../../images/teamrect.png';
import teamimgs from '../../images/teamimgs.png';
import Sponsors from '../Sponsors/Sponsors';
import g1 from '../../images/g1.png';

import Home from '../../pages/Datasets/Home';

const Team = () => {

    const updatedItem = Home.filter((currEle) => {
        return currEle.category === 'graphic';
    });

    const [items, setItems] = useState(updatedItem);

    const [item, setItem] = useState('graphic');


    const filterItem = (catItem) => {
        const updatedItems = Home.filter((currEle) => {
            return currEle.category === catItem;
        });
        setItem(catItem);
        setItems(updatedItems);
    }

    return (
        <>
            <div className='categories'>
                <button onClick={() => filterItem('graphic')} className = {item === 'graphic'? "activa cat-items" : " cat-items" } >Graphic Design</button>
                <button onClick={() => filterItem('cinema')} className = {item === 'cinema'? "activa cat-items" : " cat-items"}>Cinematography</button>
                <button onClick={() => filterItem('photo')} className = {item === 'photo'? "activa cat-items" : " cat-items"}>Photography</button>
                <button onClick={() => filterItem('content')} className = {item === 'content'? "activa cat-items" : " cat-items"}>Content Writing</button>
                <button onClick={() => filterItem('space')} className = {item === 'space'? "activa cat-items" : " cat-items"}>Space & Studio</button>
            </div>
            <div className='item-grid'>
                {items.map((ele) => {
                    const { id, image, category, decs } = ele;

                    return (
                        <div className='item-grid-box'>
                            <div className='grid-item-img'><img className='img-grid' src={image}></img></div>
                            <div className='img-grid-desc'>{decs}</div>
                        </div>
                    )
                })}


            </div>
            <Sponsors />
            <div id='team'>
                <div className='team-back1'>
                    <div className='text'>
                        Create your ideal creative team with the platform built for winners.
                    </div>
                    <div className='text-bg'>
                        <div>
                            <div className='dot1' ><img className='dotimg' src={dot}></img>   Connect and collaborate with your internal and external teams.</div>
                            <div className='dot2' ><img className='dotimg' src={dot}></img>   Whether you need design work done, content writing, animation or full production service, we have the right people for the job.</div>
                        </div>
                        <div className='btnget'>
                            Get Demo
                        </div>
                        <div className='teamimgs'>
                            <img className='team-img' src={teamimgs}></img>
                        </div>
                    </div>
                </div>
                <div className='team-back2'>
                    <img className='img-team' src={teamrect}></img>
                </div>
            </div>

            <div id='realteam'>
                <h3 className='teamheading'>Why you should choose our service</h3>
                <p className='para'>With decades of collective experience in design, content writing, animation and production studio service, we're here to serve you.</p>
                <span className='line'>We are trusted by more than <span className='red' > 800 </span> clients</span>
                <p className='desc'>Share your needs with us, and we'll take care of the rest. <br />We’re always available.<br />Best in class quality at affordable prices</p>
            </div>
            <div>
                <h1 className='heading'>How we do it</h1>
                <img src={rect1}></img>
                <br></br>
                <br></br>
                <br></br>
                <img src={rect2}></img>
                <br></br><br></br><br></br>
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
            <div className='img-cre'>
                <img className='bgrect' src={rect}></img>
                <div className='img-cre-div'>
                    <img className='manwin' src={menwin}></img>
                </div>
                {/* <div className='img-desc-div'>
                    <div className='bgpara'>Join as Creator</div>
                    <div className='bgtext'>Apply to join the top 3% exclusive creative community.</div>
                    <div className='lets'><div className='letsgo'>Lets Go</div></div>
                </div> */}
            </div>

            <div className='testimonials'>
                <div className='testimonials-cointainer'>
                    <div className='testi'>Testimonials</div>
                    <div className='testipara'>We are Very Glad to Know Our Client Reviews</div>
                </div>
                <div className='sliderstyle'>
                    <Slider />
                </div>
            </div>

            <div className='photo-girl'>
                <div><img className='girl-image' src={girl}></img></div>
                <div className='girl-para'>Know how our creators are benefiting from the platform</div>
            </div>

            <div>
                <div className='other-company-heading'>Our Other Companies</div>
                <div className='other-company'>
                    <div className='company-name activeStyle={{ color: "blue" }}'>BB Digital Media</div>
                    <div className='company-name'>BB Creative Corner</div>
                    <div className='company-name'>BB Corporate Connect</div>
                    <div className='company-name'>BB Wedding</div>
                    <div className='company-name'>BB Celebration</div>
                    <div className='company-name'>BB Salon</div>
                </div>
            </div>


            <div className='cont-rect'>
                <div className='recto-text'>
                    Lorem ipsum dolor sit amet consectetur.
                </div>
                <div className='recto-para'>
                    Lorem ipsum dolor sit amet consectetur. Egestas arcu eu a sit mauris tincidunt non pellentesque.
                </div>
                <div className='btngetn btn-rect'>
                    Try Now
                </div>
            </div>
        </>
    )
}

export default Team;