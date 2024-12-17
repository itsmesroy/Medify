import React from 'react';
//components
import Navbar from '../NavBar/NavBar.jsx';
import Hero from '../Hero/Hero';
import CardHolder from '../CardHolder/CardHolder';
import Specialization from '../Specialization/Specialization';
import PatientCaring from '../PatientCaring/PatientCaring';
import Blogs from '../Blogs/Blogs';
import Families from '../Families/Families';
import FAQ from '../FAQ/FAQ';

const HomePage = () => {
    return (
        <>
    
            <Navbar atHomePage={true} showAppTop={true} />

            <Hero />
            <CardHolder type="offers" classForMargin={"CardHolder-offers"} />
            <Specialization />
            <CardHolder type="persons" />
            <PatientCaring />
            <Blogs />
            <Families />
<FAQ />

            
        </>
    );
};

export default HomePage;
