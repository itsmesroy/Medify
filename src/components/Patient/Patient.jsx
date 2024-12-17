import React from 'react';
import "./Patient.css";
import patient1 from "../../assets/patient1.png";
import patient2 from "../../assets/patient2.png";
import blueTick from "../../assets/bluetick.png";
import phoneIcon from "../../assets/phone.png";
import Button from '../Button/Button';
import CommonSubText from '../CommonSubText/CommonSubText';
import CommonSuperText from '../CommonSuperText/CommonSuperText';


const superText = "HELPING PATIENTS FROM AROUND THE GLOBE!!";
const subText = "Our goal is to deliver quality of care in a courteous, respectful, and compassionate manner. We hope you will allow us to care for you and strive to be the first and best choice for healthcare.";
const note1 = "Stay Updated About Your Health"
const note2 = "Check Your Results Online"
const note3 = "Manage Your Appointments"
const Patient = () => {
    return (
        <div className='PatientCaring'>
            <div className='commonContainer PatientCaringBody'>
                <div className='patientImgDiv patientCaringImgDiv'>
                    <div className='pateintCareImage pateintCareImage1'><img src={patient1} /></div>
                    <div className='pateintCareImage pateintCareImage2'><img src={patient2} /></div>
                    <Button text="Free Consultation" buttonClass="largeButton whiteButton pateintCareButton heroImgButton" icon={phoneIcon} />
                </div>
                <div className='patientCaringTexts'>
                    <CommonSuperText text={superText} />
                    <h1 className='heroHeadline patientCaringHeadLine'>
                        Patient <span>Caring</span>
                    </h1>
                    <CommonSubText text={subText} customClass={"patientCaringSubtext"} />
                    <div className='noteList'>
                        <div className='noteListItem'><img src={blueTick} /><span>{note1}</span></div>
                        <div className='noteListItem'><img src={blueTick} /><span>{note2}</span></div>
                        <div className='noteListItem'><img src={blueTick} /><span>{note3}</span></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Patient;