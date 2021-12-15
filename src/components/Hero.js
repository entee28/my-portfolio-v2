import React from 'react'
import image from '../img/clip-programming.png'
import Typical from 'react-typical'
import chevron from '../img/chevron-right-solid.svg'


const Hero = () => {
    return (
        <section className='hero-container grid-col-2'>
            <div className='box-text'>
                <h1 className='mb-9'>Hi,<br /> I'm Thành.</h1>
                <Typical className="opacity-95 typical-text mb-20" loop={Infinity} wrapper="p"
                    steps={['HCMUS-AUT Student', 2000, 'Web Developer', 2000, 'Software Engineer', 2000]} />
                <a href="#" className='btn btn-header'>
                    <span>See My Projects</span>
                    <img src={chevron} alt="chevron" />
                </a>
            </div>
            <img src={image} alt="hero" />
        </section>
    )
}

export default Hero;
