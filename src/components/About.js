import { useEffect, useRef } from 'react'
import me from '../img/me.jpg'
import { useSpring, animated } from 'react-spring'
import Aos from 'aos'
import "aos/dist/aos.css";
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger';

const About = () => {
    const section1 = [];
    const section2 = [];
    const section3 = [];
    const sections = [section1, section2, section3];
    const wrapperNames = ['wrapper1', 'wrapper2', 'wrapper3'];

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    for (let i = 0; i < 4; i++) {
        section1.push(`https://source.unsplash.com/random/1240x874?sig=${getRandomInt(0, 206)}`);
        section2.push(`https://source.unsplash.com/random/1240x874?sig=${getRandomInt(0, 206)}`);
        section3.push(`https://source.unsplash.com/random/1240x874?sig=${getRandomInt(0, 206)}`);
    }

    const el = useRef();
    const q = gsap.utils.selector(el);

    const w0 = useRef();
    const w1 = useRef();
    const w2 = useRef();
    const w3 = useRef();
    const w4 = useRef();
    const wrapperRef = [w0, w1, w2, w3, w4];

    gsap.registerPlugin(ScrollTrigger);
    useEffect(() => {
        gsap.utils.toArray(q('section')).forEach((section, index) => {
            const w = wrapperRef[index];
            const [x, xEnd] = (index % 2) ? ['100%', (w.current.scrollWidth - section.offsetWidth) * -1] : [w.current.scrollWidth * -1, 0];
            gsap.fromTo(q(`.wrapper${index}`), { x }, {
                x: xEnd,
                scrollTrigger: {
                    trigger: section,
                    scrub: 0.5
                }
            });
        });
    }, []);

    const animation = useSpring({
        config: {
            duration: 600
        },
        from: {
            opacity: 0,
        },
        to: {
            opacity: 1,
        },
    })

    const animation2 = useSpring({
        config: {
            duration: 600
        },
        from: {
            opacity: 0,
        },
        to: {
            opacity: 1,
        },
        delay: 600,
    })

    return (
        <section ref={el}>
            <div className='about-container'>
                <div className='grid-col-2-about'>
                    <animated.img src={me} alt="me" className='image' style={animation} />
                    <animated.div style={animation2}>
                        <div className='about-detail'>
                            <p className='p-text about-header'><span className='decoration'></span> About Me</p>
                            <p className='p-text'>Currently a sophomore at HCMUS,
                                Thành is fueled by his passion for building and delivering incredible websites / softwares to end users.
                                He considers himself a ‘forever student,’ eager to both build on his technical skills
                                and stay in tune with the latest technology through continued research and professional development.
                            </p>
                            <div className="btn-group">
                                <a href="https://youtu.be/dQw4w9WgXcQ" target="_blank" rel='noreferrer'>
                                    <button className="btn btn-about">Download My CV</button>
                                </a>
                            </div>
                        </div>
                    </animated.div>
                </div>

                <div className='grid-col-2 grid-reversed location-section'>
                    <div className="iframe-container">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.63070476119!2d106.67998301529322!3d10.7629182623848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f1c06f4e1dd%3A0x43900f1d4539a3d!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBLaG9hIGjhu41jIFThu7Egbmhpw6puIC0gxJDhuqFpIGjhu41jIFF14buRYyBnaWEgVFAuSENN!5e0!3m2!1svi!2s!4v1644656604173!5m2!1svi!2s" width="600" height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy"></iframe>
                    </div>
                    <animated.div style={animation2}>
                        <div>
                            <p className='p-text about-header'><span className='decoration'></span> Know Where to find me?</p>
                            <p className='p-text'>
                                So that I can grab you a coffee.
                            </p>
                        </div>
                    </animated.div>
                </div>
            </div>

            <div className="gallery-container">
                <div className="demo-wrapper">
                    <header className="df aic jcc">
                        <div>
                            <h1>Here come</h1>
                            <h2>the gallery</h2>
                        </div>
                    </header>
                    <section className="demo-text">
                        <div className="wrapper0 wrapper text" ref={w0}>
                            TEETEETEETEETEETEETEETEETEE
                        </div>
                    </section>
                    {sections.map((value, index) => {
                        return (
                            <section className="demo-gallery" id={value}>
                                <ul className={wrapperNames[index] + ' wrapper'} ref={wrapperRef[index + 1]}>
                                    {value.map((value, index) => {
                                        return (
                                            <li className="item" key={index}>
                                                <img height="874" width="1240" src={value} alt="img" />
                                            </li>
                                        )
                                    })}
                                </ul>
                            </section>
                        )
                    })}
                    <section className="demo-text">
                        <div className="wrapper4 wrapper text" ref={w4}>
                            TEETEETEETEETEETEETEETEETEE
                        </div>
                    </section>
                </div>
            </div>

        </section>
    )
}

export default About
