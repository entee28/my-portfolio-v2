import { useRef, useEffect } from 'react'
import image from '../img/clip-programming.png'
import Typical from 'react-typical'
import chevron from '../img/chevron-right-solid.svg'
import { NavLink } from 'react-router-dom'
import { gsap, Power4 } from 'gsap'
import CSSRulePlugin from 'gsap/CSSRulePlugin'

const Hero = () => {
    const tl = useRef();
    const el = useRef();
    const q = gsap.utils.selector(el);

    gsap.registerPlugin(CSSRulePlugin);
    // let flagPoles = CSSRulePlugin.getRule(q('.card:before'));

    useEffect(() => {
        tl.current = gsap.timeline({
            defaults: {
                ease: Power4.easeInOut,
                duration: 2
            }
        })
            .to(q('h1'), { 'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)', opacity: 1, y: 0, duration: 2.2 })
            .to(q('.image'), { 'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)', opacity: 1, y: 0 }, "-=2")
            .from(q('.card'), { scaleY: 0, stagger: .2 }, "-=2")
            // .from(flagPoles, { stagger: 1, opacity: 0, transform: 'translateY(100px)' }, "-=2")
            .to(q('.title, .desc'), { stagger: .1, duration: 1.2, opacity: 1, y: 0 }, "-=2")
            .to(q('.hide'), { opacity: 1, stagger: .5, duration: 1 }, "-=2")

    }, []);

    return (
        <div ref={el}>
            <section className='hero-container grid-col-2'>

                <div>
                    <div className='box-text'>

                        <h1 className='heading-text'>Hi,<br /> I'm Thành.</h1>
                        <Typical className="p-text hide" loop={Infinity} wrapper="p"
                            steps={['HCMUS-AUT Student', 2000, 'Web Developer', 2000, 'Software Engineer', 2000]} />
                        <NavLink to="/projects" className='btn btn-header hide'>
                            <span>See My Projects</span>
                            <img src={chevron} alt="chevron" />
                        </NavLink>
                    </div>
                </div>

                <div>
                    <img src={image} alt="hero" className='image' id='hero-illustrate' />
                </div>
            </section>

            <div className="traits-wrapper">
                <div class="features">
                    <div class="card">
                        <p class="title">Front-end Development</p>
                        <p class="desc">Has several front-end projects built with React, VannilaJS.</p>
                    </div>
                    <div class="card">
                        <p class="title">Back-end Development</p>
                        <p class="desc">NodeJS, Express.</p>
                    </div>
                    <div class="card">
                        <p class="title">Full Stack Development</p>
                        <p class="desc">Uses MERN Stack as the weapon of choice.</p>
                    </div>
                    <div class="card">
                        <p class="title">Play Guitar</p>
                        <p class="desc">5-year+ experience.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;
