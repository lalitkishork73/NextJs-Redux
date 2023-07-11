import React from 'react'
import { NavLink } from 'react-router-dom'
function Navbar() {
    return (
        <>
            <nav>
                <ul>
                    <li><NavLink to="/">Profile</NavLink></li>
                    <li><NavLink to="/fetch">fetch</NavLink></li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar