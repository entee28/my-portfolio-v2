import React from 'react'
import me from '../img/me.jpg'
import download from '../img/arrow-down-solid.svg'

const About = () => {
    return (
        <section>
            <div className='about-container'>
                <div className='grid-col-2-about my-32'>
                    <img src={me} alt="me" />
                    <div className='pl-32 about-detail'>
                        <p className='p-text about-header font-bold mb-10'><span className='decoration'></span> About Me</p>
                        <p className='p-text'>Currently a sophomore at HCMUS,
                            Thành is fueled by his passion for building and delivering incredible websites / softwares to end users.
                            He considers himself a ‘forever student,’ eager to both build on his technical skills
                        and stay in tune with the latest technology through continued research and professional development.
                        </p>
                        <div className="btn-group">
                            <button className="btn btn-about mt-20">Download My CV</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='about-container'>
                <div className="experience" id="experience">
                    <div className="container">
                        <header className="section-header">
                            <p className='p-text about-header'><span className='decoration'></span> Timeline</p>
                            <h2 className='heading-md'>Résumé / Experience</h2>
                        </header>
                        <div className="timeline mt-20">
                            <div className="timeline-item left">
                                <div className="timeline-text">
                                    <div className="timeline-date p-text">2020 - 2024</div>
                                    <h2>Bachelor of Computer and Information Sciences</h2>
                                    <h4>Ho Chi Minh University of Sciences, HCMC | Auckland University of Technology, NZ</h4>
                                    <p>

                                    </p>
                                </div>
                            </div>

                            <div className="timeline-item right">
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
