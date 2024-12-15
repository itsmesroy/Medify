import React from 'react'
import "./NavBar.css"
import { BrowserRouter as Router, Link } from 'react-router-dom';
import {useState} from 'react'
import Button from "../Buttons/Buttons.jsx"

import SearchBar from '../SearchBar/SearchBar.jsx'
const text= "The health and well-being of our patients and their health care team will always be our priority, so we follow the best practices for cleanliness "

const Navbar=props=>{
    const {atHomePage, atFindPage, atBookingsPage, backColor}=props
    const navLinks=["Find Doctors", "Hospitals", "Medicines", "Surgeries","Software for Provider", "Facilities"];
    const displayLinks=()=>{
        return navLinks.map(item =>{
            let goto="#"
            if(item ==="Find Doctors") goto="/find"
            return (<Link to={goto}><span className="navLink"><span className="navLink-inner">{item}</span></span></Link>)
        })
    }
    const [menuPosition, setMenuPosition]=useState("hideMenu")
    const handleMenuClick = () => {
        if(menuPosition === "menuLeft" || menuPosition === "hideMenu") 
            setMenuPosition("menuRight");
                else setMenuPosition("menuLeft");
    }
    const displayMenuList = () => {
        const menuItems = navLinks.map((item, index) => {
            let goto = item === "Find Doctors" ? "/find" : "#";
            const transitionDelay = { transitionDelay: `${index * 100}ms` };     
            return (
                <Link
                    key={index}               
                    onClick={handleMenuClick}
                    to={goto}
                    style={transitionDelay}
                    className={`menuItem ${menuPosition}`}
                >
                    {item}
                </Link>
            );
        });          
        const bookingsLink = (
            <Link
                to="/bookings"
                style={{ transitionDelay: `${navLinks.length * 100}ms` }}
                className={`menuItem ${menuPosition} menuItem-forBookings`}
            >
                <Button text="my bookings" buttonClass="largeButton" />
            </Link>
        );
    
        return [...menuItems, bookingsLink];  
    };
    const NavbarBottom = () => {
        if(atHomePage) return null;

        return (
            <div className='navbarBottom'>
                <span className='navbarBottomPatch'></span>
            </div>
        )
    }
    const NavSearch = () => {
        if(atFindPage) return (
            <div className={"NavSearch"}>
                <SearchBar />
            </div>
        )
    }
        const BookingSearch = () => {
            if(atBookingsPage) return (
                <div className={"BookingSearch"}>
                    <span className='bookingsHeadline'>My Bookings</span>
                    <div className='navSearchWrapper'>
                        <SearchBar atBookingsPage={true}/>
                    </div>
                </div>
            )
        }
        return(<>
            <div className='AppTop'>
            <div direction="left" className='appTopSlide'>{text}  </div>  
        </div>
            <>
    <nav className={backColor}>
        <div className="commonContainer">
                        <div className="mainNav">
                <Link to="/">
                    <div className="logo">
                        <Button  buttonClass="logoButton" />
                        <span className="logoText">Medify</span>
                    </div>
                </Link>
                <div className="navMenuButton">
                    <Button clickFuntion={handleMenuClick} buttonClass="whiteButton inheritBackground"  />
                </div>
            </div>

            <div className='navBody'>
                    <div className='navLinksDiv'>{displayLinks()}</div>
                    <Link to="/bookings">
                        <Button text="my bookings" buttonClass="largeButton "/>
                    </Link>
                </div>
                </div>

                       <div className="menuListWrapper">
                {displayMenuList()}
            </div>
         
  
        <NavSearch />
        <BookingSearch />
    </nav>

      <NavbarBottom />
</></>
        )
};export default Navbar