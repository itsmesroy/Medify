import React from 'react';
import "./Families.css";
import familyHeartIcon from "../../assets/familyHeart.png";
import familyHospitalIcon from "../../assets/familyHospital.png";
import familyMedicalIcon from "../../assets/familyMedical.png";
import familyDoctorIcon from "../../assets/familyDoctor.png";
import FamilyCard from '../FamilyCard/FamilyCard';

const Families = () => {
    return (
        <div className='Families'>
            <div className='commonContainer FamiliesBody'>
                <div className='familiesTexts'>
                    <div className="CommonSuperText uppercase">
                        CARING FOR THE HEALTH OF YOU AND YOUR FAMILY.
                    </div>
                    <h3 className="CommonHeader">
                        Our Families
                    </h3>
                    <p className="CommonSubText">
                        We will work with you to develop individualised care plans, including management of chronic diseases. 
                        If we cannot assist, we can provide referrals or advice about the type of practitioner you require. 
                        We treat all enquiries sensitively and in the strictest confidence.
                    </p>
                </div>
                
                <div className='familesCardsWrapper'>
                    <div className='familyCardLeft familyCardHalf'>
                        <FamilyCard icon={familyHeartIcon} cardNo={"5000+"} text={"Happy Patients"} />
                        <FamilyCard icon={familyHospitalIcon} cardNo={"200+"} text={"Hospitals"} />
                    </div>
                    <div className='familyCardRight familyCardHalf'>
                        <FamilyCard icon={familyMedicalIcon} cardNo={"1000+"} text={"Laboratories"} />
                        <FamilyCard icon={familyDoctorIcon} cardNo={"700+"} text={"Expert Doctors"} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Families;
