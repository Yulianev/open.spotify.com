// import { useState } from 'react'
import { IoMdHome, IoMdSearch } from 'react-icons/io'

export default function AsideNav() {
    return (
        <div className="aside-nav">
            <button className="nav-button">
                <IoMdHome size="32px" />
                Home
            </button>
            <button className="nav-button">
                <IoMdSearch size="32px" />
                Search
            </button>
        </div>
    )
}
