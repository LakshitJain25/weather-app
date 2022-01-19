import React from 'react'
import { useGlobalContext } from '../context';
import Temprature from '../components/Temprature';
import Details from '../components/Details';
const Weather = () => {
    const { weatherInfo } = useGlobalContext()
    return (
        <div className='temprature-container'>
            <h2 className='weather-heading'>Today</h2>
            <div className="info">
                <Temprature temprature={weatherInfo.temp_c} icon={weatherInfo.icon} condition={weatherInfo.condition} />
                <Details pm2_5={weatherInfo.pm2_5.toFixed(2)} humidity={weatherInfo.humidity} feelslike_c={weatherInfo.feelslike_c} cloud={weatherInfo.cloud}
                    visibility={weatherInfo.visibility} />
            </div>
        </div>

    );
}

export default Weather