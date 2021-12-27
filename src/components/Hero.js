import React from 'react'
import image from '../img/clip-programming.png'
import Typical from 'react-typical'
import chevron from '../img/chevron-right-solid.svg'
import { NavLink } from 'react-router-dom'
import { useSpring, animated } from 'react-spring'

const Hero = () => {
    const animation = useSpring({
        config: {
            duration: 700
        },
        from: {
            opacity: 0,
            marginLeft: -50
        },
        to: {
            opacity: 1,
            marginLeft: 0
        },
        delay: 100
    })

    const animation2 = useSpring({
        config: {
            duration: 700
        },
        from: {
            opacity: 0,
            marginBottom: -100
        },
        to: {
            opacity: 1,
            marginBottom: 0
        },
        delay: 200
    })

    return (
        <section className='hero-container grid-col-2'>

            <animated.div style={animation}>
                <div className='box-text'>

                    <h1 className='heading-text'>Hi,<br /> I'm Thành.</h1>
                    <Typical className="p-text" loop={Infinity} wrapper="p"
                        steps={['HCMUS-AUT Student', 2000, 'Web Developer', 2000, 'Software Engineer', 2000]} />
                    <NavLink to="/projects" className='btn btn-header'>
                        <span>See My Projects</span>
                        <img src={chevron} alt="chevron" />
                    </NavLink>
                </div>
            </animated.div>

            <animated.div style={animation2}>
                <img src={image} alt="hero" className='image' id='hero-illustrate' />
            </animated.div>
        </section>


    )
}

export default Hero;
