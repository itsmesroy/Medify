import React from 'react';
//components
import Navbar from '../NavBar/NavBar.jsx';
import Hero from '../Hero/Hero';


const HomePage = () => {
    return (
        <>
    
            <Navbar atHomePage={true} showAppTop={true} />

            <Hero />
            

            
        </>
    );
};

export default HomePage;
