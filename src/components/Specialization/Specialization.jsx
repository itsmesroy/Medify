import React from 'react';
import "./Specialization.css"
import dentistryImage from "../../assets/Drugstore.png";
import primaryCareImage from "../../assets/Stethoscope.png";
import cardiologyImage from "../../assets/HeartRate.png";
import MRIImage from "../../assets/MRI.png";
import bloodTestImage from "../../assets/Blood.png";
import piscologistImage from "../../assets/Immune.png";
import laboratoryImage from "../../assets/Drugstore.png";
import xrayImage from "../../assets/xray.png";
import Card from '../Card/Card';
import Button from '../Buttons/Buttons';
import CommonHeader from '../CommonHeader/CommonHeader';

const Specialization = () => {
    const data = [
        {text: "Dentistry", image: dentistryImage},
        {text: "Primary Care", image: primaryCareImage},
        {text: "Cardiology", image: cardiologyImage},
        {text: "MRI Resonance", image: MRIImage},
        {text: "Blood Test", image: bloodTestImage},
        {text: "Piscologist", image: piscologistImage},
        {text: "Laboratory", image: laboratoryImage},
        {text: "X-Ray", image: xrayImage},
    ];
    const displayCards = () => data.map(item => <Card cardClass="specializationCard" image={item.image} text={item.text} /> );
    return (
        <div className='Specialization'>
            <div className='commonContainer SpecializationBody'>
                <CommonHeader text={"Find by specialisation"} />
                <div className='specializationCardsBody'>
                    {displayCards()}
                </div>
                <Button buttonClass={"largeButton"} text={"View All"}/>
            </div>
        </div>
    );
};

export default Specialization;