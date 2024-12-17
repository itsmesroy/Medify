import React, { useState } from 'react';
import "./NavBar.css";
import Icon from "../../assets/icon.png";
// import menuIcon from "../../assets/menuIcon.svg";
import Button from '../Buttons/Buttons';
import SearchBar from '../SearchBar/SearchBar';
import { Link } from 'react-router-dom';

text = "The health and well-being of our patients and their health care team will always be our priority, so we follow the best practices for cleanliness.";

const Navbar = (props) => {
    const { atHomePage, atFindPage, atBookingsPage, backColor, showAppTop = true } = props;
    const [menuPoisition, setMenuPosition] = useState("hideMenu");
    const navLinks = ["Find Doctors", "Hospitals", "Medicines", "Surgeries", "Software for Provider", "Facilities"];
  
    const displayLinks = () => {
        return navLinks.map((item) => {
            let goto = "#";
            if (item === "Find Doctors") goto = "/find";
            return (
                <Link to={goto}>
                    <span className="navLink">
                        <span className="navLink-inner">{item}</span>
                    </span>
                </Link>
            );
        });
    };
    const handleMenuClick = () => {
        if (menuPoisition === "menuLeft" || menuPoisition === "hideMenu") setMenuPosition("menuRight");
        else setMenuPosition("menuLeft");
    };
    const displayMenuList = () => {
        let arr = [],
            delay = 0,
            transitionDelay;
        navLinks.forEach((item) => {
            transitionDelay = { transitionDelay: `${delay++}00ms` };
            let goto = "#";
            if (item === "Find Doctors") goto = "/find";
            return arr.push(
                <Link
                    onClick={handleMenuClick}
                    to={goto}
                    style={transitionDelay}
                    className={`menuItem ${menuPoisition}`}
                >
                    {item}
                </Link>
            );
        });

        arr.push(
            <Link
                to="/bookings"
                style={transitionDelay}
                className={`menuItem ${menuPoisition} menuItem-forBookings`}
            >
                <Button text="my bookings" buttonClass="largeButton " />
            </Link>
        );

        return arr;
    };

    const NavbarBottom = () => {
        if (atHomePage) return null;

        return <div className="navbarBottom">
            <span className="navbarBottomPatch"></span>
        </div>;
    };


    const NavSearch = () => {
        if (atFindPage)
            return (
                <div className={"NavSearch"}>
                    <SearchBar />
                </div>
            );
    };

    const BookingSearch = () => {
        if (atBookingsPage)
            return (
                <div className={"BookingSearch"}>
                    <span className="bookingsHeadline">My Bookings</span>
                    <div className="navSearchWrapper">
                        <SearchBar atBookingsPage={true} />
                    </div>
                </div>
            );
    };

    return (
        <>
          
            {showAppTop && (
                <div className="AppTop">
                    <marquee direction="left" >
                        {text}
                    </marquee>
                </div>
            )}

       
            <nav className={`${backColor}`}>
                <div className="commonContainer">
                    <div className="mainNav">
                        <Link to="/">
                            <div className="logo">
                                <Button icon={Icon} buttonClass="logoButton" />
                                <span className="logoText">Medify</span>
                            </div>
                        </Link>
                        <div className="navMenuButton">
                            <Button
                                clickFuntion={handleMenuClick}
                                buttonClass="whiteButton inheritBackground"
                              
                            />
                        </div>
                        <div className="navBody">
                            <div className="navLinksDiv">{displayLinks()}</div>
                            <Link to="/bookings">
                                <Button text="my bookings" buttonClass="largeButton " />
                            </Link>
                        </div>
                    </div>

                    <div className="menuListWrapper">{displayMenuList()}</div>
                </div>
                <NavSearch />
                <BookingSearch />
            </nav>

            <NavbarBottom />
        </>
    );
};

export default Navbar;
