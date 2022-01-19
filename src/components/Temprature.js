import React from 'react'

const Temprature = ({ temprature, condition, icon }) => {
    return (
        <div className="temprature-card card">
            <h2 className="temprature">{temprature}°C</h2>
            <div className="condition">
                <p className="text">{condition}</p>
                <img src={icon} alt="weather-icon" />
            </div>
        </div>
    );
}

export default Temprature