import React from 'react'
import image from '../img/clip-programming.png'
import Typical from 'react-typical'
import chevron from '../img/chevron-right-solid.svg'
import { NavLink } from 'react-router-dom'


const Hero = () => {
    return (
        <section className='hero-container grid-col-2'>
            <div className='box-text'>
                <h1 className='mb-9 heading-text'>Hi,<br /> I'm Thành.</h1>
                <Typical className="p-text mb-20" loop={Infinity} wrapper="p"
                    steps={['HCMUS-AUT Student', 2000, 'Web Developer', 2000, 'Software Engineer', 2000]} />
                <NavLink to="/projects" className='btn btn-header'>
                    <span>See My Projects</span>
                    <img src={chevron} alt="chevron" />
                </NavLink>
            </div>
            <img src={image} alt="hero" className='image' id='hero-illustrate' />
        </section>
    )
}

export default Hero;
