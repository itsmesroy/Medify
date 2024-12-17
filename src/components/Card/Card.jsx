import React from 'react';
import "./Card.css";

const Card = props => {
    const { image, text, customStyle, cardClass } = props;
    return (
        <div className={`Card ${customStyle} ${cardClass}`}> 
            <img src={image} alt="card" className="cardImage"/>
            <span className='cardText'>{text}</span>
        </div>
    );
};

export default Card;