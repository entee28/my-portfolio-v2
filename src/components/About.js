import { useEffect } from 'react'
import me from '../img/me.jpg'
import { useSpring, animated } from 'react-spring'
import Aos from 'aos'
import "aos/dist/aos.css";

const About = () => {
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

    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    return (
        <section>
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
                                <button className="btn btn-about">Download My CV</button>
                            </div>
                        </div>
                    </animated.div>
                </div>
            </div>
            <div className='about-container experience-section'>
                <div className="experience" id="experience">
                    <div className="container">
                        <header className="section-header">
                            <div data-aos="fade" data-aos-duration="1000" data-aos-once="true">
                                <p className='p-text about-header'><span className='decoration'></span> Timeline</p>
                                <h2 className='heading-md'>Résumé / Experience</h2>
                            </div>
                        </header>
                        <div className="timeline">
                            <div className="timeline-item left" data-aos="slide-left" data-aos-once="true">
                                <div className="timeline-text">
                                    <div className="timeline-date p-text">2020 - 2024</div>
                                    <h2>Bachelor of Computer and Information Sciences</h2>
                                    <h4>Ho Chi Minh University of Sciences, HCMC | Auckland University of Technology, NZ</h4>
                                    <p>

                                    </p>
                                </div>
                            </div>

                            <div className="timeline-item right" data-aos="slide-right" data-aos-once="true" data-aos-delay='200'>
                                <div className="timeline-text">
                                    <div className="timeline-date p-text">??? - ???</div>
                                    <h2>There's more to come</h2>
                                    <p>

                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
