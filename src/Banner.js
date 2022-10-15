import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/fontawesome-free-solid';

class Banner extends React.Component {
    render(){
        return (
            <div className='banner-bg'>
                <h1 className='heading'>I <FontAwesomeIcon icon={faHeart} /> Color</h1>
                <p style={{color:'white', lineHeight:'150%'}}>Color isn't that difficult to get right, if you know where to start.<br></br>Learn by doing and you will be master in no time.</p>
                <button className='banner-btn'>Over to you</button>
            </div>
        )
    }
}

export default Banner;