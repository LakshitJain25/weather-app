import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useGlobalContext } from '../context'
const Search = () => {
    const { fetchWeather,loading,error} = useGlobalContext()
    const searchValue = React.useRef('')
    let err
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(searchValue.current.value)
        // setLocation(searchValue.current.value)
        fetchWeather(searchValue.current.value)
    }
    if(error){
        err = <p className='error'>Please enter a valid input</p>
    }
    // ${loading?"loading":""}
    return (
        <div className="search">
            <form action="" className='search-form' onSubmit={handleSubmit}>
                <label htmlFor="location">Search Weather Forecast</label>
                <div className={`line ${loading?"loading":""}`}></div>
                <div className="input-bar">
                    <input type="text" name="name" id="name" ref={searchValue} placeholder='Enter location' className='location-input' />
                    <button className="icon"><FontAwesomeIcon icon={faSearch} /></button>
                </div>
                {err}
            </form>
        </div>
    );
}

export default Search