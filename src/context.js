import React, { useState, useContext, useEffect } from 'react'
// const {REACT_APP_WEATHER_API_KEY} = process.env
const url = "http://api.weatherapi.com/v1/current.json?key=" +  "1bc80252f3614d18ab904131220601" + "&q="
console.log(url)
const AppContext = React.createContext()


const AppProvider = ({ children }) => {
    const [loading, setLoading] = useState(false)
    const [displayLocation, setDisplayLocation] = useState('')
    const [show,setShow] = useState(false)
    const [weatherInfo, setWeatherInfo] = useState({})
    const [error,setError] = useState(null)
    const fetchWeather = async (location) => {
        setLoading(true);
        if(error)setError(null)
        try {
            const response = await fetch(url + location + '&aqi=yes');
            const data = await response.json()
            if(data.error){
                console.log("throwing error")
                throw new Error("please enter valid input")
            }
            console.log(data)
            setWeatherInfo({
            pm2_5: data.current.air_quality.pm2_5,
            condition:data.current.condition.text,
            icon:data.current.condition.icon,
            cloud:data.current.cloud,
            humidity:data.current.humidity,
            feelslike_c:data.current.feelslike_c,
            temp_c:data.current.temp_c,
            visibility:data.current.vis_km,

            })
            setDisplayLocation(data.location.region+", "+data.location.country)
            setShow(true)
            console.log(displayLocation)           
        }
        catch (error) {
            console.log("error",error)
            setError(error)
        }
        setLoading(false)
        
    }




    return (
        <AppContext.Provider
            value={{ fetchWeather,displayLocation,show,loading,error,weatherInfo }}>
            {children}
        </AppContext.Provider>
    )
}


export const useGlobalContext = () => {
    return useContext(AppContext)
  }
  
  export default AppProvider 
  