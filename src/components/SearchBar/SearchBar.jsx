import React, { useContext, useEffect, useRef, useState } from "react";
import "./SearchBar.css";
import searchIcon from "../../assets/searchIcon.png";
import locationMarker from "../../assets/locationMarker.png";
import loadingIcon from "../../assets/loadingIcon.svg";
import Button from "../Buttons/Buttons";
import { findLocations, findBookings } from "../../Functions/Functions";
import { BookingsContext, FoundHospitalsContext } from "../../Contexts/Contexts";

const api = "https://meddata-backend.onrender.com";

const SearchBar = ({ atBookingsPage, customClass }) => {
    const [bookings] = useContext(BookingsContext);
    const [foundHospitals, setFoundHospitals] = useContext(FoundHospitalsContext);

    const [stateName, setStateName] = useState("");
    const [cityName, setCityName] = useState("");
    const [hospitalName, setHospitalName] = useState("");

    const [filteredStates, setFilteredStates] = useState([]);
    const [allCities, setAllCities] = useState([]);
    const [filteredCities, setFilteredCities] = useState([]);
    const [filteredHospitals, setFilteredHospitals] = useState([]);
    const [fetching, setFetching] = useState(false);

    const allStates = ["Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","DC","Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Maryland","Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Carolina","North Dakota","Ohio","Oklahoma","Oregon","Pennsylvania","PR","Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont","Virginia","Washington","West Virginia","Wisconsin","VI","Wyoming","AS","GU","MP"]; 

    const fetchData = async (type, state) => {
        if (type === "cities") {
            setFetching(true);
            const filteredCities = findLocations(allCities, state);
            setAllCities(filteredCities);
            setFetching(false);
        }
        if (type === "hospitals") {
            setFetching(true);
            const filteredHospitals = findBookings(bookings, hospitalName);
            setFoundHospitals({ hospitals: filteredHospitals, stateName, cityName });
            setFetching(false);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === "state") {
            setStateName(value);
            fetchData("cities", value);
        } else if (name === "city") {
            setCityName(value);
            fetchData("hospitals", value);
        } else if (name === "hospital") {
            setHospitalName(value);
            const filtered = findBookings(bookings, value);
            setFilteredHospitals(filtered);
        }
    };

    const renderSuggestions = () => {
        if (atBookingsPage && hospitalName) {
            return filteredHospitals.map((item, index) => (
                <div key={index} className="SearchPopItem SearchPopItem-bookings">
                    <span>{item.data.hospitalName}</span>
                    <span>
                        <Button text={item.dateTime.time} buttonClass="smallButton blueButton-outlined" />
                        <Button text={item.dateTime.date} buttonClass="smallButton greenButton-outlined" />
                    </span>
                </div>
            ));
        } else if (filteredStates.length || filteredCities.length) {
            const suggestions = stateName ? filteredStates : filteredCities;
            return suggestions.map((item, index) => (
                <div key={index} onClick={() => handleSuggestionClick(item)} className="SearchPopItem">
                    {item}
                </div>
            ));
        }
        return null;
    };

    const handleSuggestionClick = (value) => {
        if (stateName) {
            setStateName(value);
            fetchData("cities", value);
        } else {
            setCityName(value);
            fetchData("hospitals", value);
        }
    };

    return (
        <form className={`SearchComp ${customClass}`} onSubmit={(e) => e.preventDefault()}>
            {!atBookingsPage && (
                <div className="inputWrapper">
                    <img src={locationMarker} alt="location" />
                    <input
                        type="text"
                        name="state"
                        value={stateName}
                        onChange={handleInputChange}
                        placeholder="State"
                        required
                    />
                </div>
            )}

            {!atBookingsPage && (
                <div className={`inputWrapper ${fetching ? "disableInput" : ""}`}>
                    <img src={fetching ? loadingIcon : locationMarker} alt="loading" className={fetching ? "rotate" : ""} />
                    <input
                        type="text"
                        name="city"
                        value={cityName}
                        onChange={handleInputChange}
                        placeholder={fetching ? "Fetching Cities..." : "City"}
                        disabled={fetching}
                        required
                    />
                </div>
            )}

            {atBookingsPage && (
                <div className="inputWrapper">
                    <img src={searchIcon} alt="search" />
                    <input
                        type="text"
                        name="hospital"
                        value={hospitalName}
                        onChange={handleInputChange}
                        placeholder="Search by Hospital Name"
                        required
                    />
                </div>
            )}

            <div className="SearchPop">{renderSuggestions()}</div>

            <Button
                text={fetching ? "Fetching..." : "Search"}
                icon={fetching ? loadingIcon : searchIcon}
                buttonClass="longButton"
                rotateIcon={fetching}
            />
        </form>
    );
};

export default SearchBar;
