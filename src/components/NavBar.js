import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Modal from './Modal';
import { useSpring, animated } from 'react-spring';

const NavBar = () => {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(prev => !prev)
    }

    const [showMobileNav, setShowMobileNav] = useState(false);

    const toggleNav = () => {
        if (showMobileNav) {
            setShowMobileNav(false);
        } else {
            setShowMobileNav(true);
        }
    }

    const animation = useSpring({
        config: {
            duration: 500
        },
        from: {
            opacity: 0,
        },
        to: {
            opacity: 1,
        },
    })

    return (
        <>
            <main>
                <Modal showModal={showModal} setShowModal={setShowModal} />
                <animated.div style={animation}>
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
                                        <NavLink to="/about" activeClassName="selected-nav">
                                            About
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/projects" activeClassName="selected-nav">
                                            Projects
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                            <div className="navbar-nav-right">
                                <button type='button' className='btn btn-nav' onClick={openModal}>Let's Talk</button>
                            </div>

                            <div onClick={toggleNav} className={'hamburger ' + (showMobileNav ? 'open' : null)} type='button'>
                                <span className="hamburger-top"></span>
                                <span className="hamburger-middle"></span>
                                <span className="hamburger-bottom"></span>
                            </div>
                        </div>
                    </nav>
                </animated.div>
            </main>

            <div className={'mobile-menu ' + (showMobileNav ? null : 'hidden')}>
                <ul>
                    <li>
                        <NavLink to="/about" activeClassName="selected-nav">
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/projects" activeClassName="selected-nav">
                            Projects
                        </NavLink>
                    </li>
                </ul>
                <button type='button' className='btn btn-nav' onClick={openModal}>Let's Talk</button>
            </div>
        </>
    )
}

export default NavBar
