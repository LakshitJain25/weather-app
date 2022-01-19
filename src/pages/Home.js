import React from 'react'
import Navbar from '../components/Navbar'
import Search from '../components/Search';
import { useGlobalContext } from '../context';
const Home = () => {
    const {show} = useGlobalContext()
    return (
        <main className={`search-container ${show?'half':''}`}>
            <Navbar show={false} />
            <Search />
        </main>
    );
}

export default Home