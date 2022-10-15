import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Body extends React.Component {
    render(){
        return (
            <div className="body-bg">
                {
                    this.props.cards.map((card) => {
                        return (
                            <div className="card">
                                <FontAwesomeIcon icon={card.icon} size='3x' color={card.title}/>
                                <h6 className="card-title">{card.title}</h6>
                                <p className="card-text">{card.text}</p>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default Body;