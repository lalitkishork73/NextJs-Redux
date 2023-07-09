import React from 'react';
import { NavLink } from 'react-router-dom'

function Navbar(props) {
    return (
        <>
            <nav>
                <div className="nav-wrapper" style={{ background: "#6200ee" }}>
                    {/* <a href="#" className="brand-logo">wish list</a> */}
                    <ul id="nav-mobile" className="right">
                        <li><NavLink to="/">home</NavLink></li>
                        <li><NavLink to="/about">about</NavLink></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar;