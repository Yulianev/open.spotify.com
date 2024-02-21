// import { useState } from 'react'
import { IoMdHome, IoMdSearch } from 'react-icons/io'
import { Link } from 'react-router-dom'
// import { Routes, Route, Link } from 'react-router-dom'
// import HomePage from '../Pages/Home'

export default function AsideNav() {
    return (
        <>
            <nav className="aside-nav">
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <button className="nav-button">
                        <IoMdHome size="32px" />
                        Home
                    </button>
                </Link>
                <Link to="/search" style={{ textDecoration: 'none' }}>
                    <button className="nav-button">
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
