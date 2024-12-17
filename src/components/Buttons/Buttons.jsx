import React from 'react';
//styles
import "./Buttons.css";

const Button = ({text, buttonClass, icon, clickFunction, formSubmit, rotateIcon}) => {
    return (
        <button 
            className={`Button ${buttonClass}`} 
            onClick={clickFunction}
            type={formSubmit ? "submit" : null}
        >
            {icon ? <img src={icon} className={rotateIcon ? 'buttonIcon rotateLoad' : 'buttonIcon'} /> : null}
            {text ? <span>{text}</span> : null}
        </button>
    );
};

export default Button;