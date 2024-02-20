// import { useState } from 'react'
import { IoMdHome, IoMdSearch } from 'react-icons/io'
import { Link, useLocation } from 'react-router-dom'
// import { Routes, Route, Link } from 'react-router-dom'
// import HomePage from '../Pages/Home'

export default function AsideNav() {

    const location = useLocation();

    return (
        <>
            <nav className="aside-nav">
                <Link to='/'>
                    <button className={location.pathname === '/' ? 'nav-button nav-button-active' : 'nav-button'}>
                        <IoMdHome size="32px" />
                        Home
                    </button>
                </Link>
                <Link to='/search'>
                    <button className={location.pathname === '/search' ? 'nav-button nav-button-active' : 'nav-button'}>
                        <IoMdSearch size="32px" />
                        Search
                    </button>
                </Link>
            </nav>
            {/* <Routes>
                <Route path='/' element={<HomePage />}/>
            </Routes> */}
        </>
        
    )
}
