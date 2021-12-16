import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Modal from './Modal';

const NavBar = () => {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(prev => !prev)
    }

    return (
        <main>
            <Modal showModal={showModal} setShowModal={setShowModal} />
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
                                <NavLink to="/projects">
                                    Projects
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="navbar-nav-right">
                        <button type='button' className='btn btn-nav' onClick={openModal}>Let's Talk</button>
                    </div>
                </div>
            </nav>
        </main>

    )
}

export default NavBar
