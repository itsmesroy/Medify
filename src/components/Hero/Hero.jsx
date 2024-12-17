import React from 'react';
import heroImage from "../../assets/doctors.png";
import Button from '../Buttons/Buttons';
import SearchComp from '../SearchComp/SearchComp';
import CommonSubText from '../CommonSubText/CommonSubText';
import { Link } from 'react-router-dom';
import "./Hero.css";


const tagLine = "Skip the travel! Find Online";
const subText = "Connect instantly with a 24x7 specialist or choose to video visit a particular doctor.";

const Hero = () => {
    return (
        <div className='Hero'>
            <div className='commonContainer heroBody'>                
                <div className='heroTexts'>
                    <h4 className='heroTagline'>{tagLine}</h4>
                    <h1 className='heroHeadline'>
                        Medical <span>Centers</span>
                    </h1>
                    <CommonSubText text={subText} />
                    <SearchComp customClass="heroSearchComp" />
                    <Link to="/find">
                        <Button 
                            text="Find Centers" 
                            buttonClass="largeButton heroButton" 
                            aria-label="Find medical centers"
                        />
                    </Link>
                </div>

                <div className='heroImgDiv'>                   
                    <img 
                        src={heroImage} 
                        alt='Doctors' 
                        className='heroImage'
                    />
                </div>
            </div>
        </div>
    );
};

export default Hero;
