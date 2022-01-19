import React from 'react'

const Details = ({ pm2_5, humidity, feelslike_c, cloud, visibility }) => {
    return (
        <div className="details-card card">
            <div className="details">
                <div className="detail"><h3 className="heading">pm 2.5: </h3> <p className='text'> {pm2_5}</p> </div>
                <div className="detail"><h3 className="heading">humidity: </h3> <p className='text'> {humidity}%</p> </div>
                <div className="detail"><h3 className="heading">feels like: </h3> <p className='text'> {feelslike_c}°C</p> </div>
                <div className="detail"><h3 className="heading">cloud cover: </h3> <p className='text'> {cloud}%</p> </div>
                <div className="detail"><h3 className="heading">visibility: </h3> <p className='text'> {visibility}km</p> </div>
            </div>
        </div>
    );
}

export default Details