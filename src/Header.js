import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket } from '@fortawesome/fontawesome-free-solid';

class Header extends React.Component {

    render(){
        return (
            <div className='header-main'>
                <div className='logo'>
                    <FontAwesomeIcon className='heart' icon={faRocket} size='2x' color='#444'/>
                </div>
                <ul className='header-list'>
                    {
                        this.props.categories.map((category) => {
                            return <li className='category' key={category}>{category}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default Header;