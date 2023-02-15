import React from 'react'
import './Sponsors.css';
import oracle from '../../images/oracle.svg';
import microsoft from '../../images/microsoft.svg';
import google from '../../images/google.svg';
import jp from '../../images/jp.svg';
import amazon from '../../images/ama.png';



const Sponsors = () => {
    return (
        <div id="sponsors">
            <h5 className='company-heading'>One who believed in us</h5>
            <br />
            <div className='company'>
                <img className='companytags' src={oracle} />
                <img className='companytags' src={microsoft} />
                <img className='companytags' src={google} />
                <img className='companytags' src={jp} />
                <img className='companytags' src={amazon} />
            </div>
        </div>
    )
}

export default Sponsors