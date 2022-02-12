import React, { useState, useEffect, useRef } from 'react'
import { NavLink } from 'react-router-dom'
import Modal from './Modal';

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

    function useOutsideAlerter(ref) {
        useEffect(() => {
            /**
             * Alert if clicked on outside of element
             */
            function handleClickOutside(event) {
                if (ref.current && !ref.current.contains(event.target)) {
                    setShowMobileNav(false);
                }
            }

            // Bind the event listener
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                // Unbind the event listener on clean up
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [ref]);
    }

    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef);

    return (
        <>
            <main>
                <Modal showModal={showModal} setShowModal={setShowModal} />
                <div>
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

                            <div onClick={toggleNav} className={'hamburger ' + (showMobileNav ? 'open' : null)} type='button' ref={wrapperRef}>
                                <span className="hamburger-top"></span>
                                <span className="hamburger-middle"></span>
                                <span className="hamburger-bottom"></span>
                            </div>
                        </div>
                    </nav>
                </div>
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
