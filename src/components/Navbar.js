import React from 'react'
import { useState } from 'react'
import { useGlobalContext } from '../context'
const Navbar = () => {
    const {show,displayLocation} = useGlobalContext()
    let location = null
    if (show) {
        location = <p>{displayLocation}</p>
    }
    return (
        <nav>
            <h2>weather app</h2>
            {location}
        </nav>
        
    );
}

export default Navbar