import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-brand">
                    <NavLink to="/" className="brand">
                        Tee.
                    </NavLink>
                </div>
                <div className="navbar-nav-left">
                    <ul>
                        <li>
                            <NavLink to="/about">
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/">
                                Projects
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className="navbar-nav-right">
                    <button type='button' className='btn btn-nav'>Let's Talk</button>
                </div>
            </div>
        </nav>
    )
}

export default NavBar
